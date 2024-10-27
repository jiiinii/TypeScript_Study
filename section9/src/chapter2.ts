/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>; // T가 number가 되기 때문에 위 조건식이 참이 되어서, string 타입이 됨

let b: StringNumberSwitch<string>; // T가 string이 되기 때문에 위 조건식이 거짓이 되어서, number 타입이 됨

let c: StringNumberSwitch<number | string>;
// let c : StringNumberSwitch<number> --> string 타입이 됨
// let c : StringNumberSwitch<string> --> number 타입이 됨

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// let d : StringNumberSwitch<boolean>
// let d : StringNumberSwitch<number>
// let d : StringNumberSwitch<string>

// 2단계
// number
// string
// number

// 결과
// number | string

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// 결과
// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 1단계
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 최종결과
// string
