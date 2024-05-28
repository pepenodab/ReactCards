/* eslint-disable no-unused-vars */
import style from './navbar.module.css';
import image from '../../../assets/logo.png';
import Login from '../Logins/Login';
import LogOut from '../Logins/LogOut';

import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 *  const Navbar = ({ setIsLogin, isLogin}): Displays the navbar, where it shows a logo, with links to Home, About and Contact. With the option to log in, where it will check if you are logged in or not, or if your password is correct or not, using the login and logout components.
 *
 * ***************************************************************
 *                           PARAMETERS
 * ***************************************************************
 * @param setIsLogin: It's a function to set whether you are logged in or not
 * @param isLogin: A boolean to manage if the user is login or not
 *
 * ***************************************************************
 *                           RETURNS
 * ***************************************************************
 *
 * @returns: Shows the logo, and link for Inicio, Acerca de, Contanto and controls with conditionals if you are logged in or if you are logging in to show the login or logout components
 *
 */

const Navbar = ({ setIsLogin, isLogin }) => {
  const [isLogging, setIsLogging] = useState(false);
  const [username, setUsername] = useState('');

  /**
   *  const handleIsLoggin = (): This function is to set true when you are logging in
   */

  const handleIsLoggin = () => {
    setIsLogging(true);
  };

  /**
   * const handleIsLogout = (): This function manage to set false all variables of logins and empties the username
   */

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
