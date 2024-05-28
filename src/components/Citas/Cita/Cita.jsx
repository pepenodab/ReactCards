import PropTypes from 'prop-types';
import style from './cita.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSafari } from '@fortawesome/free-brands-svg-icons';

/**
 * const Cita = ({ date, removeDate }): This component is to give form to the information provided by the form.
 *
 * ***************************************************************
 *                           PARAMETERS
 * ***************************************************************
 *
 * @param date: It's an object that's containt the information of the form
 * @param removeDate: It's a function that remove a date from the array
 *
 * ***************************************************************
 *                           RETURNS
 * ***************************************************************
 *
 * @returns: A card with the information of the form
 */

const Cita = ({ date, removeDate }) => {
  /**
   * const handleRemove = (): It's a function for the botton to delete the date from the array
   */

  const handleRemove = () => {
    removeDate(date);
  };

  return (
    <>
      <div className="card">
        <div className="card card-body">
          <div className={`card card-title`}>
            <b className={style.card_title}>{date.petName}</b>
            <hr className={style.hr_correct} />
            <div className={style.card_body}>
              <div className="card-text">
                {' '}
                <b>Dueño :</b> {date.ownerPet}
              </div>
              <div className={style.card_times}>
                <p>
                  <b>Fecha: {date.date}</b>
                </p>
                <p>
                  <b>Hora: {date.hour}</b>
                </p>
              </div>
              <label htmlFor="symptoms">
                <b>Sintomas:</b>
              </label>
              <p>
                <b>{date.symptoms}</b>
              </p>
            </div>
            <button onClick={handleRemove} className={style.button_card}>
              <FontAwesomeIcon icon={faSafari} className="mr-1" />
              Cita finalizada
            </button>
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
