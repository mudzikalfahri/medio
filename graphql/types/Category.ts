import { extendType, objectType } from "nexus";

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.string("id");
    t.string("name");
    t.field("posts", {
      type: "Post",
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.category
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

export const categoriesQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.nonNull.field("categories", {
      type: "Category",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.category.findMany();
      },
    });
  },
});
