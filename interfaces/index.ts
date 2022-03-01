export type Post = {
  id?: string;
  title: string;
  body: string;
  thumbnail: string;
  category: Category;
  authorId: string;
  createdAt?: string;
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

export type Category = {
  id: string;
  name: string;
};
