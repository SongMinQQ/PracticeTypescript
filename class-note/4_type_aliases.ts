interface Person2 {
  name: string;
  age: number;
}
// type Person2 = {
//   name: string;
//   age: number;
// };

let seho: Person2 = {
  name: 'seho',
  age: 30,
};

type MyString = string;

let str: MyString = 'hello';

type Todo = {
  id: string;
  title: string;
  done: boolean;
};
function getTodo(todo: Todo) {}

//type과 interface의 큰 차이점은 확장 가능, 불가능 여부
//interface는 확장이 가능(extends 사용 가능), 하지만 type은 확장이 불가능
//그러니까 interface를 쓰는게 더 좋다.
