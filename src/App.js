import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavBarContainer';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavbarContainer  />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='dialogs/*' element={<DialogsContainer />} />
            <Route path='profile' element={<Profile />} />
            <Route path='users' element={<UsersContainer/>} />
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
