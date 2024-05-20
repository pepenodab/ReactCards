import style from './header.module.css';

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <div className="container mt-5">
          Administrador de Pacientes de Veterinaria
        </div>
      </div>
    </>
  );
};

export default Header;
