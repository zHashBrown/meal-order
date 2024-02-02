import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 设置移动端的适配
// 除以几视口的宽度就是多少rem，现在我们设置视口的总宽度为750rem
// 检测屏幕宽度，如果小于或等于768px，则调整字体大小
  document.documentElement.style.fontSize = 100 / 750 + 'vw';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
