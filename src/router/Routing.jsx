/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { PublicLayout } from '../components/layout/public/PublicLayout';
import { Login } from '../components/user/Login';
import { Register } from '../components/user/Register';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { Feed } from '../components/publication/Feed';
import NotFound from '../pages/notfound/NotFound';

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Register />} />
        </Route>

        {/*Rutas anidadas parte privada*/}
        <Route path="/social" element={<PrivateLayout />}>
          <Route index element={<Feed />} />
          <Route path="feed" element={<Feed />} />
        </Route>

        {/*ruta de error*/}
        <Route>
          <Route
            path="*"
            element={
              // eslint-disable-next-line react/jsx-no-useless-fragment
              <>
                <p>
                  <h1>Error 404</h1>
                  // eslint-disable-next-line jsx-quotes
                  <Link to="/"> Volver al inicio</Link>

                  <NotFound />
                </p>
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
