import React, { useState } from 'react';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      // 模拟登录验证
      if (formData.username === 'user' && formData.password === 'password') {
        onLogin({ username: formData.username });
      } else {
        setError('用户名或密码错误');
      }
    } else {
      setError('请填写所有字段');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>登录</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">用户名</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="请输入用户名"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">密码</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="请输入密码"
            />
          </div>
          <button type="submit" className="login-btn">登录</button>
          <div className="login-info">
            <p>测试账号: user</p>
            <p>测试密码: password</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;