/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업캐스팅 (가능)

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮을까?
 */

// 추가 프로퍼티가 없는 조건이 더 적은 타입이 '슈퍼타입'이 된다
type Animal = {
  name: String;
  color: String;
};

// 추가 프로퍼티가 있는 타입이 슈퍼타입이 되는 게 아니다.
type Dog = {
  name: String;
  color: String;
  breed: String;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};
console.log(`animal >>> ${animal.name}, ${animal.color}`);

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};
console.log(`dog >>> ${dog.name}, ${dog.color}, ${dog.breed}`);

animal = dog; // 업캐스팅
// dog = animal; // 다운캐스팅(err)

type Book = {
  name: String;
  price: Number;
};

type ProgramingBook = {
  name: String;
  price: Number;
  skill: String;
};

let book: Book;
let programingBook: ProgramingBook = {
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 33000,
  skill: "react.js",
};

book = programingBook; // 업캐스팅
// programingBook = book; // 다운캐스팅

/**
 * 초과 프로퍼티 검사란?
 * -> 실제 타입에는 정의 해놓지 않은 프로퍼티를 작성하면 안되도록 막는 검사
 */

let book2: Book = {
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 33000,
  //   skill: "react.js",
};

let book3: Book = programingBook; // 허용
function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 33000,
  //  skill: "react.js",
});
func(programingBook);
