import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Past Activities, Blog and FAQ",
    imageUrl: "../../static/img/undraw_online_Organizer.svg",
    description: <>We keep track and organize our past Bootcamp, events, Frequently Asked Questions, and more exciting things on the go.</>,
  },
  {
    title: "Cultivate Ideas and Positivity",
    imageUrl: "../../static/img/undraw_positive_attitude.svg",
    description: (
      <>
        Have something in mind and would like to share with us? email us and we&apos;ll be in contact with you soon.
      </>
    ),
  },
  {
    title: "Online Learning",
    imageUrl: "../../static/img/undraw_Online_learning.svg",
    description: <>Equip yourself with essential Microsoft Office 365 knowledge to be more efficient and productive on tasks.</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
          <h1 className="hero__title">Educators of{" "}
            <span className="hero__title__1p">Mic</span >
            <span className="hero__title__2p">ro</span>
            <span className="hero__title__3p">so</span>
            <span className="hero__title__4p">ft</span> 
            {" "}Office 365
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={clsx("button button--outline button--secondary button--lg", styles.getStarted)} to={useBaseUrl("docs/")}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
