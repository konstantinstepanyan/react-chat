import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import AppRouter from './components/appRouter/appRouter';


import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
