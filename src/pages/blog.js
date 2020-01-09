// TODO:
// Replace direct imported imaged with GatsbyImage

import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Isotope from 'isotope-layout/js/isotope';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { labelPill as FilterItem, PageHeading } from '../components/UIElements';

export default ({ data: { allMdx } }) => {
  const blogPosts = allMdx.edges
    .filter(edge => edge.node.frontmatter.type === 'blog')
    .map(edge => edge.node);
  return (
    <>
      <Layout>
        <SEO
          title="B | Blog"
          description="Stuff I've been thinking about and/or working on."
        />
        <PageHeading>Blog</PageHeading>
        <section style={{ maxWidth: '900px', margin: '0 auto' }}>
          {blogPosts.map(post => (
            <Link to={post.frontmatter.slug}>
              <article
                key={post.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem 0',
                }}
              >
                <img
                  style={{
                    objectFit: 'cover',
                    width: '100px',
                    height: '100px',
                  }}
                  src={post.frontmatter.headerImg.publicURL}
                  alt=""
                />
                <span>
                  <h3 style={{ margin: '0' }}>{post.frontmatter.title}</h3>
                  <time>{post.frontmatter.date}</time>
                </span>
              </article>
            </Link>
          ))}
        </section>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            type
            date(formatString: "MMM D, YYYY")
            headerImg {
              publicURL
            }
          }
        }
      }
    }
  }
`;
