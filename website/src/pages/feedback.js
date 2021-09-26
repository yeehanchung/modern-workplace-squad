import Layout from '@theme/Layout';
import React from 'react';

function Feedback() {
  return (
    <Layout>
      <div>
        <iframe
          style={{
            minWidth: '100%',
            height: '100vh',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            justifyContent: 'center',
          }}
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=4tZeri9oNkSj0tBxhvLB2iBKZKHFr79KjmxF1C9qLrpUNVNTS1UzVlJaME4wUk43SUpOOUsxTDZaVy4u&embed=true"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          msallowfullscreen
        />
      </div>
    </Layout>
  );
}

export default Feedback;
