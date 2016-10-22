/*! condition.js © yamoo9.net, 2016 */

// [자바스크립트 데이터 유형]
//   원시 데이터 유형 (값 복사)
//   참조 데이터 유형 (값 참조)

// [자바스크립트 조건문]
// if
// if ~ else
// if ~ else if ~ else

// 논리 연산자(&&, ||)를 사용한 조건 처리

// 3항 연산자(? :)를 사용한 조건 처리

// switch case break default 문




///////////////////////////////
// switch case break default //
///////////////////////////////

// if 문 비교
// if (조건) { 실행문 }

// switch 문
// switch (expression) {
//   case 1:
//     실행 구문
//   case 2:
//   case 3:
// }

var console_style = 'color: #7045cf; font-size: 1.2rem;';
var condition = 'pen'; // cup, pen, double, remote, other...

switch( condition ) {
  case 'cup':
    console.log('case is... %cthis is cup.', console_style);
  break;
  case 'pen':
    console.log('case is... %cthis is pen.', console_style);
  break;
  // 상황이 2개 이상일 경우 아래와 같이 case 구문을 사용할 수 있다.
  case 'double':
  case 'remote':
    console.log('case is... %cthey are remote and double.', console_style);
  break;
  default:
    console.log('case is... %cthis isn\'t cup, pen, remote.', console_style);
}


var count = '9';
var counter = [8, 5, 2, -10, 9];
switch(count) {
  // 아래 case의 경우 결과 값은 true이기 때문에
  // count 값과 일치하지 않게 된다.
  // case count > 10:
  // switch 구문에서는 값 비교 시 엄격한 비교를 수행한다.
  case counter[counter.length - 1]:
    // console.log('count는 10보다 크다.');
    console.log('count는 숫자 9이다.');
  break;
  case count < 10:
    console.log('count는 10보다 작다.');
  break;
}