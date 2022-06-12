import React, { Component } from 'react';
import '../App.css';
import ShowStudent from "./ShowStudent";
import NavBar from "./NavBar";
class Home extends Component {
    render() {
        return (
            <div>
                <ShowStudent/>
            </div>
        );
    }
}

export default Home;