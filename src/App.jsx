/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Header from './components/Visual/Header/Header';
import Navbar from './components/Visual/Navbar/Navbar';
import CitaContainer from './components/Citas/Citacontainer/CitaContainer';

/**
 * function App(): It brings all the fundamental components, so that the page can work.
 * Where we find the variables “isLogin” to control if the user is logged in.
 *
 * ***************************************************************
 *                           RETURNS
 * ***************************************************************
 *
 *  @returns: The three essentials componentes Header, Navbar and CitaContainer
 *
 */

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Header title={'Administrador de Pacientes de Veterinaría'}></Header>
      <Navbar setIsLogin={setIsLogin} isLogin={isLogin}></Navbar>

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
