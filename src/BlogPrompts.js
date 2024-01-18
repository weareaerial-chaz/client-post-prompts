import React, { useState, useMemo } from 'react';
import './App.css';

const clients = [
  {
    name: 'Octane Performance Training',
    info: 'Now write me a SEO keyword focused blog around "{keyword}" for a business named Octane Performance Training using the instructed format.'
  },
  {
    name: 'Dimes Cabaret',
    info: 'Now write me a SEO keyword focused blog around "{keyword}" for a business named Dimes Cabaret using the instructed format.'
  },
  {
    name: 'Rippe Dental Associates',
    info: 'Now write me a SEO keyword focused blog around "{keyword}" for a business named Rippe Dental Associates using the instructed format.'
  },
  {
    name: 'Skylars Home & Patio',
    info: 'Now write me a SEO keyword focused blog around "{keyword}" for a business named Skylars Home & Patio using the instructed format.'
  },
  {
    name: 'Tour Quality Golf',
    info: 'Now write me a SEO keyword focused blog around "{keyword}" for a business named Tour Quality Golf using the instructed format.'
  },
  {
    name: 'JC Porter',
    info: 'Now write me a SEO keyword focused blog around "{keyword}" for a business named JC Porter using the instructed format.'
  },
  {
    name: 'JDs Clubs',
    info: 'Now write me a SEO keyword focused blog around "{keyword}" for a business named JDs Clubs using the instructed format.'
  },
  {
    name: 'Forklift Select',
    info: 'Now write me a SEO keyword focused blog around "{keyword}" for a business named Forklift Select using the instructed format.'
  },
  {
    name: 'Patriot Forklifts',
    info: 'Now write me a SEO keyword focused blog around "{keyword}" for a business named Patriot Forklifts using the instructed format.'
  },
  {
    name: 'We Are Aerial',
    info: 'Now write me a SEO keyword focused blog around "{keyword}" for a business named We Are Aerial using the instructed format.'
  }
];

const CommandTextarea = ({ value }) => (
  <textarea readOnly rows={10} cols={40} value={value} />
);

const ClientSelector = ({ clients, onClientChange }) => (
  <div className="dropdown-container">
    <select className="dropdown" onChange={onClientChange}>
      <option value="">Select a client</option>
      {clients.map((client, index) => (
        <option key={index} value={index}>
          {client.name}
        </option>
      ))}
    </select>
  </div>
);

const ClientInfo = ({ client, keyword, onKeywordChange, onCopyClick }) => (
  <div className="client-info">
    <h2>{client.name}</h2>
    <div className="keyword-input">
      <input type="text" value={keyword} onChange={onKeywordChange} placeholder="Enter keyword prompt" />
      <button onClick={onCopyClick}>Copy Text</button>
    </div>
    <p>{client.info.replace('{keyword}', keyword)}</p>
  </div>
);

function BlogPrompts() {
  const [selectedClientIndex, setSelectedClientIndex] = useState(null);
  const [keyword, setKeyword] = useState('');

  const handleClientChange = (event) => {
    setSelectedClientIndex(event.target.value !== '' ? parseInt(event.target.value) : null);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const infoText = useMemo(
    () => selectedClientIndex !== null ? clients[selectedClientIndex].info.replace('{keyword}', keyword) : '',
    [clients, selectedClientIndex, keyword]
  );

  const handleCopyClick = () => {
    navigator.clipboard.writeText(infoText);
    alert('Text copied to clipboard!');
  };

  const command1Text = `ChatGPT, I need you to write a keyword-focused blog post following these guidelines:
  
Write from the perspective of an expert, but make it readable for Google's algorithm.
The blog post should answer: who, what, when, where, why, and how.
The blog post must be between 600-800 words.
The blog title should include the keyword and should be a variant of a question and/or answer.
The blog layout should be as follows:
Blog Title
Paragraph #1
Title of Paragraph #2
Paragraph #2
Title of Paragraph #3 (should reflect value propositions of the keywords)
Paragraph #3 (2-3 sentence snapshot of 3 value propositions of the keywords in bullet points)
Title of Closing Paragraph #4
Closing Paragraph #4
Call to Action Closing Sentence (1-2 sentences, include keyword, name of business, and phone number)
Do not use generic titles like 'Value Propositions', 'Paragraph Title', 'Introduction', 'Conclusion', 'Closing Paragraph', etc. Titles should be unique and related to the company or topic.  Do not mention these words in any sentence or title.
When listing a phone number in the post, insert the text '[INSERT PHONE NUMBER HERE]' where the phone number should go. When listing a URL in the post, insert the text '[INSERT URL HERE]' where the URL should go.
Do not link to outside websites.
Do not assume any information about the products or services that are provided unless specified in the given keywords.
Follow all these instructions precisely.
Please acknowledge if you understand these instructions.`;

  return (
    <div className="App">
      <section><h2>AI Blog Post Prompts</h2></section>
      <section>
        <p>To interact with ChatGPT and obtain the desired response, follow these simplified instructions:<br></br><br></br>
          <li>Enter Command 1 into ChatGPT.</li>
          <li>Wait for ChatGPT's response.</li>
          <li>Enter Command 2.</li>
          <li>Wait for ChatGPT's response.</li>
          <li>Copy the content provided by ChatGPT.</li>
        </p>
      </section>
      <section>
        <h3>Command 1:</h3>
        <CommandTextarea value={command1Text} />
      </section>
      <h3>Command 2:</h3>
      <ClientSelector clients={clients} onClientChange={handleClientChange} />
      {selectedClientIndex !== null && (
        <ClientInfo
          client={clients[selectedClientIndex]}
          keyword={keyword}
          onKeywordChange={handleKeywordChange}
          onCopyClick={handleCopyClick}
        />
      )}
    </div>
  );
}

export default BlogPrompts;
