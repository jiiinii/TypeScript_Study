/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 타입을 잘 좁혀주지 않음.
// function isDog(animal: Animal) {
//   return (animal as Dog).isBark !== undefined;
// }

// -- 타입 가드 --
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warnging(animal: Animal) {
  if ("isBark" in animal) {
    // 강아지
    animal;
  } else if ("isScratch" in animal) {
  }
}
