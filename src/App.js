import React, { Component } from 'react';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import facebook from './facebook.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src="https://i.pinimg.com/564x/83/23/66/832366f69c087178414e994299c53a66.jpg" className="App-logo" alt="logo" />
          <h1 style={{marginBottom:0}}>Stuffsdee</h1>
          <p className="bening">by Bening & Diana</p>
          <p style={{fontSize:'25px',marginTop:'10px',marginBottom:'20px'}}>
            COMING SOON
          </p>

          <div>
            <a href="https://www.instagram.com/stuffsdee/" target="_blank" >
              <img src={instagram} alt="social-logo" className="social-logo" />
            </a>
            <a href="https://twitter.com/DeeStuffs" target="_blank" >
             <img src={twitter} alt="social-logo" className="social-logo" />
            </a>
            <a href="https://www.facebook.com/stuffs.dee.1" target="_blank" >
             <img src={facebook} alt="social-logo" className="social-logo" />
            </a>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
