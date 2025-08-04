import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: <Award size={30} />, number: "3+", text: "Years Experience" },
    { icon: <Users size={30} />, number: "50+", text: "Happy Clients" },
    { icon: <Clock size={30} />, number: "24/7", text: "Support" },
    { icon: <CheckCircle size={30} />, number: "100%", text: "Satisfaction" }
  ];

  const skills = [
    { name: "Digital Marketing", level: 95 },
    { name: "Web Development", level: 90 },
    { name: "Video Editing", level: 85 },
    { name: "Photo Editing", level: 88 },
    { name: "Social Media", level: 92 }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>About Nuevazon</h2>
            <p>
              Welcome to Nuevazon, where creativity meets technology. I'm a passionate freelancer 
              dedicated to helping businesses thrive in the digital landscape. With expertise spanning 
              across marketing, web development, and creative design, I bring a comprehensive approach 
              to every project.
            </p>
            <p>
              My mission is to transform your ideas into powerful digital experiences that drive 
              results. Whether you need a stunning website, engaging social media content, or 
              professional video production, I'm here to exceed your expectations.
            </p>

            <div className="achievements">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <div className="achievement-text">
                    <h3>{achievement.number}</h3>
                    <p>{achievement.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="about-skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Skills & Expertise</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
