import { useEffect, useState, Fragment } from "react";
import Loader from "../components/Loader";
import FaqWaitlist from "../components/FaqWaitlist";
import section2 from "../assets/section2.jpg";
import roadsideIcon from "../assets/vector1.png";
import towingIcon from '../assets/vector2.png';
import keyIcon from '../assets/vector3.png';
import batteryTop from '../assets/vector4a.png';
import batteryBottom from '../assets/vector4b.png';
import healthIcon from '../assets/vector5.png';
import tireIcon from '../assets/vector6.png';
import fuelIcon from '../assets/vector7.png';
import carIcon from '../assets/section4car.png';
import phoneIcon from '../assets/section4tag.png';
import personIcon from '../assets/section4man.png';
import towIcon from '../assets/section4truck.png';
import arrow1 from '../assets/section4line1.png';
import arrow2 from '../assets/section4line2.png';
import arrow3 from '../assets/section4line3.png';
import mapImage from '../assets/section4map.jpg';

const steps = [
  { icon: carIcon, text: 'Your car breaks down and you can’t get it moving' },
  { icon: phoneIcon, text: 'You request a rescue using the ResQX app' },
  { icon: personIcon, text: 'A first responder is sent to your location to help' },
  { icon: towIcon, text: 'If car can’t be fixed there, they’ll tow it to the nearest mechanic shop or your location of choice' },
];

const arrows = [arrow1, arrow2, arrow3];

const services = [
  {
    title: 'Roadside Assistance',
    color: 'peach',
    icons: [roadsideIcon],
    text: 'We are a reliable breakdown coverage service available 24/7, offering fast, affordable and friendly assistance. Your trusted partner for roadside support and peace of mind.',
  },
  {
    title: 'Towing',
    color: 'mint',
    icons: [towingIcon],
    text: 'We provide well-equipped towing service available to help with towing a car 24/7. We provide a fast, affordable, friendly, and reliable car towing service..',
  },
  {
    title: 'Swift Key Replacement',
    color: 'slate',
    icons: [keyIcon],
    text: 'We provide swift and friendly key replacement, 24/7, ensuring your security and peace of mind. Your trusted partner for comprehensive breakdown cover.',
  },
  {
    title: 'Jump Start',
    color: 'blue',
    layered: { base: batteryBottom, overlay: batteryTop },
    text: 'We extend prompt and friendly jump-starts, a vital element of our 24/7 breakdown coverage. Count on us for swift assistance.',
  },
  {
    title: 'Health Check',
    color: 'purple',
    icons: [healthIcon],
    text: 'We offer routine vehicle health checks, your reliable partner for comprehensive breakdown coverage ensuring worry-free journeys.',
  },
  {
    title: 'Flat Tire Assistance',
    color: 'yellow',
    icons: [tireIcon],
    text: 'Efficient flat tire assistance, seamlessly integrated into our comprehensive breakdown coverage and roadside assistance services for you.',
  },
  {
    title: 'Fuel Delivery',
    color: 'pink',
    icons: [fuelIcon],
    text: 'Timely fuel delivery, a vital aspect of our comprehensive breakdown coverage, providing dependable roadside assistance.',
  },
];

const testimonials = [
  {
    name: 'Emeka O',
    place: 'Lekki, Lagos',
    text: '"ResQX is a game-changer! I signed up for their breakdown cover, and when my car had issues in Lekki, their technician was there within minutes. Efficient, reliable, and a true lifesaver for Lagosians!"',
  },
  {
    name: 'Amaka C',
    place: 'Ikeja, Lagos',
    text: '"ResQX is a game-changer! I signed up for their breakdown cover, and when my car had issues in Lekki, their technician was there within minutes. Efficient, reliable, and a true lifesaver for Lagosians!"',
  },
  {
    name: 'Mayowa O',
    place: 'Yaba, Lagos',
    text: '"ResQX is a game-changer! I signed up for their breakdown cover, and when my car had issues in Lekki, their technician was there within minutes. Efficient, reliable, and a true lifesaver for Lagosians!"',
  },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Testimonials carousel
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(null);

  const total = testimonials.length;
  const goNext = () => setIndex((index + 1) % total);
  const goPrev = () => setIndex((index - 1 + total) % total);

  const visible = [
    (index - 1 + total) % total,
    index,
    (index + 1) % total,
  ];

  const handleTouchEnd = (e) => {
    if (startX === null) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 50) goNext();
    if (diff < -50) goPrev();
    setStartX(null);
  };

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
        progressStage={2}
        message="Connecting to dispatch units..."
      />
    );
  }

  return (
    <>
      {/* SECTION 1 */}
      <section className="section__one">
        <div className="section1_content">
          <h1>
            We Provide the Highest Quality <br />
            <span style={{ color: '#f97316' }}> Breakdown Coverage</span>
          </h1>
          <p>
            The leading breakdown coverage provider for as little as ₦5000. We provide fast, <br />
            courteous and inexpensive breakdown coverage products in Lagos.
          </p>
          <br />
          <a href="#request" className="btn">Join Waitlist</a>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="section__two">
        <div className="offer-container">
          <div className="offer-image-wrapper">
            <img src={section2} alt="Breakdown service" className="offer-img" />
          </div>

          <div className="offer-content">
            <h2 className="offer-heading">
              What <span className="highlight">We Offer</span>
            </h2>

            <p className="offer-description">
              We provide fast, courteous, and inexpensive breakdown coverage in Lagos. We are fully insured and have been in business since 2023. We are ready to respond to all your vehicle emergency needs 24 hours a day, seven days a week.
            </p>

            <ul className="offer-features">
              <li>Dedicated fleet of patrols</li>
              <li>Quick response time under 30 mins</li>
              <li>Our first responders fix your vehicle on the spot</li>
              <li>Free car health check</li>
              <li>Discount on tyres off selected retailers</li>
              <li>Free legal advice</li>
            </ul>

            <div className="offer-action">
              <a href="#request" className="offer-btn">Join Waitlist</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="services">
        <h2 className="services-title">
          Our <span>Services</span>
        </h2>
        <p className="services-subtitle">
          We provide your vehicle breakdown coverage safely and efficiently
        </p>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className={`service-card ${s.color}`}>
              <div className="service-icons">
                {s.layered ? (
                  <div className="icon-layered">
                    <img src={s.layered.base} alt="" className="icon-base" />
                    <img src={s.layered.overlay} alt="" className="icon-overlay" />
                  </div>
                ) : (
                  s.icons.map((icon, i) => <img key={i} src={icon} alt="" />)
                )}
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="how">
        <h2 className="how-title">
          How it <span>Works</span>
        </h2>
        <p className="how-subtitle">The ResQX process works in four easy steps</p>

        <div className="how-steps">
          {steps.map((step, i) => (
            <Fragment key={i}>
              <div className={`how-step step-${i + 1}`}>
                <img src={step.icon} alt="" className="how-icon" />
                <p>{step.text}</p>
              </div>

              {arrows[i] && (
                <img src={arrows[i]} alt="" className={`how-arrow arrow-${i + 1}`} />
              )}
            </Fragment>
          ))}
        </div>

        <div className="how-text">
          <p>
            A first responder is a mobile technician, from the fleet of technicians signed up to the platform. This way ResQX’s average response time is under 15 minutes. This is why we remain the leading breakdown coverage platform in Lagos, Nigeria.
          </p>
          <p>
            Explore our rapid assistance demo! Witness our commitment to reaching you in under 15 minutes. Track our first responders with the live map as they come to your aid. Your safety matters – see how ResQX keeps you informed during breakdowns. Take a quick tour now!
          </p>
        </div>

        <img src={mapImage} alt="Live map of Lagos" className="how-map" />
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="testimonials">
        <h2 className="testimonials-title">
          What Our <span>Members are Saying</span>
        </h2>

        <div className="testimonials-slider">
          <button className="t-arrow" onClick={goPrev} aria-label="Previous">‹</button>

          <div
            className="testimonials-cards"
            onTouchStart={(e) => setStartX(e.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
          >
            {visible.map((i, pos) => (
              <div
                key={`${index}-${pos}`}
                className={`t-card ${pos === 1 ? 'active' : 'side'}`}
              >
                <p>{testimonials[i].text}</p>
                <div className="t-author">
                  <strong>{testimonials[i].name}</strong>
                  <span>{testimonials[i].place}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="t-arrow" onClick={goNext} aria-label="Next">›</button>
        </div>
      </section>

      {/* SECTION 6: FAQ + WAITLIST */}
      <FaqWaitlist />
    </>
  );
};

export default Home;