/**
 * 조건부 타입
 */

type A = number extends string ? string : number; // number가 string 타입을 확장하는 타입인가? true면 string. false면 number.

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // 참

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined; // 오버로드 시그니처
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterjini");
result.toUpperCase();

let result2 = removeSpaces(undefined);
