import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../AuthNav/AuthNav.module.css';

const style = {
  activeLink: {
    color: 'rgb(0 255 149)',
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeStyle={style.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeStyle={style.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}
