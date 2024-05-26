/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Header from './components/upperpart/header/Header';
import Navbar from './components/upperpart/navbar/Navbar';
import CitaContainer from './components/bodypart/citacontainer/CitaContainer';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <>
      <Header title={'Administrador de Pacientes de Veterinaría'}></Header>
      <Navbar
        setUsername={setUsername}
        setIsLogin={setIsLogin}
        username={username}
        isLogin={isLogin}
      ></Navbar>

      <main>
        <CitaContainer isLogin={isLogin}></CitaContainer>
      </main>
    </>
  );
}

App.propTypes = {
  setUsername: PropTypes.func,
  setIsLogin: PropTypes.func
};

export default App;
