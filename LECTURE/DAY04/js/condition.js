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

// && 두 조건 모두 참일 때만 결과 참
// || 두 조건 중 하나가 참이면 결과 참
// !  불리언 값으로 변경하되, 반전시킴


console.log('%c------------------------------', 'color: #1c6188');

// ----------------------------------------------------
// &&, || 연산자 만으로 조건 구문 처리하는 방법!

var drink; // undefined

// if(!drink) { drink = 'default drink'; }
drink = drink || 'default drink :)';

console.log('drink:', drink);

// if (drink) { drink = 'another drink'; }
drink = drink && 'another drink :(';

console.log('drink:', drink);

// ----------------------------------------------------
// 3항 연산자를 사용한 조건문 처리
// 조건 ? 조건이 참일 경우 실행 : 조건이 거짓일 경우 실행;

var im_hungry = false;

// if ( im_hungry ) {
//   console.log('난 배고파');
// } else {
//   console.log('난 배고프지 않아');
// }

// im_hungry ? console.log('난 배고파') : console.log('난 배고프지 않아');

// 위 결과와 아래 결과는 동일하다.
im_hungry ?
  console.log('난 배고파') :
  console.log('난 배고프지 않아');

// 다중 3항 조건식
// 조건 1 ? 참 : 거짓

// 조건 1 ? 참 : 조건 2 ? 참 : 조건 3 ? 참 : 거짓;

// 조건 1 ?
//    참 :
//    조건 2 ?
//      참 :
//      조건 3 ?
//        참 :
//        거짓;

// 검사, 마법사, 궁수, 엘프, 사냥꾼, 두르이드
var charactor = '두르이드';

// charactor === '사냥꾼' ? console.log('선택된 캐릭터는 사냥꾼이다.') : charactor === '엘프' ? console.log('선택된 캐릭터는 엘프이다.') : charactor === '두르이드' ? console.log('선택된 캐릭터는 두르이드이다.') : charactor === '궁수' ? console.log('선택된 캐릭터는 궁수이다.') : charactor === '검사' ? console.log('선택된 캐릭터는 검사이다.') : console.log('그럼 넌!! 마법사이구나!');

charactor === '사냥꾼' ?
  console.log('선택된 캐릭터는 사냥꾼이다.') :
  charactor === '엘프' ?
    console.log('선택된 캐릭터는 엘프이다.') :
    charactor === '두르이드' ?
      console.log('선택된 캐릭터는 두르이드이다.') :
      charactor === '궁수' ?
        console.log('선택된 캐릭터는 궁수이다.') :
        charactor === '검사' ?
          console.log('선택된 캐릭터는 검사이다.') :
          console.log('그럼 넌!! 마법사이구나!');



