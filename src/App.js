import React from 'react'
import './App.css';
import Login from './Components/Login'

function App() {
  return (
    <div className=' h-full w-full bg-cover bg-center bg-fixed bg-[url("https://images.pexels.com/photos/6434707/pexels-photo-6434707.jpeg?cs=srgb&dl=pexels-fuad-tesfaye-6434707.jpg&fm=jpg")]'>
     
      <div className=' z-0 bg-gradient-to-t from-zinc-900 bg-opacity-10 w-full h-screen '>
      <Login/>
      </div>

    </div>
  );
}

export default App;
