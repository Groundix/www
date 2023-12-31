import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {

  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.appState.navBarData} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='dialogs/*' element={<DialogsContainer />} />
            <Route path='profile' element={<Profile />} />
            {/* <Route path='news' element={<News/>} />
            <Route path='music' element={<Music/>} />
            <Route path='settings' element={<Settings/>} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
