import React, { useState } from 'react';
import './App.css';
import Logo from './component/logo/Logo';
import Navigation from './component/navigation/Navigation';
import InputForm from './component/inputForm/InputForm';
import SignIn from './component/signIn/SignIn';
import TextToImage from './component/textToImage/TextToImage';
import Gallery from './component/Gallery';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFireflyPreset } from "tsparticles-preset-firefly";
// import { Configuration, OpenAIApi } from "openai";
import Register from './component/register/Register';
import Rank from './component/Rank';

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [route, setRoute] = useState("signin");
  const [isSignIn, setIsSignIn] = useState(false);
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
      entries: 0,
      joined: data.joined
    })
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
      setIsSignIn(false);
    }
    setRoute(route);
  }

  const onButtonSubmit = (event) => {
    event.preventDefault();
    // async function getUrl() {
    //   const configuration = new Configuration({
    //     apiKey: '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',
    //   });
    //   const openai = new OpenAIApi(configuration);
    //   const response = await openai.createImage({
    //     prompt: 'a Vincent Van Gogh style paint of' + input,
    //     n: 2,
    //     size: "1024x1024",
    //   if(response) {
    //     console.log('666')
    //     // fetch('http://localhost:3000/image',
    //     //   {
    //     //     method: 'post',
    //     //     headers: {'Content-Type': 'application/json'},
    //     //     body: JSON.stringify({
    //     //       id: user.id
    //     //     })
    //     //   }
    //     // )
    //     // .then(count => Object.assign(user, {entries: count}))
    //   }
    //   });
    //   const image_url = response.data.data[0].url;
    //   return(image_url);
    // }
    // getUrl().then((res) => setImageUrl(res));
    const raw = JSON.stringify({
  "user_app_id": {
    "user_id": "borisdayma",
    "app_id": "generative-art"
  },
  "inputs": [
      {
          "data": {
              "text": {
                  "raw": 'a Vincent Van Gogh style paint of' + input
              }
          }
      }
  ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + '7307a83a63294f25b1a4569ecf26d727'
    },
    body: raw
};


fetch(`https://api.clarifai.com/v2/models/general-image-generator-dalle-mini/versions/86c0ae39083e45a8bf96fde91f4e1952/outputs`, requestOptions)
    .then(response => {
      if(response) {
        fetch('http://localhost:3000/image',
          {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: user.id
            })
          }
        ) 
        .then(response => response.json())
        .then(result => setUser(Object.assign(user,{entries: result})))
      }
      return response;
    })
    .then(response => response.json())
    .then(result => {
      setImageUrl(result.outputs[0].data.image.base64)
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
            <Rank 
              name={user.name}
              entries={user.entries} />
            <InputForm 
              onInputChange={onInputChange}
              handleClick={onButtonSubmit} />
            <TextToImage imageUrl={imageUrl} />
            <Gallery />
          </div>
        : (route === 'signin' 
          ? <SignIn onRouteChange={onRouteChange} loadUser={loadUser} />
          : <Register onRouteChange={onRouteChange} loadUser={loadUser} />
          )
      }
    </div>
  );
}

export default App;
