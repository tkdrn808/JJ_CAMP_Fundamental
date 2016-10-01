/**
 * --------------------------------
 * 자바스크립트 변수 정의 패턴
 * ----------------------------- */

// ---------------------------------------------
// 패턴 1. 선언만 하는 경우
// undefined 원시 데이터 유형 값으로 변수에 할당(복제)된다.

// var 키워드를 한 번만 사용하는 방법
var tisue, remote_control, cup, mike;
// var 키워드를 변수 이름마다 사용하는 방법
var tisue;
var remote_control;
var cup;
var mike;

// 선언된 이후에 값(Data)을 변수에 할당한다.
tisus          = '티슈'; // 문자열
remote_control = true;  // 불리언(논리)
cup            = 320;   // 숫자
mike           = null;  // Null "비어 있다"

// 패턴 2.
// 선언과 동시에 값을 할당(대입, =)하는 경우
var html = document.documentElement; // <html> 문서 객체 {참조형 데이터, 값 참조}
var body = document.body; // Legacy 방법(웹의 초창기에 사용되던... 하지만 지금도 빈번하게 사용되는 유물)

// ※ var 키워드를 한 번만 사용할 경우
var html = document.documentElement,
    body = document.body;

// 아래 코드와 위 코드는 역할은 동일하나, 사용하는 방법의 차이가 있을 뿐.
var html, body;
html = document.documentElement;
body = document.body;
