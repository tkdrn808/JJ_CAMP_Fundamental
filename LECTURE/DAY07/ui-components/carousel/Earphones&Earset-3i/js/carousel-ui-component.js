/*! carousel-ui-component.js © yamoo9.net, 2016 */

var container, controls, view;

container = document.querySelector('.carousel-container');
controls  = container.querySelector('.carousel-controls');
view      = container.querySelector('.carousel-view');

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
  console.log(view_content); // 각 <img> 출력
  view_content.style.width = view_content_width + 'px';
}