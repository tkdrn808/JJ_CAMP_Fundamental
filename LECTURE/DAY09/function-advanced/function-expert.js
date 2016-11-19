/*! function-expert.js © yamoo9.net, 2016 */
'use strict';

////////////////
// 함수 중급 파트
////////////////

// 재귀함수(자신을 다시 호출하는 함수)
function loop(x){
   if ( x >= 10 ) { return; } // 함수 종료
   // 함수 자신을 다시 호출 (재귀)
   x = x + 1;
   console.log(x);
   loop(x);
}

loop(2); // 3, 4, 5, 6, 7, 8, 9, 10 (정지)


///////////////////////////////////////
// 재귀함수를 사용한 start(), end() 시간 제어
///////////////////////////////////////

var timeout_id  = 0;
var start_count = 0;
var start_time  = 1000;

function start() {
  console.log('start_count:', start_count++);
  timeout_id = window.setTimeout(start, start_time);
}
function end() {
  window.clearTimeout(timeout_id);
}

// ----------------------------------------------------

//////////////////////
// 자바스크립트 내장 함수
//////////////////////

// 숫자 객체의 함수들
// 문자 객체의 함수들
// 배열 객체의 함수들
// 함수 객체의 함수들
// 일반 객체의 함수들

//////////////////
// 사용자가 정의 함수
//////////////////
