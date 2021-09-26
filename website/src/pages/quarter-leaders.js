import Layout from "@theme/Layout";
import React, { useState } from "react";
import { leaders } from "../../contents/data/quarter-leaders";
import { hallOfFamers } from '../../contents/data/hall-of-famers';
import styles from "./squad.module.css";

function QuarterLeaders() {
  
  let count;
  const [data, setData] = useState({leaders});
  const [hallOfFamersData, setHallOfFamer] = useState({hallOfFamers});
  const listPerson = data.leaders.map((data, idx) => {
    const { quarter, name, position, linkedin, image } = data;
    count = 4;

    return (
      <>
        {idx % 4 === 0 ? <><h4 className={styles.each_quarter}>{quarter}</h4></> : ""}
        <div className={styles.main} key={idx}>
          <div className={styles.person}>
            <div className={styles.name}> <a href={linkedin}>{name}</a></div>
            <img src={image} alt={name} className={styles.img} />
            <br />
            {position? <div className={styles.position}>{position}</div> : ''}
          </div>
        </div>
      </>
    );
  });

  const hallOfFamer = hallOfFamersData.hallOfFamers.map((data, idx) => {
    return (
      <div className={styles.main} key={idx}>
        <div className={styles.person}>
          <div className={styles.name}> <a href={"linkedin"}>{data.name}</a></div>
          <img src={data.image} alt={data.name} className={styles.img} />
          <br />
          <div className={styles.position}>{data.position}</div>
        </div>
      </div>
    );
  });


  return (
    <Layout title="Quarter Leaders" description="Quarter Leaders of Modern Workplace Squad throughout the journey.">
      <div className={styles.container}>
        <h1 style={{ marginBottom: '2rem' }}>Hall of Famers</h1>
        {hallOfFamer}
        <h1 className={styles.quarter_leader}>Quarter Leaders</h1>
        {listPerson}
      </div>
    </Layout>
  );
}

export default QuarterLeaders;
