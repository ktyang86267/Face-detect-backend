import React, { Component } from 'react';
import './image-link-form.css';

const ImageLinkForm = ({ onChangeInput, onSubmit }) => {
  return (
    <div>
      <p className="f4 b">
        This Magic Brain will detect faces in your pictures!! Try it!
      </p>
      <div className="form center pa4 br3 shadow-5">
        <input type="text" className="f4 pa2 w-70 center" onChange={onChangeInput} />
        <button type="button" className="w-30 grow f4 link ph3 pv2 dib white bg-orange pointer" onClick={onSubmit}>
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
