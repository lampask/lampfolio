const config = require('./config/site');
const dotenv = require('dotenv');
const fs = require("fs");

// try load env vars from file
if (fs.existsSync(`.env.${process.env.NODE_ENV}`)) {
    dotenv.config({
		path: `.env.${process.env.NODE_ENV}`
	});
} else {
	dotenv.config();
}

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
	'gatsby-plugin-react-helmet',
	'gatsby-plugin-loadable-components-ssr',
	'gatsby-plugin-portal',
	'gatsby-plugin-anchor-links',
    {
      resolve: "gatsby-plugin-remote-images",
      options: {
        nodeType: "GoogleSpreadsheetData",
        imagePath: "image",
        name: 'productImage',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-google-spreadsheet',
      options: {
          spreadsheetId: process.env.SPREADSHEET_ID,
          worksheetTitle: 'data',
          typePrefix: "GoogleSpreadsheet",
          credentials: {
            type: 'service_account',
            project_id: process.env.PROJECT_ID,
            private_key_id: process.env.PRIVATE_KEY_ID,
            private_key: process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
            client_email: process.env.CLIENT_EMAIL,
            client_id: '',
            auth_uri: 'https://accounts.google.com/o/oauth2/auth',
            token_uri: 'https://oauth2.googleapis.com/token',
            auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
            client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.PROJECT_ID}%40appspot.gserviceaccount.com`,
          },
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        autoLabel: 'dev-only',
        // eslint-disable-next-line
        labelFormat: `[filename]--[local]`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: config.favicon,
      },
    },
    'gatsby-plugin-offline',
  ],
};
