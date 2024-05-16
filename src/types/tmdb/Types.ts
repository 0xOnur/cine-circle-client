import { Person } from "./Person/Types";

export type Collection = {
  id: number;
  backdrop_path: string;
  name: string;
  poster_path: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Company = {
  id: number;
  logo_path: string;
  name: string;
};

export type Country = {
  iso_3166_1: string;
  name: string;
};

export type Language = {
  iso_639_1: string;
  name: string;
};

export type Network = {
  id: number;
  name: string;
};

export type Season = {
  id: number;
  episode_count: number;
  poster_path: string;
  season_number: number;
  air_date: Date;
};

type CreditCast = Person & {
  cast_id: number;
  character: string;
  order: number;
};

type CreditCrew = Person & {
  department: string;
  job: string;
};

export type MovieCreditsResponse = {
  id: number;
  cast: Array<CreditCast>;
  crew: Array<CreditCrew>;
};

export type MediaType = "movie" | "tv" | "person";
