import React from "react";
import "./Section.css";
import "./Blog.css";

const blogPosts = [
  {
    title: "How to Start a Business Online",
    excerpt: "Learn how to launch your online business from scratch with zero experience.",
    image: "clouds.jpeg",
  },
  {
    title: "Top 5 Web Design Trends in 2025",
    excerpt: "Explore the most exciting web design trends dominating 2025.",
    image: "web development.jpg",
  },
  {
    title: "Boost Your SEO with These Tips",
    excerpt: "Simple strategies to rank higher on Google and drive more traffic.",
    image: "clouds.jpeg",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="section blog">
      <h2>Our Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index} data-aos="fade-up">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
