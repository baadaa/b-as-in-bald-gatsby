// TODO:
// Replace direct imported imaged with GatsbyImage

/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Isotope from 'isotope-layout/js/isotope';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { portfolioContent } from '../content/portfolioContent';

const PageHeading = styled.h1`
  font-weight: 400;
  color: #4a4a4a;
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  margin: 3rem 0 2rem;
`;

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
  width: 48%;
  height: auto;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;

  @media screen and (min-width: 670px) {
    width: 32%;
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
  &:hover {
    img {
      transform: scale(1.05);
    }
    .thumb-caption {
      color: var(--berry);
    }
  }
`;
const FilterItem = styled.li`
  font-size: 1.2rem;
  padding: 0.6rem 1.2rem;
  background: #e7e7e7;
  cursor: pointer;
  color: #4a4a4a;
  margin: 0.3rem 0.4rem;
  border-radius: 1rem;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-0.2rem);
  }
  &.active {
    background: var(--green);
    color: #fff;
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

class PortfolioFilter extends React.Component {
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
      <Layout>
        <SEO title="B | Portfolio" description="Work samples." />
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
          {portfolioContent.map((item, index) => (
            <GridItem className={item.category} key={index}>
              <Link to={item.url}>
                <img src={item.image} alt={item.title} />
              </Link>
              <span className="thumb-caption">{item.title}</span>
            </GridItem>
          ))}
        </GridArea>
      </Layout>
    );
  }
}

export default PortfolioFilter;
