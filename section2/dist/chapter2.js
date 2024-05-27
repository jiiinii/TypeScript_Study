// 배열
let numArr = [1, 2, 3];
let strArr = ["hi", "im", "jinhui"];
// 배열(제네릭 문법) : '<>' 안에 타입을 넣는 것
let boolArr = [true, false, true];
// 배열에 들어가는 타입이 다양할 경우
let multiArr = [1, "Hello"];
// 다차원 배열의 타입을 정의하는 법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = [1, "hello", true];
// 튜플 사용 예
const users = [
    ["박진희", 1],
    ["이진희", 2],
    ["김진희", 3],
    ["강진희", 4],
    // [5, "최진희"], // error
];
export {};
