// NOTE: Gatsby Image doesn't play nicely with animated GIFs

import React from 'react';
import styled from 'styled-components';
import { Link, graphql, StaticQuery } from 'gatsby';
import Isotope from 'isotope-layout/js/isotope';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from '../components/Img';

import { labelPill as FilterItem, PageHeading } from '../components/UIElements';

const GridArea = styled.section`
  margin: 0 auto;
  height: auto;
  width: calc(100vw - 5rem);
  display: flex;
  min-height: calc(100vh - 4rem);
  flex-wrap: wrap;
  justify-content: space-between;
`;

const GridItem = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: auto;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  padding-left: 1%;
  padding-right: 1%;
  @media screen and (min-width: 670px) {
    width: 33.3333333333333%;
    margin-bottom: 2vw;
  }

  span {
    display: block;
  }
  .thumb-caption {
    // display: flex;
    font-family: inherit;
    font-weight: 200;
    // justify-content: center;
    // align-items: center;
    font-size: 1.4rem;
    line-height: 1.3;
    text-align: center;
    margin-top: 0.5rem;
    flex-wrap: wrap;
    transform: color 0.2s;

    @media screen and (min-width: 730px) {
      font-size: 1.7rem;
      margin-top: 1.2rem;
    }
  }
  img {
    width: 100%;
    display: block;
    transition: transform 0.2s;
    transform-origin: bottom;
  }
  a {
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
  &:hover {
    img {
      // transform: scale(1.05);
    }
    .thumb-caption {
      color: var(--berry);
    }
  }
`;
const filterLabels = [
  'all',
  'motion',
  'interactive',
  'identity',
  'infographic',
  'visual',
];

class PortfolioPage extends React.Component {
  state = {
    all: true,
    motion: false,
    interactive: false,
    identity: false,
    infographic: false,
    visual: false,
  };

  initIsotope = () => {
    this.iso = new Isotope(`.gridArea`, {
      itemSelector: `.gridArea > div`,
      layoutMode: 'fitRows',
    });
  };

  adjustState = target => {
    const stateOptions = {
      all: false,
      motion: false,
      interactive: false,
      identity: false,
      infographic: false,
      visual: false,
    };
    stateOptions[target] = true;
    this.setState(stateOptions);
  };

  handleFilter = e => {
    const target = e.currentTarget.dataset.id;
    const filterSet = {
      all: '*',
      motion: '.motion',
      interactive: '.interactive',
      identity: '.identity',
      infographic: '.infographic',
      visual: '.visual',
    };
    if (!this.iso) {
      this.initIsotope();
    }
    this.iso.arrange({ filter: filterSet[target] });
    this.adjustState(target);
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    slug
                    type
                    category
                    thumb_name
                    thumb_path {
                      publicURL
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <Layout>
            <SEO
              title="B | Portfolio"
              description="Work samples."
              meta={[
                {
                  property: `og:image`,
                  content: 'https://basinbald.com/portfolio-og-image.jpg',
                },
              ]}
            />
            <PageHeading>Portfolio</PageHeading>
            <ul
              style={{
                listStyle: 'none',
                padding: '0',
                margin: '0 auto 1.5rem',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                maxWidth: 'calc(100vw - 5rem)',
              }}
            >
              {filterLabels.map(label => (
                <FilterItem
                  data-id={label}
                  onClick={this.handleFilter}
                  key={label}
                  className={this.state[label] ? 'active' : ''}
                >
                  {label}
                </FilterItem>
              ))}
            </ul>
            <GridArea className="gridArea">
              {data.allMdx.edges
                .filter(edge => edge.node.frontmatter.type === 'portfolio')
                .map(edge => edge.node)
                .map(item => (
                  <GridItem
                    className={item.frontmatter.category.join(' ')}
                    key={item.id}
                  >
                    <Link to={item.frontmatter.slug}>
                      {item.frontmatter.thumb_name.endsWith('.gif') ? (
                        <img
                          src={item.frontmatter.thumb_path.publicURL}
                          alt={item.frontmatter.title}
                        />
                      ) : (
                        <Img
                          src={item.frontmatter.thumb_name}
                          alt={item.frontmatter.title}
                        />
                      )}
                    </Link>
                    <span className="thumb-caption">
                      {item.frontmatter.title}
                    </span>
                  </GridItem>
                ))}
            </GridArea>
          </Layout>
        )}
      />
    );
  }
}

export default PortfolioPage;
