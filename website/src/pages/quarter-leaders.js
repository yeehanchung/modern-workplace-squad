import Layout from "@theme/Layout";
import React, { useState } from "react";
import { leaders } from "../../contents/data/quarter-leaders";
import styles from "./squad.module.css";

function QuarterLeaders() {
  
  let count;
  const [data, setData] = useState({leaders});
  const listPerson = data.leaders.map((data, idx) => {
    const { quarter, name, position, linkedin, image } = data;
    count = 4;

    return (
      <>
        {idx % 4 === 0 ? <><br/><br/><h3>{quarter}</h3></> : ""}
        <div className={styles.main} key={idx}>
          <div className={styles.person}>
            <div className={styles.name}> <a href={linkedin}>{name}</a></div>
            <img src={image} alt={name} className={styles.img} />
            <br />
            <div className={styles.name}>{position}</div>
          </div>
        </div>
      </>
    );
  });

  return (
    <Layout title="Quarter Leaders" description="Quarter Leaders of Modern Workplace Squad throughout the journey.">
      <div className={styles.container}>
        <h1>Quarter Leaders</h1>
        {listPerson}
      </div>
    </Layout>
  );
}

export default QuarterLeaders;
