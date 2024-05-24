import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { routeConfig } from "./route.config";
import LoadingSpinner from '@components/LoadingSpinner';
import Title from './Title';

interface IProps {
  isAuth: boolean;
}

const AppRoutes = ({ isAuth }: IProps) => {

  return (
    <Routes>
      {routeConfig.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Title title={route.title} />
              {route.private ? (isAuth ? ( <route.component />) : <Navigate to="/login" />) : <route.component />}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
