import React, { Component } from 'react'
import Btest from './Btest'

export class Atest extends Component {
  render() {
    return (
      <div>
        <div>Atest</div>
        <Btest />
      </div>
    )
  }
}

export default Atest