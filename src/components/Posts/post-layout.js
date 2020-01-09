import React from 'react';
import { graphql } from 'gatsby';
import { PortfolioTemplate } from './PostTemplate';
import BlogTemplate from './BlogTemplate';

export default function PostLayout({ data: { mdx } }) {
  if (mdx.frontmatter.type === 'portfolio') {
    return <PortfolioTemplate {...mdx} />;
  }
  if (mdx.frontmatter.type === 'blog') {
    return <BlogTemplate {...mdx} />;
  }
  return null;
}

export const pageQuery = graphql`
  query PortfolioQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        headerImg {
          publicURL
        }
        headerBg
        type
        tags
        date(formatString: "MMM D, YYYY")
        slug
        order
        pieces {
          thumb {
            id
            publicURL
          }
          asset {
            id
            publicURL
          }
          description
        }
      }
    }
  }
`;
