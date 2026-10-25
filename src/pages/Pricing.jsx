import { useEffect, useState } from "react";
import Loader from "../components/Loader";

// Add-on icons (change names to match your files)
import batteryIcon from '../assets/pricing-battery.png';
import tyreIcon from '../assets/pricing-tyre.png';
import keyIcon from '../assets/pricing-key.png';

const plans = [
  {
    name: 'Basic',
    color: 'blue',
    quarterly: 14500,
    yearly: 58000, // placeholder: replace with your real yearly price
    features: [
      'Roadside assistance 1/4 mile from your home',
      'Free car health check',
      '3 callouts per quarter',
      '24/7 roadside assistance',
      'Free recovery up to 5 miles to your preferred destination',
    ],
  },
  {
    name: 'Extra',
    color: 'peach',
    quarterly: 26500,
    yearly: 106000, // placeholder
    features: [
      'Home service',
      'Free car health check',
      '5 callouts per quarter',
      '24/7 roadside assistance',
      'Free recovery up to 30 miles to your preferred destination',
    ],
  },
  {
    name: 'Premium',
    color: 'pink',
    quarterly: 39500,
    yearly: 158000, // placeholder
    features: [
      'Home service',
      'Free car health check',
      'Unlimited callouts',
      '24/7 roadside assistance',
      'Free road worthiness check at selected ResQX mechanic shops',
      'Onward travel',
    ],
  },
];

const addons = [
  {
    icon: batteryIcon,
    title: 'Battery Replacement',
    text: 'Get a new battery if we can’t recharge yours — saving you ₦50000 on average.',
  },
  {
    icon: tyreIcon,
    title: 'Tyre Replacement',
    text: 'Puncture? No problem — you’re covered for the cost of 5 new tyres a year.',
  },
  {
    icon: keyIcon,
    title: 'Key Replacement',
    text: 'Lost your car keys? We’ll replace them, saving you ₦35000 on average.',
  },
];

const formatNaira = (n) => `₦${n.toLocaleString('en-US')}`;

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const Pricing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [billing, setBilling] = useState('quarterly'); // 'quarterly' | 'yearly'

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Loader
        isLoading={true}
        progressStage={4}
        message="Ready!"
      />
    );
  }

  return (
    <section className="pricing">
      <h1 className="pricing-title">Pricing</h1>
      <p className="pricing-sub">Compare our car breakdown cover options</p>

      <div className="billing-toggle">
        <button
          className={billing === 'quarterly' ? 'active' : ''}
          onClick={() => setBilling('quarterly')}
        >
          Quarterly
        </button>
        <button
          className={billing === 'yearly' ? 'active' : ''}
          onClick={() => setBilling('yearly')}
        >
          Yearly
        </button>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div key={plan.name} className="plan-card">
            <div className={`plan-head ${plan.color}`}>
              <h3>{plan.name}</h3>
              <p className="plan-price">
                {formatNaira(plan[billing])}
                <span>/{billing === 'quarterly' ? 'quarter' : 'year'}</span>
              </p>
            </div>

            <ul className="plan-features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="addons-intro">
        You can also choose to add any of these services along with your breakdown cover
      </p>

      <div className="addons">
        {addons.map((addon) => (
          <div key={addon.title} className="addon">
            <img src={addon.icon} alt="" />
            <h4>{addon.title}</h4>
            <p>{addon.text}</p>
          </div>
        ))}
      </div>

      <p className="pricing-note">
        And we don’t just offer car breakdown cover – our packages are also suitable for electric and hybrid vehicles, motorbikes and more.
      </p>
    </section>
  );
};

export default Pricing;