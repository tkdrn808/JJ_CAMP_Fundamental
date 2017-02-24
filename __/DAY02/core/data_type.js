/*! data_type.js © yamoo9.net, 2016 */

// 숫자(Number) 유형
// 숫자 상수 (실수, 소수, 정수, ..)
var x = 3;
var y = 1.234;
var z = x + y;

// 문자(String) 유형
// 문자 상수 "", ''로 감싸진 글
var k   = 'Doctor K';
var rem = "Root Equal M";
var me  = 'I\'m a Boy.'; // Escape 처리 (Back Slash `\` 사용)
var you = "You're a Girl.";

// 논리(Boolean) 유형
// 논리 상수 true, false
var is_showing    = false;
var is_expanded   = true;    // boolean
var is_compressed = 'false'; // string
var toilet;                  // undefined
var carousel = null;         // null

// Event property, handler, binding
// 이벤트 추가/제거
// [추가, 연결] 이벤트 속성에 함수(핸들러)를 설정
// [제거] 이벤트 속성에 초기 값인 null을 대입

// 문서 객체를 doc 변수에 참조한다.
var doc = document;

// 초기 이벤트 속성 값은 null 이다.
console.log('doc.onclick:', doc.onclick); // null

var oneClick = function() {
  console.log('clicked document');
  // 1회 클릭 후, 이벤트 속성에서 핸들러를 제거한다.
  doc.onclick = null;
};

// onclick(); // 함수 실행 구문

// 1회 클릭 시 처리될 함수 연결
doc.onclick = oneClick;


