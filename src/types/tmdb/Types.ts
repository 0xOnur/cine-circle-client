import { IMovie } from "./Movie/IMovie";
import { ITVShow } from "./TV/ITVShow";

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

export type Person = {
  id: number;
  name: string;
  profile_path: string;
  adult: boolean;
  popularity: number;
  known_for: Array<IMovie | ITVShow>;
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

export type MediaType = "movie" | "tv" | "person";
