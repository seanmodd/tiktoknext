/* <eslint-disable>
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './app.module.css';

const Card = ({ user, toggleFollow }) => (
  // const timestamp = user.timestamp
  // const timeStampReformat = timestamp.slice(2, 7)

  <div className={styles.card}>
    <div className={styles.break} />
    <div className={styles.section}>
      <div className={styles.userinfo}>
        <img className={styles.userprofile} src={user.avatar} width="100%" />
        <div>
          <div className={styles.section}>
            <h3 className={styles.bold}>{user.username}</h3>
            <p className={styles.username}>{user.name}</p>
            {/* <p>{timeStampReformat}</p> */}
          </div>
          <p>{user.caption}</p>
        </div>
      </div>
      {user.button_visible && (
        <div
          className={
            user.is_followed ? 'styles.followed-button' : 'styles.follow-button'
          }
          onClick={() => toggleFollow(user)}
        >
          {user.is_followed ? 'Following' : 'Follow'}
        </div>
      )}
    </div>
    <video className={styles.video} controls>
      <source src={user.video} type="video/mp4" />
    </video>
    <div className={(styles.section, styles.socials)}>
      <i className={(styles.far, fa-heart)} />
      <div className={styles.socialtag}>{user.likes}</div>
      <i className={(styles.far, fa-comment-dots)} />
      <div className={styles.socialtag}>{user.comments}</div>
      <i className={(styles.far, fa-share-square)} />
    </div>
  </div>
);
export default Card;

