import React from "react";

export const routeConfig: IRouteConfig[] = [
  {
    path: "/",
    component: React.lazy(() => import("@layout/Home/Home.Layout")),
    title: "Home",
    private: false,
  },
  {
    path: "/login",
    component: React.lazy(() => import("@layout/Auth/Login.Layout")),
    title: "Login",
    private: false,
  },
  {
    path: "/sign-up",
    component: React.lazy(() => import("@layout/Auth/Register.Layout")),
    title: "Register",
    private: false,
  },
  {
    path: "/movie/:movieId",
    component: React.lazy(() => import("@layout/Movies/Movie.Layout")),
    title: "Movie",
    private: false,
  },
  {
    path: "/tv-show/:showId",
    component: React.lazy(() => import("@layout/TV/TVShow.Layout")),
    title: "TV Show",
    private: false,
  },
  {
    path: "/movies/top-rated",
    component: React.lazy(() => import("@layout/Movies/TopRated.Layout")),
    title: "Top Rated Movies",
    private: false,
  },
  {
    path: "/movies/popular",
    component: React.lazy(() => import("@layout/Movies/Popular.Layout")),
    title: "Popular Movies",
    private: false,
  },
  {
    path: "/movies/upcoming",
    component: React.lazy(() => import("@layout/Movies/Upcoming.Layout")),
    title: "Upcoming Movies",
    private: false,
  },
  {
    path: "/tv-shows/top-rated",
    component: React.lazy(() => import("@layout/TV/TopRated.Layout")),
    title: "Top Rated TV Shows",
    private: false,
  },
  {
    path: "/tv-shows/popular",
    component: React.lazy(() => import("@layout/TV/Popular.Layout")),
    title: "Popular TV Shows",
    private: false,
  },
  {
    path: "/tv-shows/airing-today",
    component: React.lazy(() => import("@layout/TV/AiringToday.Layout")),
    title: "Airing Today TV Shows",
    private: false,
  },
  {
    path: "/tv/upcoming",
    component: React.lazy(() => import("@layout/TV/Upcoming.Layout")),
    title: "Upcoming TV Shows",
    private: false,
  },
  {
    path: "/search",
    component: React.lazy(() => import("@layout/Search/Search.Layout")),
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
