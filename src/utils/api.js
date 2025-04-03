// src/utils/api.js
import axios from "axios";

const API_URL = "http://localhost:3001"; // Backend URL

// Example of login function
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, {
      username,
      password
    });
    return response.data; // Contains token and user data
  } catch (error) {
    console.error("Login error", error.response?.data || error.message);
    throw error;
  }
};

// Example of fetch feed posts
export const fetchFeed = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/feed`);
    return response.data; // Returns the posts
  } catch (error) {
    console.error("Error fetching feed", error.response?.data || error.message);
    throw error;
  }
};

// Example of creating a post
export const createPost = async (content, isMeme, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/post`,
      { content, isMeme },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Send the JWT token for authentication
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating post", error.response?.data || error.message);
    throw error;
  }
};
