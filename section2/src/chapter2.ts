// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hi", "im", "jinhui"];

// 배열(제네릭 문법) : '<>' 안에 타입을 넣는 것
let boolArr: Array<boolean> = [true, false, true];
let strArr2: Array<string> = [`hello`, `type`, `script`];
let numArr2: Array<number> = [123, 456, 789];
console.log(`boolArr >> ${boolArr} & strArr2 >> ${strArr2}`);

// 배열에 들어가는 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "Hello"];
let multiArr2: (boolean | undefined)[] = [false, undefined];
let muntiArr3: (string | any)[] = ["message", 33];
console.log(`muntiArr3 >> ${muntiArr3}`);

// 다차원 배열의 타입을 정의하는 법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

let doubleArr2: (string | boolean)[][] = [
  ["hi", true, "real?"],
  ["hello", false, "no,,"],
];
console.log(`doubleArr2 >> ${doubleArr2}`);

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];
// let tup3: [null, undefined, number] = [null, undefined, `hello`]; // X: error

// 튜플 사용 예
const users: [string, number][] = [
  ["박진희", 1],
  ["이진희", 2],
  ["김진희", 3],
  ["강진희", 4],
  // [5, "최진희"], // error
];
