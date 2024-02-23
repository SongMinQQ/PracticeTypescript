타입스크립트 컴파일 환경 만들기 명령어

```npm i typescript -g```

-g 속성은 global을 의미

타입스크립트 컴파일 명령어

tsc(typescript compile)

만약 index.ts 파일을 js 파일로 컴파일 하고 싶다.

tsc index.ts

실제로는 웹팩을 쓰는게 좋다

tsc로 컴파일을 할 때 부가적인 옵션을 정의할 수 있는 파일

```tsconfig.json```