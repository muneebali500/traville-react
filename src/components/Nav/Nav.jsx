import React from "react";

import styles from "./nav.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.Logo}>
        <h3>Traville</h3>
      </div>
      <ul className={styles.NavItems}>
        <a href="#home" className={styles.NavLink}>
          Home
        </a>
        <a href="#price" className={styles.NavLink}>
          Pricing
        </a>
        <a href="#gallery" className={styles.NavLink}>
          Gallery
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
