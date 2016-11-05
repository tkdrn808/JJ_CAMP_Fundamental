/*! carousel-ui-component.js © yamoo9.net, 2016 */

var container, controls, view, active_index;

container = document.querySelector('.carousel-container');
controls  = container.querySelector('.carousel-controls');
view      = container.querySelector('.carousel-view');
// 현재 활성화된 콘텐츠의 인덱스
active_index = 0;

// console.log('container:', container);
// console.log('controls:', controls);
// console.log('view:', view);

// view 영역 내부의 img 의 폭을 가져와서
// 이미지 개수만큼의 폭을 view 영역에 설정한다.
var view_contents        = view.querySelectorAll('img');
var view_contents_length = view_contents.length;
var view_content_width   = container.clientWidth;
var view_width           = view_content_width * view_contents_length;

// .carousel-view 영역의 가로 폭을 포함하는 이미지 개수의 폭의 합 만큼 설정
view.style.width = view_width + 'px';

// 각 이미지를 순환 처리하여 컨테이너 요소의 너비 만큼 이미지 너비를 설정한다.
for (var i=0; i<view_contents_length; i++ ) {
  var view_content = view_contents.item(i);
  // console.log(view_content); // 각 <img> 출력
  view_content.style.width = view_content_width + 'px';
}

// 버튼 이벤트 연결
// 버튼의 부모 요소에게 이벤트 위임
var prev_btn = controls.querySelector('.carousel-previous-btn');
var next_btn = controls.querySelector('.carousel-next-btn');

prev_btn.onclick = prevMoveCarouselContentView;
next_btn.onclick = nextMoveCarouselContentView;

function prevMoveCarouselContentView(){
  active_index = --active_index % view_contents_length;
  if ( active_index < 0) {
    active_index = view_contents_length - 1;
  }
  view.style.transform = 'translateX('+ (-1 * view_content_width * active_index) +'px)';
}

function nextMoveCarouselContentView(){
  active_index = ++active_index % view_contents_length;
  view.style.transform = 'translateX('+ (-1 * view_content_width * active_index) +'px)';
}

var indicator_items = controls.querySelectorAll('.carousel-tab');