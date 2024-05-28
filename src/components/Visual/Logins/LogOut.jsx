import PropTypes from 'prop-types';
import style from './login.module.css';

/**
 *  const LogOut = ({handleIsLogout, username}): It is a component that shows when you log in your name and the button with the option to log out.
 *
 * ***************************************************************
 *                           PARAMETERS
 * ***************************************************************
 *
 * @param handleIsLogout: It's a function to log out
 * @param username: The string that containt the username
 *
 * ***************************************************************
 *                           RETURNS
 * ***************************************************************
 *
 * @return: A message with the username and a button to log out
 *
 */

const LogOut = ({ handleIsLogout, username }) => {
  return (
    <>
      <div className={style.container}>
        <div className="userinformation">
          <p className={style.userinformation__p}>
            Bienvenido: <b> {username}</b>
          </p>
        </div>
        <button onClick={handleIsLogout} className={style.accept_button}>
          <b>Cerrar Sesion</b>
        </button>
      </div>
    </>
  );
};

LogOut.propTypes = {
  handleIsLogout: PropTypes.func,
  username: PropTypes.string
};

export default LogOut;
