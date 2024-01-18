import React, { useState } from 'react';
import SocialMediaPrompts from './SocialMediaPrompts';
import BlogPrompts from './BlogPrompts';
import './App.css';
import logoImage from './Landscape_We-Are-Aerial-Full-Color.png';

const OPTIONS = {
  NONE: 'NONE',
  SOCIAL_MEDIA: 'SOCIAL_MEDIA',
  BLOG_POSTS: 'BLOG_POSTS',
};

function App() {
  const [activeOption, setActiveOption] = useState(OPTIONS.NONE);

  const handleOptionClick = (newOption) => {
    setActiveOption(activeOption !== newOption ? newOption : OPTIONS.NONE);
  };

  return (
    <div className="App">
      <div className="button-container">
        <img src={logoImage} alt="We Are Aerial" style={{ width: '300px', height: 'auto' }} />
        <br />
        <button className="main-buttons" onClick={() => handleOptionClick(OPTIONS.SOCIAL_MEDIA)}>
          <b>Social Media Content</b>
        </button>
        <button className="main-buttons" onClick={() => handleOptionClick(OPTIONS.BLOG_POSTS)}>
          <b>Blog Posts</b>
        </button>
      </div>
      {activeOption === OPTIONS.NONE && <h2>Select an Option</h2>}
      {activeOption === OPTIONS.SOCIAL_MEDIA && <SocialMediaPrompts />}
      {activeOption === OPTIONS.BLOG_POSTS && <BlogPrompts />}
    </div>
  );
}

export default App;


