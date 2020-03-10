// Code CoordinatesButton Component Here
import React from "react"

class CoordinatesButton extends React.Component{
    constructor(){
        super()
    }

    getMouse = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY]);
    }

    render(){
        console.log(this.props)
        return(
            <button onClick={this.getMouse}>CoordsButton</button>
        )
    }

}


export default CoordinatesButton

