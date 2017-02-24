/*! timeControl.js © yamoo9.net, 2016 */

// 실행 함수
// function callMe() { console.log('Call Me.'); }

// 시간을 제어하는 전역 함수(Global Functions)
// window {} 객체의 메소드

// 일정 주기(Interval) 마다 반복하여 실행되는 함수
// while () {} 느낌
// callback: 실행 함수
// ms: 주기, 밀리초 (1초 === 1000밀리초)
// window.setInterval(callback, ms);
function playAnimation( callback, time ) {
  return window.setInterval( callback, time );
}

// var anim_id = playAnimation( callMe, 2000 );

// 주기에 따른 반복 실행을 멈추고 싶을 때
function stopAnimation(id) {
  window.clearInterval(id);
}

// button.onclick = function() {
//   stopAnimation(anim_id);
// };

// 특정 시간(Event)에 되면, 한 번 실행되는 함수
// if () {} 느낌
// callback: 실행 함수
// ms: 주기, 밀리초 (1초 === 1000밀리초)
// window.setTimeout(callback, ms);
// window.setTimeout( callMe, 1000 );