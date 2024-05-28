import PropTypes from 'prop-types';
import style from './header.module.css';

/**
 *  const Header = ({title}): Returns the decorated title for the web page.
 *
 * ***************************************************************
 *                          PARAMETERS
 * ***************************************************************
 *
 * @param title: It's a string to fill the header
 *
 * ***************************************************************
 *                          RETURNS
 * ****************************************************************
 *
 * @returns: The header with the title
 *
 */

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
