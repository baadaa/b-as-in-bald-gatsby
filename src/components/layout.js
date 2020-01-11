import React from 'react';

import Header from './Header/Header';
import { Footer } from './UIElements';

const Layout = ({ children }) => (
  <>
    <Header />
    <main style={{ minHeight: 'calc(100vh - 4.5rem)' }}>{children}</main>
    <Footer>© {new Date().getFullYear()} by Bumhan Yu</Footer>
  </>
);
export default Layout;
