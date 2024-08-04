/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: String | Number | Boolean;
a = 1;
a = "Hello";
a = true;

let arr: (number | string | boolean)[] = [1, "Hello", true];
console.log(`arr >>> ${arr}`);

type Union1 = Dog | Person;

// Dog 타입
let union1: Union1 = {
  name: "",
  color: "",
};

// Person 타입
let union2: Union1 = {
  name: "",
  language: "",
};

// 두 타입의 모든 프로퍼티를 갖는 객체(교집합)
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// error
// let union4: Union1 = {
//     name: "",
// }

/**
 * 2. 교집합 타입 - Intersection 타입
 *
 */

let variable: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
