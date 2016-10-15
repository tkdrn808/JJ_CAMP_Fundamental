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

console.log('%c------------------------------', 'color: #3d9a21');

var rank = 1;

// rank 조건이 1이라면 블록문 {} 수행
if ( rank === 1 ) {
    console.log('rank is One.');
}
// rank 조건이 2라면 블록문 {} 수행
else if ( rank === 2 ) {
    console.log('rank is Two.');
}
// rank 조건이 3이라면 블록문 {} 수행
else if ( rank === 3 ) {
    console.log('rank is Three.');
}
// rank 조건이 4라면 블록문 {} 수행
else if ( rank === 4 ) {
    console.log('rank is Four.');
}
// rank 조건이 1, 2, 3, 4가 아니라면 블록문 {} 수행
else {
    console.log('rank isn\'t One, Two, Three, Four.');
}

console.log('%c------------------------------', 'color: #c21359');


// range 변수 선언 및 숫자 값 복사
var range = 123;

// if 조건 구문 (조건 개수: 3개)
if ( range < 8 ) {
  console.log('range 값은 8보다 작은 수입니다.');
}
// 논리 연산자
// 그리고(AND) &&       A && B
// 또는(OR)   ||       A || B
else if ( range >= 8 && range <= 27 ) {
  console.log('range 값은 8 이상, 27 이하의 수입니다.');
} else {
  console.log('range 값은 27 보다 큰 수입니다.');
}
// ----------------------------------------------------
// 대입(할당) 연산자
// = 오른편에 있는 값을 왼편의 변수에 대입(할당)하다 [값 복사|참조]

// ----------------------------------------------------
// 비교 연산자
// Compare Operator

// > 보다 크다
// < 보다 작다
// >= 보다 크거나 같다
// <= 보다 작거나 같다
// == 값이 같다   (자동으로 형 변환 발생! 안티 패턴)
// === 값이 같다  (자동으로 형 변환 발생 X! 굿 패턴) 엄격!!!
// != 값이 다르다  (자동으로 형 변환 발생! 안티 패턴)
// !== 값이 다르다 (자동으로 형 변환 발생 X! 굿 패턴) 엄격!!!