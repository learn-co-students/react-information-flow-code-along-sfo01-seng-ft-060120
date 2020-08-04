import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }
  render() {
    return (
      <div onClick={() => this.props.handleColorChange(getRandomColor())}className="child" style={{backgroundColor: this.props.color}}></div>
    )
  }
}

export default Child
