interface IRating {
  userId: IUser;
  tmdbID: number;
  mediaType: "movie" | "tv";
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}
