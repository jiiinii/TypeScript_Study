/**
 * 인터페이스 : 상호간의 약속된 규칙
 * 타입에 이름을 지어주는 또 다른 문법.
 * + 객체의 구조를 정의하는데 특화된 문법 (상속, 합침 등의 특수한 기능을 제공함.)
 *
 * interface 문법 변수명을 지을 때 맨 앞에 'I'를 붙이는 경향이 있음
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
  //   sayHi:() => void;
  //   sayHi:(a: number, b: number) => void;
}

const person: Person = {
  name: "박진희",
  age: 26, // 선택적 프로퍼티로 설정 되어있어 없어도 될 코드.
  sayHi: function () {
    console.log("Hi~!!");
  },
};

// person.name = "Park JinHui"; // 읽기 전용 프로퍼티로 설정 되어있어 오류남.

person.sayHi();
person.sayHi(1, 2);
