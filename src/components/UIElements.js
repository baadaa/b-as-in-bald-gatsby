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

export { labelPill, Footer };
