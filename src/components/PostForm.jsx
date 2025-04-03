// src/components/PostForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [content, setContent] = useState('');
  const [isMeme, setIsMeme] = useState(false);
  const [userId, setUserId] = useState('60b6f9f8b3c7b017cc0f35b2'); // Example user ID

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/post', {
        userId,
        content,
        isMeme,
      });
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="post-form">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post here..."
        ></textarea>
        <div>
          <label>
            Is Meme:
            <input
              type="checkbox"
              checked={isMeme}
              onChange={() => setIsMeme(!isMeme)}
            />
          </label>
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
