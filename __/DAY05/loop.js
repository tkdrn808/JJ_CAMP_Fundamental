/*! loop.js © yamoo9.net, 2016 */

// 자바스크립트 반복구문 1. while문
// while문은 ()의 조건 값이 참일 경우 {} 내부의 코드를 반복 처리
// while문을 사용할 경우, 주의 사항은 조건 값이 특정 시점에 변경되어야 한다는 사실.
// 그렇지 않을 경우 무한 반복에 빠지게 된다.

// while(조건) {
//   실행 구문;
//   조건 변경;
// }

var condition = true;
var count = 5;
// 5회 반복 후에 반복문이 종료되도록 프로그래밍하시오.
// while( condition ) {
//   console.log('condition is true.');
//   count = count - 1;
//   // 5, 4, 3, 2, 1
//   if ( count <= 0 ) {
//     condition = !condition;
//   }
// }

// while -> do ~ while 변경
condition = false;
do {
  console.log('condition is true.');
  count = count - 1;
  // 5, 4, 3, 2, 1
  if ( count <= 0 ) {
    condition = !condition;
  }
} while( condition );

// while( 조건 ) { 조건이 참일 동안 코드를 반복 실행 }
// do { 조건의 참/거짓과 상관 없이 1회는 반드시 실행 } while(조건)

////////////////////
// for문의 기본 형식 //
////////////////////

// for(초기 변수 선언; 선언된 변수를 검증(조건); 변수의 값을 변화) {
//   실행문;
// }
// 반복자: iterator
for( var i=0; i<10; i++) {
  console.log('i:', i);
}
// 위 for문(정석)과 아래 for문(응용)은 동일하게 동작한다.
// var i = 0;
// var ten = 10;
var i=0, ten=10;
for( ; i<ten; ) {
  console.log('i:', i);
  // i++;
  // i = i + 1;
  // i += 1;
}

// while 구문과 비교
// 초기 변수 선언;
// while( 선언된 변수를 검증(조건)) {
//   실행문;
//   변수의 값을 변화;
// }


////////////////////
// for ~ continue //
////////////////////
var a = ['a', 'b', '', null, 'z'], b = [];

for( var i=0; i<a.length; i++ ) {
    if ( i === 1 || i === 3 ) { continue; }
    // console.log(i);
    b.push(a[i]);
}
console.log('b []:', b); // ['a', '', 'z']

// 위 처리 결과와 아래 처리 결과는 동일하다.

// for( var i=0; i<a.length; i+=2 ) {
//     // console.log(i);
// }


/////////////////
// for ~ break //
/////////////////
var a = ['a', 'b', '', null, 'z'], b = [];

for( var i=0; i<a.length; i++ ) {
  // continue와 달리 break를 만나면 for문은 종료된다.
  if ( i === 1 || i === 3 ) { break; }
  // console.log(i);
  b.push(a[i]);
}
console.log('b []:', b); // ['a']