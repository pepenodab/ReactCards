import PropTypes from 'prop-types';

const Cita = ({ date, removeDate }) => {
  const handleRemove = () => {
    removeDate(date);
  };

  return (
    <>
      <div className="card">
        <div className="card card-body">
          <div className="card card-title">
            {date.petName}
            <hr />
            <div className='card-text'>Dueño : {date.ownerPet}</div>
            <div className="times">
              <p>Fecha: {date.date}</p>
              <p>Hora: {date.hour}</p>
            </div>
            <label htmlFor="symptoms">Sintomas:</label>
            <p>{date.symptoms}</p>
            <button onClick={handleRemove}>Eliminar</button>
          </div>
        </div>
      </div>
    </>
  );
};

Cita.propTypes = {
  date: PropTypes.shape({
    petName: PropTypes.string.isRequired,
    ownerPet: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    symptoms: PropTypes.string.isRequired
  }).isRequired,
  removeDate: PropTypes.func
};

export default Cita;
