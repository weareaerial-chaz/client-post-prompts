import React, { useState } from 'react';
import './App.css';

const clients = [
  {
    name: 'Octane Performance Training',
    info: 'Create a social post for Octane Performance Training around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.'
    },
  {
    name: '11s Gentlemens Club',
    info: 'Create a social post for 11s Gentlemens Club around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.  always include this bitly link to the homepage: bit.ly/40y2dFj'
  },
  {
    name: 'Rippe Dental Associates',
    info: 'Create a social post for Rippe Dental Associates around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.'
  },
  {
    name: 'J. Ruff Co. Flooring',
    info: 'Create a social post for J. Ruff Co. Flooring around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.'
  },
{
    name: 'Humpty Dump',
    info: 'Here is some information about the company Humpty Dump Roll Offs & Dumpsters:  Humpty Dump Roll-Offs & Dumpsters is a roll-off dumpster rental company in Denver, CO. They offer a variety of dumpster sizes to fit your needs, from 10 to 30 yards. Their dumpsters are delivered and picked up on time, and they offer competitive prices. They have a team of experienced and knowledgeable staff who can help you choose the right dumpster for your project. Create a social post for Humpty Dump around the SEO keywords "{keyword}" using the following guidelines:\n\nStart with an attention-grabbing headline or statement that highlights a key benefit or feature of your product or service.\n\nFollow up with a concise and engaging introduction that expands on the headline and provides more details about what you\'re offering.\n\nUse descriptive language and vivid imagery to paint a picture of what the experience will be like for your potential customers while keeping the post between 3-5 sentences.\n\nUse emojis as necessary but do not overuse emojis.\n\nHighlight any unique or distinguishing features of your product or service that set it apart from competitors.\n\nUse a call-to-action (CTA) that encourages readers to take action, such as visiting your website or physical location.\n\nInclude relevant hashtags to increase visibility and reach.\n\nKeep the tone conversational and friendly, as if you\'re speaking directly to your audience.\n\nDo not label the different sections of this post as "introduction, CTA, hashtags, etc."\n\nDo not assume anything about the company regarding the products they sell or services they provide unless it is specified in the keywords. Do not mention like get ready, introducing, unleash, introduction, discover, elevate, or looking in the first line of the paragraph.'
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



function SocialMediaPrompts() {
  const [selectedClientIndex, setSelectedClientIndex] = useState(null);
  const [keyword, setKeyword] = useState('');

  const handleClientChange = (event) => {
    const selectedClientIndex = event.target.value !== '' ? parseInt(event.target.value) : null;
    setSelectedClientIndex(selectedClientIndex);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleCopyClick = () => {
    const infoText = clients[selectedClientIndex].info.replace('{keyword}', keyword);
    navigator.clipboard.writeText(infoText);
    alert('Text copied to clipboard!');
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
      {selectedClientIndex !== null && (
        <div className="client-info">
          <h2>{clients[selectedClientIndex].name}</h2>
          <div className="keyword-input">
            <input type="text" value={keyword} onChange={handleKeywordChange} placeholder="Enter keyword prompt" />
           <button onClick={handleCopyClick}>Copy Text</button>
          </div>
          <p>{clients[selectedClientIndex].info.replace('{keyword}', keyword)}</p>
        </div>
      )}
    </div>
  );
}

export default SocialMediaPrompts;
