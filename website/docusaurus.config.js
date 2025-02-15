// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '#30DaysOf Learning',
  tagline: 'Learn By Building - Concepts to Code To Cloud!',
  url: 'https://microsoft.github.io',
  baseUrl: '/30daysof/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'microsoft', // Usually your GitHub org/user name.
  projectName: '30DaysOf', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          feedOptions: {
            type: 'rss',
            title: `#30DaysOf Learning`,
            description: `Subscribe to get the latest news and content to jumpstart a #30DaysOf learning journey!`,
            copyright: `Copyright © ${new Date().getFullYear()} Microsoft.`,
          },
          showReadingTime: true,
          blogTitle: '#30DaysOf Learning',
          blogDescription: 'Subscribe for announcements and content to jumpstart a month of learning something new',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Recent Articles',
          tagsBasePath: 'tags',
          archiveBasePath: 'archive',
          postsPerPage: 1,
          sortPosts: 'ascending'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: '#30DaysOf',
        logo: {
          alt: '30DaysOf Logo',
          src: 'img/logo.svg',
          target: '_self',
          width: 32,
          height: 32,
          //style: {border: 'dotted white'},
        },
        style: 'primary',
        items: [    
          { label: '🔌 #Fusion', type: 'doc', docId: 'roadmaps/fusion',  }, 
          { label: '⚡️ #Serverless', type: 'doc', docId: 'roadmaps/serverless',  },   
          {
            type: 'dropdown',
            label: 'Upcoming',
            position: 'left',
            items: [   
              { label: '🔎 Data Science', type: 'doc', docId: 'roadmaps/data-science',  }, 
              { label: '🦒 Microsoft Graph', type: 'doc', docId: 'roadmaps/microsoft-graph',  },   
            ],
          },   
          {
            type: 'dropdown',
            label: 'Self-Paced',
            position: 'left',
            items: [             
              { label: '🔋 Power Platform', type: 'doc', docId: 'roadmaps/power-roadmap',  },   
              { label: '📈 Data Analytics', type: 'doc', docId: 'roadmaps/data-analytics',  },  
              { label: '🖥 Static Web Apps', type: 'doc', docId: 'roadmaps/swa',  },  
              { label: '📲 Progressive Web Apps', type: 'doc', docId: 'roadmaps/pwa',  },   
            ],
          },

          {to: '/blog', label: 'Blog', position: 'right'},
          {to: '/calendar', label: 'Calendar', position: 'right'},     
          {to: 'https://github.com/microsoft/30daysof/discussions', label: 'Discussions', position: 'right'},     
          {
            type: 'dropdown',
            label: 'Sitemap',
            position: 'right',
            items: [             
              { label: '1. Roadmaps', type: 'doc', docId: 'roadmaps/pwa',  },      
              { label: '2. Video Series', type: 'doc', docId: 'video-series/intro',  },
              { label: '3. Curricula', type: 'doc', docId: 'curricula/web', },
              { label: '4. Challenges', type: 'doc', docId: 'challenges/intro', },     
              { label: '5. Workshops', type: 'doc', docId: 'workshops/intro',  },
            ],
          },
          {
            href: 'https://github.com/microsoft/30DaysOf',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Student Ambassadors',
            to: 'https://studentambassadors.microsoft.com/',
          },
          {
            label: 'Imagine Cup',
            to: 'https://imaginecup.microsoft.com/en-us/Events',
          },
          {
            label: 'Student Hub',
            to: 'https://docs.microsoft.com/en-us/learn/student-hub/',
          },
          {
            label: 'Microsoft Reactor',
            to: 'https://developer.microsoft.com/en-us/reactor/',
          },
          { 
            label: `Java`,
            to: `https://developer.microsoft.com/en-us/java/`
          },
          { 
            label: `JavaScript`,
            to: `https://aka.ms/javascript`
          },
          {
            label: 'Privacy Statement ',
            to: 'https://privacy.microsoft.com/en-us/privacystatement',
          },
          { 
           label: ` © ${new Date().getFullYear()} Microsoft`,
           to: 'https://microsoft.com'
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'https://microsoft.github.io/30daysof/assets/images/learning-be3a813ae57f95cb38baa7076c384638.png',

      metadata: [
        {
          name: 'twitter:url', 
          content: 'https://microsoft.github.io/30DaysOf'
        },
        {
          name: 'twitter:title', 
          content: '#30DaysOfLearning: Concepts to Code to Cloud'
        },
        {
          name: 'twitter:description', 
          content: 'The beginner\'s one-stop resources to skilling up on Cloud and AI!'
        },
        {
          name: 'twitter:image', 
          content: 'https://microsoft.github.io/30daysof/assets/images/learning-be3a813ae57f95cb38baa7076c384638.png'
        },
        {
          name: 'twitter:card', 
          content: 'summary_large_image'
        },
        {
          name: 'twitter:creator', 
          content: '@nitya'
        },
        {
          name: 'twitter:site', 
          content: '@AzureAdvocates'
        },

      ],

      announcementBar: {
        id: 'Kickstart #30DaysOfLearning!',
        content:
          ' Join the <a href="https://aka.ms/ConnectorSkillsChallenge"><b>Connector Cloud Skills Challenge</b></a> | <b>Give us a star on <a href="https://github.com/microsoft/30DaysOf"><b>GitHub</b></a> 🙏🏽',
        backgroundColor: '#ffffff',
        textColor: '#000000',
        isCloseable: false,
      },

      /* Clarity Config */
      clarity: {
        ID: "dkja658zd4", // Instructions below
      }

    }),

  // --- CONFIG-30DAYS: Activate and configure plugins
  // Ideal Image: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image#installation
  // 
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. 
        steps: 2, // #images b/w min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      'docusaurus-plugin-clarity',
      {
      }
    ],
  ],

  // --- CONFIG-SCRIPTS: e.g., for adding analytics, cookie banners etc
  //   Can be added sync or async 
  //   See: https://docusaurus.io/docs/api/docusaurus-config#scripts
  scripts: [
    "https://wcpstatic.microsoft.com/mscc/lib/v2/wcp-consent.js",
  ],

  clientModules: [
    require.resolve("./static/scripts/wcp-init.js")
  ]

};

module.exports = config;
