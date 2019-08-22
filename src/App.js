import React from 'react';
import HelloWorld from './HelloWorld.js';
import './App.css';

class App extends React.Component {
  clickHandler(e){
    console.log("target id = ",e.target.id)
  }
  render(){
    //  let buttons = [];
    // for (let i = 0; i < 100; i ++) {
    //   buttons.push(<button id={i} key={i} onClick={(e) => this.clickHandler(e)}>{i}</button>)
    // }
    return (
      <div className="App">
         <main>
         <HelloWorld />
          </main>
      </div>
    );
  }
}

export default App;
