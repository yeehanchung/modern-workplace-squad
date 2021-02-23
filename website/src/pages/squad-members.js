import Layout from "@theme/Layout";
import React, { useState } from "react";
import { squadMembers } from "../../contents/data/squad-member";
import styles from "./squad.module.css";

function SquadMembers() {
  
  const [data, setData] = useState({ squadMembers });
  const listPerson = data.squadMembers.map((data, idx) => {
    const { name, linkedin, image } = data;

    return (
      <div className={styles.main} key={idx}>
        <div className={styles.person}>
          <div className={styles.name}>{name}</div>
          <img src={image} alt={name} className={styles.img} />
          <br />
          <a href={linkedin}>LinkedIn</a>
        </div>
      </div>
    );
  });

  return (
    <Layout title="Modern Workplace Squad" description="All members of Modern Workplace Squad.">
      <div className={styles.container}>
        <h1>Listed in A-Z</h1>
        <br />
        {listPerson}
      </div>
    </Layout>
  );
}

export default SquadMembers;
