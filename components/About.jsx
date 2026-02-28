import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Bhojnam</h1>
        <p>
          Bhojnam is a food discovery platform where you can explore the best
          restaurants around you. We aim to provide a seamless experience for
          users to browse, search, and filter restaurants easily.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To make food discovery simple, fast, and enjoyable for everyone.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To become a modern, user-friendly food platform that connects
              people with the best dining experiences.
            </p>
          </div>

          <div className="about-card">
            <h3>Built With</h3>
            <p>
              React, React Router, Parcel and modern CSS for a smooth and
              scalable web experience.
            </p>
          </div>

          <div className="about-card">
            <h3>Core Values</h3>
            <p>
              We focus on performance, simplicity, clean UI, and user-first
              design principles.
            </p>
          </div>

          <div className="about-card">
            <h3>User Experience</h3>
            <p>
              Designed with intuitive navigation, fast loading, and responsive
              layouts for all devices.
            </p>
          </div>

          <div className="about-card">
            <h3>Future Goals</h3>
            <p>
              We plan to introduce authentication, real-time ordering, payment
              integration, and personalized recommendations.
            </p>
          </div>

          <div className="about-card">
            <h3>Why Bhojnam?</h3>
            <p>
              Bhojnam stands for simplicity and efficiency — helping users
              discover restaurants quickly without unnecessary complexity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;