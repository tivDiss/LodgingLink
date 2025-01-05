import React from 'react';
import './benefits.css';
import { assets} from '../../Components/Assets/Assets'

const Benefits = () => {
  const benefitsData = [
    {
      icon: <img src={assets.car} alt=''/>, // Replace with an actual icon/image
      title: 'New & quality used cars',
      description: 'We only offer new and quality used cars, carefully curated for your convenience, saving you time and money.',
    },
    {
      icon: <img src={assets.warenty} alt=''/>, // Replace with an actual icon/image
      title: 'Warranty available',
      description: "Drive.Com cars have an estimated remaining manufacturer's warranty providing peace of mind as you shop.",
    },
    {
      icon: <img src={assets.seller} alt=''/>, // Replace with an actual icon/image
      title: 'No private sellers',
      description: 'Avoid the hassle and uncertainty of buying a car privately. Enjoy a seamless buying experience with the Drive Dealer Network.',
    },
    {
      icon: <img src={assets.check} alt=''/>, // Replace with an actual icon/image
      title: 'Cars available now',
      description: 'All cars within the Drive.Com marketplace are currently available to buy and drive away, no lengthy wait times.',
    },
  ];

  return (
    <section className="benefits-section">
      <h2>Why buy with Drive.Com?</h2>
      <div className="benefits-grid">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
