export type Post = {
  id?: string;
  title: string;
  body: string;
  thumbnail: string;
  category: string;
  authorId: string;
  createdAt?: Date;
  minsRead: number;
  headline: string;
  author: User;
};

export type User = {
  id: string;
  name: string;
  image: string;
  email: string;
};
