import React from 'react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Header from '../Header/Header';
import { truncateStr } from '../Utils/utils';

import {
  labelPill as TagPill,
  Footer,
  PostHeroImgSection,
  PostContentArea,
  BlogEntry,
  PostNav,
} from '../UIElements';

const BlogTemplate = article => {
  const prevArticle =
    article.previous && article.previous.frontmatter.type === 'blog'
      ? article.previous.frontmatter
      : undefined;
  const nextArticle =
    article.next && article.next.frontmatter.type === 'blog'
      ? article.next.frontmatter
      : undefined;
  return (
    <>
      <Header />
      <PostHeroImgSection
        headerImg={article.frontmatter.headerImg.publicURL}
        style={{
          backgroundPosition: 'center bottom',
          backgroundSize: '562px 315px',
          backgroundColor: article.frontmatter.headerBg,
        }}
      >
        <Link to="/blog/">Blog</Link>
        <h1 style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          {article.frontmatter.title}
        </h1>
        <time>{article.frontmatter.date}</time>
      </PostHeroImgSection>
      <BlogEntry>
        <PostContentArea className="blog-body">
          <ul style={{ marginBottom: '3.5rem' }}>
            {article.frontmatter.tags.map((tag, index) => (
              <TagPill key={index}>{tag}</TagPill>
            ))}
          </ul>
          <MDXRenderer>{article.body}</MDXRenderer>
          <PostNav>
            {prevArticle ? (
              <a href={prevArticle.slug} className="previous">
                {truncateStr(prevArticle.title, 50)}
              </a>
            ) : (
              ''
            )}
            {nextArticle ? (
              <a href={nextArticle.slug} className="next">
                {truncateStr(nextArticle.title, 50)}
              </a>
            ) : (
              ''
            )}
          </PostNav>
        </PostContentArea>
      </BlogEntry>
      <Footer>© {new Date().getFullYear()} by Bumhan Yu</Footer>
    </>
  );
};

const PortfolioTemplate = piece => {
  const prevPiece =
    piece.previous && piece.previous.frontmatter.type === 'portfolio'
      ? piece.previous.frontmatter
      : undefined;
  const nextPiece =
    piece.next && piece.next.frontmatter.type === 'portfolio'
      ? piece.next.frontmatter
      : undefined;
  return (
    <>
      <Header />
      <PostHeroImgSection
        headerImg={piece.frontmatter.headerImg.publicURL}
        headerTextColor={piece.frontmatter.headerTextColor}
      >
        <Link to="/portfolio/">Portfolio</Link>
        <h1>{piece.frontmatter.title}</h1>
      </PostHeroImgSection>
      <PostContentArea>
        <ul>
          {piece.frontmatter.tags.map((tag, index) => (
            <TagPill key={index}>{tag}</TagPill>
          ))}
        </ul>
        <h1>{piece.frontmatter.intro}</h1>
        <MDXRenderer>{piece.body}</MDXRenderer>
        <div>
          {piece.frontmatter.pieces.map(work => (
            <a href={work.asset.publicURL} key={work.thumb.id}>
              <img
                key={work.thumb.id}
                src={work.thumb.publicURL}
                alt={work.description}
              />
            </a>
          ))}
        </div>
        <PostNav>
          {prevPiece ? (
            <a href={prevPiece.slug} className="previous">
              {truncateStr(prevPiece.title, 50)}
            </a>
          ) : (
            ''
          )}
          {nextPiece ? (
            <a href={nextPiece.slug} className="next">
              {truncateStr(nextPiece.title, 50)}
            </a>
          ) : (
            ''
          )}
        </PostNav>
      </PostContentArea>
      <Footer>© {new Date().getFullYear()} by Bumhan Yu</Footer>
    </>
  );
};

export { PortfolioTemplate, BlogTemplate };
