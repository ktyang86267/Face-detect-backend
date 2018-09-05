import React, { Component } from 'react';
import './face-detect.css';

const FaceDetect = ({ imageURL, boundingBox }) => {
  return (
    <div className="center ma">
      <div className="relative mt2">
        <img id="inputImage" alt="" src={imageURL} width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{top: boundingBox.topRow, right: boundingBox.rightCol, bottom: boundingBox.bottomRow, left: boundingBox.leftCol}}
        >
        </div>
      </div>
    </div>
  );
};

export default FaceDetect;
