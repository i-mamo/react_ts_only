import React, { Component ,createContext} from 'react'
import Atest from './test/Atest'


interface TContext {
  a: boolean;
  num?: number;
  b?: (x: number) =>void;
}

const defaultState = {
  a:false,
}

export const TestContent = createContext<TContext>(defaultState)
TestContent.displayName = "Router.Consumer"



export class Summary extends Component {
  constructor(props: any) {
    super(props)
    this.state = {

    }
    
 

  }
  render() {
    return (
      <div>
        <div>Summary</div>
        <div style={{ textAlign: 'center' }}>
          <h1>Learn useContext</h1>
          <TestContent.Provider value={{
            a: false,
            num:100,
            b: (x) => console.log(`test : ${x}`),
           }}>
            <Atest />
          </TestContent.Provider>
        </div>
      </div>
    )
  }
}

