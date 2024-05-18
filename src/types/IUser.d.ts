interface IWatchlistItem {
    type: "tv" | "movie";
    tmdbID: string;
    dateAdded: Date;
}

interface IUser {
  _id: string;
  username: string;
  watchlist: IWatchlistItem[];
  lists: IList[];
  role: ["user", "admin"];
  email: string;
  name: string;
  surname: string;
  avatar?: string;
  about?: string;
  location?: string;
  createdAt: string;
  updatedAt: string;
}