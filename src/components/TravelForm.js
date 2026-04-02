import React, { useState } from 'react';

function TravelForm({ addTravel }) {
  const [formData, setFormData] = useState({
    type: 'train',
    from: '',
    to: '',
    date: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.from && formData.to && formData.date && formData.number) {
      addTravel({
        ...formData,
        id: Date.now()
      });
      setFormData({
        type: 'train',
        from: '',
        to: '',
        date: '',
        number: ''
      });
    }
  };

  return (
    <form className="travel-form" onSubmit={handleSubmit}>
      <h2>添加旅行记录</h2>
      <div className="form-group">
        <label htmlFor="type">交通类型</label>
        <select 
          id="type" 
          name="type" 
          value={formData.type} 
          onChange={handleChange}
        >
          <option value="train">铁路</option>
          <option value="plane">飞机</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="from">出发地</label>
        <input 
          type="text" 
          id="from" 
          name="from" 
          value={formData.from} 
          onChange={handleChange} 
          placeholder="出发城市"
        />
      </div>
      <div className="form-group">
        <label htmlFor="to">目的地</label>
        <input 
          type="text" 
          id="to" 
          name="to" 
          value={formData.to} 
          onChange={handleChange} 
          placeholder="目的城市"
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">日期</label>
        <input 
          type="date" 
          id="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">{formData.type === 'train' ? '车次' : '航班号'}</label>
        <input 
          type="text" 
          id="number" 
          name="number" 
          value={formData.number} 
          onChange={handleChange} 
          placeholder={formData.type === 'train' ? '如：G1234' : '如：CA1234'}
        />
      </div>
      <button type="submit" className="submit-btn">添加记录</button>
    </form>
  );
}

export default TravelForm;