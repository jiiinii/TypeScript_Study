/**
 * 첫번째 사례
 */

function swap<T>(a: T, b: T) {
  // 이미 a: T에서 string으로 결정났기 때문에,
  return [b, a];
}
// const [a, b] = swap("1", 2); // 2 부분에서 error남.

// 이럴 땐
function swap1<T, U>(c: T, d: U) {
  // T = string, U = number
  return [d, c];
}
const [c, d] = swap1("1", 2); // 2 부분에서 error남.

/**
 * 두번쨰 사례
 */

// T = number
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue([1, "name", "age"]); // 1

/**
 * 세번째 사례
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

// let var4 = getLength(10); // 오류. Length 프로퍼티에 알맞지 않음
