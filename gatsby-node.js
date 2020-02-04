const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
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

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node, next, previous }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/components/Posts/post-layout.js`),
      context: { id: node.id, next, previous },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // This is to avoid window-related errors during SSR build
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
