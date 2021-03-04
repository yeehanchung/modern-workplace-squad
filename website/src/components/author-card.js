import React from "react";
import styles from "../css/author-card.module.css";

export function AuthorCard({ name, image, role, linkedinUrl }) {
  return (
    <div className={styles.person}>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.img__link}>
        <img src={image} alt={name} className={styles.img} />
      </a>
      <div className={styles.intro}>
        <h4 className={styles.name}>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h4>
        <small className={styles.subtitle}>{role}</small>
      </div>
    </div>
  );
}
