// [Design, 설계] 참조하고자 하는 문서 객체에 적절한 메모리 이름 공간을 변수 이름으로 설정한다.
// var html          = document.documentElement,
//     body          = document.body,
//     page          = document.getElementById('page'),
//     page_headline = page.getElementsByTagName('h1'),
//     page_child    = page.getElementsByClassName('page-child');

// 코드가 실행되는 시점(Event)을 감지하여 코드를 처리한다.
// 이벤트 프로그래밍

// window 객체의 이벤트 속성(Event Property)
console.log( 'window.onload:', window.onload ); // null [초기 값]

// var action = function() { console.log('ready action!'); };

// 초기화 수행
// 변수 = 함수 값 참조
var initialization = function() {
  var html          = document.documentElement,
      body          = document.body,
      page          = document.getElementById('page'),
      page_headline = page.getElementsByTagName('h1'),
      page_child    = page.getElementsByClassName('page-child');

  console.log('html:', html);
  console.log('body:', body);
  console.log('page:', page);
  console.log('page_headline:', page_headline);
  console.log('page_child:', page_child);
};

// window.onload = action;
window.onload = initialization;