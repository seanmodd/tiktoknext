import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FollowersColumn from '../components/FollowersColumn';
import Card from '../components/Card';
import MiniCard from '../components/MiniCard';
import styles from '../components/app.module.css';

const Home = () => {
  const [users, setUsers] = useState(null);
  const [userToToggle, setUserToToggle] = useState(null);
  let descendingUsers;
  let topFiveNotFollowing;
  let topFiveFollowing;

  // auto populating with dummy data
  const addData = async () => {
    await axios.post('/.netlify/functions/addData');
  };

  // fetch all the tik-tok posts to your feed
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/posts');
    console.log(results.data);
    setUsers(results.data);
  };

  // toggle user from followed to unfollowed
  if (userToToggle) {
    const newValue = !userToToggle.is_followed;
    const data = { is_followed: newValue };

    axios
      .put('/.netlify/functions/edit', { userId: userToToggle.id, data })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(`error:${err}`))
      .then(() => fetchData());
    setUserToToggle(null);
  }

  useEffect(() => {
    addData();
    fetchData();
  }, []);

  if (users) {
    descendingUsers = users.sort((a, b) => (a.id < b.id ? 1 : -1));
    const following = users.filter((user) => user.is_followed === true);
    const descendingFollowing = following.sort((a, b) =>
      a.likes < b.likes ? 1 : -1
    );
    topFiveFollowing = descendingFollowing.slice(0, 5);

    const notFollowing = users.filter((user) => user.is_followed === false);
    const descendingNotFollowing = notFollowing.sort((a, b) =>
      a.likes < b.likes ? 1 : -1
    );
    topFiveNotFollowing = descendingNotFollowing.slice(0, 5);
  }

  return (
    <>
      {descendingUsers && (
        <div className={styles.container}>
          <FollowersColumn users={topFiveFollowing} />
          <div className={styles.feed}>
            {descendingUsers.map((descendingUser, index) => (
              <Card
                key={index}
                user={descendingUser}
                toggleFollow={(userToToggle) => setUserToToggle(userToToggle)}
              />
            ))}
          </div>
          <div className={styles.suggestedbox}>
            <div className={styles.section}>
              <div className={styles.suggested}>
                <h2 className={styles.bold}>Suggested accounts</h2>
                <div className={styles.break} />
                {topFiveNotFollowing.map((notFollowingUser, index) => (
                  <MiniCard
                    key={index}
                    user={notFollowingUser}
                    toggleFollow={(userToToggle) =>
                      setUserToToggle(userToToggle)
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
