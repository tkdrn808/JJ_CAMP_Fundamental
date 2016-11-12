/*! carousel-ui-component.js © yamoo9.net, 2016 */

// 전역 변수
// global scope variable
// 전역(window) 공간에 정의된 변수
var mouse = '매직 마우스';
console.log(1, mouse);
// 지역 변수
// local scope variable
// {
function localScope() {
  var mouse = '돌핀 마우스';
  console.log(2, mouse);
}
localScope();
// }
console.log(3, mouse);
// 매개 변수
// parameter
function callMe(who, when, where, how) {
  // 매개변수는 해당 함수의 내부에서 접근이 가능하다.
  // console.log('a', who);
  console.log('who:', who);
  console.log('when:', when);
  console.log('where:', where);
  console.log('how:', how);
}
callMe('boy', 'yesterday', 'school', 'using smartphone');
// console.log('b', who); // Reference Error

// 멤버 변수
// 객체가 소유한 멤버
// 객체란? 속성의 집합
var phone = {
  'name': 'iPhone',
  'version': 7
}