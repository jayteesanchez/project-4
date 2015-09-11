import React from 'react';

import styles from 'scss/components/_about';

export default class About extends React.Component {
  render() {
    return (
      <div className={styles.about}>
        <h1 className={styles.about__header}>About Choices</h1>
        <p className={styles.about__description}>For people that need a little extra help to make decision</p>
      </div>
    );
  }
}
