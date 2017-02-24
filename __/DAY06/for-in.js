/*! for문 VS for ~ in문 © yamoo9.net, 2016 */

//////////
// for문 //
//////////

// [값의 집합] -> 배열, 유사 배열 순환할 때
var data_collection = [ 1, 'hammer', false, function(){}, [], {} ];

console.log( 'data_collection.length:', data_collection.length );

for ( var i=0; i<data_collection.length; i=i+1 ) {
  console.log( 'data_collection['+ i +']:', data_collection[i] );
}


////////////////
// for ~ in문 //
////////////////

// ※ [값의 집합]에서는 사용하지 않는 것이 좋다.

// [속성의 집합]에서 사용하는 것이 좋다.
// 왜? 객체는 for문을 사용하여 순환할 수 없는가?
// 객체는 배열과 달리 length 속성이 없다.


// 객체 정의 (속성: 값 추가)
var zico = {
  'name'   : '지코',
  'amount' : '300ml',
  'source' : 'cocoa oil'
};

// 객체의 속성 포함 유무를 확인할 때 in 키워드 사용
console.log('name' in zico); // true

// 객체에 새로운 속성 설정
zico.length = 3;

// 객체의 속성을 지울 때 delete 키워드 사용
delete zico.length; // 제거

// 객체의 속성을 순환하여 처리할 때 사용
for (var prop in zico) {
  // 속성에 접근 가능
  console.log(prop); // 'name', 'amount', 'source'

  // 그렇다면 속성에 할당된 값은?
  // console.log(zico.source);
  // var prop = 'source';
  console.log(zico[prop]);
}