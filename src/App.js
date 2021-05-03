import React, {useContext} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Loader from './components/loader/loader';
import Navbar from './components/navbar/navbar';
import AppRouter from './components/appRouter/appRouter';
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "./index";

import logo from './logo.svg';
import './App.scss';

function App() {
     const {auth} = useContext(Context);
    const [user, loading, error] = useAuthState(auth)
    
    
    if(loading){
        return <Loader />
    }
    
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
