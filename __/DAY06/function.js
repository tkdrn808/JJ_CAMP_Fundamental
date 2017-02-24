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
  console.log('This is a function object.');
  console.log('Function object has an attribute.');
  console.log('Function objects can be invoked later.');
}

// 함수 이름 호출(실행)
typeof aboutFunction(); // 'undefined'

// 함수 이름 ( 호출 X, 실행 X )
typeof aboutFunction; // 'function'

// aboutFunction 함수를 수행할 때 마다
// 함수에 관한 메시지를 순차적으로 하나씩 출력하는 봇(Bot)을 만들자.



// 함수를 만드는 자주 사용되는 방법 2가지

// 1. 함수를 정의하는 방법
function drinkMilk() {
  console.log('밀크를 마시다.');
  // return undefined;
  // return '밀크를 마시다.';
}

// 2. 함수 표현식을 변수에 참조하는 방법
var lookAt = function(){
  console.log('무엇무엇을 응시하다.');
};

// 문서 객체 변수에 참조
var target_btn = document.querySelector('button.target');

// 문서객체.이벤트속성 = 함수이름;
// target_btn.onclick; // null, function(){}

// 문서 요소객체의 이벤트 속성(객체가 소유한 변수)에 함수의 실행 결과 반환 값을 복사/참조
target_btn.onclick = drinkMilk(); // (X)

// 문서 요소객체의 이벤트 속성(객체가 소유한 변수)에 함수를 참조
// 참조된 함수의 실행 시점(Event)은 사용자가 버튼을 클릭했을 때
target_btn.onclick = drinkMilk;   // (O)

// 문서객체.이벤트속성 = 함수값;
target_btn.onmouseenter = function() {
  console.log('버튼에 마우스가 올라갔다.');
};
