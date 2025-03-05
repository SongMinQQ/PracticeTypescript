interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {name: "Tony", age: 33, skill: 'Iron Making'};
}
var tony = introduce();
console.log(tony.skill);

if((tony as Developer).skill){
  var skill = (tony as Developer).skill;
  console.log(skill);
}else if((tony as Person).age){
  var age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 정의
// target이 Developer인지 아닌지 확인 맞으면 true 아니면 false
function isDeveloper(target: Developer | Person): target is Developer {
  return(target as Developer).skill !== undefined;
}

//16~22번 라인의 코드가 isDeveloper함수로 인해 이렇게나 짧아짐
if(isDeveloper(tony)){
  console.log(tony.skill);
}else {
  console.log(tony.age);
}