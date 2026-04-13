export const globalConfig = {
  site: {
    name: "Maple Shaw",
    author: "Maple Shaw",
    description: "Frontend engineer, open-source enthusiast, and creative tinkerer.",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Posts",
        href: "/posts"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2025 Maple Shaw. All rights reserved.",
    social: {
      twitter: "https://x.com/mapleshaw",
      github: "https://github.com/mapleshaw",
      email: "hi@mapleshaw.dev"
    }
  }
} as const; 