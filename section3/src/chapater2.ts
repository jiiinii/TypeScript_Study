/**
 * Unknown 타입
 */

function unknownExam() {
  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운캐스팅(오류 발생)
  let unknownVar: unknown;
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * Never 타입(공집합): 모든 타입의 서브타입.
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 불가능(다운 캐스팅)
  // let never1: never = 1;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("Hi");
    return undefined;
  }

  // 업 캐스팅.
  let voidVar: void = undefined;
}

/**
 * Any 타입(치트키. 타입계층도를 모두 무시)
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 가능
  anyVar = unknownVar;
  undefinedVar = anyVar;

  // (다운캐스팅)불가능.
  // neverVar = anyVar;
}
