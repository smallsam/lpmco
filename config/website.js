const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'LPMCo', // Navigation and Site Title
  siteTitleAlt: 'little project management company', // Alternative Site title for SEO
  siteTitleShort: 'lpmco', // short_name for manifest
  siteHeadline: 'managing projects for social good', // Headline for schema.org JSONLD
  siteUrl: 'https://www.lpmcompany.com.au', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'welcome to lpmco',
  author: 'lpmco', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  //userTwitter: '@cara', // Twitter Username
  //ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  //googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
