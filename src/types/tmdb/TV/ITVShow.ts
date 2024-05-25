import { MediaType } from "../Types";

export interface ITVShow {
  id: number;
  name: string;
  media_type: MediaType;
  adult: boolean;
  original_name: string;
  poster_path: string;
  popularity: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  first_air_date: string;
}
