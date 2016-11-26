/*! ui-carousel.js © yamoo9.net, 2016 */

// --------------------------------------------------------------------------------------------
// TODO:
//
// 0. 캐러셀 탭 패널을 감싼 `래퍼 요소의 너비`를 `탭 패널 너비 × 탭 패널 개수`로 설정한다.
// 1. 인디케이터 탭 버튼을 누르면 캐러셀 콘텐츠는 해당 콘텐츠를 보여준다.
// 2. 이전/다음 탐색 버튼을 누르면 캐러셀 콘텐츠는 슬라이드 되어 콘텐츠를 보여준다. (인디케이터 탭 업데이트)
// 3. 3초마다 자동으로 다음 콘텐츠를 보여줄 수 있도록 설정한다.
// 4. 마우스가 캐러셀 영역으로 들어가면 자동 넘김이 멈추고, 마우스가 캐러셀 영역 밖으로 나가면 자동 넘김이 다시 시작한다.
// 5. 인디케이터 탭 또는 이전/다음 탐색 버튼에 포커스가 되면 자동 넘김이 멈춰야 한다.
// 6. 자동 넘김 또는 넘김 시간 등은 옵션으로 설정할 수 있도록 변경한다.
// 7. 객체 지향 자바스크립트 방식으로 코드를 변경한다. (e.g: new Carousel('#bs3-headphone') )
// --------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------
// 초기 변수 정의
var carousel;
var tab_list;
var tab_button_group;
var tab_wrapper;
var active_page_index = 0;

// -------------------------------------------------------------------------
// 컴포넌트 초기화 함수
function initCarousel() {
  // 컴포넌트 객체 참조
  selectionControls();
  // UI 구현을 위해 사용자 환경을 분석하여
  // 래퍼 객체의 너비를 설정
  settingWrapperWidth();
  // 컴포넌트 이벤트 바인딩
  bindingEvents();
}

// -------------------------------------------------------------------------
// 컴포넌트 문서 객체 참조
function selectionControls() {
  carousel         = document.querySelector('.ui-carousel');
  tab_list         = carousel.querySelector('.ui-carousel-tablist');
  tab_button_group = carousel.querySelector('.ui-carousel-button-group');
  tab_wrapper      = carousel.querySelector('.ui-carousel-tabpanel-wrapper');
}

// -------------------------------------------------------------------------
// 함수
function settingWrapperWidth() {
  // 컨테이너(캐러셀)의 너비
  var container_width = carousel.clientWidth;
  // 각 탭패널을 순환하여 width 값을 container_width 값으로 설정
  var panels = tab_wrapper.querySelectorAll('.ui-carousel-tabpanel');
  for ( var i=0, l=panels.length; i<l; i++ ) {
    panels[i].style.width = container_width + 'px';
  }
  // 탭 패널 래퍼 객체의 width 속성으로 설정
  tab_wrapper.style.width = panels.length * container_width + 'px';
}

function activeTabPanel(active_index) {
  // 탭 패널 래퍼를 이동
  var distance_x = -carousel.clientWidth * active_index + 'px';
  tab_wrapper.style.left = distance_x;
}

// 이벤트 바인딩 함수
function bindingEvents() {
  // 1. 탭을 클릭하면 인덱스를 출력한다.
  eventTabs();
}

// -------------------------------------------------------------------------
// 이벤트 핸들러

function eventTabs() {
  var tabs = tab_list.querySelectorAll('a');
  for ( var tab, i=0, l=tabs.length; i<l; i++ ) {
    tab = tabs[i];
    tab.index = i;
    tab.onclick = function(){
      // 활성화된 페이지 인덱스 업데이트
      active_page_index = this.index;
      activeTabPanel( active_page_index );
      return false;
    };
  }
}

/** @function resizeCarouselHeight() 캐러셀 컴포넌트 높이를 변경하는 함수 */
var resizeCarouselHeight = function() {
  var tab_panel = tab_wrapper.querySelector('.ui-carousel-tabpanel');
  carousel.style.height = tab_panel.clientHeight + 'px';
};

// -------------------------------------------------------------------------
// 이벤트 핸들링

window.onload = resizeCarouselHeight;
window.onresize = resizeCarouselHeight;

// -------------------------------------------------------------------------
// 컴포넌트 초기 실행
initCarousel();
