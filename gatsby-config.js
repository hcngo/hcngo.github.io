module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: "gatsby-theme-portfolio-starter",
      options: {
        trackingId: "UA-27634418-4",
        projectsPath: "projects",
        imagesPath: "images",
        projectsPerPage: "4"
      },
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    headline: `Welcome to Hieu Ngo's space`,
    title: `Hieu Ngo's Blog`,
    author: `Hieu Ngo`,
    email: `hcngo91@gmail.com`,
    description: `Welcome to Hieu Ngo's Blog`,
    siteUrl: `https://hcngo.github.io/`,
    focusArea: `Full-stack developer with strong interest in Distributed System`,
    menuLinks: [{name: 'Projects', link: '/page/1'}, {name: 'External', link: 'http://atech.guide'}],
    social: [
      'https://www.facebook.com/aTechGuide/'
    ]
  },
}
