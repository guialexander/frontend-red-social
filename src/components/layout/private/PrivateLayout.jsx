/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function PrivateLayout() {
  return (
    <>
      {/* LAYOUT */}
      {/* Cabecera y navegación */}
      <Header />

      {/* Contenido Principal */}

      <section className='layout_content'>
        <Outlet />
      </section>

      {/* Barra Lateral */}
      <Sidebar />
    </>
  );
}
