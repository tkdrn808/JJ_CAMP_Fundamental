// 지난 시간 수업 내용 정리

// ------------------------------------

// 변수와 상수
// 값 복사 vs 참조

// 문서객체모델 API를 통해 문서 객체 선택 및 조작
// 문서대상객체.이벤트속성=이벤트핸들러(함수)

// 데이터 유형별 다른 유형으로 변경하는 방법
//   숫자 -> 문자
//   문자(숫자형) -> 숫자
//   문자(단위) -> 숫자 -> 산술연산 -> 문자(단위)

// Boolean 데이터로 유형 변경
// 방법 1. Boolean() 함수 사용
// 방법 2. !! 를 데이터 앞에 붙여주는 것 (애용)
var num = 101,
    str = 'variable vs constant',
    nu  = null,
    un; // undefined

console.log('num:', num);
console.log('num:', typeof num);
console.log('str:', str);
console.log('str:', typeof str);
console.log('nu:', nu);
// 설계 오류!!! null은 객체가 아님에도 typeof로 결과를 출력했을 때
// 객체(Object)라고 결과를 반환한다.
console.log('nu:', typeof nu);
console.log('un:', un);
console.log('un:', typeof un);

console.log( Boolean(num) ); // true
console.log( Boolean(str) ); // true
console.log( Boolean(nu) );  // false
console.log( Boolean(un) );  // false

console.log( !num ); // !true -> false
console.log( !str ); // !true -> false
console.log( !nu );  // !false -> true
console.log( !un );  // !false -> true

console.log( !!num ); // true
console.log( !!str ); // true
console.log( !!nu );  // false
console.log( !!un );  // false

// undefined, null 데이터 유형 변경 방법
// 문자
// 'null', undefined + '', String(null)
// 불리언
// !null, !!undefined
// 숫자
// null + 9 => 9, Number(null)


/**
 * --------------------------------
 * 참조형 데이터
 * 변수에 값을 할당할 경우 복사가 아닌,
 * 값 참조가 수행된다.
 * 참조가 되는 데이터 유형은 객체이다.
 * 일반적인 객체(Plain Object)
 * 배열 객체(Array Object)
 * 함수 객체(Function Object)
 * ----------------------------- */

// ---------------------------------------------
// 함수 객체
// 이름이 있는 함수(기명 함수) vs 이름이 없는 함수(무명, 익명 함수)
// 함수 선언식 vs 함수 표현식

// 함수 표현식
var getSomeMoney = function(){}; // 함수 값(표현식)

// 왜? 함수를 만들어야 하나?
// isNaN() 사용이 혼란을 가미하므로
// 쉽게 이해하고 사용 가능하도록 사용자정의 함수를 만든다.
// 함수 선언식
function isNumber(value) {
  return !isNaN(value);
}

/**
 * --------------------------------
 * 함수를 사용하는 방법 3가지
 * 1. new Function('함수 실행 코드');
 * 2. var fn = function(){}; 익명(무명)함수: 이름이 없는 함수 (함수 표현식)
 * 3. function fn(){} 기명함수: 이름이 정의(선언)된 함수
 */

// 객체를 생성하는 권한을 가진 함수
// 생성자(Constructor) 함수
// 생성된 객체(Instance)
// new Creater('person');

/**
 * --------------------------------
 * 변수, 함수
 * 속성, 메소드 구분
 * ----------------------------- */
// 변수
var eyes = '눈';
var ears = '귀';
// 함수
var crying = function() {
 console.log('울다');
};
// 객체
var person = {};
// 변수와 함수를 객체가 소유하게 되면
// 변수는 객체의 `속성`이라고 불리게 된다.
// 함수는 객체의 속성임과 동시에 특별히 `메소드`라고 부른다.
person.eyes = eyes;     // 속성
person.crying = crying; // 메소드

// console.dir(person);

/**
 * --------------------------------
 * 배열 객체(Array Object)
 * 배열 객체는 여러 개의 데이터를 기억할 수 있는
 * 공간을 제공하는 객체이다.
 * 생성된 배열 객체는 기억하기 위해 변수에 할당한다.
 * ----------------------------- */

// 배열을 사용하지 않았을 때 연관된 복수 데이터 관리 (어렵다)
var navigation_item_01 = 'Home';
var navigation_item_02 = 'About';
var navigation_item_03 = 'Works';
var navigation_item_04 = 'Products';
var navigation_item_05 = 'Contact';

// 배열을 사용할 때 연관된 복수 데이터 관리 (쉽고 효율)
var navigation_items = new Array('Home', 'About', 'Works', 'Products', 'Contact');

console.log( 'navigation_items:', navigation_items );