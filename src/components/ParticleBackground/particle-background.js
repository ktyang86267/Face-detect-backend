import React from 'react';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

const ParticleBackground = () => {
  return(
    <div>
      <Particles
          className="particles"
          params={particlesOptions}
        />
    </div>
  )
}

export default ParticleBackground;
