/*! review.js © yamoo9.net, 2016 */

/*
자바스크립트 변수
런타임(실행) 중에 값을 임의로 자유롭게 변경 가능

var 변수 이름;

---

자바스크립트 자료 유형

1. 원시 데이터 유형 (복사)
  1-1. null
  1-2. undefined
  1-3. number literal 9, 10
  1-4. string literal 'string'
  1-5. boolean literal true

2. 참조 데이터 유형 (참조)
  2-1. Object {}
  2-2. Array []
  2-3. Function function(){}

---

데이터 유형을 검증

1. typeof [ null, [] 유형을 올바르게 체크해주지 않는다. ]
2. instanceof [ 원시 데이터 유형의 경우는 올바르게 체크해주지 않는다. ]
3. .constructor [ 객체가 아닌 유형의 경우에서는 사용 불가 ]
4. 언어 차원에서 지원해주지 않는 유형 체크 함수 (사용자가 제작)

---

자바스크립트 구문

조건 구문

1. if, else, else if
2. switch case break default
3. ? :
4. &&, ||


반복 구문

1. while () {}
2. do {} while ();
3. for (선언;확인;변경) {} => 값의 집합(배열)
4. for (속성 in 객체)     => 속성의 집합(객체)
*/