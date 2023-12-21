// Logo.js

import React from 'react';

const Logo = () => {
  // Replace 'url_to_your_online_logo_image' with the actual URL of your online logo image
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src="https://i.pinimg.com/originals/ce/07/05/ce0705e6b1e35894dae59113ae24e7a7.jpg"
        alt="Gardening Store Logo"
        style={{ width: '150px', height: '150px',alignItems: 'center' }} // Adjust the size as needed
      />
    </div>
  );
};

export default Logo;
