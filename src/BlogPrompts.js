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
    name: 'J. Ruff Co. Flooring',
    info: 'Now write me a SEO keyword focused blog around "{keyword}" for a business named J. Ruff Co. Flooring using the instructed format.'
  },
  {
    name: "Humpty Dump",
    info: 'Here is some information we asked Humpty Dump Roll-Offs & Dumpsters and the answers they provided: What are the hours of operation and days that your business is open? All our business listings say 8 am to 5 pm Monday through Sunday, but we do not drop off or pick up dumpsters on Sunday -- only the office is semi-open on Sundays. What is the nature of your business and the specific industry you operate in? We are in the waste management industry and provide residential, commercial and construction roll-off dumpsters to businesses and individuals in the greater Denver area. Here is our service map. Who is your target audience, and what are their demographics and preferences? We do B2B and B2C B2B companies include construction companies, carpenters, flooring companies, insulation companies, hoarder cleanup companies, estate sellers and real estate agents, home renovation companies, fix and flip companies, landscaping companies, HOAs & cities (for community cleanups). We work with big names like Adolfson & Peterson Construction, Kember Interiors Inc., Baker Concrete, the Buy-Out company, City of Parker, 1-800-Dumpster and more! B2C target audience includes people completing self-improvement or home renovations on their homes, spring cleaning projects, and landscaping projects or natural disaster clean up (flooding, trees falling, fires, etc). Also people who are downsizing, moving or selling their homes. What are the unique products or services that your business offers? We offer 10, 15, 20 and 30 yard roll-off dumpsters at some of the cheapest prices in town. Can you describe the process or steps involved in availing your products or services, from initial inquiry to final delivery? Customers can either call, text, request a quote on social media or Yelp, or fill out a quote form on our website to reserve information about our availability and pricing. All pricing on the website is for 7-day rentals (same price for a shorter rental, but right now we are not offering longer, in the winter months we do because not as many people need dumpsters). Once they have pricing and availability information they NEED to fill out the reservation form on our website (reservations are not taken over the phone or through text). Once they submit a reservation, that goes into our scheduling system and they will receive an invoice via email, this needs to be paid before the dumpster is dropped off. The day before their dumpster is dropped off, they will receive a reminder email, if they wish to receive an ETA they can request that information through this email. The day of their rental, our driver should call on his way and then will drop off the dumpster in the place specified on their reservation. The dumpster stays for the amount of days specified on the original reservation, any reservation changes need to be submitted by email or a phone call. All early pick up requests can be submitted online. The dumpster is then picked up and dumped, if the dumpster is overweight the customer will receive an invoice for the overweight amount. What are the accepted payment methods and any relevant pricing information that potential customers should be aware of? Visa, MasterCard, American Express and Discover. NO CHECKS Are there any specific guarantees, warranties, or after-sales support services that you offer to customers? No Can you provide a list of key competitors in your industry? 303 Dumpsters, Roll-Off Remedies, Elite Roll-offs, Premier Roll-offs, 5280 Dumpsters, Waste Management Dumpster Bags, Blue Bear Waste, Sams Hauling, Affordable Dumpsters, Budget Dumpster, Bin There Dump That Are there any specific certifications, awards, or accreditations that your business has achieved, highlighting its credibility and expertise? Home Advisor Top Rated, Home Advisor Screened & Approved, Best of 2021 Home Advisor, Elite Service Home Advisor, 2023 Best of Englewood Award in the Waste Management Service category, 2022 Best of Englewood Award in the Waste Management Service category, and Top 50 Dumpster Blogs by Feedspot Blog Reader. Is there any additional information or specific requirements that would help create relevant content for your business? We only are offering 7-day rentals right now Customers cannot pick specific time for drop off and pick up We work with businesses and can do weekly switch outs of their dumpsters We only have roll-off dumpsters.... Remember this information about this company. If you understand these guidelines about this company, write me an SEO keyword focused blog around the key phrase "{keyword}" for Humpty Dump using the instructed format.'
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
