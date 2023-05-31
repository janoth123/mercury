import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Content from './pages/Content';
import Write from './pages/Write';
import Admin from './pages/Admin';
import MyContext from './pages/MyContext';
import AllUsers from './pages/AllUsers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyContext>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path='/'>
          <Route element={<Home />} index />
          <Route element={<Login/>} path='/Login' />
          <Route element={<Register/>} path='/Register' />
          <Route element={<Dashboard/>} path='/Dashboard'/>
          <Route element={<Content/>} path='/Content'/>
          <Route element={<Write/>} path='/Write'/>
          <Route element={<Admin/>} path='/Admin'/>
          <Route element={<Admin/>} path='/Admin/:AllUsers'/>
          <Route element={<AllUsers/>} path='/AllUsers'/>
        </Route>
      </Routes>
    </BrowserRouter>
  </MyContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
