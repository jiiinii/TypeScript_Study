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

let { id, name, profile } = c;

let [one, two, three] = [1, "Hello", true];

function func(message = "hello") {
  return "hello";
}

// any 타입의 진화
// any 타입을 명시적으로 정의하지 않을시.

let d; // any 타입으로 추론 됨(암묵적)
d = 10;
d; // number 타입으로 추론 됨
d.toFixed();
// d.toUpperCase(); // 오류 남

d = "Hello";
d; // string으로 추론 됨
d.toUpperCase();
// d.toFixed(); // 오류 남

const num = 10;
const str = "Hello";

let arr = [1, "hello"]; // union 타입으로 자동으로 추론
