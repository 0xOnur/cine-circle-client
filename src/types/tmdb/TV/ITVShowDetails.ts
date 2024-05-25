import {
  Genre,
  Company,
  Network,
  Season,
  Language,
  ICredits,
  IVideos,
} from "../Types";
import { IPerson } from "../Person/IPerson";
import { ITVShow } from "./ITVShow";

export interface ITvShowDetails extends ITVShow {
  created_by: IPerson[];
  episode_run_time: number[];
  genres: Genre[];
  homepage: string;
  in_production: boolean;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: Company[];
  languages: string[];
  spoken_languages: Language[];
  seasons: Season[];
  status: string;
  type: string;
  last_air_date: Date;
  tagline: string;
  credits: ICredits;
  videos: IVideos;
}
