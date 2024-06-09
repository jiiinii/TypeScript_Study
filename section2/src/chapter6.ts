// any = 모든, 누구나
// anyType = 어떤 타입이던지
// 특정 변수의 타입을 우리가 확실히 모를 때 사용.
let anyVar: any = 10;
anyVar = "hello";

// any를 사용한다는 것 = 타입스크립트의 이점을 포기한다는 것

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase(); //문자열
anyVar.toFixed(); // 숫자

let num: number = 10;
num = anyVar;

let str: string = `typeScript`;
str = anyVar;

// <---------------------------------------------------------------------->

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// unknownVar.toUpperCase(); // 허용 X

// 타입 정제
if (typeof unknownVar === "number") {
  num = unknownVar;
}

// 변수의 저장할 값이 확실하지 않을 때에는 any 타입 보다 unknown 타입을 사용하는게 좋다.
