import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <div>
        <span>😕</span>
        <h1>Нічого не знайдено</h1>
      </div>
      <p className={styles.description}>
        Нажаль ця сторінка відсутня в нашому інтернет-магазині
      </p>
    </div>
  );
};

export default NotFoundBlock;
