# Scss

[TOC]

---

## scss etc 내장함수

내장함수란 해당 언어에서 미리 만들어진 함수를 뜻합니다.  
먼저 만들어놓은 기능에서 우리는 가져다 쓰기만하면되는거죠, 
lighten() 기능도 내장함수중의 하나였습니다.

---

### 기억하면 좋은 함수

 **unquote()**  : 따옴표 제거

unitless()**  :  숫자에 단위가 있는지 여부 -if문을 사용하면 좋습니다.

 **index()** : 반복에따른 순서값처리

``` scss
$fruits: (apple, orange, banana, mango);
.fruits {
  @each $fruit in $fruits {
    $i: index($fruits, $fruit);
    li:nth-child(#{$i}) {
      left: 50px * $i;
    }
  }
}
```

``` css
.fruits li:nth-child(1) {left: 50px;}
.fruits li:nth-child(2) {left: 100px;}
.fruits li:nth-child(3) {left: 150px;}
.fruits li:nth-child(4) {left: 200px;}
```



---

### 색상(RGB / HSL / Opacity) 함수

[mix($color1, $color2)](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) : 두 개의 색을 섞습니다.

[lighten($color, $amount)](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) : 더 밝은색을 만듭니다.

[darken($color, $amount)](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) : 더 어두운색을 만듭니다.

[saturate($color, $amount)](http://sass-lang.com/documentation/Sass/Script/Functions.html#saturate-instance_method) : 색상의 채도를 올립니다.

[desaturate($color, $amount)](http://sass-lang.com/documentation/Sass/Script/Functions.html#desaturate-instance_method) : 색상의 채도를 낮춥니다.

[grayscale($color)](http://sass-lang.com/documentation/Sass/Script/Functions.html#grayscale-instance_method) : 색상을 회색으로 변환합니다.

[invert($color)](http://sass-lang.com/documentation/Sass/Script/Functions.html#invert-instance_method) : 색상을 반전시킵니다.

[rgba($color, $alpha)](http://sass-lang.com/documentation/Sass/Script/Functions.html#rgba-instance_method) : 색상의 투명도를 변경합니다.

[opacify($color, $amount) / fade-in($color, $amount)](http://sass-lang.com/documentation/Sass/Script/Functions.html#opacify-instance_method) : 색상을 더 불투명하게 만듭니다.

[transparentize($color, $amount) / fade-out($color, $amount)](http://sass-lang.com/documentation/Sass/Script/Functions.html#transparentize-instance_method) : 색상을 더 투명하게 만듭니다.



---

### 문자(String) 함수

[unquote($string)](http://sass-lang.com/documentation/Sass/Script/Functions.html#unquote-instance_method) : 문자에서 따옴표를 제거합니다.

[quote($string)](http://sass-lang.com/documentation/Sass/Script/Functions.html#quote-instance_method) : 문자에 따옴표를 추가합니다.

[str-insert($string, $insert, $index)](http://sass-lang.com/documentation/Sass/Script/Functions.html#str_insert-instance_method) : 문자의 index번째에 특정 문자를 삽입합니다.

[str-index($string, $substring)](http://sass-lang.com/documentation/Sass/Script/Functions.html#str_index-instance_method) : 문자에서 특정 문자의 첫 index를 반환합니다.

[str-slice($string, $start-at, [$end-at])](http://sass-lang.com/documentation/Sass/Script/Functions.html#str_slice-instance_method)   : 문자에서 특정 문자(몇 번째 글자부터 몇 번째 글자까지)를 추출합니다.

[to-upper-case($string)](http://sass-lang.com/documentation/Sass/Script/Functions.html#to_upper_case-instance_method) : 문자를 대문자를 변환합니다.

[to-lower-case($string)](http://sass-lang.com/documentation/Sass/Script/Functions.html#to_lower_case-instance_method) : 문자를 소문자로 변환합니다.

---

### List 함수

모든 List 내장 함수는 기존 List 데이터를 갱신하지 않고 새 List 데이터를 반환합니다.
모든 List 내장 함수는 Map 데이터에서도 사용할 수 있습니다.

[length($list)](http://sass-lang.com/documentation/Sass/Script/Functions.html#length-instance_method) : List의 개수를 반환합니다.

[nth($list, $n)](http://sass-lang.com/documentation/Sass/Script/Functions.html#nth-instance_method) : List에서 n번째 값을 반환합니다.

[set-nth($list, $n, $value)](http://sass-lang.com/documentation/Sass/Script/Functions.html#set_nth-instance_method) : List에서 n번째 값을 다른 값으로 변경합니다.

[join($list1, $list2, [$separator])](http://sass-lang.com/documentation/Sass/Script/Functions.html#join-instance_method) : 두 개의 List를 하나로 결합합니다.

[zip($lists…)](http://sass-lang.com/documentation/Sass/Script/Functions.html#zip-instance_method) : 여러 List들을 하나의 다차원 List로 결합합니다.

[index($list, $value)](http://sass-lang.com/documentation/Sass/Script/Functions.html#index-instance_method) : List에서 특정 값의 index를 반환합니다.

---

### Map 함수

모든 Map 내장 함수는 기존 Map 데이터를 갱신하지 않고 새 Map 데이터를 반환합니다.

[map-get($map, $key)](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_get-instance_method) : Map에서 특정 key의 value를 반환합니다.

[map-merge($map1, $map2)](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_merge-instance_method) : 두 개의 Map을 병합하여 새로운 Map를 만듭니다.

[map-keys($map)](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_keys-instance_method) : Map에서 모든 key를 List로 반환합니다.

[map-values($map)](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_values-instance_method) : Map에서 모든 value를 List로 반환합니다.

---

### 관리(Introspection) 함수

[variable-exists(name)](http://sass-lang.com/documentation/Sass/Script/Functions.html#variable_exists-instance_method) : 변수가 현재 범위에 존재하는지 여부를 반환합니다.  
(인수는 `$`없이 변수의 이름만 사용합니다.)

[unit($number)](http://sass-lang.com/documentation/Sass/Script/Functions.html#unit-instance_method) : 숫자의 단위를 반환합니다.

[unitless($number)](http://sass-lang.com/documentation/Sass/Script/Functions.html#unitless-instance_method) : 숫자에 단위가 있는지 여부를 반환합니다.

[comparable($number1, $number2)](http://sass-lang.com/documentation/Sass/Script/Functions.html#comparable-instance_method) : 두 개의 숫자가 연산 가능한지 여부를 반환합니다.



---

#### 참고자료:

- http://sass-lang.com/documentation
- https://www.sitepoint.com/sass-basics-operators/
- https://sass-guidelin.es/ko/
- http://www.thesassway.com/  
- https://heropy.blog/2018/01/31/sass/ 







