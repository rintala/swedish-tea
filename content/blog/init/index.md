---
title: Blog Init
date: "2019-07-14T22:12:03.284Z"
description: "Hello to the world and walk-through of blog setup"
---

I have previously had great experiences from writing blogs as a way of expressing thoughts and keeping track of history. This blog won't be much different. However, I am hoping it can serve, not only as a way for me to keep track of my learning process as I dive into different tech topics, but also as a way for you as a reader to consume these concepts along with me.

In this post, I will start off with a quick step-by-step walkthrough of how I setup this blog:

1. [Intro](#intro)
2. [Gatsby and React](#gatsby-react)
3. [Theme](#theme)
4. [Deploy to Netlify](#deploy-netlify)



## <a name="intro"> 1. Intro</a>

My inspiration for the setup of this blog was the React guru [Dan Abramov](https://mobile.twitter.com/dan_abramov) and his blog [overreacted.io](#https://overreacted.io/), using the [Gatbsy Starter Blog](#https://github.com/gatsbyjs/gatsby-starter-blog) boilerplate. I liked the idea of a minimalistic design, clean markdown-based posts and lightning fast loading times. Also, since I am comfortable with React, the convenience of being based in React, allowed me to get to the point of producing content quickly. In addition, choosing a familiar stack, allows for some synergies in re-using components as well as being comfortable in implementing new more complex features.



## <a name="gatsby-react">2. Gatsby and React</a>

As mentioned, I have a background in React, and have already built some feed-based projects from the ground previously. Building from the ground comes with the convience of knowing every tiny detail of the code base, but it obviously takes more time to setup than using a framework. In this project my number one priority was simplicity and getting up to speed quickly. Thus, I did some research and found Gatsby to be the most attractive alternative to proceed with.

[Gatsby](https://www.gatsbyjs.org/) is an open-source framework to generate static web apps, built on React and powered by GraphQL. Gatsby achieves a phenomenal speed by transforming your project into a single HTML file along with static assets. These static files are then simply served in a directory, and hosted on a provider of choice - for instance Netlify or Github pages. I was definately was not disappointed regarding the speed, and developing with Gatsby has been a smooth experience. I find the setup to be very convienent regarding the data bit as well, using GraphQL to pull data from Markdown files, and create posts accoding to my template files. This results in a nice workflow both for developing and producing content for the blog. The writing process becomes a simple matter of creating a new post folder, adding a md-file and starting to write, having the post automatically included in my data structure and re-rendered into a new blog page dynamically.

**Pros with Gatsby:**

- Simple integration with Netlify hosting

- React-based
- Solid selection of themes
- Easy and fast setups
- Endless opportunities for customizations
- Integration with GraphQL for pulling data from all types of sources
- Solid documentation



## <a name="theme"> 3. Theme </a>

Another nice thing about Gatsby is its proper documentation and wide variety of plugins. For example, I wanted to implement a classic toggle functionality for dark/bright mode theme. I quickly found a suitable plugin [gatsby-plugin-dark-mode](https://www.gatsbyjs.org/packages/gatsby-plugin-dark-mode/), which allowed my to implement this in a matter of minutes. The plugin provided a custom `<ThemeToggler>  ` wrapper component, an out-of-the-box implementation using localStorage to persist the theme across visits - smooth!



## <a name="deploy-netlify">4. Deploy to Netlify </a>

As always, I have my GitHub repo setup, and try to enforce the habit of frequently pushing eventhough I am working on a solo project. It helps me stay structured, summarizing my work in tasks and commits, as well as providing the valuable version control system. Also I get closer to my goal to become a Git ninja!

This was my first time looking into deployment via Netlify, as I have previously either used traditional web hosting, a [DigitalOcean](https://www.digitalocean.com/) droplet or [GitHub Pages](https://pages.github.com/). Using Netlify was a great experience and with a bit of automagic, I could just connect my repo containing the Gatsby blog and let Netlify take care of building and serving it. The best thing about this is the fact that as I push to Github my changes will continuously be deployed to production. Such a nice workflow! Will be back with more updates on my experience in a couple of weeks when I have used it a bit more.

```
Local change => GitHub => Netlify => Production
```

