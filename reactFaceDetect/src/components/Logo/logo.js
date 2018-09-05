import React, { Component } from 'react';
import Tilt from 'react-tilt';
import Brain from './Brain.png';
import './logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 140, width: 140 }}>
        <div className="Tilt-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img alt="logo" src={Brain} style={{width: '70%'}}/>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
