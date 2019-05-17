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
      imageURL:''
    }
  }
  OnInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      console.log(response);
    },
    function(err) {
      console.log(err);
    }
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
        < FaceRecognition imageURL={this.state.imageURL}/>
    </div>
  );
  }
  
}

