export type Post = {
  id?: string;
  title: string;
  body: string;
  thumbnail: string;
  category: Category;
  authorId: string;
  categoryId: string;
  views: number;
  createdAt: Date;
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
