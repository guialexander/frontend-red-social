import React from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const PrivateLayout = () => {
  return (
    <>
      {/*LAYOUT*/}
      {/*Cabecera y navegación*/}
      <Header />

      {/* Contenido Principal */}

      <section className="layout_content">
        <Outlet />
      </section>

      {/*Barra Lateral*/}
      <Sidebar />
    </>
  );
};
