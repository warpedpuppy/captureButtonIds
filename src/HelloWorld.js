import React from 'react';

export default class HelloWorld extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
        who:undefined
      }
   }
   handleButtonClick = (e) => {
      let who = e.target.id
      console.log(e.target.id)
      this.setState({who})
   }
   render() {
       return(
           <div className="Hello">
               <p>Hello {this.state.who}</p>
               <button id = "World!"
                   onClick = {(e) => this.handleButtonClick(e)}>
                   World!
               </button>
               <button id = "Friend!"
                   onClick = {(e) => this.handleButtonClick(e)}>
                   Friend!
               </button>
               <button id = "React!"
                   onClick = {(e) => this.handleButtonClick(e)}>
                   React!
               </button>
           </div>
       )
   };
}
