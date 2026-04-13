export const projectsConfig = {
  title: "My Projects",
  description: "A selection of things I've built recently. Most of these started as weekend experiments that grew into something useful.",
  backButton: "Back to Home",
  noProjects: "No projects found.",
  items: [
    {
      title: "DevDash",
      description: "A minimal developer dashboard that aggregates GitHub notifications, CI status, and deployment logs in one place.",
      href: "https://github.com/mapleshaw/devdash",
      imageUrl: "/assets/images/projects/project1.jpg"
    },
    {
      title: "SnapMark",
      description: "A browser extension for saving and organizing bookmarks with auto-generated tags and full-text search.",
      href: "https://github.com/mapleshaw/snapmark",
      imageUrl: "/assets/images/projects/project2.jpg"
    },
    {
      title: "Palette Lab",
      description: "An interactive color palette generator for designers and developers. Exports to Tailwind, CSS variables, and Figma tokens.",
      href: "https://github.com/mapleshaw/palette-lab",
      imageUrl: "/assets/images/projects/project3.png"
    }
  ]
} as const; 