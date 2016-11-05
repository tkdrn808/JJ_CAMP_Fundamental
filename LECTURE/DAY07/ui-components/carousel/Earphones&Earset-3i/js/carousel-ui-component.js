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
var view_contents      = view.querySelectorAll('img');
var view_content_width = view_contents[0].clientWidth;
var view_width         = view_content_width * view_contents.length;
// console.log('view_content_width:', view_content_width);

console.log('view_width:', view_width);

// .carousel-view 영역의 가로 폭을 포함하는 이미지 개수의 폭의 합 만큼 설정
view.style.width = view_width + 'px';