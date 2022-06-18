import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import styles from '../scss/styles.module.scss'

interface TState {
   type:string, text: string, path: string, event: any ,others:{}
}

export class Comp1 extends Component <{},TState>{
  
  constructor(props: any) {
    console.log(props);
    
    let {
      type,
      children,
      path,
      event,
      ...others
    } = props
    super(props)
    this.state = {
      type:type,
      text: children,
      path: path,
      event: event,
      others:others
    }
  }
  render():React.ReactNode {
    return (
      <div>Comp1</div>
    )
  }
}


interface TState {
  test?:string
}

export default class Button extends Comp1 {
  constructor(props: any) {
    console.log(props);
    
    let {
      type,
      children,
      path,
      event,
      test,
      ...others
    } = props
    super(props)
    this.state = {
      type:type,
      text: children,
      path: path,
      event: event,
      test:test,
      others:others
    }
  }
  

  
  render(): React.ReactNode {
    console.log(this.state);
    return (
      <>
        {/* <MemoryRouter> */}
          <div style={{ textAlign: 'center' }}>
            {
              /http/.test(this.state.path)
                ?

                <a className={`${styles.def} ${styles[this.state.type]}`} href={this.state.path}>
                  <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faCircleLeft} size='2x' />
                  <span className={styles.text}>
                    {this.state.text}(リンク)
                  </span>
                </a>

                : this.state.type
                  ? <button className={`${styles.def2} ${styles[this.state.type]}`} onClick={this.state.event}>
                    <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faCircleLeft} size='2x' />
                    <span className={styles.text}>
                      {this.state.text}(ボタン)
                    </span>
                  </button>
                  : <NavLink to={`${this.state.path}`??'#'} activeClassName='active'>LINKタグ{this.state.text}</NavLink>
            }
          </div>

        {/* </MemoryRouter> */}
      </>
    )
  }
}