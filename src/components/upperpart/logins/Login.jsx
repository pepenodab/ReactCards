/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './login.module.css';

const Login = ({ setUsername, setIsLogin }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const sendSubmit = (e) => {
    e.preventDefault();

    if (password == 123) {
      setUsername(name);
      setIsLogin(true);
    } else {
      window.alert('no funciona :( ' + name);
      setName('');
      setPassword('');
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
