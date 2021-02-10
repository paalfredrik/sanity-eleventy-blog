export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602391db11118152669fd7ec',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-1t1kfsif',
                  apiId: '455a4544-f7d1-4912-be94-d38f0ae8edf9'
                },
                {
                  buildHookId: '602391db821c055037af5f25',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-3coak7je',
                  apiId: '44087632-3eba-4de6-9df6-574ce1ed2dca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-3coak7je.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
