import { objectType } from "nexus";

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
