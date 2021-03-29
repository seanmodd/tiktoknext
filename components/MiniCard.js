/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './app.module.css';

const MiniCard = ({ user, toggleFollow }) => (
  <div className={styles.section minicard}>
    <div className={styles.section}>
      <img className={styles.user-profile} src={user.avatar} width="100%" />
      <div>
        <h3 className={styles.bold}>{user.username}</h3>
        <p>{user.name}</p>
      </div>
    </div>
    {user.button_visible && (
      <div
        className={user.is_followed ? {styles.followed-button} : {styles.follow-button}}
        onClick={() => toggleFollow(user)}
      >
        {user.is_followed ? 'Following' : 'Follow'}
      </div>
    )}
  </div>
);

export default MiniCard;
