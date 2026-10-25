import { useState } from 'react';

const faqAnswer = `The cheapest level of breakdown cover starts from ₦5000 a month. This is our Basic cover for 1 vehicle. Exactly how much your breakdown cover costs depends on:
– The level of cover you choose : Basic, Extra or Premium
– The type of cover you choose : personal cover usually costs more than vehicle cover
- How many vehicles or people you cover : the more you add, the more it will cost
- Whether you need add-ons : like Onward Travel, Key Replace, Battery Replace or Tyre Replace`;

const faqs = [
  'What is car breakdown cover?',
  'What types of car breakdown cover are there?',
  'How much is breakdown cover?',
  'How can I get a breakdown cover quote?',
  'Does my breakdown cover include tyres?',
  'Is roadside assistance the same as breakdown cover?',
  'Can you transfer breakdown cover?',
  'Can you get breakdown cover for an older car?',
  'Is breakdown cover worth it?',
  'Does breakdown cover include repairs?',
  'Do you pay excess on breakdown cover?',
];

export default function FaqWaitlist() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: '', email: '' });
  const [joined, setJoined] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    // Send form.name and form.email to your backend here
    setJoined(true);
    setForm({ name: '', email: '' });
  };

  return (
    <section className="faq" id="faq">
      <h2 className="faq-title">
        Answers to <span>Your Questions</span>
      </h2>

      <div className="faq-list">
        {faqs.map((question, i) => (
          <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
            <button
              className="faq-question"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              aria-expanded={openFaq === i}
            >
              <span>{question}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div className="faq-answer">
              <div>
                <p>{faqAnswer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="waitlist" id="request">
        <h2>
          Your Peace of Mind, <span>Our Priority</span>
        </h2>
        <p>Join our waitlist and be one of the first to know when we launch</p>

        {joined ? (
          <p className="waitlist-thanks">Thanks! You’re on the list.</p>
        ) : (
          <form className="waitlist-form" onSubmit={handleJoin}>
            <input
              type="text"
              placeholder="First Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <button type="submit" className="btn">Join Waitlist</button>
          </form>
        )}
      </div>
    </section>
  );
}