import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// .js 에서 defualt 로 빠진 애들은 import 뒤에 내가 사용하려는 이름을 붙일 수 있다. 하지만 대체로 맞추는 편

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <box />
  </React.StrictMode>
);

