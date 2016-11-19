/*! carousel-ui-component.js © yamoo9.net, 2016 */

// 전역 공간
window.onload = init;

function init() {
  // 지역 공간

  var selected_num    = 0;
  var selected_tab    = null;
  var container       = document.querySelector('.carousel-container');
  var container_width = container.clientWidth;
  var view            = container.querySelector('.carousel-view');
  var view_contents   = view.querySelectorAll('img');
  var tabs            = container.querySelectorAll('.carousel-tab');
  var tabs_total      = tabs.length;
  var prev_button     = document.querySelector('.carousel-previous-btn');
  var next_button     = document.querySelector('.carousel-next-btn');

  view.style.width = container_width  * tabs_total + 'px';

  for ( var k=0, j=view_contents.length; k<j; k++ ) {
    view_contents[k].style.width = container_width + 'px';
  }

  for (var i=0, l=tabs_total; i<l; i++) {
    var tab = tabs[i];
    tab.num = i;
    tab.onclick = function() {
      selected_num = this.num;
      activeViewContent( this, selected_num );
    };
  }

  prev_button.onclick = prevViewContent;
  next_button.onclick = nextViewContent;

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
    // --------------------------------------------------------------
    view.style.left = -1 * num * container_width + 'px';
  }

  // 사용자 액션 시뮬레이션
  tabs[0].onclick();

}