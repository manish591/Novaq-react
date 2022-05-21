import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Navbar } from 'components';
import { db } from 'firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Dashboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const usersDataRef = collection(db, 'users');

  useEffect(() => {
    (async () => {
      try {
        const res = await getDocs(usersDataRef);
        const users = res.docs.map((item) => ({ ...item.data() }));
        const sortedUsers = [...users].sort((a, b) => b.score - a.score);
        setLeaderboardData(sortedUsers);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <>
      <header className="header grid">
        <Navbar />
      </header>
      <div className="dashboard">
        <div className="dashboard__wrapper">
          <section>
            <h1 className="dashboard__title">Leaderboard</h1>
          </section>
          <section className="leaderboard">
            {leaderboardData.map((item) => {
              return (
                <div key={item.userID} className="leaderboard__item">
                  <h3>User: {item.email}</h3>
                  <h3>Score: {item.score}</h3>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export { Dashboard };
