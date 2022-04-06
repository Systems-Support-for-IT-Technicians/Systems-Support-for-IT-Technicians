// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Systems Support for IT Technicians Level 2 (Notes)',
  tagline: 'All notes for Systems Support for IT Technicians, it includes a wide range of topics like; hardware, software, networking, customer support and many more. Click the blue button below to see!',
  url: 'https://ayazdocusaurus.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/logo.svg',
  organizationName: 'Ayaz Zafar', // Usually your GitHub org/user name.
  projectName: 'ayazdocusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
          {to: '/About', label: 'About', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Systems Support for IT Technicians Level 2. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
