import React, { useState, useEffect } from "react";
import styles from './Feed.module.css';  // Import CSS module

const Feed = ({ token }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the API (example)
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://api.example.com/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [token]);

  return (
    <div className={styles.feedContainer}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <h3 className={styles.postTitle}>{post.title}</h3>
          <p className={styles.postContent}>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
