/*! condition.js © yamoo9.net, 2016 */

// 자바스크립트 조건 구문
// if, switch, &&, ||

// if (조건) {
//    조건이 참이면 블록문 실행
// }

console.log('%c------------------------------', 'color: #3d9a21');

var condition = true;

if(condition) {
  console.log('condition is TRUE.');
} else {
  console.log('condition is FALSE.');
}

console.log('%c------------------------------', 'color: #3d9a21');

// 조건 변경
condition = !condition; // true -> false

if(condition === true) {
  console.log('condition is TRUE.');
} else {
  console.log('condition is FALSE.');
}
