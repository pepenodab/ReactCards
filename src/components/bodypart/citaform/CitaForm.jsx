/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types';
import { useState } from 'react';

const CitaForm = ({ addDate }) => {

  const actualDate = () => {
    const now = new Date();
    return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
  };

  const [form, setForm] = useState({
    petName: '',
    ownerPet: '',
    date: actualDate(),
    hour: '',
    symptoms: ''
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };

  const sendForm = (e) => {
    e.preventDefault();
    addDate(form);
    setForm({
      petName: '',
      ownerPet: '',
      date: actualDate(),
      hour: '',
      symptoms: ''
    });
  };
  return (
    <>
      <div className="form">
        <div className="form-content">
          <h1 className="form-title">Añadir cita</h1>
          <hr />
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
