/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types';
import { useState } from 'react';

import Cita from '../Cita/Cita';
import style from '../Cita/cita.module.css';

/**
 * const CitaList = ({ datesList, removeDate}): It's a component which displays a message if there are no appointments, and if there are, it displays a list of the appointments that are available.
 *
 * ***************************************************************
 *                           PARAMETERS
 * ***************************************************************
 *
 * @param datesList: It's the array that containt every date
 * @param removeDate: It's a function that remove a date from the array
 *
 * ***************************************************************
 *                           RETURNS
 * ***************************************************************
 *
 * @returns: A message if there are no appointments, and if there are, it displays a list of the appointments that are available.
 *
 */

const CitaList = ({ datesList, removeDate }) => {
  return (
    <>
      {datesList.length == 0 ? (
        <>
          <div>
            <h2 className={style.h2_color}>No hay citas previstas</h2>
          </div>
        </>
      ) : datesList.length <= 2 ? (
        <div className="saved-forms">
          {datesList.map((cita, index) => (
            <Cita key={index} date={cita} removeDate={removeDate} />
          ))}
        </div>
      ) : (
        <div className="saved-forms-scroll">
          {datesList.map((cita, index) => (
            <Cita key={index} date={cita} removeDate={removeDate} />
          ))}
        </div>
      )}
    </>
  );
};

CitaList.propTypes = {
  datesList: PropTypes.array,
  removeDate: PropTypes.func
};

export default CitaList;
