/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * const CitaForm = ({addDate}): This component show a form to create a new date
 *
 * ***************************************************************
 *                           PARAMETERS
 * ***************************************************************
 *
 * @param addDate: It's a function to add a new date into the array
 *
 * ***************************************************************
 *                           RETURNS
 * ***************************************************************
 *
 * @returns: A form with a fews inputs to create a new date
 *
 */

const CitaForm = ({ addDate }) => {
  /**
   * const actualHour = (): This function return the actual hour and minutes of the computer
   *
   * ***************************************************************
   *                           RETURNS
   * ***************************************************************
   *
   * @returns: A string that containt the hour and minutes of the local computer
   *
   */

  const actualHour = () => {
    const now = new Date();
    return `${now.getHours().toString()}:${now.getMinutes().toString()}`;
  };

  /**
   * const actualDate = (): This function return the actual year, month and day
   *
   * ***************************************************************
   *                           RETURNS
   * ***************************************************************
   *
   * @returns: A string that containt the year, month and day of the local computer
   *
   */

  const actualDate = () => {
    const now = new Date();
    return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
  };

  const [form, setForm] = useState({
    petName: '',
    ownerPet: '',
    date: actualDate(),
    hour: actualHour(),
    symptoms: ''
  });

  /**
   * const handleInputChange = (e): It's a  function is a common way to handle user input changes within React forms.
   *
   * ***************************************************************
   *                           PARAMETERS
   * ***************************************************************
   *
   * @param e: It's the event of the element you click
   *
   *
   */

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };

  /**
   * const sendForm = (e): It's a  function to update new form into the array and init the form
   *
   * ***************************************************************
   *                           PARAMETERS
   * ***************************************************************
   *
   * @param e: It's the event of the element you click
   *
   */

  const sendForm = (e) => {
    e.preventDefault();
    addDate(form);
    setForm({
      petName: '',
      ownerPet: '',
      date: actualDate(),
      hour: actualHour(),
      symptoms: ''
    });
  };

  return (
    <>
      <div className="form">
        <div className="form-content">
          <h1 className="form-title">Añadir cita</h1>
          <hr className="hr-format" />
          <form onSubmit={sendForm} className="form-date">
            <div className="form-container">
              <label htmlFor="petName" className="form-label">
                Nombre de la mascota
              </label>
              <input
                type="text"
                name="petName"
                id="petName"
                className="form-input"
                value={form.petName}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="ownerPet" className="form-label">
                Nombre del dueño
              </label>
              <input
                type="text"
                name="ownerPet"
                id="ownerPet"
                className="form-input"
                value={form.ownerPet}
                onChange={handleInputChange}
                required
              />
              <div className="form__inputs_date">
                <div className="w100">
                  <label htmlFor="date" className="form-label">
                    Fecha
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={form.date}
                    className="form-input"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w100">
                  <label htmlFor="hour" className="form-label">
                    Hora
                  </label>
                  <input
                    type="time"
                    name="hour"
                    id="hour"
                    value={form.hour}
                    className="form-input"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <label htmlFor="symptoms" className="form-label">
                Síntomas
              </label>
              <textarea
                name="symptoms"
                id="symptoms"
                placeholder="Los síntomas..."
                className="form-input"
                value={form.symptoms}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" className="form__button">
                <b>Nueva cita</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

CitaForm.propTypes = {
  addDate: PropTypes.func
};

export default CitaForm;
