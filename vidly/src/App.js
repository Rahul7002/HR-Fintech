import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';
import Movies from "./components/movies";

class App extends Component{
render() {
  return (
    <main className="container"> 
    <Movies />
    </main>
  );
 }
}

export default App;
