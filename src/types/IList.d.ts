interface IList {
  _id: string;
  userId: string;
  listName: string;
  description?: string;
  listType: "tv" | "movie";
  medias: IMedia[];
  createdAt: Date;
  updatedAt: Date;
}
