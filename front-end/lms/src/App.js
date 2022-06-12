import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddStudent from "./components/AddStudent";
import ShowStudent from "./components/ShowStudent";
import Home from "./components/Home";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/students' element={<ShowStudent/>} />
                    <Route path='/students/add' element={<AddStudent/>} />
                </Routes>
            </Router>
        )
    }
}

export default App;
