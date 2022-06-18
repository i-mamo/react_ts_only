import React, { Component } from 'react'
import Ctest from './Ctest'

export class Btest extends Component {
  render() {
    return (
      <div>
        <div>Btest</div>
        <Ctest />
      </div>
    )
  }
}

export default Btest