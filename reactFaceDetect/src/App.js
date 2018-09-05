import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/image-link-form';
import Rank from './components/Rank/rank';
import SignIn from './components/SignIn/sign-in';
import FaceDetect from './components/FaceDetect/face-detect';
import ParticleBackground from './components/ParticleBackground/particle-background';

const app = new Clarifai.App({
  apiKey: '0f5d94ec2a7b4c7092919d4b135469fa'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imgURL: '',
      boundingBox: {},
      user: this.props.user
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user!==this.props.user) {
      this.setState({ user: this.props.user });
    }
  }

  calBoundingBox = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const imageWidth = Number(image.width);
    const imageHeight = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * imageWidth,
      topRow: clarifaiFace.top_row * imageHeight,
      rightCol: imageWidth - (clarifaiFace.right_col * imageWidth),
      bottomRow: imageHeight - (clarifaiFace.bottom_row * imageHeight)
    };
  }

  setBoundingBox = (boxValue) => {
    this.setState({ boundingBox: boxValue });
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handelSubmit = () => {
    this.setState({ imgURL: this.state.input });
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then((response) => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.props.user.id
            })
          })
            .then(response => response.json())
            .then(count => this.props.updateUserEntries(count))
            .catch(console.log);
        }
        this.setBoundingBox(this.calBoundingBox(response));
      })
      .catch(error => console.log(error));
  };

  render() {
    const { boundingBox, imgURL, user } = this.state;
    return (
      <div className="app">
        <Logo />
        <Rank
          name={user.name}
          entries={user.entries}
        />
        <ImageLinkForm
          onChangeInput={this.handleInputChange}
          onSubmit={this.handelSubmit}
        />
        <FaceDetect
          imageURL={imgURL}
          boundingBox={boundingBox}
        />
      </div>
    );
  }
}

export default App;
