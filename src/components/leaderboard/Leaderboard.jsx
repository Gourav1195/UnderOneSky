import React from "react";
import Post from "./Post.jsx";

const App = () => {
  const posts = [
    {
      username: "John Doe",
      profilePic: "https://i.pravatar.cc/50?u=Charlie",
      postImage: "https://via.placeholder.com/300",
      description: "Exploring the mountains!",
      likes: 120,
      comments: 45,
    },
    {
      username: "Jane Smith",
      profilePic: "https://i.pravatar.cc/50?u=Bob",
      postImage: "https://i.pravatar.cc/50?u=Alice",
      description: "Lovely day at the beach 🌊",
      likes: 90,
      comments: 30,
    },
  ];

  return (
    <div>
      {posts.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          profilePic={post.profilePic}
          postImage={post.postImage}
          description={post.description}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default App;
