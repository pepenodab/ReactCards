import PropTypes from 'prop-types';
import style from '../citacontainer/citacontainer.module.css';
import { useState } from 'react';

import CitaForm from '../citaform/CitaForm';
import CitaList from '../citalist/CitaList';

const CitaContainer = ({ isLogin }) => {
  const [datesList, setDatesList] = useState([]);

  const addDate = (newForm) => {
    setDatesList([...datesList, newForm]);
  };

  const removeDate = (dateToRemove) => {
    setDatesList(datesList.filter((date) => date !== dateToRemove));
  };

  return (
    <>
      {isLogin ? (
        <div className={style.container}>
          <div className={style.testeo}>
            <CitaForm addDate={addDate}></CitaForm>
          </div>
          <div className={style.testeo}>
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
