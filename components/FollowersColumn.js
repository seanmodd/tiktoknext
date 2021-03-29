import React from 'react';
import MicroCard from './MicroCard';
import styles from './app.module.css';

const FollowersColumn = (topFiveFollowing) => {
  const { users } = topFiveFollowing;

  return (
    <div className={styles.followerscolumn}>
      <div className={styles.followerssection}>
        <div className={styles.home} />
        <h2 className={(styles.bold, styles.red)}>For You</h2>
      </div>
      <div className={styles.followerssection}>
        <div className={styles.following} />
        <h2>Following</h2>
      </div>
      <hr />
      <p>Your top accounts</p>
      {users &&
        users.map((user, index) => <MicroCard key={index} user={user} />)}
      <hr />
    </div>
  );
};

export default FollowersColumn;
