import React from "react";

import styles from "./sectionTitle.module.scss";

function SectionTitle(props) {
  return <h2 className={styles.SectionTitle}>{props.title}</h2>;
}

export default SectionTitle;
