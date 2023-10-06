/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';

function useForm(initialOb = {}) {
  const [form, setForm] = useState(initialOb);


  const changed = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    {
      form,
      changed,
    }
  );
}


export default useForm;
