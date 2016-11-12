/*! carousel-ui-component.js © yamoo9.net, 2016 */

// head 내부에서 script 코드를 실행할 경우,
// 문서가 준비가 안된 상태이기 때문에, 오류 발생
// 고로 이벤트가 필요.
window.onload = init;

// --------------------------------------------------------------------------------
// 캐러셀 컴포넌트 초기화(Init, Initialization)
function init() {

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

  // console.log(view_content_width, view_contents_length, view_width);

  // .carousel-view 영역의 가로 폭을 포함하는 이미지 개수의 폭의 합 만큼 설정
  view.style.width = view_width + 'px';

  // 요소.clientWidth 속성
  // 소수점을 허용하지 않고, 값을 올림하여 정수를 반환한다.
  // content-box + padding-box 까지의 폭을 반환한다.

  // 요소.style.width 속성
  // 인라인 스타일 속성이 설정된 요소의 width 너비를 가져온다.
  // 인라인 스타일 속성이 설정되어 있지 않을 경우는 빈 문자열 ''을 반환한다.

  // window.getComputedStyle(요소).width
  // 웹 브라우저가 최종적으로 계산한 width 값을 반환한다.
  // 다만, 이 방법은 표준 방법이지만 표준을 준수하지 않은 IE 8- 브라우저에서는
  // 작동하지 않는다.

  // 요소.currentStyle.width
  // 비 표준 방법으로 Microsoft Internet Explorer 에서만 동작한다.
  // 가져오는 값은 .getComputedStyle(요소).width과 같다.

  // 각 이미지를 순환 처리하여 컨테이너 요소의 너비 만큼 이미지 너비를 설정한다.
  for (var i=0; i<view_contents_length; i++ ) {
    var view_content = view_contents.item(i); // 0
    // console.log(view_content); // 각 <img> 출력
    view_content.style.width = view_content_width + 'px';
  }

  // --------------------------------------------------------------------------------
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
    // view.style.position = 'absolute';
    // view.style.top = '0px';
    // view.style.left = -1 * view_content_width * active_index +'px';
  }

  // --------------------------------------------------------------------------------
  // 인디케이터 (표시자)
  var indicator_items = controls.querySelectorAll('.carousel-tab');

  // console.log('indicator_items:', indicator_items);

  for (var i=0, l=indicator_items.length; i<l; i++) {
    // console.log(i, indicator_items[i]);
    indicator_items[i].onclick = activeSelectedItem;
  }

  var selected_item = null; // 초기 값

  function activeSelectedItem() {
    if ( selected_item !== null ) {
      selected_item.classList.remove('active-tab');
    }
    this.classList.add('active-tab');
    selected_item = this;
  }

  // 추상화(Abstract)
  // 여러분이 구현할 것을 정리(추상)
  // 인디케이터를 사용자가 클릭했을 때 발생하는 일
  // 수행하는 일 1. 이전에 활성화되었던 인디케이터는 비 활성화, 클릭한 인디케이터는 활성화
  // 수행하는 일 2. 뷰(carousel-view) 영역이 클릭한 인디케이터의 인덱스(순서)에 해당하는 위치로 이동

}