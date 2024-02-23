//함수의 파라미터에 타입을 정의

function sum2(a: number, b: number) {
  return a + b;
}

sum2(10, 20);

//함수의 반환 값에 타입을 정의
function add(): number {
  return 10;
}

add();

//반환 타입을 반드시 맞춰줘야함 예시

const arrowSum = (a: number, b: number): string => {
  return (a + b).toString();
};

arrowSum(10, 20);

//함수의 옵셔널 파라미터(파라미터 변수 뒤에 ?를 붙히면 된다.)
//필요에 따라 파라미터를 넘겨도 되고 넘기지 않아도 된다는 뜻
function log(a: string, b?: string, c?: string) {
  console.log(a, b, c);
}
log('hello world');
log('hello ts', 'abc');
