// void 타입
// void = 공허, 아무것도 없다. 아무것도 없음을 의미하는 타입

// 문자열을 반환
function func1(): String {
  return "hello";
}

function func2(): void {
  console.log("hello"); // 반환 X , 출력 O
}

function func3(): undefined {
  console.log("hello");
  return; // undefined랑 반환하는 것과 같다.
}

function func4(): null {
  console.log("hello");
  return null;
}

let a: void;
// a = 1; // 오류
// a = "hello"; // 오류
// a = {}; // 오류
a = undefined;

// tsconfig에서 "strictNullChecks": false로 전환할 시
// a = null; // 이 가능

// never = 존재하지 않는, 불가능한 타입

function func5(): never {
  while (true) {}
}

function func6(): never {
  throw new Error();
}

let anyVar: any;

let b: never;
// (밑에)모두 오류남. 아무것도 담을 수 X
// never 형식에 할당할 수 없다.
// b = 1;
// b = {};
// b = "";
// b = undefined;
// b = null;
// b = anyVar;
