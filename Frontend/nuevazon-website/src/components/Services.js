import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Share2, 
  Code, 
  Video, 
  Camera,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Target size={40} />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns to boost your brand visibility and drive conversions.",
      features: ["SEO Optimization", "PPC Campaigns", "Content Strategy", "Analytics & Reporting"]
    },
    {
      icon: <Share2 size={40} />,
      title: "Social Media Management",
      description: "Comprehensive social media strategies to engage your audience and grow your following.",
      features: ["Content Creation", "Community Management", "Influencer Outreach", "Social Analytics"]
    },
    {
      icon: <Code size={40} />,
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technologies for optimal performance.",
      features: ["React/Next.js", "E-commerce", "Mobile-First Design", "Performance Optimization"]
    },
    {
      icon: <Video size={40} />,
      title: "Video Editing",
      description: "Professional video editing services to create compelling visual stories for your brand.",
      features: ["Motion Graphics", "Color Grading", "Audio Enhancement", "Multi-Platform Optimization"]
    },
    {
      icon: <Camera size={40} />,
      title: "Photo Editing",
      description: "High-quality photo retouching and enhancement to make your visuals stand out.",
      features: ["Retouching", "Background Removal", "Color Correction", "Creative Compositing"]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Services</h2>
          <p>Comprehensive digital solutions tailored to your business needs</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="service-btn">
                Learn More <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
