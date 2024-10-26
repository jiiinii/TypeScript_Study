/**
 * 제네릭 클래스
 */

class List<T> {
  constructor(private list: T[]) {}

  pop() {
    return this.list.pop();
  }

  push(data: T) {
    this.list.push(data);
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();
console.log(`numberList >> ${JSON.stringify(numberList)}`);

const stringList = new List(["1", "2"]);
stringList.push("Hello");
