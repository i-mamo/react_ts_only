import React, { Component } from 'react'

export class Rezept extends Component {
  componentDidMount() {
    
  }
  window_open(){
    window.open('Printset', 'subwin', 'width=1500,height=900');
    return false;
  }
  render() {
    return (
      <>
        <div>Rezept</div>
        <div>
          <button style={{backgroundColor:'green'}} onClick={this.window_open}>印字調整</button>
        </div>
      </>
    )
  }
}

export default Rezept

