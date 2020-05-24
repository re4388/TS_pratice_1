

// import * as _ from 'lodash'

// async function hello() {
//     return 'world'
// }

// 透過 npm i 套件的type, 你也拿到了code intelligence的功能
// _.pickBy()


// 變數
// let lucky = 23;
// let lucky: number;

// this give u flexsibility but avoid doing this
// let lucky:any = 23;

// lucky = 'ss'



//////////////////


// type Style = string;
// let font: Style


// union
// type Style = 'bold' | "italic" | number
// let font: Style;

// font = 23


// 定義物件的型別
// interface Person {
//     first: string;
//     last: string;
//     [key: string]: any
// }

// const person: Person = {
//     first: 'apple',
//     last: 'banana'
// }

// const person2: Person = {
//     first: "apple2",
//     last: "banana2",
//     fast: true
// };

//定義函數
// function pow(x: number, y: number): string {
//     return Math.pow(x, y).toString()
// }
// console.log(pow(2, 3))

// function pow2(x: number, y: number): void {
//    Math.pow(x, y).toString();
// }
// pow2(2, 3);

// Array
// const arr: number[] = []
// arr.push(23)
// // arr.push('22');


// const arr2: Person[] = []
// // arr2.push(23)
// // arr.push('22');


// 別名，也就是自定義型別
// type MyTuple = [number?, string?, boolean?]

// const arr3: MyTuple = []
// arr3.push(23)
// arr3.push('22');


// // Generics

// class Observerble <T>{
//     constructor(public value: T) {}
// }

// let x: Observerble<number>
// let y: Observerble<Person>;
// let z = new Observerble(23)





