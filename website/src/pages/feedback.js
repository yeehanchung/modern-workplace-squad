import Layout from '@theme/Layout';
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function Feedback() {
  return (
    <Layout
      title="Feedback Form"
      description="Feedback form for reinvention and experience improvement"
    >
      <iframe
        className={clsx('feedback-form', styles.feedbackForm)}
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=4tZeri9oNkSj0tBxhvLB2iBKZKHFr79KjmxF1C9qLrpUNVNTS1UzVlJaME4wUk43SUpOOUsxTDZaVy4u&embed=true"
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        msallowfullscreen
      />
    </Layout>
  );
}

export default Feedback;
