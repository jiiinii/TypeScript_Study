/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
// let person:any = {}; // 좋지 않음.
person.name = "박진희";
person.age = 26;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 *
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B이 서브타입이여야 함
 */

let num1 = 10 as never; // never 타입으로 선언 됨. A가 B의 슈퍼타입.
let num2 = 10 as unknown; // unknown은 모든타입의 슈퍼타입임. A가 B의 서브타입.

// let num3 = 10 as string; // A와 B가 서로 슈퍼나 서브타입이 될 수 없음.
let num3 = 10 as unknown as string; // 다중단언. 웬만하면 사용 X.

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = ""; // error. 프로퍼티의 값을 수정할 수 없음.

/**
 * Non Null 단언 => !
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글",
  author: "박진희",
};

const len: number = post.author!.length; // 옵셔널 체이닝. 프로퍼티의 값이 없을 때 unknown으로 대체 됨.
