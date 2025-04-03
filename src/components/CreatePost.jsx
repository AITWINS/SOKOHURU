import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  // Add the token directly here
  const token = "standard_4c2a09b3fdb43f2cbc8f519ce82088893bd55cfdfa699ddee1150819c452a6c714348005528afadc3554204e1f359ad79055791177686c4f9d9893337fa3df96b7d94411c2f5311bdf78dde6e196eb7fe5b886e37966245be9b21a2a18138b6de29204dd7dd706bae3972f68ba75235ecf6130d9dd4f866d62a7e8a004279a8b";

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError("Both title and content are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost/v1/databases/67ea94e0003b9013417e/collections/67ea950b000e6f2454b9/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      const data = await response.json();

      // Log response for debugging
      console.log("Response Data: ", data);

      if (response.ok) {
        alert("Post created successfully!");
        setTitle(""); // Clear the input after success
        setContent(""); // Clear the input after success
      } else {
        setError(data.message || "Failed to create post.");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      setError("Failed to create post. Please try again.");
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handlePostSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CreatePost;
