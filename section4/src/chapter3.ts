/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한값을 출력
 */
// 버전들.. 함수의 구현부 없이 선언식만 써 놓은것: 오버로드 시그니처
// 오버로드 시그니처: 함수를 오버로딩 하기 위해서 각각 매개변수 별로 다른 버전을 명시해주기 위해 쓰인다.
function func(a: number): void;
function func(a: number, b: number, c: number): void;
// 실제 구현부 -> 구현 시그니처
function func(a: number, b?: number, c?: number) {
  // b, c 선택적 매개변수로 작성 이유: 'function func(a: number): void;' 의 존재 이유가 없어지기 때문
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}
// function func() {}
// 1번과 3번은 오버로드 시그니처에 맞지 않아 오류가 발생
// func(); // 1
func(1); // 2
// func(1, 2); // 3
func(1, 2, 3); //  4
