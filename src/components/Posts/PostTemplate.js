import React from 'react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Header from '../Header/Header';
import SEO from '../seo';
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
      <SEO
        title={article.frontmatter.title}
        description={article.frontmatter.description}
        meta={[
          {
            property: `og:image`,
            content: `https://res.cloudinary.com/updater-marketing/image/fetch/f_auto,w_1200,h_630,c_fill/https://basinbald.com${article.frontmatter.headerImg.publicURL}`,
          },
        ]}
      />
      <PostHeroImgSection
        headerImg={article.frontmatter.headerImg.publicURL}
        headerTextColor={article.frontmatter.headerTextColor}
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
          <ul className="post-tags" style={{ marginBottom: '3.5rem' }}>
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
      <SEO
        title={piece.frontmatter.title}
        description={piece.frontmatter.description}
        meta={[
          {
            property: `og:image`,
            content: `https://res.cloudinary.com/updater-marketing/image/fetch/f_auto,w_1200,h_630,c_fill/https://basinbald.com${piece.frontmatter.headerImg.publicURL}`,
          },
        ]}
      />
      <PostHeroImgSection
        headerImg={piece.frontmatter.headerImg.publicURL}
        headerTextColor={piece.frontmatter.headerTextColor}
        headerShadow={piece.frontmatter.headerShadow}
        headerBreadcrumbBg={piece.frontmatter.headerBreadcrumbBg}
      >
        <Link to="/portfolio/">Portfolio</Link>
        <h1>{piece.frontmatter.title}</h1>
      </PostHeroImgSection>
      <PostContentArea>
        <ul className="post-tags">
          {piece.frontmatter.tags.map((tag, index) => (
            <TagPill key={index}>{tag}</TagPill>
          ))}
        </ul>
        <MDXRenderer>{piece.body}</MDXRenderer>
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
