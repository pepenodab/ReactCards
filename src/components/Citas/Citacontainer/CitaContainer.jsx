import PropTypes from 'prop-types';
import style from './citacontainer.module.css';
import { useState } from 'react';

import CitaForm from '../Citaform/CitaForm';
import CitaList from '../Citalist/CitaList';

/**
 * const CitaContainer = ({ isLogin }): This component contains the CitaForm and CitaList containers, and they are displayed if the user is logged in.
 *
 * ***************************************************************
 *                           PARAMETERS
 * ***************************************************************
 *
 * @param isLogin: It's a boolean to manage if the user is log in
 *
 * ***************************************************************
 *                           RETURNS
 * ***************************************************************
 *
 * @returns: Show 2 component depend's if the user is log in.
 *
 */

const CitaContainer = ({ isLogin }) => {
  const [datesList, setDatesList] = useState([]);

  /**
   * const addDate = (newForm): It's a function to add a date into the array
   */

  const addDate = (newForm) => {
    setDatesList([newForm, ...datesList]);
  };

  /**
   * const removeDate = (dateToRemove): It's a function to remove a date from the array
   */

  const removeDate = (dateToRemove) => {
    setDatesList(datesList.filter((date) => date != dateToRemove));
  };

  return (
    <>
      {isLogin ? (
        <div className={style.container}>
          <div className={style.container_form}>
            <CitaForm addDate={addDate}></CitaForm>
          </div>
          <div className={style.container_list}>
            <CitaList datesList={datesList} removeDate={removeDate}></CitaList>
          </div>
        </div>
      ) : (
        <>
          <div className={style.empty}></div>
        </>
      )}
    </>
  );
};

CitaContainer.propTypes = {
  isLogin: PropTypes.bool,
  setDateDetails: PropTypes.func
};

export default CitaContainer;
