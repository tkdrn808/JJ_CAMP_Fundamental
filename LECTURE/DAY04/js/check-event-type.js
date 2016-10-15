// 참조할 객체를 담을 변수 선언
var page, article, brand, slogan, mouseEventHandler;
// 문서 요소객체를 선택하여 각 변수에 참조
page              = document.querySelector('#page');
article           = document.querySelector('.article');
brand             = document.querySelector('.brand');
slogan            = document.querySelector('.slogan');

mouseEventHandler = function(event) {
  // Event Object {}
  if(event.type === 'click') {
    console.log('mouse clicked DOM Element Node.');
  }
  else if(event.type === 'mouseover') {
    console.log('mouse overed DOM Element Node.');
  }
  else if(event.type === 'mouseout') {
    console.log('mouse outed DOM Element Node.');
  }
  else {
    console.log('mouse click, over, out: X');
  }
};

// 참조된 문서 요소객체에 각각 이벤트 연결(Binding)
page.onclick     = mouseEventHandler;
page.onmouseover = mouseEventHandler;
page.onmouseout  = mouseEventHandler;
article.onclick  = mouseEventHandler;
brand.onclick    = mouseEventHandler;
slogan.onclick   = mouseEventHandler;
