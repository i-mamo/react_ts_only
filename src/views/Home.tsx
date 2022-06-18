import React, { Component } from 'react';
import Comp1 from '../@Components/Comp1';

interface ValueType {
  value:string
}
interface VaProps {
  value:''
}

export class Home extends Component <{},ValueType,VaProps>{
  constructor(props: any) {
    super(props);
    this.state = {
      value:'state value!'
    }
  }

  clickE() {
    console.log(`クリック${this.state.value}`);
    return
  }

  render():React.ReactNode {
    const data: object = {type:'', path: '/contact', event: () => { this.clickE() },'data-isinvalid':1}
    const data2: object = {type:'solid', path: 'https://google.com', event: () => { this.clickE() }}
    const data3: object = {  path: 'rezept'}
    // const data4: object = {type:'solid' , path: '/google.com'}
    // const data5: object = {type:'solid' , path: '/google.com'}
    return (
      <>
        <div id="home">
          <div>@components</div>
          <Comp1 {...data}>テストボタン</Comp1>
          <br />
          <Comp1 {...data2}>テストボタン</Comp1>
          <br />
          <Comp1 {...data3}>テストボタン</Comp1>
          <br />
      
        </div>
      </>
    )
  }
}

export default Home;
