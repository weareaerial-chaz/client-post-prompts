import React, { useState } from 'react';
import './App.css';

// Clients array
const clients = [
  {
    name: 'Octane Performance Training',
    info: 'Create a social post for Octane Performance Training around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.'
    },
  {
    name: 'Dimes Cabaret',
    info: 'Create a social post for Dimes Cabaret around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.  always include this bitly link to the homepage: bit.ly/dimescabaret'
  },
  {
    name: 'Rippe Dental Associates',
    info: 'Create a social post for Rippe Dental Associates around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.'
  },
{
    name: 'Skylars Home & Patio',
    info: 'Create a social post for Skylars Home & Patio around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.'
  },
{
    name: 'Tour Quality Golf',
    info: 'Create a social post for Tour Quality Golf around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.\n\nDo not use the term tailor-made in the post'
  },
{
    name: 'JC Porter',
    info: 'Create a social post for JC Porter around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.'
  },
{
    name: 'JDs Clubs',
    info: 'Create a social post for JDs Clubs around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.\n\nDo not use the term tailor-made in the post'
  },
{
    name: 'Forklift Select',
    info: 'Here is some information about the company Forklift Select:  Forklift Select has a large inventory of new and used forklifts from all the major brands. They have a wide variety of models to choose from, including reach trucks, order pickers, pallet jacks, and counterbalance trucks... Create a social post for Forklift Select around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.'
  },
  {
    name: 'Patriot Forklifts',
    info: 'Here is some information about the company Patriot Forklifts: PatriotForklifts.com sells a variety of forklifts, attachments, and parts. Their forklifts are ideal for a variety of tasks, including picking and placing materials, moving pallets, and lifting heavy loads. Their attachments can be used to improve productivity and efficiency. They have a large inventory of products and offer competitive prices. They have a team of experienced and knowledgeable staff who can help you find the right product for your needs.Create a social post for Patriot Forklifts around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.'
  },
  {
    name: 'We Are Aerial',
    info: 'Create a social post for We Are Aerial, a marketing agency, around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.'
  }
  // Add more clients as needed
];

function SocialMediaPostPreview({ clientInfo, keyword }) {
  if (!clientInfo) return null;
  const formattedInfo = clientInfo.info.replace('{keyword}', keyword);
  return (
    <div className="social-media-preview">
      <h2>{clientInfo.name}</h2>
      <p>{formattedInfo}</p>
    </div>
  );
}

function SocialMediaPrompts() {
  const [selectedClient, setSelectedClient] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const handleClientChange = (event) => {
    const clientIndex = event.target.value;
    setSelectedClient(clientIndex !== '' ? clients[clientIndex] : null);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
    if (error) setError('');
    if (copySuccess) setCopySuccess('');
  };

  const handleCopyClick = () => {
    if (!keyword) {
      setError('Please enter a keyword.');
      return;
    }
    const infoText = selectedClient.info.replace('{keyword}', keyword);
    navigator.clipboard.writeText(infoText)
      .then(() => setCopySuccess('Text copied to clipboard!'))
      .catch(() => setError('Failed to copy text.'));
  };

  return (
    <div className="App">
      <h2>AI Social Media Content Prompts</h2>
      <div className="dropdown-container">
        <select className="dropdown" onChange={handleClientChange}>
          <option value="">Select a client</option>
          {clients.map((client, index) => (
            <option key={index} value={index}>
              {client.name}
            </option>
          ))}
        </select>
      </div>
      <div className="client-info">
        <div className="keyword-input">
          <input type="text" value={keyword} onChange={handleKeywordChange} placeholder="Enter keyword prompt" />
          <button onClick={handleCopyClick}>Copy Text</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {copySuccess && <p className="copy-success">{copySuccess}</p>}
        <SocialMediaPostPreview clientInfo={selectedClient} keyword={keyword} />
      </div>
    </div>
  );
}

export default SocialMediaPrompts;
