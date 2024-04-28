import React from 'react';

export const routeConfig: IRouteConfig[] = [
  {
    path: "/",
    component: React.lazy(() => import('@layout/Home.Layout')),
    title: "Home / CineCircle",
    private: false,
  },
  {
    path: "/login",
    component: React.lazy(() => import('@layout/Login.Layout')),
    title: "Login / CineCircle",
    private: false,
  },
  {
    path: "/sign-up",
    component: React.lazy(() => import('@layout/Register.Layout')),
    title: "Register / CineCircle",
    private: false,
  },
  {
    path:"/*",
    component: React.lazy(() => import('@layout/NotFound.Layout')),
    title: "Not Found / CineCircle",
    private: false,
  }
];
