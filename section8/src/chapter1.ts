/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

// function getPropertyKey(person: Person, key: keyof Person) {
//   // ⬆️ interface Person 에 아무리 많은 프로퍼티가 추가 되도 변형없이 코드 수정 가능(key: keyof Person) ⬆️
//   // keyof 뒤에 타입이 와야함. 변수가 오면 안됨. 에러남.
//   return person[key];
// }

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

// const person: Person = {
//   name: "박진희",
//   age: 26,
// };

const person = {
  name: "박진희",
  age: 26,
};

getPropertyKey(person, "name");
