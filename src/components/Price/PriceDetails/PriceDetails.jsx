import React from "react";

import styles from "./priceDetails.module.scss";

function PriceDetails(props) {
  return (
    <div className={styles.Price}>
      <div className={styles.Amount}>{props.amount}</div>
      <div className={styles.Policy}>{props.policy}</div>
      <div className={styles.Details}>{props.details}</div>
      <button className={styles.Order}>{props.booking}</button>
    </div>
  );
}

export default PriceDetails;
