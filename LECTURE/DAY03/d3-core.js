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

// 왜? 함수를 만들어야 하나?
// isNaN() 사용이 혼란을 가미하므로
// 쉽게 이해하고 사용 가능하도록 사용자정의 함수를 만든다.
function isNumber(value) {
  return !isNaN(value);
}