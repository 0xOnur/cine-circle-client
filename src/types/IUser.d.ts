interface IWatchlistItem {
  mediaType: "tv" | "movie";
  tmdbID: number;
  dateAdded: Date;
}

interface IUser {
  _id: string;
  username: string;
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
