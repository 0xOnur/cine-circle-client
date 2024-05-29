interface IUser {
  _id: string;
  username: string;
  lists: IList[];
  role: ["user", "admin"];
  email: string;
  password: string;
  name: string;
  surname: string;
  avatar?: string;
  avatarId?: string;
  about?: string;
  location?: string;
  createdAt: string;
  updatedAt: string;
}
