/*! sound-control-ironman.js © yamoo9.net, 2016 */

// 사운드 컨트롤을 위한 오디오 객체를 런타임 중에 생성합니다.
// create element -> <audio>
// DOM(Document Object Model)
// API(Application Programming Interface)
// DOM API with JavaScript

// 문서(document)에 <audio> 객체(요소노드)를 생성(create)한다.
var ironman_audio_obj;
ironman_audio_obj = document.createElement('audio');

// 생성된 오디오 객체를 참조하고 있는 변수 ironman_audio_obj에 src 속성을 설정합니다.
// 음원 소스를 src 속성의 값으로 설정합니다.
// 음원을 설정하는 경로는 HTML 파일 기준의 상대 위치 설정입니다.

// 음원 출처: http://www.moviesoundclips.net/sound.php?id=152
var playlist = [ 'myturn', 'special', 'run', 'wantone' ];
// 사운드 음성을 랜덤하게 처리
// 자바스크립트 Math 객체를 활용
var random_play_index = getRandomNumber( playlist.length );
// console.log(random_play_index);
var play_sound_path = 'media/' + playlist[ random_play_index ] + '.mp3';
ironman_audio_obj.setAttribute('src', play_sound_path);

// .play-sound-title 요소에 선택된 음원 타이틀 출력
var play_sound_title = document.querySelector('.play-sound-title');

// HTML DOM 방식
play_sound_title.innerHTML = play_sound_path;
// play_sound_title.textContent = play_sound_path;

// XML DOM 방식
// play_sound_title.firstChild.nodeValue = play_sound_path;

// autoplay 속성 설정
// ironman_audio_obj.setAttribute('autoplay', 'autoplay');

// console.log('ironman_audio_obj:', ironman_audio_obj); //<audio></audio>

// 자바스크립트에서 DOM API가 제공하는 이벤트를 사용하여 컨트롤
// console.dir(ironman_audio_obj);

// ironman_audio_obj.oncanplay = playSound;
// ironman_audio_obj.ontimeupdate = function() {
//   console.log(this.currentTime);
// };

// 문서에서 .ironman-print-button 버튼 요소를 찾아 이벤트를 연결
var ironman_btn = document.querySelector('.ironman-print-button');

// 이벤트 제어
ironman_btn.onclick = playSound;
ironman_btn.onmouseleave = stopSound;

// 아이언맨 음원 재생(play) 함수
function playSound() {
  // console.log('this:', this);
  ironman_audio_obj.play(); // 음원 재생
  // console.log(ironman_audio_obj.currentTime);
}

// 아이언맨 음원 일시 정지(pause) 함수
function pauseSound() {
  ironman_audio_obj.pause();
}

// 아이언맨 음원 정지(stop) 함수
function stopSound() {
  pauseSound();
  ironman_audio_obj.currentTime = 0;
}

// 랜덤 숫자 반환 함수
function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

// sound-control-button
var sound_control_buttons = document.querySelectorAll('.sound-control-button');

// 반복문
for ( var i=0, l=sound_control_buttons.length; i<l; i++ ) {
  var button = sound_control_buttons[i];
  var button_label = button.getAttribute('aria-label');
  switch(button_label) {
    case '재생':
      button.onclick = playSound;
    break;
    case '일시정지':
      button.onclick = pauseSound;
    break;
    case '정지':
      button.onclick = stopSound;
    break;
  }
}