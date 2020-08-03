import React, {Component} from 'react';
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Designs from './components/Designs'

class App extends Component {
  constructor(){
    super();
  this.state ={
  }
  }

  componentDidMount (){
    this.hideDesigns()
}

hideDesigns(){
  document.getElementById("designs").style.display="none"
}

  render (){
  return (
    <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
    <Navbar />
    <Main />
    <Designs />
    </div>
    </div>
    </div>
    );
  }
}
  export default App;
  