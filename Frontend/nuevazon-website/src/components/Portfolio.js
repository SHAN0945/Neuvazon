import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "web",
      image: "/api/placeholder/400/300",
      description: "Modern e-commerce platform with React and Node.js"
    },
    {
      id: 2,
      title: "Brand Marketing Campaign",
      category: "marketing",
      image: "/api/placeholder/400/300",
      description: "Complete digital marketing strategy for tech startup"
    },
    {
      id: 3,
      title: "Product Photography",
      category: "photo",
      image: "/api/placeholder/400/300",
      description: "Professional product photos for luxury brand"
    },
    {
      id: 4,
      title: "Corporate Video",
      category: "video",
      image: "/api/placeholder/400/300",
      description: "Engaging corporate presentation video"
    },
    {
      id: 5,
      title: "Social Media Content",
      category: "social",
      image: "/api/placeholder/400/300",
      description: "Creative social media posts and stories"
    },
    {
      id: 6,
      title: "Restaurant Website",
      category: "web",
      image: "/api/placeholder/400/300",
      description: "Responsive website with online ordering system"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'marketing', label: 'Marketing' },
    { key: 'photo', label: 'Photography' },
    { key: 'video', label: 'Video' },
    { key: 'social', label: 'Social Media' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Portfolio</h2>
          <p>Showcasing our best work across different domains</p>
        </motion.div>

        <motion.div 
          className="portfolio-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              layout
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-actions">
                    <button className="action-btn">
                      <Eye size={20} />
                    </button>
                    <button className="action-btn">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
