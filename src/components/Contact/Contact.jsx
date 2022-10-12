import React from "react";

import styles from "./contact.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";

function Contact() {
  return (
    <div className={styles.Contact} id="contact">
      <SectionTitle title="Most Popular Contacts" />
      <div className={styles.Wrapper}>
        <div className={styles.CommercialContacts}>
          <div>
            <i className="fas fa-phone-volume"></i>
            <span>+92-334-4567892</span>
          </div>
          <div>
            <i className="fas fa-paper-plane"></i>
            <span>traville-support@hotmail.com</span>
          </div>
          <div>
            <i className="fas fa-map-pin"></i>
            <span>Floor#4/14, Commercial Building</span>
          </div>
        </div>

        <div className={styles.SocialContacts}>
          <div>
            <i className="fab fa-facebook-square"></i>
            <span>traville.facebook.com</span>
          </div>
          <div>
            <i className="fab fa-linkedin"></i>
            <span>traville.linkedin.com</span>
          </div>
          <div>
            <i className="fab fa-twitter-square"></i>
            <span>traville.twitter.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
