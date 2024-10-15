/**
 * 제네릭 = 일반적인, 포괄적인
 */

// 제네릭 함수 // <T> -> 타입을 저장하는 변수. T -> 상황에 따라 다른 타입을 담을 수 있다.
function func<T>(value: T): T {
  return value;
}

// 여기서 부터 변수에 마우스를 대면, 함수에 호출한 값에따라 타입이 뭔지 모달창이 뜬다.
let num = func(10);
// num.toFixed();

if (typeof num === "number") {
  num.toFixed();
}

let str = func("제네릭");
let bool = func(true);

let arr = func([1, 2, 3]); // number 배열 타입으로 추론이 됨.
let arr1 = func<[number, number, number]>([1, 2, 3]); // 튜플 타입으로도 추론이 됨.
// let arr2 = func<[number, number, number]>([1, 2, 3, 4]); // 오류남.
