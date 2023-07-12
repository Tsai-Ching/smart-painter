import React, { useState } from 'react';
import './App.css';
import Logo from '../component/logo/Logo';
import Navigation from '../component/navigation/Navigation';
import InputForm from '../component/inputForm/InputForm';
import SignIn from '../component/signIn/SignIn';
import TextToImage from '../component/textToImage/TextToImage';
import Gallery from '../component/Gallery';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFireflyPreset } from "tsparticles-preset-firefly";
import Register from '../component/register/Register';
import Rank from '../component/Rank/Rank';
import Loader from '../component/loader/Loader';
import "react-loading-skeleton/dist/skeleton.css";


function App() {
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [route, setRoute] = useState('signin');
  const [isSignIn, setIsSignIn] = useState(false);
  const [isResponse, setIsResponse] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUser] = useState(
    {
      id: '',
      name: '',
      email: '',
      password: '',
      entries: 0,
      joined: ''
    }
  );
  
  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      entries: data.entries,
      joined: data.joined
    });
  }

  const clearUser = () => {
    setInput('');
    setImageUrl('');
    setRoute('signin');
    setIsSignIn(false);
    setUser({
      id: '',
      name: '',
      email: '',
      password: '',
      entries: 0,
      joined: ''
    });
  }

  const options = {
    preset: "firefly",
    background: {
      color: "",
    },
    particles: {
      color: {
        value: "#c32d70", 
      },
    }
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  }

  const onRouteChange = (route) => {
    if(route === 'home') {
      setIsSignIn(true);
    }else if(route === 'signin') {
      clearUser();
    }
    setRoute(route);
  }

  const onButtonSubmit = (event) => {
    event.preventDefault();
    setIsResponse(false)
    setIsSubmit(true);

  fetch('https://smart-painter-api.onrender.com/imageurl', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      inputText: input
    })
  })
  .then(response => response.json())
  .then(response => {
    if(response) {
      fetch('https://smart-painter-api.onrender.com/image',
        {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: user.id
          })
        }) 
      .then(response => response.json())
      .then(result => setUser({...user,entries: result}))
      .catch(console.log);
    }
    setImageUrl(response)
    setIsResponse(true)
  })
  .catch(error => console.log('error', error));
}

  async function customInit(engine: Engine): Promise<void> {
    await loadFireflyPreset(engine);
  }

  return (
    <div>
      <Particles options={options} init={customInit} />
      <Navigation onRouteChange={onRouteChange} isSignIn={isSignIn} />
      {route === 'home' 
        ? <div>
            <Logo />
            <InputForm 
              onInputChange={onInputChange}
              handleClick={onButtonSubmit} />
            <Loader isResponse={isResponse} isSubmit={isSubmit} />
            <TextToImage imageUrl={imageUrl} />
            <Rank 
              name={user.name}
              entries={user.entries} />
          </div>
        : (route === 'signin' 
          ? <SignIn onRouteChange={onRouteChange} loadUser={loadUser} loading={loading} />
          : <Register onRouteChange={onRouteChange} loadUser={loadUser} loading={loading} />
          )
      }
    </div>
  );
}

export default App;
