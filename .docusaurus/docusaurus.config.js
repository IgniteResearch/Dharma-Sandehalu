export default {
  "title": "Dharma Sandehalu",
  "tagline": "Search Engine / one place For All Hindu Rituals",
  "url": "https://Dharmasandehalu.co.in",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/DharmaSandehalu.png",
  "organizationName": "IgniteResearch",
  "projectName": "Dharma-Sandehalu",
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\saikoushikg\\Github\\IgniteResearch\\Dharma-Sandehalu\\sidebars.js",
          "editUrl": "https://github.com/IgniteResearch/Dharma-Sandehalu/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/IgniteResearch/Dharma-Sandehalu/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "theme": {
          "customCss": "C:\\Users\\saikoushikg\\Github\\IgniteResearch\\Dharma-Sandehalu\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Dharma sandehalu",
      "logo": {
        "alt": "Dharma sandehalu Seach Enginer Logo",
        "src": "img/DharmaSandehalu.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Tutorial"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/facebook/docusaurus",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Learn",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/"
            },
            {
              "label": "Second Doc",
              "to": "docs/doc2"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        },
        {
          "title": "Legal",
          "items": [
            {
              "label": "Privacy",
              "href": "https://opensource.facebook.com/legal/privacy/"
            },
            {
              "label": "Terms",
              "href": "https://opensource.facebook.com/legal/terms/"
            },
            {
              "label": "Data Policy",
              "href": "https://opensource.facebook.com/legal/data-policy/"
            },
            {
              "label": "Cookie Policy",
              "href": "https://opensource.facebook.com/legal/cookie-policy/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Ignite Research"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};