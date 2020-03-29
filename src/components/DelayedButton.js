import React from 'react'; 

class DelayedButton extends React.Component {

   handleClick = (event) => {
      event.persist()
      window.setTimeout(() => {
         this.props.onDelayedClick(event)
      },
         this.props.delay
      )
   } 

   render() {
      return (
         <button onClick={this.handleClick}>Delay Button</button>
      )
   } 

}

export default DelayedButton; 

// Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a 
// setTimeout().The setTimeout() should be set to this.props.delay.