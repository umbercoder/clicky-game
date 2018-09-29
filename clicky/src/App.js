import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"
import crownbaby from "./images/crownbaby.jpeg"
import beigebaby from "./images/beigebaby.jpeg"
import featherbaby from "./images/featherbaby.jpeg"
import lacebaby from "./images/lacebaby.jpeg"
import moanababy from "./images/moanababy.jpeg"
import netbaby from "./images/netbaby.jpeg"
import pinkbaby from "./images/pinkbaby.jpeg"
import tubbaby from "./images/tubbaby.jpeg"
import purplebaby from "./images/purplebaby.jpeg"
import sleepingbaby from "./images/sleepingbaby.jpeg"
import angelbaby from "./images/angelbaby.jpeg"
import hatbaby from "./images/hatbaby.jpeg"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "crownbaby":
        return `${crownbaby}`
      case "beigebaby":
        return `${beigebaby}`
      case "featherbaby":
        return `${featherbaby}`
      case "lacebaby":
        return `${lacebaby}`
      case "moanababy":
        return `${moanababy}`
      case "netbaby":
        return `${netbaby}`
      case "pinkbaby":
        return `${pinkbaby}`
      case "tubbaby":
        return `${tubbaby}`
      case "purplebaby":
        return `${purplebaby}`
      case "sleepingbaby":
        return `${sleepingbaby}`
      case "angelbaby":
        return `${angelbaby}`
      case "hatbaby":
        return `${hatbaby}`
      default:
        return `${crownbaby}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;