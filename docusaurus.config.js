// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Systems Support for IT Technicians Level 2 (Notes)',
  tagline: 'All notes for Systems Support for IT Technicians, it includes a wide range of topics like; hardware, software, networking, customer support and many more. Click the blue button below to see!',
  url: 'https://ayazsite.cf',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/logo.svg',
  organizationName: 'Ayaz Zafar', // Usually your GitHub org/user name.
  projectName: 'Systems-Support-for-IT-Technicians', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Systems-Support-for-IT-Technicians/Systems-Support-for-IT-Technicians',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Systems Support For IT Technicians',
        title: 'Systems Support for IT Technicians',

        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/Home', label: 'Home', position: 'left'},
          {
            type: 'dropdown',
            label: 'Notes',
            position: 'left',
            items: [
              {
                label: 'Customer Support Provision',
                href: '/docs/CustomerSupportProvision/About/',
              },
              {
                label: 'Networking Principles',
                to: '/docs/NetworkingPrinciples/About/',
              },
              {
                label: 'Visual Basic',
                to: '/docs/VisualBasic/About/',
              },
              {
                label: 'Systems & Data Security',
                to: '/docs/Systems&DataSecurity/About/',
              },
              {
                label: 'Maintain Equipment & Systems',
                to: '/docs/MaintainEquipment&Systems/About/',
              },
              {
                label: 'Software Installation',
                to: '/docs/SoftwareInstallation/About/',
              },
              {
                label: 'Testing Equipment',
                to: '/docs/TestingEquipment/About/',
              },
              {
                label: 'Repair Centre Procedures',
                to: '/docs/RepairCentreProcedures/About/',
              },
              {
                label: 'Install & Configure Networks',
                to: '/docs/Install&ConfigureNetworks/About/',
              },
            ],
          },
          {to: 'https://github.com/Systems-Support-for-IT-Technicians/Systems-Support-for-IT-Technicians', label: 'Github', position: 'left'},
          {to: '/About', label: 'About', position: 'left'},
        ],
      },
      footer: {
        logo: {
          alt: 'Powered by Vercel',
          src: 'powered-by-vercel.svg',
          width: 160,
          height: 51,
          href: 'https://vercel.com/?utm_source=systems-support-for-it-technicians&utm_campaign=oss',
    },
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Systems Support for IT Technicians Level 2. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
          require.resolve("@easyops-cn/docusaurus-search-local"),
          {
              hashed: true,
              docsDir: 'docs',
              docsRouteBasePath: '/',
              indexDocs: true,
              indexBlog: false,
              indexPages: false,
              highlightSearchTermsOnTargetPage: false,
              translations:
              {
                "search_placeholder": "Search",
                }
          }
      ],
    ],
};
module.exports = config;