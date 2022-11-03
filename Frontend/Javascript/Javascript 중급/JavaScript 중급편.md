# JavaScript 중급편

[자바스크립트 중급 강좌 : 140분 완성](https://www.youtube.com/watch?v=4_WLS9Lj6n4&t=56)

- 추가적으로 찾아봐야 할 개념
    - 호이스팅 (변수)
    - 
- 호이스팅이란 ?
    
    스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동한다 
    
    var, let ,const 다 호이스팅이 된다.
    
    다만 호이스팅 되는 블록 스코프의 범위가 다를 뿐임 
    
- 변수
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled.png)
    
    var, let ,const 호이스팅이 다 된다.
    
    Temporal Dead Zone, 할당을 하기전에 사용할 수 없다
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%201.png)
    
    - 선언과 초기화 전에 사용할 수 없는게 TDZ이다.
    
    1. 선언
    2. 초기화
    3. 할당
    
    let은 선언과 초기화 단계 분리
    
    const 선언+초기화 + 할당 한번에 
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%202.png)
    
    - 선언과 동시에 초기화를 무조건 같이 해줘야 한다는 뜻 !!
    
     var는 함수 스코프, 선언과 초기화 단계가 합쳐져 있다 
    
    let과 const는 블록 스코프( 블록 외에선 사용 불가)
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%203.png)
    
    스코프 내부에서 var을 쓰면 바깥을 벗어나도 var 변수를 사용할 수 있구나 !!!
    
    var을 절대 쓰지말라는 법은 없네, 전역 변수처럼 사용하고 싶을때 사용하면 되겠다
    
    → 하지만 유일하게 벗어날 수 없는 스코프는 함수 스코프 
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%204.png)
    
    let과 const는 예측 가능한 결과를 내고, 버그를 줄일 수 있기 때문에 var을 사용하지 않는것을 권장한다. 
    
    **호이스팅 개념 더 찾아보기**
    
- 생성자 함수
    
    비슷한 객체 여러개 만들때 생성자 함수 사용한다
    
    ```jsx
    function Item(title,price){
        
        this.title = title;
        this.price = price;
        this.showPrice = function(){
            console.log(`가격은 ${price}`);
    
        }
    
    }
    
    const item1 = new Item('인형', 3000);
    const item2 = Item('가방', 4000);
    const item3 = new Item('지갑', 9000);
    
    console.log(item1,item2,item3);
    item3.showPrice();
    ```
    
    - new를 쓰고
    - 대문자로 생성한다
    
- 객체 메소드
    - Computed Property
    - Object 메소드
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%205.png)
    
    - 객체를 생성할때 [a]를 통해서 값을 직접 넣어줄 수 있다.
        - Computed Property
        
        ```jsx
        let n = "name";
        let a = "age";
        
        const user = {
          [n] : "Mike",
          [a] : 25,
          [1+4] : 5,
        };
        
        console.log(user);
        
        려
        ```
        
    
    객체를 만드는 함수
    
    ```jsx
    function makeObj(key, val){
      return {
        [key] : val,
      };
    }
    
    const obj = makeObj("성별", "male")
    
    console.log(obj);
    ```
    
    <aside>
    💡 이렇게 조금더 유용하게 객체에 []를 사용하여 집어 넣을 수 있다
    
    </aside>
    
    - 객체 복사 (Object.assign)
        
        newUser = user; 하면 참조값을 복사하기 때문에 제대로 복사하려면 이 메소드 사용
        
        Object.assign
        
    
    ```jsx
    const user= {
      name : "Mike",
      age : 30
    }
    
    const newUser = Object.assign({},user);
    console.log(newUser);
    
    //Object.assign을 통하여 객체 복사
    ```
    
    newUser = user;
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%206.png)
    
    ```jsx
    const user= {
      name : "Mike",
      age : 30
    }
    
    // Object.keys(user); 
    // Object.values(user);
    console.log(Object.keys(user))
    console.log(Object.values(user))
    
    >>
    // [object Array] (2)
    ["name","age"]
    // [object Array] (2)
    ["Mike",30]
    ```
    
    - Object.keys(user)
    - Object.values(user)
    
- Symbol
    
    자료형
    
    [https://www.notion.so](https://www.notion.so)
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%207.png)
    
    - 유일한 값이고 Object.keys() 객체 메소드를 사용했을떄 건너뛴다
    - **원본 데이터는 건드리지 않고 자신만의 key를 추가할수있다**
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%208.png)
    
    하지만 기존의 key를 바꾸면 안됨 !
    
    - 유일한 property를 추가하고 싶을때 symbol을 사용하자 !
    
    ```jsx
    //다른 개발자가 만들어 놓은 객체
    const user =  {
      name : "Mike",
      age : 30,
    };
    
    //내가 작업
    // user["showName"] = function(){
    //   console.log(this.name);
    // };
    
    const showName = Symbol("show name");
    user[showName] = function(){
        console.log(this.name);
    };
    
    for(let key in user)
      {
        console.log(`His ${key} is ${user[key]}.`);
      }
    ```
    
    다른 개발자가 만들어 놓은 객체를 해치지 않으면서 자신만의 유일한 property를 추가할수있음
    
- Number, math
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%209.png)
    
    - toFixed 하면 String이 되므로 Number로 다시 변환해줘야함
    
    isNan
    
    parseInt()
    
    등등 쇼핑몰이나 계산같은것 할떄 도움이 된다
    
- 배열1 (forEach,filter, map,split)
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2010.png)
    
    - forEach를 사용하는 방법
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2011.png)
    
    ```jsx
    let arr = ["Mike","Tom","Jane"]
    
    arr.forEach((name,index,object)=>{
      console.log(`${index+1} : ${name}`)
    });
    ```
    
    - find
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2012.png)
    
    find보단 filter가 조금더 실용적이네 !
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2013.png)
    
    ```jsx
    let arr = [1, 2, 3, 4, 5];
    console.log(arr)
    
    const result = arr.filter((item) => {
        return item % 2 === 0;
    });
    
    console.log(result);
    ```
    
    - map 함수
    
    ```jsx
    let userList = [
        {name: "Mike", age: 30},
        {name: "Jane", age: 27},
        {name: "Tom", age: 10},
    ];
    
    console.log(userList);
    
    let newUserList = userList.map((user, index) => {
        return Object.assign({}, user, {
            isAdult: user.age > 19,
            id: index + 1,
        });
    });
    
    console.log(newUserList);
    ```
    
    split은 json 파일을 배열로 전환해줄때 사용이 되겠구나
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2014.png)
    
- 배열2
    - arr.sort()
    - **arr.reduce**
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2015.png)
    
    원하는 배열이나 객체를 reduce를 이용하여 원하는 값으로 반환한다는 점에서 
    
    굉장히 유용하고 많이 쓰이겠네 !! 알아두자 
    
    ```jsx
    const result = arr.reduce((prev,cur)=>{
        console.log(`prev : ${prev}`);
        console.log(`cur : ${cur}`);
        console.log(cur);
        return prev +cur;
    },100)
    
    >>
    prev : 100
    cur : 1   
    1
    prev : 101
    cur : 2   
    2
    prev : 103
    cur : 3   
    3
    prev : 106
    cur : 4   
    4
    prev : 110
    cur : 5
    5
    115
    ```
    
    prev (앞에오는 인자)는 누적값
    
    cur는 arr의 인자 접근 
    
    ```jsx
    let userList = [
        {name: "Mike", age: 30},
        {name: "Tom", age: 10},
        {name: "Jane", age: 27},
        {name: "Sue", age: 26},
        {name: "Harry", age: 3},
        {name: "Steve", age: 60},
    ]
    
    //return prev를 꼭 써줘야하는구나 !
    let result = userList.reduce((prev, cur) => {
        prev.push(cur.name);
        return prev
    }, []);
    
    console.log(result);
    
    ```
    
    ```jsx
    let result = userList.reduce((prev, cur) => {
            prev = cur.age + prev;
        return prev
    }, 0);
    
    console.log(result);
    ```
    
    나이를 계산할수도 있구나 ! 
    
    누적값을 구해야 할때 reduce가 유용하다
    
    상황에 따라서 
    
    - forEach
    - map
    - reduce 의 용도가 다르구나 !
        - 누적값 한개를 계산할때
    
- 구조분해 할당
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2016.png)
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2017.png)
    
    이렇게 편하게 배열을 분해한 후에 할당할 수 있다
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2018.png)
    
    이렇게 split을 통하여 한번에 각각 선언 후 초기화 해주는 방식으로 활용될 수 있구나
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2019.png)
    
    undefined 가 나올것을 대비해서 미리 초기화 해주면 좋다 
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2020.png)
    
    원래 a와 b를 바꾸려면 
    
    temp를 사용해서 변경해야 했지만 구조분해할당을 하면 쉽게 값을 바꿀 수 있다
    
    객체도 이렇게 구조분해할당을 할 수있다, 이게 좀 유용할듯
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2021.png)
    
    ```jsx
    let user = {name : "euisung" , age : 26}
    // let {name,age} = user;
    // console.log(name);
    // console.log(age);
    
    let {name: userName,age : userAge} = user;
    console.log(userName);
    console.log(userAge);
    ```
    
- 나머지 매개변수, 전개 구문
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2022.png)
    
    - name에 하나의 ‘Mike”만 들어가는 것이 아닌, 개수 제한이 없다
    - java에서는 parameter의 개수를 정확하게 지정해놓았어야만 했는데, javascript에는 argument로 사용 가능하다
    - 이는 array 형태의 객체이므로 forEach, map같은 배열 메서드를 사용하진 못한다
    
    ```jsx
    function showName(name) {
        console.log(arguments.length);
        console.log(arguments);
        console.log(arguments[0]);
    }
    
    showName("Mike","euisung","yeah")
    
    >>
    3
    [Arguments] { '0': 'Mike', '1': 'euisung', '2': 'yeah' }
    Mike
    ```
    
    하지만 arguments를 사용하는 것보단 나머지 매개변수를 사용하는것을 권장한다
    
    **나머지 매개변수란 (Rest Parameter)?**
    
    …으로 사용
    
    ```jsx
    function add(a, b, c) {
        console.log(a + b + c);
    }
    
    add(1, 2, 3);
    add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    
    >>
    6
    6
    ```
    
    원래는 add 하려면 이렇게 했었잖아 
    
    근데 javascript에선 rest parameter로 parameter의 개수에 상관없이 배열로 들어오는 수를 받을 수 있다! 
    
    ```jsx
    function add(...num) {
        let result = 0;
        num.forEach((number)=>{
            result = result +number;
        })
        console.log(result);
    }
    
    add(1, 2, 3);
    add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    
    >>
    6
    55
    
    function add(...num) {
        let result = num.reduce((prev,cur)=>{
            prev = prev+ cur;
            return prev;
        },0)
        console.log(result);
    
    }
    
    add(1, 2, 3);
    add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    
    >>
    6
    55
    ```
    
    - 앞에서 사용한 arguments와는 다르게 객체형 배열이 아니라 그냥 배열임 !
        - forEach, reduce 등 배열 메소드를 사용할 수 있다
    
    생성자 생각했었는데 역시 생성자를 만들때도 나머지 매개변수가 굉장히 유용하다 !
    
    ```jsx
    function User(name,age,...skills){
        this.name = name;
        this.age = age;
        this.skills = skills;
    }
    
    const user1 = new User("Mike",30,"fashion","work");
    console.log(user1);
    ```
    
    …은 맨 마지막 parameter에 들어가야한다.
    
    - **전개구문(Spread syntax)**
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2023.png)
    
    ```jsx
    let arr1 = [1,2,3];
    let arr2 = [4,5,6];
    
    let numbers = [...arr2,...arr1];
    console.log(numbers);
    ```
    
    ```jsx
    let users = {name :"Mike"};
    let info = {age: 30};
    let fe = ["js", "react"];
    let lang = ["Korean", "English"];
    
    let user = Object.assign({},users,info,{
        skills  : [],
    });
    
    fe.forEach((item) => {
        user.skills.push(item);
    });
    
    lang.forEach((item)=>{
        user.skills.push(item);
    });
    
    console.log(user);
    ```
    
    원래 이렇게 했어야 했잖아
    
    이걸 전개구문으로 쉽게 쓰려면 ?
    
    ```jsx
    let user = {
        ...users,
        ...info,
        skills : [
            ...fe,
            ...lang,
        ]
    };
    
    ```
    
    이렇게 간단하게 가능하다 ! 
    
- 클로저(closure)
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2024.png)
    
    정리
    
    - 선언을 하면 lexical 환경에 호이스팅(변수가 최상위 선언된것처럼 동작)된다
    - let, const, var등은 초기화가 되어있지 않아 바로 사용하지 못하지만
    - 함수 선언문 (function)은 호이스팅 되면서 초기화까지 진행되어 사용이 가능하다
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2025.png)
    
     - 함수가 호출되면 두개의 lexical 환경을 갖게 된다
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2026.png)
    
    - 내부 lexical → 외부 lexical → 전역 lexical 을 참조하여 값을 찾는다
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2027.png)
    
    - 이건 num을 내부에서 찾고(parameter), one은 외부 → 전역 lexical 환경에서 값을 찾는다
    
    ---
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2028.png)
    
    - 처음에 function 함수선언문이 전역 lexical 환경에 호이스팅
    - add3은 전역 lexical 환경에 들어가지만 초기화는 되어있지 않음
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2029.png)
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2030.png)
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2031.png)
    
    **Closure**
    
    - 함수와 lexical 환경의 조합으로, 함수가 생성될 당시의 외부 변수를 기억(참조)해서 생성 이후에도 접근이 계속 가능하다 !
    - 여기선 마지막 줄 add3(1)이 이전에 만들어진 makeAdder(3)의 x값 3과 y값 1이 더해져서 4가 되는것 !
    
    → add3 함수가 생성된 이후에도 상위함수인 makeAdder의 **X에 접근이 가능하다는 뜻이다**
    
    → add3과 add10은 다른 환경을 가진다 
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2032.png)
    
    - makeCounter()을 호출
    - num = 0 → function()을 거쳐 내부 lexical 환경이 외부 let num = 0에 접근
    - 반복적으로 호출되면서 num이 증가한다
    - 즉, function 안에 있는 내부 lexical 환경이 외부 lexical 환경을 참조하고, 접근했다는 뜻이다, 이는 은닉화에 성공한것이고 갑자기 counter가 99로 증가할 수는 없다
    
- setTimeout / setInterval
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2033.png)
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2034.png)
    
    인수를 전달할 수 있었구나
    
    Id값을 받고, cleraTimeout에 넘겨주면 스케줄링을 취소할 수 있다
    
    ```jsx
    let num = 0;
    
    function showTime() {
        console.log(`접속한지 ${num++}초`);
        if (num > 5) {
            clearInterval(Tid);
        }
    }
    
    let Tid = setInterval(showTime, 1000);
    
    >>
    접속한지 0초
    접속한지 1초
    접속한지 2초
    접속한지 3초
    접속한지 4초
    접속한지 5초
    ```
    
- call, apply, bind
    
    자바에선 this가 class,method 등을 가리키고 this를 맘대로 바꿀수는 없었지만
    
    javascript에선 함수 호출 방식과 관계없이 this를 지정할 수 있다
    
     
    
    ## Call
    
    ```jsx
    const Mike = {
        name: "Mike"
    };
    const tom = {
        name: "Tom"
    };
    
    function showThisName(){
        console.log(this.name);
    }
    
    showThisName();
    showThisName.call(Mike);
    
    >>
    undefined
    Mike
    ```
    
    - this는 여기서 window를 가리킨다
    - 이렇게 함수에 this.name을 이용하고, showThisName.call(Mike) call을 이용해서 어떤 것을 접근할 것인지 알려줄 수 있다
        
        와 개신기 개유용 대박
        
    
    → 코드 재활용, 재사용성이 엄청 증가하겠네 
    
    - 첫번째 parameter는 this로 사용할 객체
    - 두번째 이후부터는 함수에 parameter로 전달된다
    
    ```jsx
    function update(birthday, occupation){
        this.birthday = birthday;
        this.occupation = occupation;
    
    }
    
    update.call(mike,"1998","대학생");
    console.log(mike);
    
    >>
    { name: 'Mike', birthday: '1998', occupation: '대학생' }
    ```
    
    ---
    
    ## Apply
    
    - call과 사용하는 방식과 돌아가는 개념은 같지만, 뒤에 parameter을 변수가 아닌 배열로 받는다
    - **A**pply는 **A**rray를 받는다
    
    ```jsx
    
    update.call(mike,"1998","대학생");
    console.log(mike);
    
    update.apply(mike,["1998","대학생"]);
    console.log(mike);
    
    >>
    { name: 'Mike', birthday: '1998', occupation: '대학생' }
    근데 결과는 똑같네, 배열로 저장되진 않는다
    ```
    
    ```jsx
    const nums = [1, 3, 5, 6, 2, 10];
    // const minNums = Math.min(...nums);
    // const maxNums = Math.max(...nums);
    
    let minNums = Math.min.call(null, ...nums);
    let maxNums = Math.max.call(null, ...nums);
    
    console.log(minNums);
    console.log(maxNums);
    
    minNums = Math.min.apply(null, nums);
    maxNums = Math.max.apply(null, nums);
    
    console.log(minNums);
    console.log(maxNums);
    
    >>
    1
    10
    1 
    10
    ```
    
    ---
    
    ## Bind
    
    - this값을 영구히 binding, 지정해주기 위해 bind를 사용한다(함수의 this값을 영구히 바꾼다)
    - mike, tom으로 계속 바뀔수 있었던건 call(this 객체대상, 뒤에 매개변수 변수), apply(this 객체대상, 뒤에 매개변수 배열)이었지만 mike로 영구히 지정, 묶어주고(bind) 싶으면 bind를 사용하면 되는것
    
    ```jsx
    const mike = {
        name: "Mike"
    };
    const tom = {
        name: "Tom"
    };
    
    function update(birthday, occupation){
        this.birthday = birthday;
        this.occupation = occupation;
    }
    
    // const updateMike= update.bind(mike,"1998","대학생");
    const updateMike= update.bind(mike);
    updateMike("1998","대학생");
    console.log(mike)
    
    >>
    { name: 'Mike', birthday: '1998', occupation: '대학생' }
    ```
    
    bind는 뒤에 매개변수를 넣지 않나보네
    
    // const updateMike= update.bind(mike,"1998","대학생"); 하면 mike만 나옴, 뒤에 update 되지않음
    

- Promise
    
    언제끝나는지 알고싶을때 철웅이가 한것처럼 10초마다 db 왔다갔다 하거나 할필요없이 
    
    전화번호 주고 끝나면 알려달라고 하면 된다
    
    ```jsx
    const pr = new Promise((resolve, reject) => {});
    ```
    
    이렇게 어떤일이 완료됐을때 실행이 되는 함수를 **CallBack 함수**라고한다
    
    new promise의 객체 
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2035.png)
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%2036.png)
    
    밑에 코드는 소비자 코드 : promise는 then을 이용해서 받는다 
    
    ```jsx
    const pr = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("OK");
        // reject(new Error("error..."));
      }, 3000);
    });
    
    pr.then((result) => {
      console.log(result + "가지러 가자 ");
    })
      .catch((err) => {
        console.log("error 발생, 다시 주문해주세요");
      })
      .finally(() => {
        console.log("끝");
      });
    ```
    
    이게 좋다 
    
    ```jsx
    const f1 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("1번 주문 완료");
        });
      });
    };
    
    const f2 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("2번 주문 완료");
        });
      });
    };
    
    const f3 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("3번 주문 완료");
        });
      });
    };
    
    console.log("시작");
    f1()
      .then((resolve) => f2(resolve))
      .then((resolve) => f3(resolve))
      .then((resolve) => console.log(resolve))
      .catch(console.log)
      .finally(() => {
        console.log("끝");
      });
    
    >>
    "1번 주문 완료"
    "2번 주문 완료"
    "3번 주문 완료"
    "끝"
    ```
    
    ```jsx
    const f1 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("1번 주문 완료");
        });
      });
    };
    
    const f2 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //resolve("2번 주문 완료");
          reject("실패")
        });
      });
    };
    
    const f3 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("3번 주문 완료");
        });
      });
    };
    
    console.log("시작");
    f1()
      .then((resolve) => f2(resolve))
      .then((resolve) => f3(resolve))
      .then((resolve) => console.log(resolve))
      .catch(console.log)
      .finally(() => {
        console.log("끝");
      });
    
    >>
    "1번 주문 완료"
    "실패"
    "끝"
    ```
    
    - promiseall
    
    이떄 promiseall 하면 한꺼번에 진행시켜 시간을 단축시킬수있따
    
    이떄는 다보여주거나 아예 안보여주거나 
    
    - race
    
    가독성이 떨어지는것을 보완하는게 async?
    
    하나라도 먼저 끝나면 경주처럼 1등정해지고 끝남 
    

- async
    
    promise의 chain 형식을 쓰는데 가독성이 훨씬 좋아진다
    
    ```jsx
    async function getName() {
      //async를 넣어주면 항상 promise를 반환한다
      return "Mike";
    }
    
    // console.log(getName()); //promise
    getName().then((name) => {
      console.log(name);
    });
    
    >>mike
    
    async function getName() {
      //async를 넣어주면 항상 promise를 반환한다
      return Promise.resolve("Tom");
    }
    
    // console.log(getName()); //promise
    getName().then((name) => {
      console.log(name);
    });
    ```
    
    await : promise 함수에서만 사용할수 있고, 함수가 처리될때까지 기다린다 
    
    - await 사용전
    
    ```jsx
    const f1 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("1번 주문 완료");
        });
      });
    };
    
    const f2 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //resolve("2번 주문 완료");
          reject("실패")
        });
      });
    };
    
    const f3 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("3번 주문 완료");
        });
      });
    };
    
    console.log("시작");
    f1()
      .then((resolve) => f2(resolve))
      .then((resolve) => f3(resolve))
      .then((resolve) => console.log(resolve))
      .catch(console.log)
      .finally(() => {
        console.log("끝");
      });
    
    >>
    "1번 주문 완료"
    "실패"
    "끝"
    ```
    
    await 사용 코드
    
    ```jsx
    const f1 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("1번 주문 완료");
        }, 1000);
      });
    };
    
    const f2 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("2번 주문 완료");
          //   reject("실패");
        }, 2000);
      });
    };
    
    const f3 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("3번 주문 완료");
        });
      }, 3000);
    };
    
    console.log("시작");
    async function order() {
      const result1 = await f1();
      const result2 = await f2(result1);
      const result3 = await f3(result2);
      console.log(result3);
      console.log("종료");
    }
    order();
    ```
    
    promise 에서는 catch로 exception을 handle했는데 async에서는 try catch 문으로 exception을 handle한다 .
    
    ```jsx
    const f1 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("1번 주문 완료");
        }, 1000);
      });
    };
    
    const f2 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //   resolve("2번 주문 완료");
          reject(new Error("error.."));
        }, 2000);
      });
    };
    
    const f3 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("3번 주문 완료");
        });
      }, 3000);
    };
    
    console.log("시작");
    async function order() {
      try {
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3);
      } catch (error) {
        console.log(error);
      }
      console.log("종료");
    }
    order();
    ```