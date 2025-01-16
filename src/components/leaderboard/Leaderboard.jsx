import React, { useEffect, useState } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);

  // Fetch leaderboard data from the API
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('https://under-one-sky-server.vercel.app/api/leaderboard');
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            {/* <th>Matches</th> */}
            <th>Winrate</th>
            <th>Region</th> 
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player._id} className={`rank-${index + 1}`}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score.toLocaleString()}</td>
              {/* <td>{player.matches.toLocaleString()}</td> */}
              <td>{player.winrate.toFixed(2)}%</td>
              <td>{player.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
