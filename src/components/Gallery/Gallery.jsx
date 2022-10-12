import React from "react";

import styles from "./gallery.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import { gallery } from "../../data";

function Gallery() {
  return (
    <div className={styles.Gallery} id="gallery">
      <SectionTitle title="Most Popular Gallery" />
      <div className={styles.GalleryGrid}>
        {gallery.map((img, index) => (
          <figure key={index}>
            <img src={`/images/${img}`} alt="" />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
