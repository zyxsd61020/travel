import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TravelForm from './components/TravelForm';
import TravelList from './components/TravelList';

function App() {
  const [user, setUser] = useState(null);
  const [travels, setTravels] = useState([]);

  // 从localStorage加载用户和旅行数据
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedTravels = localStorage.getItem('travels');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedTravels) {
      setTravels(JSON.parse(savedTravels));
    }
  }, []);

  // 保存旅行数据到localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('travels', JSON.stringify(travels));
    }
  }, [travels, user]);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const addTravel = (travel) => {
    setTravels([...travels, travel]);
  };

  const deleteTravel = (index) => {
    const newTravels = travels.filter((_, i) => i !== index);
    setTravels(newTravels);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>旅行记录</h1>
        <div className="user-info">
          <span>欢迎, {user.username}</span>
          <button className="logout-btn" onClick={handleLogout}>退出</button>
        </div>
      </header>
      <TravelForm addTravel={addTravel} />
      <TravelList travels={travels} deleteTravel={deleteTravel} />
    </div>
  );
}

export default App;