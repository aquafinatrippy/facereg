import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Imageform from './components/Imagelinkform/Imageform';
import 'tachyons';

function App() {
  return (
    <div className="App">
        <Navigation />
        < Logo />
        < Imageform />
        {/*< FaceRecognition />*/}
    </div>
  );
}

export default App;
