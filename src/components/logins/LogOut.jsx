import PropTypes from 'prop-types';
import style from './login.module.css';

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
