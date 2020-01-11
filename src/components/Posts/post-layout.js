import React from 'react';
import { graphql } from 'gatsby';
import { PortfolioTemplate, BlogTemplate } from './PostTemplate';

export default function PostLayout({ data: { mdx }, pageContext }) {
  if (mdx.frontmatter.type === 'portfolio') {
    return <PortfolioTemplate {...mdx} {...pageContext} />;
  }
  if (mdx.frontmatter.type === 'blog') {
    return <BlogTemplate {...mdx} {...pageContext} />;
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
        headerTextColor
        type
        tags
        date(formatString: "MMMM D, YYYY")
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
