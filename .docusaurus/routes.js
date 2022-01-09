
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tel/__docusaurus/debug',
    component: ComponentCreator('/tel/__docusaurus/debug','511'),
    exact: true
  },
  {
    path: '/tel/__docusaurus/debug/config',
    component: ComponentCreator('/tel/__docusaurus/debug/config','321'),
    exact: true
  },
  {
    path: '/tel/__docusaurus/debug/content',
    component: ComponentCreator('/tel/__docusaurus/debug/content','e71'),
    exact: true
  },
  {
    path: '/tel/__docusaurus/debug/globalData',
    component: ComponentCreator('/tel/__docusaurus/debug/globalData','a18'),
    exact: true
  },
  {
    path: '/tel/__docusaurus/debug/metadata',
    component: ComponentCreator('/tel/__docusaurus/debug/metadata','eae'),
    exact: true
  },
  {
    path: '/tel/__docusaurus/debug/registry',
    component: ComponentCreator('/tel/__docusaurus/debug/registry','b38'),
    exact: true
  },
  {
    path: '/tel/__docusaurus/debug/routes',
    component: ComponentCreator('/tel/__docusaurus/debug/routes','445'),
    exact: true
  },
  {
    path: '/tel/blog',
    component: ComponentCreator('/tel/blog','26c'),
    exact: true
  },
  {
    path: '/tel/blog/archive',
    component: ComponentCreator('/tel/blog/archive','86f'),
    exact: true
  },
  {
    path: '/tel/blog/first-blog-post',
    component: ComponentCreator('/tel/blog/first-blog-post','5c2'),
    exact: true
  },
  {
    path: '/tel/blog/long-blog-post',
    component: ComponentCreator('/tel/blog/long-blog-post','3e6'),
    exact: true
  },
  {
    path: '/tel/blog/mdx-blog-post',
    component: ComponentCreator('/tel/blog/mdx-blog-post','1e5'),
    exact: true
  },
  {
    path: '/tel/blog/tags',
    component: ComponentCreator('/tel/blog/tags','3b4'),
    exact: true
  },
  {
    path: '/tel/blog/tags/docusaurus',
    component: ComponentCreator('/tel/blog/tags/docusaurus','99e'),
    exact: true
  },
  {
    path: '/tel/blog/tags/facebook',
    component: ComponentCreator('/tel/blog/tags/facebook','630'),
    exact: true
  },
  {
    path: '/tel/blog/tags/hello',
    component: ComponentCreator('/tel/blog/tags/hello','7a8'),
    exact: true
  },
  {
    path: '/tel/blog/tags/hola',
    component: ComponentCreator('/tel/blog/tags/hola','03b'),
    exact: true
  },
  {
    path: '/tel/blog/welcome',
    component: ComponentCreator('/tel/blog/welcome','572'),
    exact: true
  },
  {
    path: '/tel/markdown-page',
    component: ComponentCreator('/tel/markdown-page','9f6'),
    exact: true
  },
  {
    path: '/tel/docs',
    component: ComponentCreator('/tel/docs','92a'),
    routes: [
      {
        path: '/tel/docs/intro',
        component: ComponentCreator('/tel/docs/intro','7df'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tel/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/tel/docs/tutorial-basics/congratulations','7a1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tel/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/tel/docs/tutorial-basics/create-a-blog-post','e77'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tel/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/tel/docs/tutorial-basics/create-a-document','a24'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tel/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/tel/docs/tutorial-basics/create-a-page','842'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tel/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/tel/docs/tutorial-basics/deploy-your-site','b7f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tel/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/tel/docs/tutorial-basics/markdown-features','839'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tel/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/tel/docs/tutorial-extras/manage-docs-versions','ba3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tel/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/tel/docs/tutorial-extras/translate-your-site','e9b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/tel/',
    component: ComponentCreator('/tel/','69a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
