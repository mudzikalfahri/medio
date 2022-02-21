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
    t.string("category");
    t.int("minsRead");
    t.int("views");
    t.string("authorId");
    t.date("createdAt");
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
        category: nonNull(stringArg()),
        thumbnail: nonNull(stringArg()),
        authorId: nonNull(stringArg()),
      },
      resolve(
        _root,
        {
          title,
          body,
          category,
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
              category,
              thumbnail,
              authorId,
            },
          });
        }
      },
    });
  },
});
