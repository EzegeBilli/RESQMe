// Article images (change names to match your files)
import trafficImg from '../assets/blog1.jpg';          // same traffic photo as the blog card
import mechanicImg from '../assets/blog-mechanic.jpg'; // man in blue cap with the car

// Read More images
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';

const whyItems = [
  {
    title: 'Emergency Assistance',
    text: 'Breakdown cover matters for emergency assistance as it ensures prompt help during unexpected vehicle issues, offering peace of mind, minimizing inconvenience, and ensuring a quick resolution to get you back on the road swiftly.',
  },
  {
    title: 'Financial Protection',
    text: 'Breakdown cover provides financial protection by covering the costs of emergency assistance, towing, and repairs. It shields you from unexpected expenses, offering a safety net for your budget and ensuring peace of mind on the road.',
  },
  {
    title: 'Tailored Solutions for Lagos',
    text: 'ResQX offers tailored breakdown coverage solutions specifically designed for the dynamic challenges of Lagos. Our services are crafted to address the unique needs of motorists in the bustling city, ensuring reliable assistance and peace of mind on Lagos roads.',
  },
  {
    title: 'Enhanced Road Safety',
    text: 'ResQX’s breakdown coverage goes beyond assistance; it’s a commitment to enhanced road safety. Our services prioritize swift response, minimizing risks and promoting a secure driving experience for our customers.',
  },
];

const benefitItems = [
  {
    title: 'Swift Assistance',
    text: 'Experience the epitome of swift assistance with ResQX – our dedicated team guarantees a rapid 15 to 30-minute response time. Trust us for prompt, reliable service when you need it most.',
  },
  {
    title: 'Affordability',
    text: 'Unlock affordability without compromising on quality! ResQX offers budget-friendly breakdown coverage starting from just ₦5499, delivering exceptional benefits that surpass the competition. Drive with peace of mind without breaking the bank.',
  },
];

const moreStories = [
  {
    title: 'Benefits and Use Cases of the ResQX Breakdown Cover',
    date: 'December 18, 2023',
    image: blog2,
  },
  {
    title: 'The Role of Breakdown Cover in Your Daily Commute',
    date: 'August 11, 2023',
    image: blog3,
  },
];

const BlogPost = () => {
  return (
    <>
      <article className="post">
        <time className="post-date">January 12, 2024</time>
        <h1 className="post-title">The Need for Breakdown Cover in Lagos, Nigeria</h1>

        <p className="post-intro">
          In the vibrant metropolis of Lagos, Nigeria’s bustling heart, the demand for dependable breakdown cover has reached unprecedented heights. The city’s roadways, pulsating with ceaseless activity, form the lifeblood of commerce and daily life. Amidst the rhythmic hustle and bustle, the unpredictability of vehicular issues has elevated the importance of reliable breakdown services to an indispensable level. Lagos, a sprawling urban landscape, is a crucible of diverse journeys, where routine commutes can swiftly transform into formidable challenges when faced with unexpected vehicle troubles. The city’s thoroughfares, adorned with a kaleidoscope of sights and sounds, witness a constant flow of traffic, making the need for prompt assistance during breakdowns paramount. In this dynamic environment, a robust breakdown cover service becomes a reassuring ally for motorists navigating the labyrinth of Lagos. From swift on-site repairs to efficient towing services, the comprehensive breakdown cover not only alleviates the stress of unforeseen breakdowns but also ensures that the city’s arteries remain unobstructed, facilitating the smooth flow of life in this bustling Nigerian hub. As Lagos continues to evolve, the reliability of breakdown cover emerges as an indispensable facet of the urban landscape, providing a safety net for those traversing its energetic streets.
        </p>

        <h2>Why Breakdown Cover Matters</h2>
        {whyItems.map((item) => (
          <div key={item.title} className="post-item">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}

        <figure>
          <img src={trafficImg} alt="Traffic on a busy Lagos road" />
          <figcaption>
            Navigating bustling Lagos roads demands caution. Stay vigilant, prioritize safety—your journey matters.
          </figcaption>
        </figure>

        <h2>Benefits of ResQX Breakdown Cover</h2>
        {benefitItems.map((item) => (
          <div key={item.title} className="post-item">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}

        <figure>
          <img src={mechanicImg} alt="ResQX team member assisting a driver" />
          <figcaption>ResQX team members assisting a driver on a Lagos road</figcaption>
        </figure>
      </article>

      {/* READ MORE */}
      <section className="post-more">
        <h2>Read More</h2>

        <div className="blog-grid">
          {moreStories.map((story) => (
            // Add "to" and switch this div to a Link when these pages exist
            <div key={story.title} className="blog-card">
              <img src={story.image} alt={story.title} className="blog-img" />
              <h3>{story.title}</h3>
              <time>{story.date}</time>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPost;