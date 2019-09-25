import React, { Component } from 'react'

class Dice extends Component {
state={
randNum: Math.floor(Math.random()*6)
}

handleClick=()=>{

}

    render() {
        return (
            <div>
                <img src="" alt="" onClick={this.handleClick}/>
            </div>
        )
    }
}

export default Dice
