import React from 'react';

import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Flip404Animation } from '../components/LogoAnimation/LogoAnimation';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Flip404Animation size="5rem" />
    <div style={{ margin: '0 auto', maxWidth: '330px' }}>
      <h1 style={{ textAlign: 'center' }}>
        We couldn't find the page you were looking for.
      </h1>
      <div
        style={{
          fontSize: '1.3rem',
          lineHeight: '1.5',
          background: '#f0f0f0',
          padding: '1rem 2rem',
          marginTop: '2rem',
          marginBottom: '1.3rem',
        }}
      >
        This is either because:
        <ul
          style={{ paddingLeft: '1.5rem', marginTop: '1rem', fontSize: '1rem' }}
        >
          <li>
            There is an error in the URL entered into your web browser. Please
            check the URL and try again.
          </li>
          <li style={{ marginTop: '.5rem' }}>
            The page you are looking for has been moved or deleted.
          </li>
        </ul>
      </div>
      <Link
        to="/"
        style={{
          display: 'block',
          textAlign: 'center',
          fontSize: '1.3rem',
          color: 'var(--berry)',
        }}
      >
        Go back home
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
