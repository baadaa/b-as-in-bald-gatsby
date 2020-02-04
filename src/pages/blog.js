// TODO:
// Replace direct imported imaged with GatsbyImage

import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { PageHeading } from '../components/UIElements';

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 4vw 0;
  a {
    text-decoration: none;
    color: inherit;
  }

  .blog-intro {
    display: flex;
    justify-content: flex-start;
    min-height: 5rem;
    width: 100%;
    padding-top: 1.5rem;
    border-top: #ddd 1px solid;
    margin-bottom: 1.5rem;
    &:last-of-type {
      border-bottom: #ddd 1px solid;
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
    }

    span {
      display: block;
    }

    @media screen and (min-width: 900px) {
      width: 750px;
    }

    .blog-intro-thumb {
      flex: 0 0 10rem;
      width: 10rem;
      height: 10rem;
      text-align: center;
      img {
        object-fit: cover;
        width: 10rem;
        height: 10rem;
      }

      @media screen and (min-width: 600px) {
        flex: 0 0 13rem;
        width: 13rem;
        height: 13rem;
        img {
          width: 13rem;
          height: 13rem;
        }
      }
    }
    .blog-intro-detail {
      padding-left: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .blog-intro-title {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.3;
        color: #555;
        margin: 0 0 0.5rem;
      }
      .blog-intro-date {
        font-size: 1.2rem;
        color: #aaa;
        margin: 0;
      }
      .tagList {
        padding: 0;
        list-style: none;
        display: none;
        margin-top: 0.5rem;
        margin-bottom: 0;
      }
      @media screen and (min-width: 600px) {
        .blog-intro-title {
          padding-top: 0.5rem;
          font-size: 2rem;
        }
        .blog-intro-date {
          font-size: 1.5rem;
          color: #aaa;
        }
        .tagList {
          display: flex;
        }
        .tag {
          color: #999;
          background: #e9e9e9;
          font-size: 0.9rem;
          line-height: 1;
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
          margin: 0.5rem 0.5rem 0 0;
          display: inline block;
        }
      }
    }
  }
  h1 {
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 1.5rem;
    color: #4a4a4a;
  }
  .blog-pagination {
    color: #777;
    word-spacing: 0.2rem;
    margin-bottom: 3rem;
    strong {
      color: #000;
    }
  }
`;

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
        <BlogList>
          {blogPosts.map(post => (
            <article className="blog-intro" key={post.id}>
              <span className="blog-intro-thumb">
                <Link to={post.frontmatter.slug}>
                  <img src={post.frontmatter.headerImg.publicURL} alt="" />
                </Link>
              </span>
              <div className="blog-intro-detail">
                <Link to={post.frontmatter.slug}>
                  <h3 className="blog-intro-title">{post.frontmatter.title}</h3>
                </Link>
                <Link to={post.frontmatter.slug}>
                  <time className="blog-intro-date">
                    {post.frontmatter.date}
                  </time>
                </Link>
                <ul className="tagList">
                  {post.frontmatter.tags.map((tag, index) => (
                    <li className="tag" key={`${tag}${index}`}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </BlogList>
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
            tags
            date(formatString: "MMMM D, YYYY")
            headerImg {
              publicURL
            }
          }
        }
      }
    }
  }
`;
