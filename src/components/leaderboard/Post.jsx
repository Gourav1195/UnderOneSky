import React from "react";
import "./Post.css"; // Include styling for the leaderboard

const Post = ({ rank, username, score, profilePic }) => {
  return (
    <div className="leaderboard-post">
      <div className="leaderboard-rank">
        <span>{rank}</span>
      </div>
      <div className="leaderboard-profile">
        <img
          src={profilePic || "https://via.placeholder.com/50"}
          alt="Profile"
          className="profile-pic"
        />
        <span className="username">{username}</span>
      </div>
      <div className="leaderboard-score">
        <span>{score} pts</span>
      </div>
    </div>
  );
};

export default Post;
