export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '636278b9379a46037f7d0339',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fh3xy6f2',
                  apiId: '37230665-eebc-410d-a89c-e5a1fbbfdb6b'
                },
                {
                  buildHookId: '636278bafe40da0306c8cfbb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fd658gad',
                  apiId: 'b2a40102-2a0b-4d3c-aa3c-2501f0b43b12'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nigelhughes552/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fd658gad.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
