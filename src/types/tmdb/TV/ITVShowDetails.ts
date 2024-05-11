import { ITVShow } from "./ITVShow";
import { Genre, Company, Person, Network, Season } from "../Types";

export interface TvShowDetails extends ITVShow {
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
}
