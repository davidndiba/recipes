import React from 'react';
import './QuickFacts.less'; // Import your styles

const QuickFacts = () => {
  return (
    <div className="quick-facts-container">
      <h1 className="quick-facts-title">Quick Facts</h1>
      <div className="quick-facts-row">
        <div className="quick-facts-item">
          <div className="quick-facts-number">12+</div>
          <div className="quick-facts-description">Years Of Experience</div>
        </div>
        <div className="quick-facts-item">
          <div className="quick-facts-number">50+</div>
          <div className="quick-facts-description">Successful Projects</div>
        </div>
        <div className="quick-facts-item">
          <div className="quick-facts-number">50+</div>
          <div className="quick-facts-description">Happy Clients</div>
        </div>
        <div className="quick-facts-item">
          <div className="quick-facts-number">5</div>
          <div className="quick-facts-description">Awards Won</div>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
