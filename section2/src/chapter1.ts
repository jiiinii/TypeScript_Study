/**
 * 기본 5개의 원시 타입
 */

// number 타입 (숫자)
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string 타입 (문자)
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean 타입 ()
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// let numA: number = null // 허용 X. 이미 null이라는 타입이 존재하기 때문에 error 발생

// 리터럴 타입
// 리터럴 -> 값
let numA: 10 = 10;

let strA: "hello" = "hello";
// let strB: "jinhui" = "park"; // X: error

let bool_: true = true;
// let bool_1: true = false; // X: error
