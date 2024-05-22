import { ITVShow } from "./ITVShow";
import { Genre, Company, Network, Season } from "../Types";
import { IPerson } from "../Person/IPerson";

export interface ITvShowDetails extends ITVShow {
  created_by: IPerson[];
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
