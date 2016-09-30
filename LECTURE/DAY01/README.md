###### JJ 첫걸음 CAMP

# DAY01

### HTML + JavaScript 작성 방법

- 스크립트 파일을 로드하거나, 작성하는 위치는 `<head>`, `<body>` 안쪽
- 외부의 JavaScript 파일을 호출(Load)
- Front-End 개발 환경에서 자바스크립트 로드 시에 주의할 점!
- 불러오는 순서가 매우 중요(의존성 관리)
- 자바스크립트 호출 실행 흐름 (HTML 해석을 멈추고, JavaScript 코드를 해석)

### 인라인 스타일/스크립트 vs 분리된 스크립트

```html
<!-- HTML + CSS + JavaScript 한 몸처럼 작성된 안좋은 경우 -->
<button
  type="button"
  style="margin-bottom: 10px; padding:1em; background:#7045cf; color:white; border:none; border-radius:4px"
  onclick="document.body.style.background='#0c0814';"
>
click me</button>

<!-- HTML + CSS + JavaScript 좋은 방향으로 개선한 경우 -->
<div>
    <button id="target" type="button">GOOD Click</button>
</div>
<script src="js/merge-app.js"></script>
```

```js
// merge-app.js
// 문서 객체를 찾아와 변수에 할당(대입)
var body = document.body;
var button = document.getElementById('target');

// 수행할 일(기능)을 참조하는 변수 선언
// 기능(Function) 수행
var buttonClick = function(){
  body.style.background='#0c0814';
};

// 참조된 변수를 사용하여
// 자바스크립트 프로그래밍 코드 작성(동작 수행)
button.onclick = buttonClick;
```

### 변수 선언

```js
// 변수 선언
var markup_language,    // 구조 언어
    style_language,     // 표현 언어
    behavior_language;  // 동작 언어
// 선언된 변수에 값(문자열 데이터)을 할당(대입)
markup_language   = 'HTML';
style_language    = 'CSS';
behavior_language = 'JavaScript';

// var markup_language_eval   = '흥미롭다';
// var style_language_eval    = '훌륭하다';
// var behavior_language_eval = '아주 멋지다';

var markup_language_eval   = '흥미롭다',
    style_language_eval    = '훌륭하다',
    behavior_language_eval = '아주 멋지다';
```

### 선언된 변수 값을 HTML 문서에 쓰기

```js
document.write('<h1>Language of World Wide Web</h1>');
document.write('<p>'+ markup_language +'은 '+ markup_language_eval +'.</p>');
document.write('<p>'+ style_language +'는 '+ style_language_eval +'.</p>');
document.write('<p>'+ behavior_language +'는 '+ behavior_language_eval +'.</p>');
```

```js
/**
 * --------------------------------
 * JavaScript Core
 * --------------------------------
 * 절차 방식으로 학습
 * 기초 문법부터 차근차근
 * 복습! 복습! 복습!
 * ----------------------------- */

// 실행 구문 1
// 초기 변수 선언
// 방법 1.
var x, y, z;
// 방법 2.
// var x;
// var y;
// var z;

// 선언된 변수에 값을 할당(대입)
// 변수 x 에 숫자 10 상수 값을 대입
x = 10;
// 방법 3.
// var x = 10;
// 변수 y의 연산 결과는
// 변수 x에 숫자 10을 더한 값이다.
y = x + 10; // 20
// var y = x + 10; // 20

// 변수 z에 변수 y를 활용한 수식 적용
z = y * y - 100;
// var z = y * y - 100;

// 콘솔(console)에 기록(log)하고 싶다.
console.log('x:', x); // x = 10
console.log('y:', y); // y = 20
console.log('z:', z); // z = 300

// --------------------------------

// 실행 구문 2

// 변수의 상태가 변경되었다.
x = -19;

y = x + 10; // ????

console.log('x:', x); // x = -19
console.log('y:', y); // y = -19 + 10 = -9
console.log('z:', z); // z = ????

// --------------------------------

// var 키워드를 한번만 사용하는 코딩 패턴(방법)
// var singleton pattern
var a = 1, b = 2, c = 9;
// a = 1;
// b = 2;
// c = 9;

var man    = '남자',
    woman  = '여자',
    people = '사람들';
// man   = '남자';
// woman = '여자';
// people= '사람들';

// --------------------------------

// 변수 이름 작성 규칙

// 규칙 1.
// 이름 맨 앞에 숫자가 오면 안된다.
// var 9tree; //오류 발생
// 하지만 맨 앞만 아니면 괜찮다.
var t9;
// 규칙 2.
//  이름 사이에 공백(띄어쓰기)은 허용하지 않는다.
// var my name; // 오류 발생
//  이름 사이는 공백 대신에 밑줄을 사용한다.
var my_name;
// 규칙 3.
// 이름 작성 시, 특수문자는 $, _ 만 허용
// var ^^#@_name;
// 규칙 4.
// 변수 이름은 모두 대문자를 사용해서 작성하지 않는다.
// 오류가 발생하는 것은 아니지만...
// 관례적으로 이름이 모두 대문자일 경우, 상수로 인식한다.
// var SMART_PHONE;

// 위 변수는 변수(변하는 수)가 아닌 상수를
// 나타내는 식별법이다.
// const STORAGE;

// 고로 대문자를 변수 이름에 사용하는 경우는
// 카멜 케이스(camelCase) 표기법을 따르는 경우가 많다.
var smartPhone;

// 웹 브라우저에 경고 창을 띄운다.
// 오늘날 자주 사용되지 않는다.
// console.log()가 자주 사용됨.
// window.alert('javascript 코드 실행');

// --------------------------------
// 자바스크립트 문장은 점으로 연결되어 이루어진다.

// 친구가 커피를 선물하다.
// 친구.선물하다(커피);
// 오브젝트.메서드(아규먼트);
// 객체.동작(전달인자);
```

### 데이터 유형 그리고 값 복사 vs 참조

```js
/**
 *  ------------------------
 *  자바스크립트 데이터 유형
 *  ------------------------
 *  [원시 데이터 유형]
 *  숫자(Number)        2019
 *  문자(String)        '푸르고 깊은 바다', "Design is All. All is Design."
 *  불리언(Boolean, 논리) true, false
 *
 *  [참조 데이터 유형]
 *  배열(Array)
 *  함수(Function)
 *  객체(Object)
 */

// 숫자를 변수에 할당
var current_year = 2016;
// 문자를 변수에 할당
var app_name = 'Fast Campus JJ CAMP';
// 불리언을 변수에 할당
var studing = true;
var sleeping = false;

// ------------------------------------------

// 변수에 값 복사와 참조

// 복사하는 경우
var c_year = current_year;

console.log('current_year:', current_year);
console.log('c_year:', c_year);

// 참조하는 경우
// 참조 데이터 활용
// 배열 데이터
var study_tools = ['pen', 'note'];
// study_tools 변수가 참조한 값을
// class_tools 변수도 참조한 것이다.
var class_tools = study_tools;

console.log('study_tools:', study_tools);
console.log('class_tools:', class_tools);
```