/**
 * 인터페이스의 확장
 *
 * 전체적으로 name과 age가 중복이 됨.
 * extends: 확장하다
 */

// type Animal = { // 가능
//     name: string;
//     age: number;
//   }

interface Animal {
  name: string;
  age: number;
}

// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

interface Dog extends Animal {
  // name: "happy" // O 동일한 프로퍼티를 재정의 할 때는, 반드시 원본 프로퍼티의 타입의 서브타입이 되도록 다시 정의를 해줘야한다.
  // name: number // error
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  age: 2,
  isBark: true,
};

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

interface Cat extends Animal {
  isScratch: boolean;
}

const cat: Cat = {
  name: "",
  age: 4,
  isScratch: false,
};

// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }

interface Chicken extends Animal {
  isFly: boolean;
}

const chicken: Chicken = {
  name: "",
  age: 1,
  isFly: true,
};

// 다중확장 가능
interface DogCat extends Dog, Cat {}

const dogcat: DogCat = {
  name: "",
  age: 3,
  isBark: false,
  isScratch: true,
};
