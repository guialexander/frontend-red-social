/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-quotes */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import useForm from '../../hooks/UseForm';

// eslint-disable-next-line arrow-body-style
export const Register = () => {
  const { form, changed } = useForm({});

  const saveUser = (e) => {
    e.preventDefault();

    const newUser = form;

    console.log(newUser);

  };

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Registro</h1>
      </header>

      <div className="content__posts">
        <form className="register-form" onSubmit={saveUser}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Apellido</label>
            <input type="text" name="lastname" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="nick">Nick</label>
            <input type="text" name="nick" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electronico</label>
            <input type="email" name="email" required onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" required onChange={changed} />
          </div>

          <input type="submit" value="Registre" className="btn btn-success" />
        </form>
      </div>
    </>
  );
};
