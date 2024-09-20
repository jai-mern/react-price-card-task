import React from 'react';

const PriceCard = ({ plan }) => {
  return (
    <div className="price-card">
      <h2>{plan.title}</h2>
      <p className="price">{plan.price}</p>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Select Plan</button>
    </div>
  );
};

export default PriceCard;
