// Code DelayedButton Component Here
import React from "react"

class DelayedButton extends React.Component{
    constructor(){
        super()
    }

    delayButton = event => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay )
    }

    render(){
        return(
            <button onClick={this.delayButton}>Delayed Button</button>
        )
    }

}

export default DelayedButton

//delay, onDelayedClick