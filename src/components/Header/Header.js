// NOTE: A click listener is added to <ul> element for mobile nav to trigger menu bar collapsing action. Relevant eslint warnings are disabled.

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { Link } from 'gatsby';
import React, { useState } from 'react';
import styles from './Header.module.scss';
import './hamburger.scss';
import './mobileMenu.scss';

const Dot = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="11"
    viewBox="0 0 20 20"
  >
    <circle cx="10" cy="15" r="5" fill="#FFF"></circle>
  </svg>
);

const Header = () => {
  const [mobileOn, setMobileOn] = useState(false);
  const mobileOnClassName = 'hamburger hamburger--squeeze is-active';
  const mobileOffClassName = 'hamburger hamburger--squeeze';

  return (
    <>
      <header className={styles.Header}>
        <div className={styles.BigB}>
          <Link to="/">
            B<Dot />
          </Link>
        </div>
        <ul className={styles.bigNav}>
          <li>
            <Link activeClassName={styles.active} to="/">
              About
            </Link>
          </li>
          <li>
            <Link
              activeClassName={styles.active}
              to="/portfolio"
              getProps={({ isPartiallyCurrent }) =>
                isPartiallyCurrent ? { className: styles.active } : null
              }
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClassName={styles.active}
              to="/blog"
              getProps={({ isPartiallyCurrent }) =>
                isPartiallyCurrent ? { className: styles.active } : null
              }
            >
              Blog
            </Link>
          </li>
          <li>
            <a
              href="https://www.redbubble.com/people/baadaa/shop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
            </a>
          </li>
          <li>
            <Link activeClassName={styles.active} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <button
          className={mobileOn ? mobileOnClassName : mobileOffClassName}
          type="button"
          onClick={() => setMobileOn(!mobileOn)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <nav className={mobileOn ? 'mobileMenu isOn' : 'mobileMenu'}>
          <ul className="smallNav" onClick={() => setMobileOn(!mobileOn)}>
            <li>
              <Link activeClassName="smallNav active" to="/">
                About
              </Link>
            </li>
            <li>
              <Link
                activeClassName="smallNav active"
                to="/portfolio"
                getProps={({ isPartiallyCurrent }) =>
                  isPartiallyCurrent ? { className: 'smallNav active' } : null
                }
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClassName="smallNav active"
                to="/blog"
                getProps={({ isPartiallyCurrent }) =>
                  isPartiallyCurrent ? { className: 'smallNav active' } : null
                }
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                href="https://www.redbubble.com/people/baadaa/shop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop
              </a>
            </li>
            <li>
              <Link activeClassName="smallNav active" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
