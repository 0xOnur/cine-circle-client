import React from "react";

export const routeConfig: IRouteConfig[] = [
  {
    path: "/",
    component: React.lazy(() => import("@layout/Home.Layout")),
    title: "Home",
    private: false,
  },
  {
    path: "/login",
    component: React.lazy(() => import("@layout/Login.Layout")),
    title: "Login",
    private: false,
  },
  {
    path: "/sign-up",
    component: React.lazy(() => import("@layout/Register.Layout")),
    title: "Register",
    private: false,
  },
  {
    path: "/movie/:movieId",
    component: React.lazy(() => import("@layout/Movie.Layout")),
    title: "Movie",
    private: false,
  },
  {
    path: "/tv-show/:showId",
    component: React.lazy(() => import("@layout/TVShow.Layout")),
    title: "TV Show",
    private: false,
  },
  {
    path: "/search",
    component: React.lazy(() => import("@layout/Search.Layout")),
    title: "Search",
    private: false,
  },
  {
    path: "/*",
    component: React.lazy(() => import("@layout/NotFound.Layout")),
    title: "Not Found",
    private: false,
  },
];
