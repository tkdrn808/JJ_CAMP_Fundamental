/*! carousel-ui-component.js © yamoo9.net, 2016 */

/////////////////////////////////////////
// 재사용 가능한 공통 함수(Common Functions)
/////////////////////////////////////////

/** @function playAnimation() */
function playAnimation( callback, time ) {
  return window.setInterval( callback, time );
}

/** @function stopAnimation() */
function stopAnimation(id) {
  window.clearInterval(id);
}

// --------------------------------------------------------------------------------

/////////////////////////////////////////
// 캐러셀 컴포넌트 (함수형 프로그래밍, 절차 지향)
/////////////////////////////////////////

// 초기 변수 설정
var using_animation    = null;
var animation_duration = null;
var ani_control_id     = null;
var selected_num       = null;
var selected_tab       = null;
var container          = null;
var container_width    = null;
var view               = null;
var view_contents      = null;
var tabs               = null;
var tabs_total         = null;
var prev_button        = null;
var next_button        = null;


// 캐러셀 초기화 (이벤트 처리)
window.onload = function() {
  initCarousel( 0, true, 400 );
};

/** @function initCarousel() */
function initCarousel( activate_index, anim, time ) {
  // 옵션
  // 애니메이션 적용 설정
  using_animation    = anim || false;
  // 애니메이션 진행 시간 설정
  animation_duration = time || 3000;
  // 초기 설정 변수
  selected_num       = 0;    // 선택된 인덱스 메모리 변수
  selected_tab       = null; // 선택된 탭 메모리 변수

  // 캐러셀 컨트롤 객체 참조
  selectCarouselControls();
  // 캐러셀 뷰 영역의 너비 및 각 콘텐츠 너비 설정
  settingViewContentsWidth();
  // 캐러셀 이벤트 바인딩
  bindingEventsCarouselControlls();
  // 애니메이션 설정
  settingAnimation();
  // 초기 활성화, 사용자 액션 시뮬레이션
  if ( !activate_index ) { activate_index = 0; }
  settingActivation( activate_index );
}

// 캐러셀 함수들
function selectCarouselControls() {
  container       = document.querySelector('.carousel-container');
  container_width = container.clientWidth;
  view            = container.querySelector('.carousel-view');
  view_contents   = view.querySelectorAll('img');
  tabs            = container.querySelectorAll('.carousel-tab');
  tabs_total      = tabs.length;
  prev_button     = document.querySelector('.carousel-previous-btn');
  next_button     = document.querySelector('.carousel-next-btn');
}
function settingViewContentsWidth() {
  view.style.width = container_width  * tabs_total + 'px';
  for ( var k=0, j=view_contents.length; k<j; k++ ) {
    view_contents[k].style.width = container_width + 'px';
  }
}
function bindingEventsCarouselControlls() {
  for (var i=0, l=tabs_total; i<l; i++) {
    var tab = tabs[i];
    tab.num = i;
    tab.onclick = function() {
      selected_num = this.num;
      activeViewContent( this, selected_num );
    };
    tab.onfocus = stopCarousel;
  }
  prev_button.onclick = prevViewContent;
  next_button.onclick = nextViewContent;
}
function prevViewContent() {
  selected_num = --selected_num % tabs_total;
  if ( selected_num < 0 ) {
    selected_num = tabs_total - 1;
  }
  activeViewContent( tabs[selected_num], selected_num );
}
function nextViewContent() {
  selected_num = ++selected_num % tabs_total;
  activeViewContent( tabs[selected_num], selected_num );
}
function activeViewContent(tab, num) {
  if ( selected_tab !== null ) {
    selected_tab.classList.remove('active-tab');
  }
  tab.classList.add('active-tab');
  selected_tab = tab;
  view.style.left = -1 * num * container_width + 'px';
}
function playCarousel() {
  ani_control_id = playAnimation(function() {
    next_button.onclick();
  }, animation_duration);
}
function stopCarousel() {
  stopAnimation(ani_control_id);
};
function settingAnimation() {
  if ( using_animation ) {
    container.onmouseout = playCarousel;
    container.onmouseover = stopCarousel;
    playCarousel();
  }
}
function settingActivation(index) {
  tabs[index].onclick();
}