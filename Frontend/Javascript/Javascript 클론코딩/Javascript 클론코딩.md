# Javascript 클론코딩

노마드 코더 

[Lecture - 노마드 코더 Nomad Coders](https://nomadcoders.co/javascript-for-beginners/lectures/2867)

- 기본
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Momentum</title>
    </head>
    <body>
        <script src = "script.js"></script>
    </body>
    </html>
    ```
    
    콘솔을 켜놓고 시작
    
    document는 javascript에서 html document을 가져온다 
    
    ```jsx
    document.getElementById("title")
    title.innerText = "Got you !"
    console.dir(title);
    ```
    
    ```jsx
    
    const title = document.querySelector(".hello h1");
    //elements를 css 타입으로 가져온다 
    
    title.innerText = "Hello"
    ```
    
    클릭 이벤트
    
    ```jsx
    const title = document.querySelector("div.hello:first-child h1");
    
    function handleTitleClick(){
        console.log("title was clicked!");
    }
    title.addEventListener("click",handleTitleClick);
    ```
    
    h1 html element mdn 검색 
    
    dir을 활용하여 활용할수있는 event 찾기
    
    ```jsx
    const h1 = document.querySelector("div.hello:first-child h1");
    
    function handleTitleClick(){
        h1.style.color = "blue";
    }
    
    function handleMouseEnter(){
        h1.innerText = "Mouse is here";
    }
    
    function handleMouseLeave(){
        h1.innerText = "Mouse is Gone";
    }
    
    function handleWindowResize(){
        document.body.style.backgroundColor = "tomato";
    }
    
    function handleWindowCopy(){
        alert("copier")
    ;}
    
    function handleWindowOffline(){
        alert("SOS no WIFI");
    }
    
    function handleWindowOnline(){
        alert("Online");
    }
    
    h1.addEventListener("click",handleTitleClick); //()를 넣어서 바로 실행시키지 않는다
    h1.addEventListener("mouseenter",handleMouseEnter);
    h1.addEventListener("mouseleave",handleMouseLeave);
    
    window.addEventListener("resize",handleWindowResize);
    window.addEventListener("copy",handleWindowCopy);
    window.addEventListener("offline",handleWindowOffline);
    window.addEventListener("offline",handleWindowOffline);
    window.addEventListener("online",handleWindowOnline);
    ```
    
    title.dir로 활용할수있는거 확인 
    
    하지만 style은 css를 통해서 변경해야함 
    
    ```jsx
    const h1 = document.querySelector("div.hello:first-child h1");
    
    function handleTitleClick(){
    
    const currentColor = h1.style.color;
    let newColor;
        if(currentColor =="blue"){
            newColor = "tomato";
        }
        else{
            newColor ="blue";
        }
        h1.style.color = newColor;
    }
    
    h1.addEventListener("click",handleTitleClick); //()를 넣어서 바로 실행시키지 않는다
    ```
    
    → CSS 파일을 활용한 이벤트 활용해야함
    
    ```jsx
    const h1 = document.querySelector("div.hello:first-child h1");
    
    function handleTitleClick(){    
        const ClickedClass = "clicked"
       if(h1.classList.contains(ClickedClass)){
        h1.classList.remove(ClickedClass);
       }else{
        h1.classList.add(ClickedClass);
       }
    }
    
    h1.addEventListener("click",handleTitleClick); //()를 넣어서 바로 실행시키지 않는다
    ```
    
    javascript 파일은 html을 바꾸고 , css는 html에 따라 style을 변경시킨다.
    
- 로그인
    
    ```jsx
    const loginInput = document.querySelector("#login-form input");
    const loginButton = document.querySelector("#login-form button");
    
    function onLoginBtnClick() {
      const username = loginInput.value;
      // if(username ==""){
      //     alert("Please write your name");
      // }else if(username.length>10){
      //     alert("Your name is too long.");
      // }
      console.log(username);
    }
    
    loginButton.addEventListener("click", onLoginBtnClick);
    ```
    
    이렇게 할필요 없이 html에서 제공을 해준다
    
    ```jsx
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Momentum</title>
      </head>
      <body>
        <form id="login-form">
          <input
            required
            maxlength="15"
            value="hahaha"
            type="text"
            placeholder="What is your name?"
          />
          <button>Log In</button>
        </form>
        <script src="script.js"></script>
      </body>
    </html>
    ```
    
    이렇게하면 form이 알아서 click 이벤트를 handle하지만 자동으로 submit하고 새로고침하는 문제 발생
    
    ```jsx
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    function onLoginSubmit(event) {
      event.preventDefault();
      console.log(loginInput.value);
    }
    
    loginForm.addEventListener("submit", onLoginSubmit);
    ```
    
    parameter로 event에 대한 객체를받고, 설정할수있음 
    
    **default behavior를 막는게 중요하다 !**
    
    ```jsx
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    
    const link = document.querySelector("a");
    
    function onLoginSubmit(event) {
      event.preventDefault();
      console.log(loginInput.value);
    }
    
    function handleLinkClick(event) {
      event.preventDefault();
      console.dir(event);
    }
    
    loginForm.addEventListener("submit", onLoginSubmit);
    link.addEventListener("click", handleLinkClick);
    ```
    
    handleLinckClick() 처럼 바로 실행되는게 아니라 자바스크립트가 알아서 실행시켜주고 
    
    () 안에있는 파라미터(event)의 정보가 담겨있는 객체를 반환.
    
    ```jsx
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const greeting = document.querySelector("#greeting");
    
    const HIDDEN_CLASSNAME = "hidden";
    
    function onLoginSubmit(event) {
      event.preventDefault();
      const username = loginInput.value;
      loginForm.classList.add("hidden");
      greeting.innerText = "Hello " + username;
      greeting.innerText = `Hello ${username}`; //string combine할때 이 방법이 더 좋다 
      greeting.classList.remove(HIDDEN_CLASSNAME);
      console.log(HIDDEN_CLASSNAME);
    }
    
    loginForm.addEventListener("submit", onLoginSubmit);
    
    //css
    .hidden {
      display: none;
    }
    
    //html
    
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Momentum</title>
      </head>
      <body>
        <form id="login-form">
          <input
            required
            maxlength="15"
            value="hahaha"
            type="text"
            placeholder="What is your name?"
          />
          <button>Log In</button>
        </form>
        <h1 id="greeting" class="hidden"></h1>
        <script src="script.js"></script>
      </body>
    </html>
    ```
    
    loginForm.classList.add(”hidden”)
    
    → classList를 사용한다
    
    이제 기억을 해야겠지
    
    LocalStorage : api가 기억해준다.
    
    ```jsx
    localStorage.setItem("username", username);
    ```
    
    저장하면 form 사라지게 하자
    
    반복되는 string은 변수로 따로 저장하자 USERNAME_KEY
    
- 시계
    
    interval
    
    setInteval
    
    ```jsx
    const clock = document.querySelector("h2#clock");
    
    function sayHello() {
      console.log("hello");
    }
    
    setInterval(sayHello, 5000);
    setTimeout(sayHello, 5000);
    ```
    
    setInterval로 매초마다 실행 
    
    ```jsx
    const clock = document.querySelector("h2#clock");
    
    function getClock() {
      const date = new Date();
      clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
    
    // // setInterval(sayHello, 5000);
    // setTimeout(sayHello, 5000);
    getClock();
    setInterval(getClock, 1000);
    ```
    
    1 이 01로 되게하고싶을때
    
    padStart
    
    ```jsx
    const clock = document.querySelector("h2#clock");
    
    function getClock() {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      clock.innerText = `${hours}:${minutes}:${seconds}`;
    }
    
    // // setInterval(sayHello, 5000);
    // setTimeout(sayHello, 5000);x
    getClock();
    setInterval(getClock, 1000);
    ```
    
- 랜덤
    
    html → javascript이였는데
    
    역순으로
    
- Todo
    
    ```jsx
    const toDoForm = document.getElementById("todo-form");
    const toDoInput = toDoForm.querySelector("input");
    const toDoList = document.getElementById("todo-list");
    
    function deleteToDo(event) {
      const li = event.target.parentElement;
      li.remove();
    }
    
    function paintToDo(newTodo) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.innerText = newTodo;
      const button = document.createElement("button");
      button.innerText = "X";
      button.addEventListener("click", deleteToDo);
      li.appendChild(span);
      li.appendChild(button);
      toDoList.append(li);
    }
    
    function handleToDoSubmit(event) {
      event.preventDefault();
    
      //   console.log(toDoInput.value);
      const newTodo = toDoInput.value;
      toDoInput.value = "";
      paintToDo(newTodo);
    }
    
    toDoForm.addEventListener("submit", handleToDoSubmit);
    ```
    
    event에 모든 속성값이 들어있고, target에서 parentElement를 통하여 li를 찾고 지울수있다.
    
    save할때 localStorage에 넣는데 string 형식으로 넣게된다.
    
    string이지만, array형태로 넣고싶을때 어떻게해야할까? 
    
    - JSON.stringify(todos)
    - JSON.parse()로 다시 array로 변환할수있다.
    
    array의 각각의 아이템들에게 무언가를 하고싶을때
    
    array.forEach
    
    ```jsx
    function sayHello(item) {
      console.log("this is the term of item", item);
    }
    
    const savedToDos = localStorage.getItem(TODOS_KEY);
    
    if (savedToDos != null) {
      const parsedToDos = JSON.parse(savedToDos);
      console.log(parsedToDos);
      parsedToDos.forEach(sayHello);
    }
    
    if (savedToDos != null) {
      const parsedToDos = JSON.parse(savedToDos);
      console.log(parsedToDos);
      parsedToDos.forEach((item) => console.log("this is the turn", item));
    }
    이렇게 화살표 함수로 쓰자 
    ```
    
    지울 array를 새로 생성한다 → filter
    
    ```jsx
    const toDoForm = document.getElementById("todo-form");
    const toDoInput = toDoForm.querySelector("input");
    const toDoList = document.getElementById("todo-list");
    const TODOS_KEY = "todos";
    let toDos = [];
    
    function saveToDos() {
      localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    }
    
    function deleteToDo(event) {
      const li = event.target.parentElement;
      li.remove();
      toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
      saveToDos();
      //   localStorage.removeItem();
    }
    
    function paintToDo(newTodo) {
      const li = document.createElement("li");
      li.id = newTodo.id;
      const span = document.createElement("span");
      span.innerText = newTodo.text;
      const button = document.createElement("button");
      button.innerText = "X";
    	  button.addEventListener("click", deleteToDo);
      li.appendChild(span);
      li.appendChild(button);
      toDoList.append(li);
      toDos.push();
    }
    
    function handleToDoSubmit(event) {
      event.preventDefault();
    
      //   console.log(toDoInput.value);
      const newTodo = toDoInput.value;
      toDoInput.value = "";
      const newTodoObj = {
        text: newTodo,
        id: Date.now(),
      };
      toDos.push(newTodoObj);
      paintToDo(newTodoObj);
      saveToDos();
    }
    
    toDoForm.addEventListener("submit", handleToDoSubmit);
    
    const savedToDos = localStorage.getItem(TODOS_KEY);
    
    if (savedToDos != null) {
      const parsedToDos = JSON.parse(savedToDos);
      toDos = parsedToDos;
      parsedToDos.forEach(paintToDo);
    }
    ```