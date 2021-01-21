import React, { Component } from 'react';
import Clarifai from 'clarifai';
import FaceRecoginition from './components/FaceRecoginition/FaceRecoginition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

const app = new Clarifai.App({
  apiKey: '7640364ac0d34cf5a194687942965795'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'SignIn'
    }
  }

  CalculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const height = Number(image.height);
    const width = Number(image.width);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  displayFaceBox = (Box) => {
    this.setState({ box: Box })
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.CalculateFaceLocation(response)))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <div>
          <Logo />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          <FaceRecoginition box={this.state.box} imageUrl={this.state.imageUrl} />
        </div>
      </div>
    );
  }
}

export default App;
