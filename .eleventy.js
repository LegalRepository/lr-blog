module.exports = function(eleventyConfig) {
  // A list of our posts
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob("posts/**/*.md");
  });
  eleventyConfig.addCollection("pages", function(collection) {
    return collection.getFilteredByGlob("pages/**/*.md");
  });

  // Build files that need to be linked
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("logo");

  // Modify default directories
  return {
      dir: {
      // input: "input", // The directory responsible for handling all content
      output: "public", // The directory for all output
      includes: "_includes", // The directory for including any components with the template
      layouts: "_layouts", // The directory for layouts
      data: "_global" // The directly for global data files
    },
    passthroughFileCopy: true
  }

  // Available templates
  eleventyConfig.setTemplateFormats("html,liquid,njk");

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  });

  // Create an alias for necessary files
  eleventyConfig.addLayoutAlias('home', 'index.liquid');
  eleventyConfig.addLayoutAlias('page', '_layouts/page.liquid');
  eleventyConfig.addLayoutAlias('post', '_layouts/post.liquid');
}
