import { useEffect, useState, Fragment } from "react";
import Loader from "../components/Loader";
import FaqWaitlist from "../components/FaqWaitlist";

// Banner: battery (two layers)
import batteryBase from '../assets/about-battery-box.png';    // blue box
import batteryBolt from '../assets/about-battery-bolt.png';   // lightning

// Banner: other icons
import truckIcon from '../assets/about-truck.png';
import fuelIcon from '../assets/about-fuel.png';
import heartIcon from '../assets/about-heart.png';

// Banner: dotted lines
import arc1 from '../assets/about-arc1.png';
import arc2 from '../assets/about-arc2.png';
import arc3 from '../assets/about-arc3.png';

// Story section
import storyBg from '../assets/about-bg.png';       // the faint "Y" / X shape
import storyPhoto from '../assets/about-photo.jpg'; // mechanic photo

// Roadmap section
import roadmapMap from '../assets/about-map.png';       // Nigeria map (background)
import roadmapPhoto from '../assets/about-image.jpg';   // man with the car

const icons = [
  { base: batteryBase, overlay: batteryBolt },  // layered battery
  { src: truckIcon },
  { src: fuelIcon },
  { src: heartIcon },
];

const arcs = [arc1, arc2, arc3];

const story = [
  {
    heading: 'About ResQ-x',
    paragraphs: [
      'ResQ-x is a leading breakdown cover service provider based in Lagos, Nigeria, dedicated to offering reliable, trustworthy, and cost-effective solutions to individuals and vehicle owners. Founded in December 2023 by Nosa Okoroji and Tomachi Ajoku, ResQ-x has been meticulously developed since July 2023 to address the challenges faced by motorists in an industry often characterized by chaos.',
    ],
  },
  {
    heading: 'Our Mission',
    paragraphs: [
      'At ResQ-x, our mission is to provide peace of mind, security, and affordable breakdown cover services to our customers. We strive to empower vehicle owners, promote autonomy, transparency, and a sense of community while prioritizing safety and reliability. By aligning with our audience’s values and aspirations, we aim to address their pain points and foster a sense of congruence and dependability.',
    ],
  },
  {
    heading: 'Our Services',
    paragraphs: [
      'We specialize in providing comprehensive roadside assistance to vehicles and motorists, with a focus on towing and roadside assistance in Lagos. Our expert team is equipped to handle a wide range of breakdown situations, ensuring that you receive prompt and efficient support when you need it most.',
    ],
  },
  {
    heading: 'What Sets Us Apart',
    paragraphs: [
      'ResQ-x is revolutionizing the breakdown cover industry in Nigeria by offering affordable pricing to both individuals and companies. We pride ourselves on our swift response times, with an average of just 15 minutes for every call-out. By leveraging cutting-edge technology and a network of skilled professionals, we ensure that our customers receive top-notch service every time.',
    ],
  },
  {
    heading: 'Our Target Audience',
    paragraphs: [
      'At ResQ-x, we cater to Lagosians with cars and motorists who prioritize safety, value their time, and seek peace of mind. Whether you’re a daily commuter, a weekend adventurer, or a business owner with a fleet of vehicles, ResQ-x is here to provide you with the support and assurance you need on the road.',
    ],
  },
  {
    heading: 'Our Coverage',
    paragraphs: [
      'We are currently focusing on providing our services to the island axis of Lagos, spanning from the 3rd Mainland Bridge to VGC. However, we are actively working on expanding our coverage to other areas of the city in the coming months, ensuring that more motorists can benefit from our reliable breakdown cover services.',
    ],
  },
  {
    heading: 'Our Core Values',
    paragraphs: [
      'At ResQ-x, we are guided by a set of core values that define who we are and how we operate:',
      '1. Reliability: We are committed to being there for our customers whenever they need us, providing dependable and consistent service.',
      '2. Safety: The safety of our customers, staff, and the general public is of utmost importance to us, and we prioritize it in everything we do.',
      '3. Accessibility: We strive to make our services easily accessible to all motorists, regardless of their location or circumstance.',
      '4. Innovation: We embrace innovation and continuously seek ways to improve our services, leveraging the latest technologies and industry best practices.',
      '5. Community: We foster a sense of community among our customers, staff, and partners, working together to create a safer and more supportive environment for all.',
    ],
  },
  {
    heading: 'Join the ResQ-x Community',
    paragraphs: [
      'As we continue to grow and expand our services, we invite you to join the ResQ-x community. Experience the peace of mind that comes with knowing you have a reliable and trusted partner on the road. Choose ResQ-x for your breakdown cover needs and enjoy the freedom of driving with confidence.',
    ],
  },
];

const roadmap = [
  'Initially, ResQX breakdown coverage will be available in Lagos, with plans for progressive expansion to cover the entire city. As we establish a robust operational infrastructure and build our subscriber base, we intend to extend our services to other key cities within Nigeria. Our phased approach is designed to ensure that we can deliver on our commitment to fast and reliable response times in the areas where we operate.',
  'By starting in Lagos, we aim to capture a significant market share and fine-tune our operations before expanding to other regions. Once we have successfully established a strong presence in Lagos, our strategic roadmap includes expanding our coverage to other cities across Nigeria. We aspire to provide nationwide breakdown coverage, ultimately encompassing the entire country to serve the diverse needs of car owners across Nigeria.',
  'Our long-term vision also involves exploring opportunities for expansion beyond national borders, with the goal of becoming a trusted breakdown cover provider in the broader African market. In summary, while ResQX will initially focus on Lagos, our comprehensive plan involves scaling our services across Nigeria. This phased approach ensures a meticulous and effective expansion that prioritizes the quality and reliability of our breakdown assistance services.',
];

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

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
        progressStage={1}
        message="Initializing emergency map..."
      />
    );
  }

  return (
    <>
      {/* SECTION 1: BANNER */}
      <section className="about-banner">
        <div className="about-icons">
          {icons.map((icon, i) => (
            <Fragment key={i}>
              {icon.overlay ? (
                <div className="about-layered">
                  <img src={icon.base} alt="" className="layer-base" />
                  <img src={icon.overlay} alt="" className="layer-overlay" />
                </div>
              ) : (
                <img src={icon.src} alt="" className="about-icon" />
              )}

              {arcs[i] && (
                <img src={arcs[i]} alt="" className={`about-arc arc-${i + 1}`} />
              )}
            </Fragment>
          ))}
        </div>

        <h1>Providing Quality Breakdown Services</h1>
        <p>At ResQX, we are focused on bringing quality vehicle services to you</p>
      </section>

      {/* SECTION 2: THE RESQX STORY */}
      <section className="about-story">
        <img src={storyBg} alt="" aria-hidden="true" className="story-bg" />

        <div className="story-content">
          <h2 className="story-title">The ResQX Story</h2>

          {story.map((block) => (
            <div key={block.heading} className="story-block">
              <h3>{block.heading}</h3>
              {block.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          ))}

          <img src={storyPhoto} alt="ResQX technician at work" className="story-photo" />
        </div>
      </section>

      {/* SECTION 3: STRATEGIC EXPANSION ROADMAP */}
      <section className="about-roadmap">
        <img src={roadmapMap} alt="" aria-hidden="true" className="roadmap-bg" />

        <div className="roadmap-content">
          <h2 className="roadmap-title">Strategic Expansion Roadmap</h2>

          {roadmap.map((text, i) => (
            <p key={i}>{text}</p>
          ))}

          <img src={roadmapPhoto} alt="ResQX mechanic at work" className="roadmap-photo" />
        </div>
      </section>

      {/* SECTION 4: FAQ + WAITLIST */}
      <FaqWaitlist />
    </>
  );
};

export default About;