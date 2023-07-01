import React, { useState } from 'react';
import SocialMediaPrompts from './SocialMediaPrompts';
import BlogPrompts from './BlogPrompts';
import './App.css';
import logoImage from './Landscape_We-Are-Aerial-Full-Color.png';


function App() {
  const [showSocialMedia, setShowSocialMedia] = useState(false);
  const [showBlog, setShowBlog] = useState(false);

  const handleSocialMediaClick = () => {
    setShowSocialMedia(!showSocialMedia);
    setShowBlog(false);
  };

  const handleBlogClick = () => {
    setShowBlog(!showBlog);
    setShowSocialMedia(false);
  };

  return (
    <div className="App">
      <div className="button-container">
        <img src={logoImage} alt="We Are Aerial" style={{ width: '300px', height: 'auto' }} />
        <br />
        <button className="main-buttons" onClick={handleSocialMediaClick}>
          <b>Social Media Content</b>
        </button>
        <button className="main-buttons" onClick={handleBlogClick}>
          <b>Blog Posts</b>
        </button>
      </div>
      {!showSocialMedia && !showBlog && <h2>Select an Option</h2>}
      {showSocialMedia && <SocialMediaPrompts />}
      {showBlog && <BlogPrompts />}
      
    </div>
  );
}

export default App;

