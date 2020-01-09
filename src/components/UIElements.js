import styled from 'styled-components';

const labelPill = styled.li`
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

const Footer = styled.footer`
  width: 100%;
  padding: 5px;
  z-index: 90;
  text-align: right;
  background: #202020;
  box-sizing: border-box;
  color: #999;
`;

const PostHeroImgSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${props => props.headerImg});
  background-size: cover
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 3rem 1.5rem 0;
  margin-bottom: 3rem;
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: ${props => (props.headerTextColor ? props.headerTextColor : '#FFF')};
    opacity: .6;
  }
  h1 {
    margin-top: 16rem;
    margin-bottom: 19rem;
    text-align: center;
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.3;
    max-width: 90rem;
    color: ${props => (props.headerTextColor ? props.headerTextColor : '#FFF')};

  }
  time {
    padding-bottom: 30rem;
    font-size: 1.5rem;
    color:#fff;
  }
`;
const PostContentArea = styled.section`
  max-width: 90rem;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  --subheading-width: 15rem;
  .portfolioDetail {
    display: flex;
    margin-bottom: 1.5rem;
    flex-direction: column;
    @media screen and (min-width: 600px) {
      flex-direction: row;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  h3 {
    flex: 0;
    text-transform: capitalize;
    &::after {
      display: inline;
      content: ':';
    }
    @media screen and (min-width: 600px) {
      flex: 0 0 var(--subheading-width);
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
    font-size: 1.6rem;
    line-height: 1.6;
    margin-top: 0;
    margin-bottom: 0;
    @media screen and (min-width: 600px) {
      font-size: 1.8rem;
    }
  }
  p {
    color: #777;
  }
`;
const PageHeading = styled.h1`
  font-weight: 400;
  color: #4a4a4a;
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  margin: 3rem 0 2rem;
`;

const BlogEntry = styled.article`
  disply: flex;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: var(--berry);
  }
  h2 {
    font-size: 1.6rem;
    margin-top: 2.5rem;
    margi-bottom: 1rem;
    font-weight: 700;
    color: #202020;
  }
  p {
    display: block;
    font-size: 1.6rem;
    line-height: 1.5;
    color: #777;
    margin-top: 0;
    margin-bottom: 1.6rem;

    &.excerpt {
      font-size: 2rem;
      line-height: 1.4;
      color: #aaa;
      margin-bottom: 3rem;
    }
  }

  blockquote {
    display: none;
    float: right;
    vertical-align: text-top;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border: none;
    color: #ccc;
    border-left: var(--green) 5px solid;

    &.ql {
      float: left;
    }

    &.qr {
      float: right;
    }
  }
  @media screen and (min-width: 600px) {
    h2 {
      font-size: 1.8rem;
      margin-top: 3rem;
    }

    p {
      font-size: 1.8rem;
      margin-bottom: 2rem;

      &.excerpt {
        font-size: 2.25rem;
        line-height: 1.5;
        color: #aaa;
        margin-top: 1rem;
        margin-bottom: 4rem;
      }
    }

    blockquote {
      display: block;
      width: 30%;
      font-size: 2.7rem;
      line-height: 1.5;
      padding-left: 4rem;

      &.qr {
        margin-left: 5rem;
      }

      &.ql {
        margin-left: 0rem;
        padding-right: 4rem;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    blockquote {
      display: block;
      width: 30%;

      &.qr {
        margin-left: 7rem;
      }

      &.ql {
        margin-left: -4.5rem;
      }
    }
  }
`;

const PostNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 8rem;
  margin-bottom: 3rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #999;
    border-radius: 1rem;
    width: 100%;
    padding: 1rem 2rem;
    border: #999 1px solid;
    margin: 0rem 0 1.5rem 0;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.035);
    }
    &.previous {
      padding-left: 1.5rem;
      text-align: left;
      margin-right: auto;

      &::before {
        display: flex;
        align-items: center;
        font-family: Helvetica, Arial, sans-serif;
        content: '\\2190 ';
        margin-right: 1rem;
        height: 100%;
      }
    }

    &.next {
      padding-right: 1.5rem;
      text-align: right;
      justify-content: flex-end;
      margin-left: auto;

      &::after {
        display: flex;
        align-items: center;
        font-family: Helvetica, Arial, sans-serif;
        content: '\\2192';
        margin-left: 1rem;
        text-align: right;
        height: 100%;
      }
    }

    @media screen and (min-width: 600px) {
      width: auto;
      max-width: 40%;
      text-align: center;
    }
    @media screen and (min-width: 1000px) {
      max-width: 33%;
    }
  }
`;

export {
  labelPill,
  Footer,
  PostHeroImgSection,
  PageHeading,
  PostContentArea,
  BlogEntry,
  PostNav,
};
