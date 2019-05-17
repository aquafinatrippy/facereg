import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Imageform from './components/Imagelinkform/Imageform';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: '07195c9ff13d4e8081a7dbc093894ae8'
});

const particlesOptions = {
  
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  
}

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input : "",
      imageURL:'',
      box: {}
    }
  }
  OnInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)

    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box})
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    (response) => {
      this.displayFaceBox(this.calculateFaceLocation(response));},
      (err) => { console.log(err); }
  );
  }

  render(){
    return (
    <div className="App">
        <Particles className='particles'
        params={particlesOptions} />
        <Navigation />
        < Logo />
        < Imageform OnInputChange={this.OnInputChange} onButtonSubmit={this.onButtonSubmit} />
        < FaceRecognition imageURL={this.state.imageURL} box={this.state.box} />
    </div>
  );
  }
  
}

