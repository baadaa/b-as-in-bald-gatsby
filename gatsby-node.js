const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx(
        sort: {
          fields: [frontmatter___type, frontmatter___order, frontmatter___date]
          order: ASC
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              type
            }
          }
          previous {
            frontmatter {
              title
              slug
              type
            }
          }
          next {
            frontmatter {
              title
              slug
              type
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create portfolio entry pages.
  const portfolioPosts = result.data.allMdx.edges;

  // you'll call `createPage` for each result
  portfolioPosts.forEach(({ node, next, previous }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/Posts/post-layout.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id, next, previous },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /isotope-layout/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
