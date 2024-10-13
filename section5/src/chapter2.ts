/**
 * 선언 합침
 */

// 오류 발생
// type Person = {
//     name: string,
// }

// type Person = {
//     age: number,
// }

// 동일한 이름으로 정의한 인터페이스들은 결국 다 합쳐지기 때문에 오류가 안남.
interface Person {
  name: string;
}

interface Person {
  // name: number; // 충돌남. 에러
  // name: "name" // 에러남
  name: string; // 반드시 동일한 타입으로만 정의
  age: number;
}

interface Developer extends Person {
  name: "jini";
}

const person: Person = {
  name: "",
  age: 25,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

interface lib extends Lib {
  a: 1;
  b: 3;
  c: "nana";
}
