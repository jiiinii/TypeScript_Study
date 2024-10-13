/**
 * 함수의 타입 정의
 */

// 함수를 실행하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지,,,
// 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는지,,,
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

// 선택적 매개변수(물음표 붙은 매개변수)는 필수 매개변수 보다 뒤에 있어야 함.
function introduce(name = "박진희", age: number, tall?: number) {
  console.log(`name : ${name}`);

  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}
introduce("박진희", 26);
introduce("박진희", 26, 151);
// introduce(1); //err

function getSum(...rest: number[]) {
  console.log(`rest >>> `, rest);
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
