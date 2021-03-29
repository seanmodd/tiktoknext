/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './app.module.css';

const MicroCard = ({ user }) => (
  <div className={(styles.section, microcard)}>
    <img className={styles.userprofile} src={user.avatar} width="100%" />
    <div>
      <h3 className={styles.bold}>{user.username}</h3>
      <p>{user.name}</p>
    </div>
  </div>
);

export default MicroCard;
