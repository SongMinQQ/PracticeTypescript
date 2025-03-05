// 타입 단언(type assertion)
var q;
q = 20;
q = 'a';
var w = q as string;

// DOM API 조작

var div = document.querySelector('div');
if(div){
  div.innerText = "hi";
}