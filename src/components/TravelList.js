import React from 'react';

function TravelList({ travels, deleteTravel }) {
  if (travels.length === 0) {
    return <div className="travel-list-empty">暂无旅行记录</div>;
  }

  return (
    <div className="travel-list">
      <h2>旅行记录列表</h2>
      <div className="travel-items">
        {travels.map((travel, index) => (
          <div key={travel.id} className="travel-item">
            <div className="travel-info">
              <span className={`travel-type ${travel.type}`}>
                {travel.type === 'train' ? '铁路' : '飞机'}
              </span>
              <div className="travel-route">
                <span className="travel-from">{travel.from}</span>
                <span className="travel-arrow">→</span>
                <span className="travel-to">{travel.to}</span>
              </div>
              <div className="travel-details">
                <span className="travel-date">{travel.date}</span>
                <span className="travel-number">
                  {travel.type === 'train' ? '车次：' : '航班：'}{travel.number}
                </span>
              </div>
            </div>
            <button 
              className="delete-btn" 
              onClick={() => deleteTravel(index)}
            >
              删除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelList;