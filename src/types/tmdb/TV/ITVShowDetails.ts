import { ITVShow } from "./ITVShow";
import { Genre, Company, Network, Season } from "../Types";
import { Person } from "../Person/Types";

export interface ITvShowDetails extends ITVShow {
  created_by: Person[];
  episode_run_time: number[];
  genres: Genre[];
  homepage: string;
  in_production: boolean;
  languages: string[];
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: Company[];
  seasons: Season[];
  status: string;
  type: string;
  last_air_date: Date;
  tagline: string;
}
