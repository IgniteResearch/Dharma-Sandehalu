import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Engine from '../theme/Engine'
import Translate, { translate } from '@docusaurus/Translate';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <div className={styles.container}>
      <h1 className={styles.hero__title}><img src={siteConfig.favicon} className={styles.hero__logo} /><Translate>Dharma Sandehalu</Translate></h1>
      <Engine />
      <button className={styles.button} type="button"><Translate>Search</Translate></button>
      <p className={styles.hero__subtitle}><Translate>Dharma Sandehalu offered in</Translate>&nbsp;&nbsp;<a href="/tel/">తెలుగు</a>&nbsp;,&nbsp;<a href="/">English</a></p>
    </div>

  );
}

function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h5>{date.toLocaleTimeString()}</h5>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (<main>
    <Clock />
    <HomepageHeader />
    <HomepageFeatures />
  </main>
  );
}
