import {
  objectType,
  extendType,
  idArg,
  stringArg,
  nonNull,
  asNexusMethod,
  intArg,
} from "nexus";
import { GraphQLDate } from "graphql-iso-date";
import { Post as IPost } from "@interfaces/index";
export const GQLDate = asNexusMethod(GraphQLDate, "date");

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("body");
    t.string("headline");
    t.string("thumbnail");
    t.string("categoryId");
    t.int("minsRead");
    t.int("views");
    t.string("authorId");
    t.string("createdAt");
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
    t.field("category", {
      type: "Category",
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.post
          .findUnique({
            where: {
              id: parent.id,
            },
          })
          .category();
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
    t.nonNull.field("post", {
      type: "Post",
      args: { id: idArg() },
      resolve(_parent, { id }: { id: string }, ctx) {
        return ctx.prisma.post.findUnique({
          where: {
            id: id,
          },
        });
      },
    });
  },
});

export const PostMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createPost", {
      type: "Post",
      args: {
        title: nonNull(stringArg()),
        body: nonNull(stringArg()),
        headline: nonNull(stringArg()),
        minsRead: nonNull(intArg()),
        categoryId: nonNull(stringArg()),
        thumbnail: nonNull(stringArg()),
        authorId: nonNull(stringArg()),
      },
      resolve(
        _root,
        {
          title,
          body,
          categoryId,
          thumbnail,
          authorId,
          headline,
          minsRead,
        }: IPost,
        ctx
      ) {
        if (ctx.session) {
          return ctx.prisma.post.create({
            data: {
              title,
              minsRead,
              body,
              headline,
              categoryId,
              thumbnail,
              authorId,
            },
          });
        }
      },
    });
  },
});
