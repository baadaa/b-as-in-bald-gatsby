import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundImageSection from '../components/BackgroundImageSection/BackgroundImageSection_TEST';

export default () => (
  <Layout>
    <SEO title="Piece title" description="Piece content" />
    <BackgroundImageSection imgLink="nyc-lifelist.jpg" />
  </Layout>
);
