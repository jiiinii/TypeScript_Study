/**
 * 타입 추론
 */

let a = 10;
let b = "Hello";
let c = {
  id: 1,
  name: "박진희",
  profile: {
    nickName: "기가지니",
  },
  url: "https://github.com/jiiinii/TypeScript_Study.git",
};
console.log(`c >>> ${c.id}, ${c.profile.nickName}`);

let { id, name, profile } = c;
console.log(`id >>> ${id}, name >>> ${name}`);

let [one, two, three] = [1, "Hello", true];
console.log(`one >>> ${one}, two >>> ${two}, three >>> ${three}`);

function func(message = "hello") {
  return "hello";
}

// any 타입의 진화
// any 타입을 명시적으로 정의하지 않을시.

let d; // any 타입으로 추론 됨(암묵적)
d = 10.5;
d; // number 타입으로 추론 됨
d.toFixed();
console.log(`d >>> ${d.toFixed()}`);
// d.toUpperCase(); // 오류 남

d = "Hello";
d; // string으로 추론 됨
d.toUpperCase();
// d.toFixed(); // 오류 남
console.log(`d.str >>> ${d.toUpperCase()}`);

const num = 10;
const str = "Hello";

let arr = [1, "hello"]; // union 타입으로 자동으로 추론
