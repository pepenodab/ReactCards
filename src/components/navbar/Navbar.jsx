/* eslint-disable no-unused-vars */
import style from './navbar.module.css';
import image from '../../assets/logo.png';
import Login from '../../components/logins/Login';
import LogOut from '../../components/logins/LogOut';

import PropTypes from 'prop-types';
import { useState } from 'react';

const Navbar = ({ setUsername, setIsLogin, username, isLogin }) => {
  const [isLogging, setIsLogging] = useState(false);

  const handleIsLoggin = () => {
    setIsLogging(true);
  };

  const handleIsLogout = () => {
    setIsLogging(false);
    setUsername('');
    setIsLogin(false);
  };

  return (
    <>
      <div className={style.navbar__wrapper}>
        <div className="navbar">
          <div className="navbar navbar-brand">
            <img src={image} alt="" />
          </div>
          <div className="nav me-auto">
            <div className="nav nav-link">
              <b>Inicio</b>
            </div>
            <div className="nav nav-link">Acerca de</div>
            <div className="nav nav-link">Contacto</div>
          </div>

          {!isLogging ? (
            <div className="nav_buttons">
              <button className={style.create__button}>
                <b>Crear cuenta</b>
              </button>
              <button className={style.signin__button} onClick={handleIsLoggin}>
                Iniciar sesion
              </button>
            </div>
          ) : isLogin ? (
            <LogOut username={username} handleIsLogout={handleIsLogout} />
          ) : (
            <Login setUsername={setUsername} setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  setUsername: PropTypes.func,
  setIsLogin: PropTypes.func,
  username: PropTypes.string,
  isLogin: PropTypes.bool
};

export default Navbar;
