import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import './portfolioLayout.scss';
import Header from './Header/Header';
import { labelPill as TagPill, Footer } from './UIElements';

const HeroImgSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${props => props.headerImg});
  background-size: cover
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  padding-top: 3rem;
  margin-bottom: 3rem;
  a {
    text-decoration: none;
    font-size: 1.5rem;
  }
  h1 {
    margin-top: 16rem;
    margin-bottom: 19rem;
    text-align: center;
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.5rem;
    color: #202020;
  }
`;
const ContentArea = styled.section`
  max-width: 90rem;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  --subheading-width: 15rem;
  .portfolioDetail {
    margin-bottom: 1.5rem;
  }
  ul {
    list-style: none;
    padding: 0;
    // margin: 0 auto 1.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    // max-width: calc(100vw - 5rem);
  }
  h3 {
    flex: 0 0 var(--subheading-width);
    text-transform: capitalize;
    &::after {
      display: inline;
      content: ':';
    }
  }
  h1 {
    padding-left: var(--subheading-width);
    max-width: 700px;
    font-family: Georgia, serif;
    font-style: italic;
    font-size: 2.2rem;
    line-height: 1.5;
    // margin: 2rem auto;
    margin-top: 3rem;
    font-weight: 400;
    color: #999;
    em {
      font-style: normal;
    }
  }
  h3,
  p {
    font-size: 1.8rem;
    margin-top: 0;
    margin-bottom: 0;
  }
  p {
    color: #777;
    line-height: 1.6;
  }
`;
export default function PortfolioTemplate({ data: { mdx } }) {
  return (
    <>
      <Header />
      <HeroImgSection headerImg={mdx.frontmatter.headerImg.publicURL}>
        <Link to="/portfolio/">Portfolio</Link>
        <h1>{mdx.frontmatter.title}</h1>
      </HeroImgSection>
      <ContentArea>
        <ul>
          {mdx.frontmatter.tags.map((tag, index) => (
            <TagPill key={index}>{tag}</TagPill>
          ))}
        </ul>
        <h1>{mdx.frontmatter.intro}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <div>
          {mdx.frontmatter.pieces.map(piece => (
            <a href={piece.asset.publicURL}>
              <img
                src={piece.thumb.publicURL}
                key={piece.thumb.id}
                alt={piece.description}
              />
            </a>
          ))}
        </div>
      </ContentArea>
      <Footer>© {new Date().getFullYear()} by Bumhan Yu</Footer>
    </>
  );
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
        tags
        intro
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
