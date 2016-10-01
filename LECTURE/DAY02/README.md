###### JJ 첫걸음 CAMP

# DAY02

### 변수 선언 방법

#### 1. 변수 선언
```js
var my_name; // 변수 선언 시, 기본적으로 undefined 값 할당
```

#### 2. 선언된 변수에 값 할당
```js
var current_state;
// 선언된 변수에 값을 할당
current_state = 200;
```

#### 3. 선언과 동시에 값 할당
```js
var current_state = 200;   // 숫자
var is_finished   = false; // 불리언
var container_el  = null;  // 비어 있다.
```

#### 4. `var` 키워드를 한 번만 사용하는 싱글톤(Singleton) 패턴
```js
var current_state = 200,   // 숫자
    is_finished   = false, // 불리언
    container_el  = null;  // 비어 있다.
```

-

### 데이터 값 '복사'와 '참조'

변수(Variable)에 값이 할당 :  값의 유형(Data Type)에 따라 **복사** 또는 **참조(Reference)**된다.

```js
// 복사의 예)
var first = 'data';
var second;
second = first;
second === first;  //true ( '==='은  등호. Strict Equal `완벽 일치 비교`)
```

단, 여기서 `first`와 `second`의 데이터는 같으나 메모리 저장소는 다름.<br>
따라서 한 변수에만 다른 값을 할당하면 둘은 다른 값을 가지게 된다.

```js
first = 'another data';
second === first; //false
```

-

### 문서 객체 제어

HTML 문서에서 'my-parent'라는 `id` 이름이 'my-parent'와 일치하는 문서 객체를 변수 `my_parent`에 할당한다.<br>
※ 자바스크립트에서는 변수명에 **`-`**을 사용 할 수 없다. **`_`**를 사용하는 것에 주의.

```js
var my_parent = document.getElementById('my-parent');
```

변수에 할당된 값(문서 객체)을 사용해서 자바스크립트에서 __인라인 스타일 제어__할 수 있다.

```js
my_parent.style.border   = '1px solid #7e5dc4';

child_1.style.color      = '#7e5dc4';
child_2.style.background = '#7e5dc4';
child_2.style.color      = '#fff';
```