export type Post = {
  id?: string;
  title: string;
  body: string;
  thumbnail: string;
  category: string;
  authorId: string;
  createdAt?: Date;
};
