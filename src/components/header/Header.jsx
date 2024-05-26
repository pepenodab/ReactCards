import PropTypes from 'prop-types';
import style from './header.module.css';

const Header = ({ title }) => {
  return (
    <>
      <div className={style.header}>
        <b>{title}</b>
      </div>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
