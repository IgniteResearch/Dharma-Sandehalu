
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/hin/blog',
    component: ComponentCreator('/hin/blog','c5a'),
    exact: true
  },
  {
    path: '/hin/blog/archive',
    component: ComponentCreator('/hin/blog/archive','956'),
    exact: true
  },
  {
    path: '/hin/blog/first-blog-post',
    component: ComponentCreator('/hin/blog/first-blog-post','c3d'),
    exact: true
  },
  {
    path: '/hin/blog/long-blog-post',
    component: ComponentCreator('/hin/blog/long-blog-post','60e'),
    exact: true
  },
  {
    path: '/hin/blog/mdx-blog-post',
    component: ComponentCreator('/hin/blog/mdx-blog-post','356'),
    exact: true
  },
  {
    path: '/hin/blog/tags',
    component: ComponentCreator('/hin/blog/tags','471'),
    exact: true
  },
  {
    path: '/hin/blog/tags/docusaurus',
    component: ComponentCreator('/hin/blog/tags/docusaurus','e25'),
    exact: true
  },
  {
    path: '/hin/blog/tags/facebook',
    component: ComponentCreator('/hin/blog/tags/facebook','6cb'),
    exact: true
  },
  {
    path: '/hin/blog/tags/hello',
    component: ComponentCreator('/hin/blog/tags/hello','dba'),
    exact: true
  },
  {
    path: '/hin/blog/tags/hola',
    component: ComponentCreator('/hin/blog/tags/hola','294'),
    exact: true
  },
  {
    path: '/hin/blog/welcome',
    component: ComponentCreator('/hin/blog/welcome','5f6'),
    exact: true
  },
  {
    path: '/hin/markdown-page',
    component: ComponentCreator('/hin/markdown-page','537'),
    exact: true
  },
  {
    path: '/hin/docs',
    component: ComponentCreator('/hin/docs','727'),
    routes: [
      {
        path: '/hin/docs/intro',
        component: ComponentCreator('/hin/docs/intro','446'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/hin/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/hin/docs/tutorial-basics/congratulations','55f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/hin/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/hin/docs/tutorial-basics/create-a-blog-post','49a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/hin/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/hin/docs/tutorial-basics/create-a-document','114'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/hin/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/hin/docs/tutorial-basics/create-a-page','85b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/hin/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/hin/docs/tutorial-basics/deploy-your-site','ca9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/hin/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/hin/docs/tutorial-basics/markdown-features','ae4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/hin/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/hin/docs/tutorial-extras/manage-docs-versions','8c5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/hin/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/hin/docs/tutorial-extras/translate-your-site','a8e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/hin/',
    component: ComponentCreator('/hin/','d37'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
