import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/style.scss'
import { Sidebar } from './views/Sidebar'
import { Home } from './views/Home';
import { Karte } from './views/Karte'
import { Rezept } from './views/Rezept'
import { Daily } from './views/Daily'
import { Materials } from './views/Materials'
import { Summary } from './views/Summary'
import { Message } from './views/Message'
import { Remote } from './views/Remote'
import { Setting } from './views/Setting'
import { Contact } from './views/Contact'

// import {Printset} from './views/Printset'


export class App extends Component {
  
  render() {
    return (
      <>
        <div className='rows'>
          <BrowserRouter>
            <Sidebar />
            <div id="contents">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Karte' component={Karte}/>
                <Route exact path='/Rezept' component={Rezept}/>
                <Route exact path='/Daily' component={Daily}/>
                <Route exact path='/Materials' component={Materials}/>
                <Route exact path='/Summary' component={Summary}/>
                <Route exact path='/Message' component={Message}/>
                <Route exact path='/Remote' component={Remote}/>
                <Route exact path='/Setting' component={Setting}/>
                <Route exact path='/Contact' component={Contact}/>
                {/* <Route path='Printset' component={<Printset/>}/> */}
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </>
    )
  }
}


export default App;