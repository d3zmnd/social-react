import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
      return (
        <BrowserRouter>
            <div className='app-wrapper'>
              <Header/>
              <Navbar/>            
              <div className='app-wrappet-content'>
                <Route path='/dialogs' component={Dialogs} />
                <Route path='/profile' component={Profile} />
              </div>
            </div >
        </BrowserRouter>)
      }

export default App;
