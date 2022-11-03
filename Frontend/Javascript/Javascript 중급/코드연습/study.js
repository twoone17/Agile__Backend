/**
 1) 생성자
 **/
/*
function Item(title, price) {
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}`);
  };
}

const item1 = new Item("인형", 3000);
const item2 = Item("가방", 4000);
const item3 = new Item("지갑", 9000);

// console.log(item1, item2, item3);
console.log(item1)
item3.showPrice();
*/
/**
 * 2)객체 메소드 : 객체를 만드는 함수를 사용자화할 수 있다
 */
//객체 생성할때 [a]를 통해서 값 직접 넣어줄 수 있다
/*
let n = "name";
let a = "age";

const user = {
  [n]: "Mike",
  [a]: 25,
  [1 + 4]: 5,
};

console.log(user);
*/
//객체를 만드는 함수 ~~
// function makeObj(key, val) {
//   return {
//     [key]: val,
//   };
// }
// const obj = makeObj("성별", "male");
// console.log(obj);

// ----------------------------------------------------------
/**
 * Symbol : 다른 사용자가 만든 객체를 해치지 않고 나만의 객체 property를 만들때 유용
 */
// const user = {
//   name: "Mike",
//   age: 30,
// };
//
// const id = Symbol("id");
// user[id] = "myid";
//
// //내가 실제로 작업할때 이렇게 하면 유용하겠네
// const showName = Symbol("show name");
// user[showName] = function () {
//   console.log("symbol", this.name);
// };
//
// //내가 실제로 작업할때
// user[showName]();
//
// //사용자가 보게 되는 객체
// for (let key in user) {
//   console.log(`Your ${key} is ${user[key]} `);
// }
//
// ----------------------------------------------------------
/**
 * 배열 메소드
 */
/**
 * forEach
 */
// let arr = ["Mike","Tom","Jane"]
//
// arr.forEach((name,index,object)=>{
//   console.log(`${index+1} : ${name}`)
// });


/**
 * filter
 */

//
// let arr = [1, 2, 3, 4, 5];
// console.log(arr)
//
// const result = arr.filter((item) => {
//     return item % 2 === 0;
// });
//
// console.log(result);

/**
 * map 함수를 사용하는 방법
 * */
//
// let userList = [
//     {name: "Mike", age: 30},
//     {name: "Jane", age: 27},
//     {name: "Tom", age: 10},
// ];
//
// console.log(userList);
//
// let newUserList = userList.map((user, index) => {
//     return Object.assign({}, user, {
//         isAdult: user.age > 19,
//         id: index + 1,
//     });
// });
//
// console.log(newUserList);

/**
 * array ) reduce
 */
// let arr = [1,2,3,4,5];
// let val = 0;
//
// arr.forEach((item)=>{
//     val = val + item;
// })
// console.log(val);

// const result = arr.reduce((prev,cur)=>{
//     return prev +cur;
// })
//파라미터를 이용하여 초기 시작값 지정가능
// const result = arr.reduce((prev,cur)=>{
//     console.log(`prev : ${prev}`);
//     console.log(`cur : ${cur}`);
//     console.log(cur);
//     return prev +cur;
// },100)
//
// console.log(result);
//
// console.log(result)
//
// let userList = [
//     {name: "Mike", age: 30},
//     {name: "Tom", age: 10},
//     {name: "Jane", age: 27},
//     {name: "Sue", age: 26},
//     {name: "Harry", age: 3},
//     {name: "Steve", age: 60},
// ]

//return prev를 꼭 써줘야하는구나 !
// let result = userList.reduce((prev, cur) => {
//     prev.push(cur.name);
//     return prev
// }, []);
// let result = userList.reduce((prev, cur) => {
//         prev = cur.age + prev;
//     return prev
// }, 0);
//
// console.log(result);
/**
 * 구조분해할당
 */

// let a = 0;
// let b = 2;
// [a,b] = [b,a]
// console.log(a)
// console.log(b)

// let user = {name : "euisung" , age : 26}
// // let {name,age} = user;
// // console.log(name);
// // console.log(age);
//
// let {name: userName,age : userAge} = user;
// console.log(userName);
// console.log(userAge);

/**
 * arguments, rest parameter
 * */
// function showName(name) {
//     console.log(arguments.length);
//     console.log(arguments);
//     console.log(arguments[0]);
// }
//
// showName("Mike","euisung","yeah")

// function add(...num) {
//     let result = 0;
//     num.forEach((number)=>{
//         result = result +number;
//     })
//     console.log(result);
// }
//
// add(1, 2, 3);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function add(...num) {
//     let result = num.reduce((prev,cur)=>{
//         prev = prev+ cur;
//         return prev;
//     },0)
//     console.log(result);
//
// }
//
// add(1, 2, 3);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/**
 * 생성자를 만들때 rest parameter(나머지 매개변수) 사용
 */

// function User(name,age,...skills){
//     this.name = name;
//     this.age = age;
//     this.skills = skills;
// }
//
// const user1 = new User("Mike",30,"fashion","work");
// console.log(user1);

/**
 * 전개구문 (Spread Syntax) ...
 */

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
//
// let numbers = [...arr2,...arr1];
// console.log(numbers);

// let users = {name :"Mike"};
// let info = {age: 30};
// let fe = ["js", "react"];
// let lang = ["Korean", "English"];

// let user = Object.assign({},users,info,{
//     skills  : [],
// });
//
// fe.forEach((item) => {
//     user.skills.push(item);
// });
//
// lang.forEach((item)=>{
//     user.skills.push(item);
// });

// let user = {
//     ...users,
//     ...info,
//     skills : [
//         ...fe,
//         ...lang,
//     ]
// };
//
// console.log(user)

/**
 * setinterval, setTimeout
 */
// let num = 0;
//
// function showTime() {
//     console.log(`접속한지 ${num++}초`);
//     if (num > 5) {
//         clearInterval(Tid);
//     }
// }
//
//
// let Tid = setInterval(showTime, 1000);
//

/**
 * call, apply, bind
 */
// const mike = {
//     name: "Mike"
// };
// const tom = {
//     name: "Tom"
// };

// function showThisName(){
//     console.log(this.name);
// }
// //
// // showThisName();
// // showThisName.call(Mike);
//
// function update(birthday, occupation){
//     this.birthday = birthday;
//     this.occupation = occupation;
//
// }
//
// // update.call(mike,"1998","대학생");
// // console.log(mike);
//
// update.apply(mike,["1998","대학생"]);
// console.log(mike);
//
// const nums = [1, 3, 5, 6, 2, 10];
// // const minNums = Math.min(...nums);
// // const maxNums = Math.max(...nums);
//
// let minNums = Math.min.call(null, ...nums);
// let maxNums = Math.max.call(null, ...nums);
//
// console.log(minNums);
// console.log(maxNums);
//
// minNums = Math.min.apply(null, nums);
// maxNums = Math.max.apply(null, nums);
//
//
// console.log(minNums);
// console.log(maxNums);

// const mike = {
//     name: "Mike"
// };
// const tom = {
//     name: "Tom"
// };
//
// function update(birthday, occupation){
//     this.birthday = birthday;
//     this.occupation = occupation;
// }
//
// // const updateMike= update.bind(mike,"1998","대학생");
// const updateMike= update.bind(mike);
// updateMike("1998","대학생");
// console.log(mike)