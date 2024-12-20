/**
 * infer : 조건부 타입 내에서 특정 타입만 추론해올수 있는 기능
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never; // infer R = R

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이여야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number 타입이 되길 바라는 타입

type PromiseB = PromiseUnpack<Promise<string>>;
// string 타입이 되길 바라는 타입
