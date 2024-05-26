/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types';
import Cita from '../cita/Cita';

const CitaList = ({ datesList, removeDate }) => {
  return (
    <>
      { datesList.length == 0 ? (
        <>
          <div>
            <h2>No hay citas previstas</h2>
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
