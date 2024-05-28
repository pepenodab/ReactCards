/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './login.module.css';

/**
 * const Login = ({ setUsername, setIsLogin }): This components shows inputs for username and password and a button for submit
 *
 * ***************************************************************
 *                           PARAMETERS
 * ***************************************************************
 *
 * @param setUsername: It's a function to set the username
 * @param setIsLogin: It's a function to set if the user is login or not
 *
 * ***************************************************************
 *                           RETURNS
 * ***************************************************************
 *
 * @returns: A form, with 2 inputs for username and password and a botton for submit
 *
 */

const Login = ({ setUsername, setIsLogin }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);

  /**
   *  const showOffAlert = (): It's a function to disable the alert when the user puts wrong the password
   */

  const showOffAlert = () => setAlert(false);

  /**
   * const sendSubmit = (e): It's a function to send the form if the password is correct. If you mistype the password, it shows you an alert that you mistyped something.
   *
   * ***************************************************************
   *                           PARAMETERS
   * ***************************************************************
   *
   * @param e: It's the event of the element you click
   *
   */

  const sendSubmit = (e) => {
    e.preventDefault();

    if (password == 123) {
      setUsername(name);
      setIsLogin(true);
      setAlert(false);
    } else {
      setAlert(true);
    }
  };

  return (
    <>
      <div className="form">
        <form onSubmit={sendSubmit} className={style.form_container}>
          <div className={style.container}>
            <input
              type="text"
              className={`form-control ${style.login__input}`}
              id="username"
              name="username"
              placeholder="Usuario"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="password"
              className={`form-control ${style.login__input}`}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={style.accept_button}>
              <b>Aceptar</b>
            </button>
          </div>
          {alert && (
            <div className="login__alert">
              <p>Usuario o contraseña incorrectos</p>
              <button className="alert__exit" onClick={showOffAlert}>
                x
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

Login.propTypes = {
  setUsername: PropTypes.func,
  setIsLogin: PropTypes.func
};

export default Login;
