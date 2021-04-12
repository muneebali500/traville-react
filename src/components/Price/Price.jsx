import styles from "./price.module.scss";
import PriceDetails from "./PriceDetails/PriceDetails";
import SectionTitle from "../SectionTitle/SectionTitle";
import PriceData from "../../data";

function Price() {
  return (
    <section className={styles.SectionPrice} id="price">
      <SectionTitle title="Most Popular Tours" />
      <div className={styles.PriceContainer}>
        {PriceData.map((price, index) => (
          <PriceDetails
            key={index}
            amount={price.amount}
            policy={price.policy}
            details={price.details.map((detail, index) => (
              <span key={index}>{detail}</span>
            ))}
            booking="Book Now"
          />
        ))}
      </div>
    </section>
  );
}

export default Price;
