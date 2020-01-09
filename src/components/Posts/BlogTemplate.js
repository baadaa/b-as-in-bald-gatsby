import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Header from '../Header/Header';
import {
  labelPill as TagPill,
  Footer,
  PostHeroImgSection,
} from '../UIElements';
import './BlogTemplate.scss';

const ContentArea = styled.section`
  max-width: 90rem;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  --subheading-width: 15rem;
  .portfolioDetail {
    display: flex;

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
export default function BlogTemplate(mdx) {
  return (
    <>
      <Header />
      <PostHeroImgSection
        headerImg={mdx.frontmatter.headerImg.publicURL}
        style={{
          backgroundPosition: 'center bottom',
          backgroundSize: '562px 315px',
          backgroundColor: mdx.frontmatter.headerBg,
        }}
      >
        <Link to="/blog/">Blog</Link>
        <h1 style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          {mdx.frontmatter.title}
        </h1>
        <time style={{ paddingBottom: '28rem' }}>{mdx.frontmatter.date}</time>
      </PostHeroImgSection>
      <div className="blog-entry">
        <ContentArea className="blog-body">
          {/* <ul>
          {mdx.frontmatter.tags.map((tag, index) => (
            <TagPill key={index}>{tag}</TagPill>
          ))}
        </ul> */}
          <MDXRenderer>{mdx.body}</MDXRenderer>
          {/* <div>
          {mdx.frontmatter.pieces.map(piece => (
            <a href={piece.asset.publicURL} key={piece.thumb.id}>
              <img
                key={piece.thumb.id}
                src={piece.thumb.publicURL}
                alt={piece.description}
              />
            </a>
          ))}
        </div> */}
        </ContentArea>
      </div>
      <Footer>© {new Date().getFullYear()} by Bumhan Yu</Footer>
    </>
  );
}
