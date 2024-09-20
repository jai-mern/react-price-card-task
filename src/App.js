import React from 'react';
import PriceCard from './components/PriceCard';
import './styles.css';

const App = () => {
  const pricePlans = [
    { title: "Basic Plan", price: "$19.99", features: ["Feature 1", "Feature 2", "Feature 3"] },
    { title: "Standard Plan", price: "$39.99", features: ["Feature 1", "Feature 2", "Feature 4"] },
    { title: "Premium Plan", price: "$59.99", features: ["Feature 1", "Feature 5", "Feature 6"] },
  ];

  return (
    <div className="app">
      <h1>Price Cards</h1>
      <div className="price-cards">
        {pricePlans.map((plan, index) => (
          <PriceCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default App;
