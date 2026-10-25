import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

// Post images (change names to match your files)
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';

const posts = [
  {
    title: 'The Need for Breakdown Cover in Lagos, Nigeria',
    date: 'January 12, 2024',
    image: blog1,
    to: '/blog/need-for-breakdown-cover',   // links to its own page
  },
  {
    title: 'Benefits and Use Cases of the ResQX Breakdown Cover',
    date: 'December 18, 2023',
    image: blog2,
    // to: '/blog/benefits-and-use-cases',  // add a path when this page exists
  },
  {
    title: 'The Role of Breakdown Cover in Your Daily Commute',
    date: 'August 11, 2023',
    image: blog3,
  },
  {
    title: 'The Future of Roadside Assistance: Innovations in Breakdown Cover Service',
    date: 'March 22, 2023',
    image: blog4,
  },
];

const Blog = () => {
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
        progressStage={3}
        message="Locating nearest responders..."
      />
    );
  }

  return (
    <section className="blog">
      <h1 className="blog-title">ResQX Blog</h1>
      <p className="blog-sub">Check out some of our latest blog posts</p>

      <div className="blog-grid">
        {posts.map((post) => {
          const card = (
            <>
              <img src={post.image} alt={post.title} className="blog-img" />
              <h3>{post.title}</h3>
              <time>{post.date}</time>
            </>
          );

          // A post with a "to" path becomes a link, the others stay plain cards
          return post.to ? (
            <Link key={post.title} to={post.to} className="blog-card">
              {card}
            </Link>
          ) : (
            <div key={post.title} className="blog-card">
              {card}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;