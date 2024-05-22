import { IMovie } from "../Movie/IMovie";
import { ITVShow } from "../TV/ITVShow";
import { MediaType } from "../Types";

export interface IPerson {
  id: number;
  name: string;
  media_type: MediaType;
  profile_path: string;
  adult: boolean;
  gender: number;
  popularity: number;
  known_for_department: string;
  known_for: Array<IMovie | ITVShow>;
}

export interface IPersonDetailResponse extends IPerson {
  birthday?: string;
  deathday?: string;
  also_known_as: Array<string>;
  biography: string;
  place_of_birth?: string;
  imdb_id: string;
  homepage?: string;
}
