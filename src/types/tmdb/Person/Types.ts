import { IMovie } from "../Movie/IMovie";
import { ITVShow } from "../TV/ITVShow";

export type Person = {
    id: number;
    name: string;
    profile_path: string;
    adult: boolean;
    popularity: number;
    known_for: Array<IMovie | ITVShow>;
};

export type PersonDetailResponse = Person & {
    birthday?: string;
    deathday?: string;
    also_known_as: Array<string>;
    biography: string;
    place_of_birth?: string;
    imdb_id: string;
    homepage?: string;
};