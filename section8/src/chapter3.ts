/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "turtle";

type ColoredAnimal = `${Color}-${Animal}`;

const colorAnimal: ColoredAnimal = "black-dog";
console.log(`colorAnimal >> ${colorAnimal}`);
