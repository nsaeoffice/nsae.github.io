import { getCollection, getEntries } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  const validPosts = posts.filter((post) => !post.data.draft);

  const items = await Promise.all(
    validPosts.map(async (post) => {
      let authorString = "";
      if (post.data.authors) {
        const authorEntries = await getEntries(post.data.authors);
        authorString = authorEntries.map((a) => a.data.name).join(", ");
      }

      let categoryStrings = [];
      if (post.data.categories) {
        const categoryEntries = await getEntries(post.data.categories);
        categoryStrings = categoryEntries.map((c) => c.data.title);
      }

      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.id}/`,
        categories: categoryStrings,
        customData: authorString
          ? `<author>${authorString}</author>`
          : undefined,
      };
    })
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: items,
  });
}
