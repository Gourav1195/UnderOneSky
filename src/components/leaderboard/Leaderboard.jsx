import React from "react";
import Post from "./Post";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, username: "Alice", score: 1200, profilePic: "https://i.pravatar.cc/50?u=Alice" },
    { rank: 2, username: "Bob", score: 1150, profilePic: "https://i.pravatar.cc/50?u=Bob" },
    { rank: 3, username: "Charlie", score: 1100, profilePic: "https://i.pravatar.cc/50?u=Charlie" },
  ];

  return (
    <div>
      <h2>Leaderboard</h2>
      {leaderboardData.map((user) => (
        <Post
          key={user.rank}
          rank={user.rank}
          username={user.username}
          score={user.score}
          profilePic={user.profilePic}
        />
      ))}
    </div>
  );
};

export default Leaderboard;
