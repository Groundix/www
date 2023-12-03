import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.appState.navBarData} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='dialogs/*' element={<Dialogs state={props.appState.dialogsPage}
            dispatch={props.dispatch} />} />
            <Route path='profile' element={<Profile profilePage={props.appState.profilePage}
              dispatch={props.dispatch}
              />} />
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