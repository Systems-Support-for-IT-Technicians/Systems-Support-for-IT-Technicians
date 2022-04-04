// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Systems Support for IT Technicians Level 2 (Notes)',
  tagline: 'All notes for Systems Support for IT Technicians, it includes a wide range of topics like; hardware, software, networking, customer support and many more. Click the blue button below to see!',

  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
                to: '/docs/CustomerSupportProvision',
              },
              {
                label: 'Networking Principles',
                to: '/docs/NetworkingPrinciples',
              },
              {
                label: 'Visual Basic',
                to: '/docs/VisualBasic',
              },
              {
                label: 'Systems & Data Security',
                to: '/docs/Systems&DataSecurity',
              },
              {
                label: 'Maintain Equipment & Systems',
                to: '/docs/MaintainEquipment&Systems',
              },
              {
                label: 'Software Installation',
                to: '/docs/SoftwareInstallation',
              },
              {
                label: 'Testing Equipment',
                to: '/docs/TestingEquipment',
              },
              {
                label: 'Repair Centre Procedures',
                to: '/docs/RepairCentreProcedures',
              },
              {
                label: 'Install & Configure Networks',
                to: '/docs/Install&ConfigureNetworks',
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
        style: 'light',
        links: [
          {
            title: 'Notes',
            items: [
              {
                label: 'Customer Support Provision',
                to: '/docs/CustomerSupportProvision',
              },
              {
                label: 'Networking Principles',
                to: '/docs/NetworkingPrinciples',
              },
              {
                label: 'Visual Basic',
                to: '/docs/VisualBasic',
              },
              {
                label: 'Systems & Data Security',
                to: '/docs/Systems&DataSecurity',
              },
              {
                label: 'Maintain Equipment & Systems',
                to: '/docs/MaintainEquipment&Systems',
              },
              {
                label: 'Software Installation',
                to: '/docs/SoftwareInstallation',
              },
              {
                label: 'Testing Equipment',
                to: '/docs/TestingEquipment',
              },
              {
                label: 'Repair Centre Procedures',
                to: '/docs/RepairCentreProcedures',
              },
              {
                label: 'Install & Configure Networks',
                to: '/docs/Install&ConfigureNetworks',
              },
            ],
          },
          {
            title: 'Navigation',
            items: [
              {
                label: 'Home',
                to: '/Home',
              },
              {
                label: 'About',
                to: '/About',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AyazZafar/ayazdocusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
