interface IReview {
  _id: string;
  userId: IUser;
  tmdbID: string;
  mediaType: "movie" | "tv";
  title: string;
  comment: string;
  spoiler: boolean;
  created_at: string;
  updated_at: string;
}
