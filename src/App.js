import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import {Services} from 'grommet-icons';
import { SafariOption} from 'grommet-icons';
import {DocumentTest} from 'grommet-icons';
import {car} from './images.jpeg'
import Particles from 'react-particles-js';
import Navbar from 'react-bootstrap/Navbar'
console.log(car)

import Popup1 from "./Components/Popup1"



class App extends Component {

    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }


    render() {
    return (

      <div className="App">

        <div className="App-header">
            <div id="large-header" className="large-header">


            <h2> <img src={logo} className="App-logo" alt="logo" />

             Walk In Stability Chamber
          </h2>

            <Button variant="dark" style={{ position: "absolute",top:"4%",right:"2%"}}><b>Login</b></Button>

        </div>

            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>




        <p className="App-intro">



            <Button className="firstcontent" variant="info" onClick={this.togglePopup.bind(this)}><SafariOption color='plain' size='xlarge'/>{' '}<b>Chamber 1</b></Button>{' '}

            {this.state.showPopup ?
                <Popup1
                    text='Choose your option'
                    closePopup={this.togglePopup.bind(this)}
                />
                : null
            }
            <Button  className="firstcontent" variant="light"><SafariOption color='plain' size='xlarge' />{' '}Chamber 2</Button>{' '}

            <Button  className="firstcontent" variant="primary"><SafariOption color='plain' size='xlarge' />{' '}Chamber 3</Button>{' '}




        </p>
        </div>

        </div>


    );
  }
}

export default App;
