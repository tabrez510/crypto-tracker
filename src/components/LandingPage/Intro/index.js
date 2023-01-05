import React from "react";
import Button from "../../Common/Button/Button";

import styles from "./styles.module.css";
function LandingIntro() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h1 className={styles.bigHeading}>Track Crypto</h1>
        <h1 className={styles.bigHeading2}>Real Time.</h1>
        <p className={styles.para}>
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </p>
        <div className={styles.flexBtn}>
          <Button text="Dashboard" />
          <Button text="Share" outlined={true} />
        </div>
      </div>
      <div className={styles.phone}></div>
    </div>
  );
}

export default LandingIntro;