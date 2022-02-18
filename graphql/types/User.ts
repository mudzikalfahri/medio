import { extendType, objectType, stringArg } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("email");
    t.string("image");
    t.list.field("posts", {
      type: "Post",
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: parent.id,
            },
          })
          .posts();
      },
    });
  },
});

export const usersQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("users", {
      type: "User",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany();
      },
    });
    t.nonNull.list.field("user", {
      type: "User",
      args: { email: stringArg() },
      resolve(_parent, { email }: { email: string }, ctx) {
        return ctx.prisma.user.findMany({ where: { email: email } });
      },
    });
  },
});
