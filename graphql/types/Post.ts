import { objectType, extendType, idArg } from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("body");
    t.string("thumbnail");
    t.string("category");
    t.string("authorId");
    t.field("author", {
      type: "User",
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.post
          .findUnique({
            where: {
              id: parent.id,
            },
          })
          .author();
      },
    });
  },
});

export const PostsQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.nonNull.field("posts", {
      type: "Post",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.post.findMany();
      },
    });
    t.list.nonNull.field("post", {
      type: "Post",
      args: { id: idArg() },
      resolve(_parent, { id }: { id: string }, ctx) {
        return ctx.prisma.post.findMany({
          where: {
            id: id,
          },
        });
      },
    });
  },
});
