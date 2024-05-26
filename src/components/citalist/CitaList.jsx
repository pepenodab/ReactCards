/* eslint-disable no-unused-vars */
import style from '../citacontainer/citacontainer.module.css';
import PropTypes from 'prop-types';
import Cita from '../cita/Cita';

const CitaList = ({ datesList, removeDate }) => {
  return (
    <>
      <div className="saved-forms">
        <h2>Formularios Guardados</h2>
        {datesList.map((cita, index) => (
          <Cita key={index} date={cita} removeDate={removeDate} />
        ))}
      </div>
    </>
  );
};

CitaList.propTypes = {
  datesList: PropTypes.array,
  removeDate: PropTypes.func
};

export default CitaList;
