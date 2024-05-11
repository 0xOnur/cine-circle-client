import { IMovie } from "./IMovie";
import {
    Collection,
    Genre,
    Company,
    Country,
    Language
} from "../Types";

export interface IMovieDetails extends IMovie {
  belongs_to_collection: Collection;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: Company[];
  production_countries: Country[];
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
}
