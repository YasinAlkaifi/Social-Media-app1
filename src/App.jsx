
import React, { useState } from 'react';
import './App.css';
import Feed from './components/Feed';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addPost = (e) => {
    e.preventDefault(); 
    if (!title || !content) return;

    setPosts([{ title, content }, ...posts]); 
    setTitle('');
    setContent(''); 
  };

  return (
    <div>
      <h1>Fakebook!</h1>
      <form onSubmit={addPost}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content"
          required
        />
        <button type="submit">Create Post</button>
      </form>
      <Feed posts={posts} />
    </div>
  );
}

export default App;
