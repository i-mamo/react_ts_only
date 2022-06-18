// import React, { Component } from 'react'
// import Pict from '../img/test.png'




// class Dad {
//   constructor(props) {
//     // this.state = {
//     //   test:''
//     // }

//     let elements = document.getElementsByClassName("drag-and-drop");
//     let x;
//     let y;
//     let event;

//     //マウスが要素内で押されたとき、又はタッチされたとき発火
//     for (let i = 0; i < elements.length; i++) {
//       elements[i].addEventListener("mousedown", mdown, false);
//       elements[i].addEventListener("touchstart", mdown, false);
//     }

//     //マウスが押された際の関数
//     function mdown(e) {
//       console.log(this.style.background = 'red');
//       console.log(this.state);
//       document.getElementById('sample_text').innerHTML = this.innerHTML

//       this.classList.add("drag");

//       //タッチデイベントとマウスのイベントの差異を吸収
//       if (e.type === "mousedown") {
//         event = e;
//       } else {
//         event = e.changedTouches[0];
//       }

//       //要素内の相対座標を取得
//       x = event.pageX - this.offsetLeft;
//       y = event.pageY - this.offsetTop;

//       //ムーブイベントにコールバック
//       document.getElementById('area').addEventListener("mousemove", mmove, false);
//       document.getElementById('area').addEventListener("touchmove", mmove, false);

//     }

//     //マウスカーソルが動いたときに発火
//     function mmove(e) {

//       let drag = document.getElementsByClassName("drag")[0];
//       let event
//       document.getElementById('position_x').value = Math.floor(drag.getBoundingClientRect().x)
//       document.getElementById('position_y').value = Math.floor(drag.getBoundingClientRect().y)
//       // console.log(drag.clientWidth);
//       // console.log(drag.offsetWidth);

//       //同様にマウスとタッチの差異を吸収
//       if (e.type === "mousemove") {
//         event = e;
//       } else {
//         event = e.changedTouches[0];
//       }

//       //フリックしたときに画面を動かさないようにデフォルト動作を抑制
//       e.preventDefault();

//       //マウスが動いた場所に要素を動かす//初期629 - 630 - 793
//       // console.log(event.pageX - x);
//       // console.log(drag.offsetWidth);
//       // console.log(drag.getBoundingClientRect());
//       // console.log(drag.getBoundingClientRect().width);
//       // console.log(event.pageX - x + drag.getBoundingClientRect().width);

//       if (event.pageX - x + drag.offsetWidth > 793) {
//         drag.style.left = `${793 - drag.offsetWidth}`
//       } else if (event.pageX - x < 0) {
//         drag.style.left = '0px'
//       } else {
//         drag.style.top = event.pageY - y + "px";
//         drag.style.left = event.pageX - x + "px";
//       }


//       //マウスボタンが離されたとき、またはカーソルが外れたとき発火
//       drag.addEventListener("mouseup", mup, false);
//       // document.getElementById('area').addEventListener("mouseleave", mup, false);
//       drag.addEventListener("touchend", mup, false);
//       // document.getElementById('area').addEventListener("touchleave", mup, false);

//     }

//     //マウスボタンが上がったら発火
//     function mup(e) {
//       let drag = document.getElementsByClassName("drag")[0];

//       console.log(this.style.background = 'none');

//       //ムーブベントハンドラの消去
//       document.getElementById('area').removeEventListener("mousemove", mmove, false);
//       drag.removeEventListener("mouseup", mup, false);
//       document.getElementById('area').removeEventListener("touchmove", mmove, false);
//       drag.removeEventListener("touchend", mup, false);

//       drag.classList.remove("drag");
//     }



//     return false;
//   }

// }

// // function dad() {

// //   let elements = document.getElementsByClassName("drag-and-drop");
// //   let x;
// //   let y;
// //   let event;

// //   //マウスが要素内で押されたとき、又はタッチされたとき発火
// //   for (let i = 0; i < elements.length; i++) {
// //     elements[i].addEventListener("mousedown", mdown, false);
// //     elements[i].addEventListener("touchstart", mdown, false);
// //   }

// //   //マウスが押された際の関数
// //   function mdown(e) {
// //     console.log(this.style.background = 'red');
// //     console.log(this.props);
// //     // document.getElementById('sample_text').innerHTML = this.state.text

// //     this.classList.add("drag");

// //     //タッチデイベントとマウスのイベントの差異を吸収
// //     if (e.type === "mousedown") {
// //       event = e;
// //     } else {
// //       event = e.changedTouches[0];
// //     }

// //     //要素内の相対座標を取得
// //     x = event.pageX - this.offsetLeft;
// //     y = event.pageY - this.offsetTop;

// //     //ムーブイベントにコールバック
// //     document.getElementById('area').addEventListener("mousemove", mmove, false);
// //     document.getElementById('area').addEventListener("touchmove", mmove, false);

// //   }

// //   //マウスカーソルが動いたときに発火
// //   function mmove(e) {

// //     let drag = document.getElementsByClassName("drag")[0];
// //     let event

// //     // console.log(drag.clientWidth);
// //     // console.log(drag.offsetWidth);

// //     //同様にマウスとタッチの差異を吸収
// //     if (e.type === "mousemove") {
// //       event = e;
// //     } else {
// //       event = e.changedTouches[0];
// //     }

// //     //フリックしたときに画面を動かさないようにデフォルト動作を抑制
// //     e.preventDefault();

// //     //マウスが動いた場所に要素を動かす//初期629 - 630 - 793
// //     // console.log(event.pageX - x);
// //     // console.log(drag.offsetWidth);
// //     // console.log(drag.getBoundingClientRect());
// //     // console.log(drag.getBoundingClientRect().width);
// //     // console.log(event.pageX - x + drag.getBoundingClientRect().width);

// //     if (event.pageX - x + drag.offsetWidth > 793) {
// //       drag.style.left = `${793 - drag.offsetWidth}`
// //     } else if (event.pageX - x < 0) {
// //       drag.style.left = '0px'
// //     } else {
// //       drag.style.top = event.pageY - y + "px";
// //       drag.style.left = event.pageX - x + "px";
// //     }


// //     //マウスボタンが離されたとき、またはカーソルが外れたとき発火
// //     drag.addEventListener("mouseup", mup, false);
// //     // document.getElementById('area').addEventListener("mouseleave", mup, false);
// //     drag.addEventListener("touchend", mup, false);
// //     // document.getElementById('area').addEventListener("touchleave", mup, false);

// //   }

// //   //マウスボタンが上がったら発火
// //   function mup(e) {
// //     let drag = document.getElementsByClassName("drag")[0];

// //     console.log(this.style.background = 'none');

// //     //ムーブベントハンドラの消去
// //     document.getElementById('area').removeEventListener("mousemove", mmove, false);
// //     drag.removeEventListener("mouseup", mup, false);
// //     document.getElementById('area').removeEventListener("touchmove", mmove, false);
// //     drag.removeEventListener("touchend", mup, false);

// //     drag.classList.remove("drag");
// //   }



// //   return false;
// //   }


// export class Print extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       text: ''
//     }
//   }

//   componentDidMount() {

//     for (let i = 0; i < 100; i++) {
//       text(i)
//     }
//     function text(num) {
//       return (
//         <>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 64}px`, left: '630px', fontSize: '20px' }}>医療助成</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 162}px`, left: '230px' }}>令和 2</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 162}px`, left: '295px' }}>1</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 133}px`, left: '537px' }}>13</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 134}px`, left: '635px' }}>305.048.1</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 160}px`, left: '588px', letterSpacing: '1rem' }}>01130010</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 180}px`, left: '550px' }}>01130011</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 205}px`, left: '545px', border: '1px solid black', borderRadius: '50%', height: '1rem', width: '1rem' }}></div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 204}px`, left: '599px', border: '1px solid black', borderRadius: '50%', height: '0.6rem', width: '1.8rem' }}></div>

//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 182}px`, left: '142px', letterSpacing: '10.5px' }}>01130012</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 182}px`, left: '372px', letterSpacing: '10.5px' }}>0113003</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 204}px`, left: '142px', letterSpacing: '10.5px' }}>01130014</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 204}px`, left: '372px', letterSpacing: '10.5px' }}>0113005</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 226}px`, left: '142px', letterSpacing: '10.5px' }}>01130016</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 226}px`, left: '372px', letterSpacing: '10.5px' }}>0113007</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 258}px`, left: '200px' }}>山田 太郎</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 250}px`, left: '390px' }}>&#12306;170-0001</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 260}px`, left: '390px' }}>東京都豊島区池袋2-2-2 サン池袋２</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 274}px`, left: '630px' }}>電話番号0120-000-000</div>
//           {/* <input className="drag-and-drop" id="" placeholder='0120-000-000' style={{ top: `${1121*num+274px`, left: '650px', fontSize: '10px' }} /> */}
//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 538}px`, left: '130px', fontSize: '15px' }}>
//             &#9312;
//             &#9313;
//             &#9314;
//             &#9315;
//             &#9316;
//             &#9317;
//             &#9318;
//             &#9319;
//             &#9320;
//             &#9321;
//             &#9322;
//             &#9323;
//             &#9324;
//             &#9325;
//             &#9326;
//             &#9327;
//             &#9328;
//             &#9329;
//             &#9330;
//             &#9331;
//             &#12881;
//             &#12882;
//             &#12883;
//             &#12884;
//             &#12885;
//             &#12886;
//             &#12887;
//             &#12888;
//             &#12889;
//             &#12890;
//             &#12891;
//           </div>

//           <div className="drag-and-drop" id="" style={{ top: `${1121 * num + 296}px`, left: '370px', transform: 'scale(0.8)', transformOrigin: 'right', width: '24rem' }}>
//             (1)左手を地面いついた時、左手首を捻り捻挫した。(2)左手を地面いついた時、左手首を捻り捻挫した。<br />transform:'scale(0.8)を使用した場合、用紙の左右でtransformOriginのright leftを変更する
//           </div>
//         </>

//       )
//     }
//   }

//   render() {
//     return (
//       <div id="print"></div>
//     )
//   }
// }

// export class Printset extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       num: 0,
//       text: 'afg'
//     }
//   }

//   componentDidMount() {
//     document.getElementById('sidebar').style.display = 'none'
//     new Dad()

//   }
//   render() {
//     return (
//       <>
//         <div id="area">
//           {/* <div>Printset</div> */}
//           <img className="pict" src={Pict} alt="" width={'793px'} />
//           {/* <div className="drag-and-drop" id="red-box">赤rrasereteytrutidsay</div>
//           <div className="drag-and-drop" id="blue-box">青</div>
//           <div className="drag-and-drop" id="yellow-box">黄</div> */}
//           <div className="drag-and-drop" id="" style={{ top: '64px', left: '630px', fontSize: '20px' }}>医療助成</div>
//           <div className="drag-and-drop" id="" style={{ top: '162px', left: '230px' }}>令和 2</div>
//           <div className="drag-and-drop" id="" style={{ top: '162px', left: '295px' }}>1</div>
//           <div className="drag-and-drop" id="" style={{ top: '133px', left: '537px' }}>13</div>
//           <div className="drag-and-drop" id="" style={{ top: '134px', left: '635px' }}>305.048.1</div>
//           <div className="drag-and-drop" id="" style={{ top: '160px', left: '588px', letterSpacing: '1rem' }}>01130010</div>
//           <div className="drag-and-drop" id="" style={{ top: '180px', left: '550px' }}>01130011</div>
//           <div className="drag-and-drop" id="" style={{ top: '205px', left: '545px', border: '1px solid black', borderRadius: '50%', height: '1rem', width: '1rem' }}></div>
//           <div className="drag-and-drop" id="" style={{ top: '204px', left: '599px', border: '1px solid black', borderRadius: '50%', height: '0.6rem', width: '1.8rem' }}></div>

//           <div className="drag-and-drop" id="" style={{ top: '182px', left: '142px', letterSpacing: '10.5px' }}>01130012</div>
//           <div className="drag-and-drop" id="" style={{ top: '182px', left: '372px', letterSpacing: '10.5px' }}>0113003</div>
//           <div className="drag-and-drop" id="" style={{ top: '204px', left: '142px', letterSpacing: '10.5px' }}>01130014</div>
//           <div className="drag-and-drop" id="" style={{ top: '204px', left: '372px', letterSpacing: '10.5px' }}>0113005</div>
//           <div className="drag-and-drop" id="" style={{ top: '226px', left: '142px', letterSpacing: '10.5px' }}>01130016</div>
//           <div className="drag-and-drop" id="" style={{ top: '226px', left: '372px', letterSpacing: '10.5px' }}>0113007</div>
//           <div className="drag-and-drop" id="" style={{ top: '258px', left: '200px' }}>山田 太郎</div>
//           <div className="drag-and-drop" id="" style={{ top: '250px', left: '390px' }}>&#12306;170-0001</div>
//           <div className="drag-and-drop" id="" style={{ top: '260px', left: '390px' }}>東京都豊島区池袋2-2-2 サン池袋２</div>
//           <div className="drag-and-drop" id="" style={{ top: '274px', left: '630px' }}>電話番号0120-000-000</div>
//           {/* <input className="drag-and-drop" id="" placeholder='0120-000-000' style={{ top: '274px', left: '650px', fontSize: '10px' }} /> */}
//           <div className="drag-and-drop" id="" style={{ top: '538px', left: '130px', fontSize: '15px' }}>
//             &#9312;
//             &#9313;
//             &#9314;
//             &#9315;
//             &#9316;
//             &#9317;
//             &#9318;
//             &#9319;
//             &#9320;
//             &#9321;
//             &#9322;
//             &#9323;
//             &#9324;
//             &#9325;
//             &#9326;
//             &#9327;
//             &#9328;
//             &#9329;
//             &#9330;
//             &#9331;
//             &#12881;
//             &#12882;
//             &#12883;
//             &#12884;
//             &#12885;
//             &#12886;
//             &#12887;
//             &#12888;
//             &#12889;
//             &#12890;
//             &#12891;
//           </div>

//           <div className="drag-and-drop" id="" style={{ top: '296px', left: '370px', transform: 'scale(0.8)', transformOrigin: 'right', width: '24rem' }}>
//             (1)左手を地面いついた時、左手首を捻り捻挫した。(2)左手を地面いついた時、左手首を捻り捻挫した。<br />transform:'scale(0.8)を使用した場合、用紙の左右でtransformOriginのright leftを変更する
//           </div>

//           {/* ２枚目 */}
//           <img className="pict" src={Pict} alt="" width={'793px'} style={{position:'absolute' ,top:`${1122 * 300}px`}}/>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 64}px`, left: '630px', fontSize: '20px' }}>医療助成</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 162}px`, left: '230px' }}>令和 2</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 162}px`, left: '295px' }}>1</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 133}px`, left: '537px' }}>13</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 134}px`, left: '635px' }}>305.048.1</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 160}px`, left: '588px', letterSpacing: '1rem' }}>01130010</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 180}px`, left: '550px' }}>01130011</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 205}px`, left: '545px', border: '1px solid black', borderRadius: '50%', height: '1rem', width: '1rem' }}></div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 204}px`, left: '599px', border: '1px solid black', borderRadius: '50%', height: '0.6rem', width: '1.8rem' }}></div>

//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 182}px`, left: '142px', letterSpacing: '10.5px' }}>01130012</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 182}px`, left: '372px', letterSpacing: '10.5px' }}>0113003</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 204}px`, left: '142px', letterSpacing: '10.5px' }}>01130014</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 204}px`, left: '372px', letterSpacing: '10.5px' }}>0113005</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 226}px`, left: '142px', letterSpacing: '10.5px' }}>01130016</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 226}px`, left: '372px', letterSpacing: '10.5px' }}>0113007</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 258}px`, left: '200px' }}>山田 太郎</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 250}px`, left: '390px' }}>&#12306;170-0001</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 260}px`, left: '390px' }}>東京都豊島区池袋2-2-2 サン池袋２</div>
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 274}px`, left: '630px' }}>電話番号0120-000-000</div>
//           {/* <input className="drag-and-drop" id="" placeholder='0120-000-000' style={{ top: `${1122*1+20074px`, left: '650px', fontSize: '10px' }} /> */}
//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 538}px`, left: '130px', fontSize: '15px' }}>
//             &#9312;
//             &#9313;
//             &#9314;
//             &#9315;
//             &#9316;
//             &#9317;
//             &#9318;
//             &#9319;
//             &#9320;
//             &#9321;
//             &#9322;
//             &#9323;
//             &#9324;
//             &#9325;
//             &#9326;
//             &#9327;
//             &#9328;
//             &#9329;
//             &#9330;
//             &#9331;
//             &#12881;
//             &#12882;
//             &#12883;
//             &#12884;
//             &#12885;
//             &#12886;
//             &#12887;
//             &#12888;
//             &#12889;
//             &#12890;
//             &#12891;
//           </div>

//           <div className="drag-and-drop" id="" style={{ top: `${1122 * 300 + 296}px`, left: '370px', transform: 'scale(0.8)', transformOrigin: 'right', width: '24rem' }}>
//             (1)左手を地面いついた時、左手首を捻り捻挫した。(2)左手を地面いついた時、左手首を捻り捻挫した。<br />transform:'scale(0.8)を使用した場合、用紙の左右でtransformOriginのright leftを変更する
//           </div>
          
//         </div>




//         <div id='setting'>
//           <div>
//             <div>設定</div>
//             <div className="rows">
//               <div>テンプレート：</div>
//               <select name="" id="" style={{ width: '50%' }}>
//                 <option value="">aaa</option>
//                 <option value="">iii</option>
//                 <option value="">uuu</option>
//               </select>
//             </div>
//             <div className='rows'>
//               <div>フォントサイズ：</div>
//               <input type="tel" name="" id="" defaultValue={'px'} />
//             </div>
//             <div className='rows'>
//               <div>文字間隔：</div>
//               <input type="tel" name="" id="" defaultValue={'step : 0.5 or 0.1'} />
//             </div>
//             <div className='rows'>
//               <div>X座標：</div>
//               <input type="tel" name="" id="position_x" />
//             </div>
//             <div className='rows'>
//               <div>Y座標：</div>
//               <input type="tel" name="" id="position_y" />
//             </div>
//             <div className='rows'>
//               <div>テキスト：</div>
//               <textarea name="" id="sample_text" cols="70" rows="10"></textarea>
//             </div>

//           </div>

//           <div>Chrome : 印刷化</div>
//           <div>Edge : 印刷化</div>
//           <div>Safari : 余白がつく</div>
//           <div>Firefox : 余白がつく</div>
//         </div>

//         {/* <div style={{height:336300}}>aaa</div> */}
//       </>
//     )
//   }
// }

// // export default Printset 