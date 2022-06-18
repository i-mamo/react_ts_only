/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Logo from '../logo/logo.svg'


export class Sidebar extends Component {
  componentDidMount() {

  }
  selected(e: any): void {
    const Select = document.querySelector<HTMLElement>('.active');
    Select?.classList.remove('active')
    e.currentTarget.className = 'active'
  }

  render() {
    return (
      <>
        <input type="checkbox" id="switch" />
        <div id='sidebar'>
          <NavLink to={'/'} >
            <img src={Logo} className='logo' />
          </NavLink>
          <div className="ul menu-sidebar">
            <NavLink to={'/'} exact={true} activeClassName='active'>
              <i></i><span className="icon icon-home">トップページ</span>
            </NavLink>

            <NavLink to={'/Karte'} activeClassName='active'>
              <i></i><span className="icon icon-edit">カルテ入力</span>
            </NavLink>

            <NavLink to={'/Rezept'} activeClassName='active'>
              <i></i><span className="icon icon-note">レセプト一覧</span>
            </NavLink>

            <NavLink to={'/Daily'} activeClassName='active'>
              <i></i><span className="icon icon-calc">日計入力</span>
            </NavLink>

            <NavLink to={'/Materials'} activeClassName='active'>
              <i></i><span className="icon icon-page">資料作成</span>
            </NavLink>

            <NavLink to={'/Summary'} activeClassName='active'>
              <i></i><span className="icon icon-chart">総括表</span>
            </NavLink>

            <NavLink to={'/Message'} activeClassName='active'>
              <i></i><span className="icon icon-mess">メッセージ</span>
            </NavLink>

            <NavLink to={'/Remote'} activeClassName='active'>
              <i></i><span className="icon icon-hook">リモートURL</span>
            </NavLink>

            <NavLink to={'/Setting'} activeClassName='active'>
              <i></i><span className="icon icon-setting">システム設定</span>
            </NavLink>

            <NavLink to={'/Contact'} activeClassName='active'>
              <i></i><span className="icon icon-phone">お問い合わせ</span>
            </NavLink>
              <label htmlFor="switch"><i></i><span>折り畳む</span></label>
          </div>
        </div>
      </>
    )
  }
}

export default Sidebar;
