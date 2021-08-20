import React,{ useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import FetchUser from './components/FetchUser';
import Increment from './components/increment';
import ResizeApp from './components/ResizeApp';
import style from './components/Style';

function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Navbar/>
      <h3>Count Increment: useState / useEffect</h3>
      <Increment/>
      <h3>get random users and posts, using  Math.ceil(Math.random()), in UserId.</h3>
      <FetchUser/>
      <h3>Show window resize reactive </h3>
      <button style={style.button} onClick={()=> setShow(!show)}>
        Show/Hide
      </button >
      {show &&
      <ResizeApp/>}
      <br/>
        <div style={style.a}>
          <a href="https://github.com/inf23r4/React-useEffect.git" target="_blank" rel="noreferrer">https://github.com/inf23r4/React-useEffect.git</a>
        </div>
      </div>
  )
};

export default App;
