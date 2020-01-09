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

const PageHeading = styled.h1`
  font-weight: 400;
  color: #4a4a4a;
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  margin: 3rem 0 2rem;
`;
export { labelPill, Footer, PostHeroImgSection, PageHeading };
