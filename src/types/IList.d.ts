interface IMediaItem {
  type: "tv" | "movie";
  tmdbID: string;
  dateAdded: Date;
}

interface IList {
  userId: string;
  listName: string;
  description?: string;
  media: IMediaItem[];
  createdAt: Date;
  updatedAt: Date;
}
