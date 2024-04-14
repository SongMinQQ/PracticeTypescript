//숫자형 이넘. Nike부터 0 1 이런식으로 auto increase
//문자형으로 초기값을 주면 그에 맞는 값을 가짐
enum Shoes {
  Nike = 'nike',
  Adidas = 'adidas',
}
let myShoes = Shoes.Nike;
console.log(myShoes);

//예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('correct');
  }
  if (answer === Answer.No) {
    console.log('odap');
  }
}
//이런식으로 yes는 많은 의미로 전달 가능함 이를 이넘으로 제한
askQuestion('yes');
askQuestion('y');

askQuestion(Answer.Yes);
//받는 파라미터를 이넘으로 설정해두었기 때문에 이넘으로만 전달가능
askQuestion('yes');
