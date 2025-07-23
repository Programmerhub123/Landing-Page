import React from "react";
import "./Section.css";
import "./Pricing.css";

const pricingPlans = [
  {
    title: "Basic",
    price: "$29/month",
    features: ["1 Website", "Basic Support", "Limited Storage"],
  },
  {
    title: "Pro",
    price: "$59/month",
    features: ["5 Websites", "Priority Support", "Unlimited Storage"],
    popular: true,
  },
  {
    title: "Premium",
    price: "$99/month",
    features: ["Unlimited Websites", "24/7 Support", "Advanced Analytics"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section pricing">
      <h2>Our Pricing</h2>
      <div className="pricing-plans">
        {pricingPlans.map((plan, index) => (
          <div
            className={`plan-card ${plan.popular ? "popular" : ""}`}
            key={index}
            data-aos="zoom-in"
          >
            {plan.popular && <span className="badge">Most Popular</span>}
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <button className="btn">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
