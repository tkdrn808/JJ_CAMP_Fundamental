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

// loop(2); // 3, 4, 5, 6, 7, 8, 9, 10 (정지)


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
function end(callback) {
  window.clearTimeout(timeout_id);
  if (typeof callback === 'function') {
    callback();
  }
}

// 함수 선언
function fnc() {}
// 함수 표현
var fnct = function() {};

// 팩토리얼 함수(재귀 함수)
var factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
  // if ( n < 2 ) {
  //   n = 1;
  // } else {
  //   n = n * fac(n - 1);
  // }
  // return n;
};

// function factorial(n) {
//   return n < 2 ? 1 : n * factorial(n - 1);
// }

var fac_result = factorial(10);

console.log('fac_result:', fac_result);

// console.log(typeof factorial); // 'function'
// console.log(typeof fac);       // 'undefined'

// map(a, f)
// 첫번째 인자는 처리를 할 배열(집합)
// 두번째 인자는 첫번째 인자인 배열의 각 원소에 뭔가를 처리하는 함수
// 반환 값은 처리된 배열을 반환하는 함수
function map(a, f) {
  var result = []; // 함수 실행 초기에 반환될 배열 생성
  for (var i=0, l=a.length; i<l;i++) {
    result.push( f(a[i]) );
  }
  return result;
}

var my_list = [ 4, 9, 12, 7 ];
var excuteFn = function(n) {
  return ( n * n ) / (n - 2);
};

var result_excute_map = map(my_list, excuteFn);

console.log(result_excute_map); // [???, ???, ???]


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
