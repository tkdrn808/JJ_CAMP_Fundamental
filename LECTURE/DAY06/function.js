/*! function.js © yamoo9.net, 2016 */

// 자바스크립트 함수
// 함수? function (기능, 코드 묶음, 모듈)

// 자바스크립트 함수는 객체이다.
// 1급 객체(First Class Object)이다.
// 함수는 객체이므로 속성을 가질 수 있다.
// 이유는 `객체`란? `속성의 집합`이기 때문이다.
// 함수는 유일하게 호출 가능(코드 재사용, 발동 시기(이벤트)를 조정)한 객체이다.

// 함수 정의
// 함수 정의 목적: 일련의 반복되는 코드 묶음으로 재사용할 목적이다.
// function 함수이름() {}

function aboutFunction() {
  console.log('this is function object.');
  console.log('function has properties.');
  console.log('function will call object.');
}

// 함수 이름 호출(실행)
typeof aboutFunction(); // 'undefined'

// 함수 이름 ( 호출 X, 실행 X )
typeof aboutFunction; // 'function'
