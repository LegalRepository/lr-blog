# Legal Repository Blog

This is the official blog for the Legal Repository.

## Updating

In order to update the content of the blog you have one of two options – post or page.

### Post

In order to include an update an existing post simply add a markup file `.md` to the folder `posts`

The name of the file should follow this lexical pattern:

`file number hierarchically` + `short name for the file`

Remember to include the following information at the top:
```yaml
---
title: 
description: 
genre: 
keywords:
  - 
author: 
image: /img/[file].jpg
---
```

### Page

Generally, you would not need to include a page unless new information is needed – like about the website.

The name of the file should follow this lexical pattern:

`page name`

Remember to include the following information at the top:
```yaml
---
title: 
description: 
---
```

## Technical

In order to generate the pages for the website run the following:

`npm start`

If you need to debug the website actively run:

`npm run build`

To update the CSS for the website run:

`npm run css`

### Engine

This website was made completely with 11ty. It is a necessary dependency.

Additionally, we use node-minify to minify CSS.