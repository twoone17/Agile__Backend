# React JS

- 시작
    
    ```jsx
    <!DOCTYPE html>
    <html>
      <body>
        <span>Total clicks: 0</span>
        <button id="btn">Click me</button>
      </body>
      <script>
        let counter = 0;
        const button = document.getElementById("btn");
        const span = document.querySelector("span");
        function handleClick() {
          counter = counter + 1;
          span.innerText = `Total clicks : ${counter}`;
        }
        button.addEventListener("click", handleClick);
      </script>
    </html>
    
    ```
    
    기존코드
    
    html에 button을 미리 만들어주고 자바스크립트에서 getElementById나 querySelector로 찾은후 함수를 만들어서 찾은 곳에다가 이벤트를 넣어줌
    
    - 연습
        
        ```html
        <!DOCTYPE html>
        <html>
          <body>
            <span>Total click : 0</span>
            <button id="btn">click me</button>
          </body>
          <script>
            let count = 0;
            const button1 = document.getElementById("btn");
            const span1 = document.querySelector("span");
        
            button1.addEventListener("click", handleClick);
            /**
             * button이 아닌 button1같이 지정해줘도됨
            /**
        
            onClick 이 아닌 "click"를 지정해줘야함
            onClick 같은 클릭이벤트에 뭐가있는지 궁금할때는 console.dir(button1)
            이런식으로
             */
            function handleClick() {
              count++;
              span1.innerText = `${count}`;
            }
            /**
             * `${}로 변수 넣을수 있음,
             */
          </script>
        </html>
        ```
        
    
    ---
    
    ```jsx
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
      <script>
        const root = document.getElementById("root");
        const span = React.createElement(
          "span",
          { id: "sexy-span", style: { color: "red" } },
          "Hello I'm a span"
        ); //html의 태그와 똑같아야함
        ReactDOM.render(span, root); //render : 유저에게 보여준다
        //React의 핵심 : javascript -> html
        //바닐라 js : html -> javascript
      </script>
    </html>
    ```
    
    React 하드 코딩 : import한 후에 createElement를 사용하여 html을 변경해주고 쉽게 바꿔줌
    
    - react
    - reactdom
    
    import 
    
    ```jsx
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
      <script>
        const root = document.getElementById("root");
        const h3 = React.createElement(
          "h3",
          {
            onMouseEnter: () => console.log("mouse enter"),
          },
          "Hello I'm a span"
        ); //html의 태그와 똑같아야함
        const btn = React.createElement(
          "button",
          {
            onClick: () => console.log("im clicked"),
          },
          "Click me"
        );
        const container = React.createElement("div", null, [h3, btn]);
    
        //property에 style 뿐만아니라 event도 넣을수있다
        ReactDOM.render(container, root); //render : 유저에게 보여준다
        //React의 핵심 : javascript -> html
        //바닐라 js : html -> javascript
      </script>
    </html>
    ```
    
    html에서 button 생성, eventlistener , function, html변경, 생성할필요없이 이렇게 한번에 끝난다 
    
    더 쉬운방법 
    
    하지만 createElement는 쓰지 않는다 
    
    JSX : html과 비슷함 react 요소 
    
    createElement
    
    name
    
    props
    
    content
    
    ```jsx
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
      <script type="text/babel">
        const root = document.getElementById("root");
        const Title = (
          <h3 id="title" onMouseEnter={() => console.log("im clicked")}>
            Hello I'm a title
          </h3>
        );
        const Button = (
          <button
            style={{ backgroundColor: "tomato" }}
            onClick={() => console.log("im clicked")}
          >
            Click me
          </button>
        );
        const btn = React.createElement(
          "button",
          {
            onClick: () => console.log("im clicked"),
          },
          "Click me"
        );
        const container = React.createElement("div", null, [Title, btn]);
    
        //property에 style 뿐만아니라 event도 넣을수있다
        ReactDOM.render(container, root); //render : 유저에게 보여준다
        //React의 핵심 : javascript -> html
        //바닐라 js : html -> javascript
      </script>
    </html>
    ```
    
    화살표 함수를 만들고, <Title/> 로 함수 불러온다 
    
    ```jsx
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
      <script type="text/babel">
        const root = document.getElementById("root");
        const Title = () => (
          <h3 id="title" onMouseEnter={() => console.log("im clicked")}>
            Hello I'm a title
          </h3>
        );
        const Button = () => (
          <button
            style={{ backgroundColor: "tomato" }}
            onClick={() => console.log("im clicked")}
          >
            Click me
          </button>
        );
    
        //component는 대문자여야하고, 함수로 만들어줘서 html처럼 추가한다, 대문자는
        const Container = () => (
          <div>
            <Title />
            <Button />
          </div>
        );
    
        ReactDOM.render(<Container />, root); //render : 유저에게 보여준다
      </script>
    </html>
    ```
    
    - 연습
        
        ```html
        <!DOCTYPE html>
        <html>
          <body>
            <div id="root"></div>
          </body>
          <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
          <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
          <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
          <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <script type="text/babel">
            const root = document.getElementById("root");
            const Title = () => (
              <h3
                id="title"
                style={{ color: "red" }}
                onMouseEnter={() => console.log("im moved")}
              >
                Hello I'm a title
              </h3>
            );
        
            const Button = () => (
              <button
                id="btn"
                style={{ color: "blue" }}
                onClick={() => console.log("im clicked")}
              >
                im button
              </button>
            );
        
            const Container = () => (
              <div>
                <Title />
                <Button />
              </div>
            );
        
            ReactDOM.render(<Container />, root);
          </script>
        </html>
        ```
        
        UI에 render할 요소들을 생성
        
        이때 Title을 생성할거면 무조건 대문자로 써줘야한다. 
        
        jsx가 소문자로 쓰면 html태그로 인식하기 때문에 요소들은 다 대문자로
        
        root를 생성하고, ReactDOM.render로 변경할 요소, 변경할 html 부분 쓴다
        
        다 화살표 함수로 쓰고, html 태그처럼 <Title/> 이렇게 값을 넣어준다 
        
- State
    
    바뀌는 데이터를 react에 담는다 
    
    이전에는 span.innerText=${counter}로 바꿔줬는데 이젠 jsx로 html과 비슷하게 태그안에 {counter}로 해주면 된다 ! 
    
    그후에 function을 만들어주고 button에 eventlistener할필요없이 태그 안에다 onClick = {countUp}만 작성해주면 끝 !
    
    ```jsx
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
      <script type="text/babel">
        const root = document.getElementById("root");
        let counter = 0;
        function countUp() {
          counter = counter + 1;
        }
        const Container = () => (
          <div>
            <h3>Total clicks : {counter}</h3>
            <button onClick={countUp}>Click me</button>
          </div>
        );
    
        ReactDOM.render(<Container />, root); //render : 유저에게 보여준다
      </script>
    </html>
    ```
    
    ReactDom.render가 한번만 되기 떄문에 counter = 0 이고 그 후에 렌더링해주지 않는다 
    
    : UI를 새로고침 해주지 않는다 
    
    - 연습
        
        ```html
        const Container = () => (
              <div>
                <h3>Hello I'm a title</h3>
                <button onClick={countUp}>Click me</button>
              </div>
            );
        button에 eventListener 만들때 이런식으로 onClick로 만들면된다
        button.addEventListener("click", handleClick);
        >> click으로 선언한 바닐라 js와 다르게 여기선 
        onClick = {}이렇게 했다
        
        ```
        
    
    ```jsx
    function countUp() {
          counter = counter + 1;
          ReactDOM.render(<Container />, root); //render : 유저에게 보여준다
        }
    
    ```
    
    이렇게 함수에 ReactDom.render해주면 됨 !
    
    바닐라는 tag 자체를 다 바꿔줌 
    
    reactjs는 ui에서 바뀐부분만 html을 바꿔준다. 
    
    ```jsx
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
      <script type="text/babel">
        const root = document.getElementById("root");
        let counter = 0;
        function countUp() {
          counter = counter + 1;
          render();
        }
        function render() {
          ReactDOM.render(<Container />, root);
        }
        const Container = () => (
          <div>
            <h3>Total clicks : {counter}</h3>
            <button onClick={countUp}>Click me</button>
          </div>
        );
    
        render();
      </script>
    </html>
    ```
    
    - 연습
        
        ```html
        <!DOCTYPE html>
        <html>
          <body>
            <div id="root"></div>
          </body>
          <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
          <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
          <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
          <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <script type="text/babel">
            const root = document.getElementById("root");
            let counter = 0;
            const countUp = () => {
              counter = counter + 1;
              console.log(counter);
              render();
            };
        
            const Container = () => (
              <div>
                <h3>Total clicks : {counter}</h3>
                <button onClick={countUp}>Click me</button>
              </div>
            );
        
            function render() {
              ReactDOM.render(<Container />, root);
            }
            render();
          </script>
        </html>
        ```
        
    
    리렌더 일일이 다하는거 별로다
    
    데이터를 let count = 0이렇게 말고 어디다가 데이터를 담아야 좋을까 ?
    
    ```html
    const data = React.useState();
    
    >[undefined, ƒ]
    data가 들어있는 array
    function
    
    <script type="text/babel">
        const root = document.getElementById("root");
        function App() {
          const data = React.useState(66);
          console.log(data);
          return (
            <div>
              <h3>Total clicks : {data[0]}</h3>
              <button>Click me</button>
            </div>
          );
        }
        ReactDOM.render(<App />, root);
      </script>
    
    ```
    
    이런느낌으로 쓰이는데 배열은 보기 좋지 않아 
    
    배열에서 요소를 꺼내서 어떻게 이름으로 저장?
    
     
    
    - 연습
        
        ```html
        <!DOCTYPE html>
        <html>
          <body>
            <div id="root"></div>
          </body>
          <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
          <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
          <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
          <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <script type="text/babel">
            const root = document.getElementById("root");
            let counter = 0;
            const countUp = () => {
              counter = counter + 1;
              console.log(counter);
              render();
            };
        
            const App = () => (
              <div>
                <h3>Total clicks : {counter}</h3>
                <button onClick={countUp}>Click me</button>
              </div>
            );
        
            function render() {
              ReactDOM.render(<App />, root);
            }
            render();
          </script>
        </html>
        ```
        
        이제 counter를 계산하는 것을 container (App)에다 넣었네
        
    
    ```jsx
    const[counter, modifier] = React.useState(0);
        //   const data = React.useState(0);
        //   const counter = data[0];
        //   const modifier = data[1];
    
    const data = [1,2,3]
    const [a,b,c] = data;
    
    ```
    
    왜 modifier가 필요할까 ?
    
    render를 일일이 해줄필요 없이 자동적으로 해준다 ! 
    
    ```jsx
    const root = document.getElementById("root");
        function App() {
          const [counter, modifier] = React.useState(0);
          const onClick = () => {
            modifier(counter + 1); //counter를 업데이트 해준다
            // counter = counter +1;
            // render(); 적힌것을 modifer가 자동으로 해준다 . 
          };
          return (
            <div>
              <h3>Total clicks : {counter}</h3>
              <button onClick={onClick}>Click me</button>
            </div>
          );
        }
        ReactDOM.render(<App />, root);
    ```
    
    State를 이용하면 component를 modifier로 자동으로 재생성하여 rerender해준다 . 
    
    ui를 refresh해준다. 
    
    실은 다 새로 바꾸고 있는게 아니라 우리가 바꾸고 있는 ui 부분만 브꿔준다,.
    
    **modifer 함수 사용해 state를 바꿀떄 컴포넌트 전체가 새로운 값을 가지고 재생성된다.** 
    
    react를 사용하면 
    
    - html 만들고
    - 곧바로 이벤트리스너 더해주고
    - ui 업데이트하면 자동으로 렌더링 해준다
    - 연습
        
        ```html
        <!DOCTYPE html>
        <html>
          <body>
            <div id="root"></div>
          </body>
          <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
          <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
          <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
          <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <script type="text/babel">
            const root = document.getElementById("root");
        
            function App() {
              const [counter, modifier] = React.useState(0);
              const onClick = () => {
                modifier(counter + 1);
                //함수라고 생각하면 편하네
              };
              return (
                <div>
                  <h3>Total clicks : {counter}</h3>
                  <button onClick={onClick}>Click me</button>
                </div>
              );
            }
        
            function render() {
              ReactDOM.render(<App />, root);
            }
            render();
          </script>
        </html>
        ```
        
        modifier는 React state의 첫번째 인자를 변환시켜주는 함수라고 생각, 
        
        이는 render를 자동으로 해주고 ui 업데이트를 해준다 
        
    
    counter가 다른 곳에서 변경될수 있어서 그렇게 좋은 코드는 아님 
    
    stae를 바꾸는 방법
    
    - modefier를 활용하여 새 값으로 변경해주는것 : static 34343 넣는것
    - 이전 값을 이용해서 현재 값으로 바꿔주는것  : counter + 1 하지만 더 좋은방법있음
    
    current를 활용하는 것  : 현재 state를 바탕으로 다음 state를 도출하고 싶다면 current를쓰기 
    
    버그 고칠수있다. 
    
    ```jsx
    // modifier(counter + 1); //counter를 업데이트 해준다
            modifier((current) => current + 1);
    
    ```
    
    unit Conversion 만들기
    
    ```jsx
    function App() {
          return (
            <div>
              <h1>Super Converter</h1>
              <label for="minutes">Minutes</label>
              <input id="minutes" placeholder="Minutes" type="number" />
              <label for="hours">Hours</label>
              <input id="hours" placeholder="Hours" type="number" />
            </div>
          );
        }
    ```
    
    id 옆에 label을 달아준다
    
    하지만 for은 jsx에서 사용하지 않는다. 
    
    → for은 javascript용어라 이미 선점된 단어
    
    class, for 을 사용하면 안되고 HTMLFor을 사용해야함
    
    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
      <script type="text/babel">
        const root = document.getElementById("root");
        function App() {
          const [amount, setAmount] = React.useState();
          const [flipped, setFlipped] = React.useState(false);
          const onChange = (event) => {
            console.log(event.target.value);
            setAmount(event.target.value);
          };
          const reset = () => setAmount(0);
          const onFlip = () => {
            reset();
            setFlipped((current) => !current);
          }; //현재 값을 받아서 반대값을 내놓는다
    
          return (
            <div>
              <h1>Super Converter</h1>
              <div>
                <label htmlFor="amount">Minutes</label>
                <input
                  value={flipped ? amount * 60 : amount}
                  id="amount"
                  placeholder="Minutes"
                  type="number"
                  onChange={onChange}
                  disabled={flipped === true}
                />
              </div>
              <div>
                <label htmlFor="hours">Hours</label>
                <input
                  value={flipped ? amount : amount / 60}
                  id="hours"
                  placeholder="Hours"
                  type="number"
                  onChange={onChange}
                  disabled={flipped === false}
                />
              </div>
              <button onClick={reset}>Reset</button>
              <button onClick={onFlip}>Flip</button>
            </div>
          );
        }
        ReactDOM.render(<App />, root);
      </script>
    </html>
    ```
    
    - 연습
        
        ```html
        <!DOCTYPE html>
        <html>
          <body>
            <div id="root"></div>
          </body>
          <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
          <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
          <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
          <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <script type="text/babel">
            const root = document.getElementById("root");
        
            function App() {
              const [variable, modifier] = React.useState();
              const onChange = (event) => {
                console.log(event.target.value);
                // variable;
              };
              return (
                <div>
                  <div>
                    <h1>Super Converter</h1>
                    <label htmlFor="minutes">Minutes : {variable}</label>
                    <input
                      id="minutes"
                      onChange={onChange}
                      placeholder="Minutes"
                      type="number"
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="hours">Hours : {variable}</label>
                    <input id="hours" placehxolder="hours" type="number"></input>
                  </div>
                </div>
              );
            }
        
            function render() {
              ReactDOM.render(<App />, root);
            }
            render();
          </script>
        </html>
        ```
        
        event에서 필요한 값을 확인할때 console.log(event)해서 확인 ,
        
        event.target.value
        
        이걸 React.useState에 있는 variable 값을 바꿔주고 싶은데 어떻게 바꿔주지? 
        
        modifier 함수 이용 , current 이용
        
        ```html
        // variable = event.target.value;
        이렇게 바로 할수는 없고 modifier 이용해야한다 
        
        modifier((current) => event.target.value);
        ```
        
        ```html
        const [flip, flipModifier2] = React.useState();
        에서 flip을 고치기 위해
        flip = false로 설정했었는데 이렇게 하는게 아니라 초기값은
        const [flip, flipModifier2] = React.useState(false);
        이렇게 해주면된다
        ```
        
        삼항 연산자
        
        ternary operatior
        
        if문을 인라인으로 작성
        
        flipped 하면 단위 변환을 보여주지 마라
        
        flipped ?minutes : minutes/60
        
        ```html
        value={flip ? variable * 60 : variable}
        
        그냥 true or false 인 변수 쓰고 
        ? 한 뒤에 : 붙이기
        true : false 
        if문과 같다 
        쉬움 
        ```
        
        ```html
        <!DOCTYPE html>
        <html>
          <body>
            <div id="root"></div>
          </body>
          <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
          <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
          <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
          <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <script type="text/babel">
            const root = document.getElementById("root");
        
            function App() {
              const [variable, Variablemodifier] = React.useState();
              const [flip, flipModifier] = React.useState(false);
              const onChange = (event) => {
                console.log(event.target.value);
                // variable = event.target.value;
                Variablemodifier((current) => event.target.value);
              };
              const onClickReset = () => {
                Variablemodifier((current) => 0);
                console.log(variable);
              };
              const onClickFlip = () => {
                onClickReset();
                flipModifier((current) => !current);
              };
              return (
                <div>
                  <div>
                    <h1>Super Converter</h1>
                    <label htmlFor="minutes">Minutes : </label>
                    <input
                      value={flip ? variable * 60 : variable}
                      id="minutes"
                      onChange={onChange}
                      placeholder="Minutes"
                      type="number"
                      disabled={flip === true}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="hours">Hours : </label>
                    <input
                      value={flip ? variable : variable / 60}
                      id="hours"
                      onChange={onChange}
                      placeholder="hours"
                      type="number"
                      disabled={flip === false}
                    ></input>
                  </div>
                  <button onClick={onClickReset}>Reset</button>
                  <button onClick={onClickFlip}>Flip</button>
                </div>
              );
            }
        
            function render() {
              ReactDOM.render(<App />, root);
            }
            render();
          </script>
        </html>
        ```
        
    
    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel">
        const root = document.getElementById("root");
    
        function MinutesToHours() {
          const [variable, Variablemodifier] = React.useState();
          const [flip, flipModifier] = React.useState(false);
          const onChange = (event) => {
            console.log(event.target.value);
            // variable = event.target.value;
            Variablemodifier((current) => event.target.value);
          };
          const onClickReset = () => {
            Variablemodifier((current) => 0);
            console.log(variable);
          };
          const onClickFlip = () => {
            onClickReset();
            flipModifier((current) => !current);
          };
          return (
            <div>
              <div>
                <label htmlFor="miles">Minutes : </label>
                <input
                  value={flip ? variable * 60 : variable}
                  id="miles"
                  onChange={onChange}
                  placeholder="Minutes"
                  type="number"
                  disabled={flip === true}
                ></input>
              </div>
              <div>
                <label htmlFor="hours">Hours : </label>
                <input
                  value={flip ? variable : variable / 60}
                  id="hours"
                  onChange={onChange}
                  placeholder="hours"
                  type="number"
                  disabled={flip === false}
                ></input>
              </div>
              <button onClick={onClickReset}>Reset</button>
              <button onClick={onClickFlip}>{flip ? "Turn back" : "Flip"}</button>
            </div>
          );
        }
        function KmToMiles() {
          const [variable, Variablemodifier] = React.useState();
          const [flip, flipModifier] = React.useState(false);
          const onChange = (event) => {
            console.log(event.target.value);
            // variable = event.target.value;
            Variablemodifier((current) => event.target.value);
          };
          const onClickReset = () => {
            Variablemodifier((current) => 0);
            console.log(variable);
          };
          const onClickFlip = () => {
            onClickReset();
            flipModifier((current) => !current);
          };
          return (
            <div>
              <div>
                <label htmlFor="miles">miles : </label>
                <input
                  value={flip ? variable * 1000 : variable}
                  id="miles"
                  onChange={onChange}
                  placeholder="miles"
                  type="number"
                  disabled={flip === true}
                ></input>
              </div>
              <div>
                <label htmlFor="KM">KM : </label>
                <input
                  value={flip ? variable : variable / 1000}
                  id="KM"
                  onChange={onChange}
                  placeholder="KM"
                  type="number"
                  disabled={flip === false}
                ></input>
              </div>
              <button onClick={onClickReset}>Reset</button>
              <button onClick={onClickFlip}>{flip ? "Turn back" : "Flip"}</button>
            </div>
          );
        }
        function App() {
          const [index, indexModifier] = React.useState("xx");
    
          const onChangeSelect = (event) => {
            indexModifier((current) => event.target.value);
          };
          return (
            <div>
              <h1>Super Converter</h1>
              <select value={index} onChange={onChangeSelect}>
                <option value="xx">Select your units</option>
                <option value="0">Minutes & Hours</option>
                <option value="1">Km & Miles</option>
              </select>
              {index === "0" ? <MinutesToHours /> : null}
              {index === "1" ? <KmToMiles /> : null}
            </div>
          );
        }
    
        function render() {
          ReactDOM.render(<App />, root);
        }
        render();
      </script>
    </html>
    ```
    
- Props
    
    ```html
    	<!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel">
        function SaveBtn() {
          return (
            <button
              style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
              }}
            >
              Save Changes
            </button>
          );
        }
    
        function ConfirmBtn() {
          return (
            <button
              style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
              }}
            >
              Confirm
            </button>
          );
        }
    
        function App() {
          return (
            <div>
              <SaveBtn />
              <ConfirmBtn />
            </div>
          );
        }
        const root = document.getElementById("root");
        ReactDOM.render(<App />, root);
      </script>
    </html>
    ```
    
    이렇게 버튼을 두개를 생성하고 하나의 스타일을 바꾸려고할때 바꾸기가 어렵다 .
    
    새로운 정보를 <Btn />에 넣어준다 
    
    Btn(Pbanana:”save Changes”} → props Btn 함수의 첫번쨰 인자로 들어감 
    
    props: <Btn banana=”save changes”/> 하면 banana를 받는 object
    
    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel">
        function Btn(props) {
          console.log(props);
          return (
            <button
              style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
              }}
            >
              Save Changes
            </button>
          );
        }
    
        function App() {
          return (
            <div>
              <Btn banana="Save changes" x={false} />
              <Btn banana="Continues" y={7} />
            </div>
          );
        }
        const root = document.getElementById("root");
        ReactDOM.render(<App />, root);
      </script>
    </html>
    ```
    
    ![Untitled](React%20JS%206a90e6af6fe24844b7f7ddce2ff9642d/Untitled.png)
    
    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel">
        function Btn(props) {
          //props.banana -> {banana}
          console.log(props);
          return (
            <button
              style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
                fontSize: props.big ? 30 : 16,
              }}
            >
              {props.banana}
            </button>
          );
        }
    
        function App() {
          return (
            <div>
              <Btn banana="Save changes" big={false} />
              <Btn banana="Continues" big={true} />
            </div>
          );
        }
        const root = document.getElementById("root");
        ReactDOM.render(<App />, root);
      </script>
    </html>
    ```
    
    function Btn(props) 로 쓰고 
    
    props.banana
    
    props.big 로 할수 있고
    
    function Btn({banana,big})로 쓸수도 있다 
    
    두번째게 일반적 
    
    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel">
        function Btn({ text, onClickProps }) {
          //props.text -> {text}
          return (
            <button
              onClick={onClickProps}
              style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
                fontSize: 16,
              }}
            >
              {text}
            </button>
          );
        }
    
        //function 에서의 onClick은 실제 onClick이 아니라 props로 보내지는 이름일 뿐이다.
      
        function App() {
          const [value, setValue] = React.useState("Save changes");
          const changeValue = () => setValue((current) => "Revert Changes");
          return (
            <div>
              <Btn text={value} onClickProps={changeValue} />
              <Btn text="Continues" />
            </div>
          );
        }
        //props가 변경되지 않으면 rerender하지 않는다 -> React memo
        const MemorizedBtn = React.memo(Btn)
        // parent가 어떤 state에서 변경이 있다면 모든 child가 rerender 된다 -> 이러면 느려지기 때문에 memo를 사용하면 좋다 . 
        
    
        const root = document.getElementById("root");
        ReactDOM.render(<App />, root);
      </script>
    </html>
    ```
    
    - props로 함수를 보낼수도 있다
    
    onClickProps = {changeValue}로 함수를 보내고 , changeValue는 state를 modifier로 current를 revert changes로 변경해준다.
    
    - parent가 어떤 state에서 변경이 있다면 모든 child가 rerender 된다
    
    이러면 느려지기 때문에 memo를 사용하면 좋다 .  React.memo
    
    - 왜 fontsize를 바로 넣냐?
        
        ```html
        <!DOCTYPE html>
        <html>
          <body>
            <div id="root"></div>
          </body>
          <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
          <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
          <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
          <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <script type="text/babel">
            function Btn(props) {
              console.log(props);
              return (
                <button
                  style={{
                    backgroundColor: "tomato",
                    color: "white",
                    padding: "10px 20px",
                    border: 0,
                    borderRadius: 10,
                    props.fontSize,
                  }}
                >{text}</button>
              );
            }
        
            function App() {
              return (
                <div>
                  <Btn text="Save changes" fontSize={20} />
                </div>
              );
            }
        
            const root = document.getElementById("root");
            ReactDOM.render(<App />, root);
          </script>
        </html>
        ```
        
        ![Untitled](React%20JS%206a90e6af6fe24844b7f7ddce2ff9642d/Untitled%201.png)
        
        props에 넣으면 이렇게 저장이 되기 때문에 style에 바로 넣어주는 형식으로 자동으로 저장된다
        
        fontSize : props.fontSize 를 하게되면
        
        fontSize : fontSize: 20이 되기 떄문에 적용이 안됨 !
        
        {text} 에서 {}를 사용하는 이유는 객체를 꺼내기 위해서가 아니라, html 태그에 변수를 넣기위해 활용 
        
    
    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <!-- 애플리케이션 interactive 하게만들어주는 라이브러리 -->
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <!-- 모든 react element들을 html body에 둘수있게 해줌 -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel">
        function Btn({ text, fontSize }) {
          console.log(text, fontSize);
          return (
            <button
              style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
                fontSize,
              }}
            >
              {text}
            </button>
          );
        }
    
        function App() {
          return (
            <div>
              <Btn text="Save changes" fontSize={20} />
            </div>
          );
        }
    
        const root = document.getElementById("root");
        ReactDOM.render(<App />, root);
      </script>
    </html>
    ```
    
    props로 보낼때 string , number 등을 협업할때 잘못보낼수있음
    
    그럼 에러가 발생하고 이상해짐
    
    https://unpkg.com/prop-types@15.7.2/prop-types.js
    
    PropTypes 사용
    
    ```html
    Btn.propTypes = {
          text: PropTypes.string,
          fontSize: PropTypes.number.isRequried,
        };
    ```
    
    PropTypes 로 써야함, 비주얼스튜디오서처럼  propTypes로하면 안나온다 .
    
    ![Untitled](React%20JS%206a90e6af6fe24844b7f7ddce2ff9642d/Untitled%202.png)
    
- Create React App
    
    ```jsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App";
    import "./styles.css";
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    ```
    
    style.css import하지 않는다 → props사용 
    
    이거 말고 css module을 사용한다 
    
    ```html
    import Button from "./Button";
    import styles from "./App.module.css";
    
    function App() {
      return (
        <div>
          <h1 className=a>Welcome back!</h1>
     <h2 className=b>Welcome back!</h2>
    <h3 className={styles.title}>Welcome back!</h2>
          <Button text={"Continue"} />
        </div>
      );
    }
    
    export default App;
    ```
    
    import 하는 형식
    
    ```html
    .title {
      font-family: "Courier New", Courier, monospace;
      font-size: 18px;
    }
    ```
    
    button.module.css // xx.module.css 기본 이름 
    
    button2.module.css
    
    ```html
    .btn {
      color: while;
      background-color: tomato;
    }
    ```
    
    html 클론코딩에서 했던것처럼 styles 을 class 단위로,
    
    a.js → button1.module.css 
    
    b.js → button2.module.css  두개의 css 파일에서 titl
    
    ```html
    import propTypes from "prop-types";
    import styles from "./Button.module.css";
    
    function Button({ text }) {
      return <button className={styles.btn}>{text}</button>;
    }
    
    Button.propTypes = {
      text: propTypes.string.isRequired,
    };
    export default Button;
    ```
    
    App.module.css
    
    ```css
    .title {
      font-family: "Courier New", Courier, monospace;
      font-size: 18px;
    }
    ```
    
    이렇게 random하게 클래스 이름이 생성된다 
    
    → 같은 css style을 사용해서 class를 만들어도 다르게 생성된다 
    
    ![Untitled](React%20JS%206a90e6af6fe24844b7f7ddce2ff9642d/Untitled%203.png)
    
- Effects
    
    ```html
    import Button from "./Button";
    import styles from "./App.module.css";
    import { useState } from "react";
    function App() {
      const [counter, setValue] = useState(0);
      const onClick = () => setValue((prev) => prev + 1);
      console.log("render");
      return (
        <div>
          <h1>{counter} </h1>
          <button onClick={onClick}>click me </button>
        </div>
      );
    }
    
    export default App;
    ```
    
    render이 state 변경될때마다다된다
    
    허나 api를 불러올때 state가 변경될때마다 api를 계속 불러오는데 이건 정말 좋지 않다
    
    특정 코드들이 첫번째 component render에 한번만 되는 방법? 
    
    **UseEffect**
    
    ```html
    import { useState, useEffect } from "react";
    function App() {
      const [counter, setValue] = useState(0);
      const onClick = () => setValue((prev) => prev + 1);
      console.log("I run all the time ");
      const iRunOnlyOnce = () => {
        console.log("I run only once");
      };
    
      useEffect(() => {
        console.log("CALL THE API..");
      }, []);
    
      return (
        <div>
          <h1>{counter} </h1>
          <button onClick={onClick}>click me </button>
        </div>
      );
    }
    
    export default App;
    ```
    
    useEffect를 사용하면 한번만 호출
    
    검색기능
    
    ```html
    import { useState, useEffect } from "react";
    function App() {
      const [counter, setValue] = useState(0);
      const [keyword, setKeyword] = useState("");
    
      const onClick = () => setValue((prev) => prev + 1);
      const onChange = (event) => setKeyword(event.target.value);
      console.log("I run all the time ");
      useEffect(() => {
        console.log("CALL THE API..");
      }, []);
    
      return (
        <div>
          <input
            value={keyword}
            onChange={onChange}
            type="text"
            placeholder="Search here.."
          />
          <h1>{counter} </h1>
          <button onClick={onClick}>click me </button>
        </div>
      );
    }
    
    export default App;
    ```
    
    ```html
    import { useState, useEffect } from "react";
    function App() {
      const [counter, setValue] = useState(0);
      const [keyword, setKeyword] = useState("");
    
      const onClick = () => setValue((prev) => prev + 1);
      const onChange = (event) => setKeyword(event.target.value);
      console.log("I run all the time ");
      useEffect(() => {
        console.log("CALL THE API..");
      }, []);
      useEffect(()=>{
        console.log("SEARCH FOR", keyword);
      },[keyword]);
      
    
      return (
        <div>
          <input
            value={keyword}
            onChange={onChange}
            type="text"
            placeholder="Search here.."
          />
          <h1>{counter} </h1>
          <button onClick={onClick}>click me </button>
        </div>
      );
    }
    
    export default App;
    
    //
      useEffect(()=>{
        console.log("SEARCH FOR", keyword);
      },[keyword]);
      keyword의 state가 변하면 render 해준다 ! [] 의마법  
    ```
    
    특정 state가 변할때 코드를 추가하고싶으면 useEffect를 추가하자 
    
    **핵심**
    
    ```html
    import { useState, useEffect } from "react";
    function App() {
      const [counter, setValue] = useState(0);
      const [keyword, setKeyword] = useState("");
    
      const onClick = () => setValue((prev) => prev + 1);
      const onChange = (event) => setKeyword(event.target.value);
      console.log("I run all the time ");
      useEffect(() => {
        console.log("I run only once because i don't have dependency..");
      }, []);
      useEffect(() => {
        console.log("I run when 'keyword' changes", keyword);
      }, [keyword]);
      useEffect(() => {
        console.log("I run when 'counter' changes", keyword);
      }, [counter]);
      useEffect(() => {
        console.log("I run when 'keyword & counter' changes", keyword);
      }, [keyword, counter]);
    
      return (
        <div>
          <input
            value={keyword}
            onChange={onChange}
            type="text"
            placeholder="Search here.."
          />
          <h1>{counter} </h1>
          <button onClick={onClick}>click me </button>
        </div>
      );
    }
    
    export default App;
    ```
    
    방어막 같은것 
    
    state 변화시킬 때 component를 재실행, 모두 재실행하는데
    
    계속 실행하면 안되는 코드를 위해 방어막, useEffect를 사용한다 
    
    ---
    
    Clean Up
    
- 연습 (ToDos) (map)
    
    ```jsx
    import { useState, useEffect } from "react";
    
    function App() {
      const [toDo, setToDo] = useState("");
      const onChange = (event) => setToDo(event.target.value);
      console.log(toDo);
      return (
        <div>
          <form>
            <input
              onChange={onChange}
              type="text"
              placeholder="Write your to do..."
            />
            <button>Add To Do</button>
          </form>
        </div>
      );
    }
    
    export default App;
    ```
    
    form은 submit 형식을 가지기 때문에 추가함 
    
    ![Untitled](React%20JS%206a90e6af6fe24844b7f7ddce2ff9642d/Untitled%204.png)
    
    push a 로 하면 배열안에 배열이 들어간다 
    
    → …a를 사용 
    
    ```html
    import { useState, useEffect } from "react";
    
    function App() {
      const [toDo, setToDo] = useState("");
      const [toDos, setToDos] = useState([]);
      const onChange = (event) => setToDo(event.target.value);
      const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
          return;
        }
        setToDo("");
        setToDos((current) => [toDo, ...current]);
      };
      console.log(toDos);
      return (
        <div>
          <h1>My To Dos ({toDos.length})</h1>
          <form onSubmit={onSubmit}>
            <input
              value={toDo}
              onChange={onChange}
              type="text"
              placeholder="Write your to do..."
            />
            <button>Add To Do</button>
          </form>
        </div>
      );
    }
    
    export default App;
    ```
    
    - todos 저장하고 제목생성하는것까지
    
    modifier 
    
    - setToO(”hi”) 값을 곧바로 넣는것
    - 첫번째 argument로 현재 state를 보냄
    
    **map이란 ?**
    
    array의 모든 아이템에 대해 실행이 됨
    
    return한 값들은 새로운 array에 들어감 
    
    ![Untitled](React%20JS%206a90e6af6fe24844b7f7ddce2ff9642d/Untitled%205.png)
    
    react.js에선 map을 사용하면 ul같은 element에 key값을 넣어줘야한다 
    
    ```html
    import { useState, useEffect } from "react";
    
    function App() {
      const [toDo, setToDo] = useState("");
      const [toDos, setToDos] = useState([]);
      const onChange = (event) => setToDo(event.target.value);
      const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
          return;
        }
        setToDo("");
        setToDos((current) => [toDo, ...current]);
      };
      console.log(toDos);
      return (
        <div>
          <h1>My To Dos ({toDos.length})</h1>
          <form onSubmit={onSubmit}>
            <input
              value={toDo}
              onChange={onChange}
              type="text"
              placeholder="Write your to do..."
            />
            <button>Add To Do</button>
          </form>
          <hr />
          <ul>
            {toDos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default App;
    ```
    
- 연습 (coin)
    
    ```jsx
    import { useState, useEffect } from "react";
    
    function App() {
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
          response.json().then((json) => console.log(json))
        );
      }, []);
      return (
        <div>
          <h1>The Coins!</h1>
          {loading ? <strong>Loading...</strong> : null}
        </div>
      );
    }
    
    export default App;
    ```
    
    fetch . then(response) → json api를 처리하는 방식 
    
    ```html
    import { useState, useEffect } from "react";
    
    function App() {
      const [loading, setLoading] = useState(true);
      const [coins, setCoins] = useState([]);
      useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
          .then((response) => response.json())
          .then((json) => {
            setCoins(json);
            setLoading(false);
          }); //이렇게 두개의 state를 한번에 바꿀수 있다
      }, []);
      return (
        <div>
          <h1>The Coins! ({coins.length})</h1>
          {loading ? <strong>Loading...</strong> : null}
          <ul>
            {coins.map((coin) => (
              <li>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price}{" "}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default App;
    ```
    

---

- 연습(Moive App) Part one
    
    ```java
    import { useState, useEffect } from "react";
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      useEffect(() => {
        fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        )
          .then((response) => response.json())
          .then((json) => {
            setMovies(json.data.movies);
            setLoading(false);
          });
      }, []);
      console.log("First Moives: ", movies);
      console.log("Render ");
      return <div>{loading ? <h1>Loading...</h1> : null}</div>;
    }
    
    export default App;
    ```
    
    then을 사용안하고 async 
    
    ```jsx
    import { useState, useEffect } from "react";
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      const getMovies = async () => {
        const response = await fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
      };
      useEffect(() => {
        getMovies();
      }, []);
      console.log("First Moives: ", movies);
      return <div>{loading ? <h1>Loading...</h1> : null}</div>;
    }
    
    export default App;
    ```
    
    어떻게 paint를 할까 ? ⇒ map ! 
    
    ```jsx
    import { useState, useEffect } from "react";
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      const getMovies = async () => {
        const response = await fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
      };
      useEffect(() => {
        getMovies();
      }, []);
      console.log("First Moives: ", movies);
      return (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {movies.map((movie) => (
                <div key={movie.id}>
                  <h2>{movie.title}</h2>
                  <p>{movie.summary}</p>
                  <p>{movie.rating}</p>
                  <p>
                    {movie.genres.map((genre) => (
                      <li key={genre}>{genre}</li>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
      //오래된 array의 각각의 item을 변형시킨다
    }
    
    export default App;
    
    ///
                  <p>
                    {movie.genres.map((genre) => (
                      <li key={genre}>{genre}</li>
                    ))}
                  </p>
    이부분에 movie안에 genres는 array, map을 사용해줘야 하는데 고유 index가 존재하지 않음
    => 그냥 genre를 key값으로 넣어줘도 무방 , unique한 값이기 때문에 
    ```
    
    ![Untitled](React%20JS%206a90e6af6fe24844b7f7ddce2ff9642d/Untitled%206.png)
    
    ```jsx
    import { useState, useEffect } from "react";
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      const getMovies = async () => {
        const response = await fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
      };
      useEffect(() => {
        getMovies();
      }, []);
      console.log("First Moives: ", movies);
      return (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {movies.map((movie) => (
                <div key={movie.id}>
                  <img src={movie.medium_cover_image}></img>
                  <h2>{movie.title}</h2>
                  <p>{movie.summary}</p>
                  <p>{movie.rating}</p>
                  <p>
                    {movie.genres.map((genre) => (
                      <li key={genre}>{genre}</li>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
      //오래된 array의 각각의 item을 변형시킨다
    }
    
    export default App;
    ```
    
    프로미스 공부 
    
    - Promise
        
        언제끝나는지 알고싶을때 철웅이가 한것처럼 10초마다 db 왔다갔다 하거나 할필요없이 
        
        전화번호 주고 끝나면 알려달라고 하면 된다
        
        ```jsx
        const pr = new Promise((resolve, reject) => {});
        ```
        
        이렇게 어떤일이 완료됐을때 실행이 되는 함수를 **CallBack 함수**라고한다
        
        new promise의 객체 
        
        ![Untitled](%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE%20938339e564bd452ebd4f1ddb5ee31bc4/Javascript%20308258d5065049a78cd3a080690daea4/JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled.png)
        
        ![Untitled](%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE%20938339e564bd452ebd4f1ddb5ee31bc4/Javascript%20308258d5065049a78cd3a080690daea4/JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%207ea76c041aed4c0cadcf90edb0bd1090/Untitled%201.png)
        
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
        
- part one 연습
    
    ```jsx
    import { useState, useEffect } from "react";
    
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState();
      useEffect(() => {
        fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        )
          .then((response) => response.json())
          .then((json) => console.log(json));
      }, []);
    
      return <div>{loading ? <h1>Loading</h1> : null}</div>;
    }
    export default App;
    
    ```
    
    콘솔에서 json 형태를 확인해보기 , 위치 확인 
    
    ```jsx
    import { useState, useEffect } from "react";
    
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      useEffect(() => {
        fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        )
          .then((response) => response.json())
          .then((json) => {
            setMovies(json.data.movies);
            setLoading(false);
          });
      }, []);ㅌ
    
      movies.map((movie) => {
        console.log(movie.id);
      });
    
      return <div>{loading ? <h1>Loading</h1> : <h1>{movies.id}</h1>}</div>;
    }
    export default App;
    
    ```
    
    이렇게 map 형태를 출력, 사용할수 있구나 
    
    ```jsx
    import { useState, useEffect } from "react";
    
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      useEffect(() => {
        fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        )
          .then((response) => response.json())
          .then((json) => {
            setMovies(json.data.movies);
            setLoading(false);
          });
      }, [loading, movies]);
    
      movies.map((movie) => {
        console.log(movie.id);
      });
    
      return (
        <div>
          {loading ? (
            <h1>Loading</h1>
          ) : (
            movies.map((movie) => {
              <p>{movie.id}</p>;
            })
          )}
        </div>
      );
    }
    export default App;
    ```
    
    이러면 안나오는데 key가 없어서 그럼 
    

---

- router
    
    ```jsx
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import { useState, useEffect } from "react";
    import Movie from "./components/Movie";
    import Detail from "./routes/Detail";
    import Home from "./routes/Home";
    
    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/movie" element={<Detail />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      );
    }
    
    export default App;
    ```
    
    ahref 하면 되긴 하지만 화면 전체가 다시 재실행된다
    
    ```jsx
    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/movie/:id" element={<Detail />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      );
    }
    
    :id를 붙여줘서 다이나믹하게 만들어준다 
    ```
    

---

- Movie app part one
    
    ```jsx
    import { useState, useEffect } from "react";
    import Movie from "./Component/Movie";
    
    function App() {
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        )
          .then((response) => response.json())
          .then((json) => console.log(json));
    	  }, []);
      return <div>{loading ? <h1>Loading...</h1> : null}</div>;
    }
    export default App;
    ```
    
    - json은 이렇게 확인이 가능하다.
    - useState : loading이라는 data를 setLoading이라는 modifier 함수로 바꾼다
    - useEffect: []를 바라보며 []가 변경될때마다 render해준다, 아무것도 없으니 한번만 바뀌겠지
    
    ```jsx
    import { useState, useEffect } from "react";
    import Movie from "./Component/Movie";
    
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      useEffect(() => {
        fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        )
          .then((response) => response.json())
          .then((json) => setMovies(json.data.movies));
      }, []);
      console.log(movies);
      return <div>{loading ? <h1>Loading...</h1> : null}</div>;
    }
    export default App;
    ```
    
    - movie를 변화시킬 state를 추가하고 json 을 movie에 담아 console.log
    
    ```jsx
    import { useState, useEffect } from "react";
    import Movie from "./Component/Movie";
    
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      useEffect(() => {
        fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        )
          .then((response) => response.json())
          .then((json) => {
            setMovies(json.data.movies);
            setLoading(false);
          });
      }, []);
      console.log(movies);
      return <div>{loading ? <h1>Loading...</h1> : null}</div>;
    }
    export default App;
    ```
    
    - loading도 false로 바꿔준다
    
    ```jsx
    import { useState, useEffect } from "react";
    import Movie from "./Component/Movie";
    
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      const getMovies = async() => {
        const response = await fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        )
         const json = await response.json();
         setMovies(json.data.movies);
         setLoading(false);
      }
    useEffect(() => {
        getMovies();
      }, []);
      console.log(movies);
      return <div>{loading ? <h1>Loading...</h1> : null}</div>;
    }
    export default App;
    ```
    
    - await, async를 사용하여 코드를 더 간결하게 한다.
    
    ```jsx
    import { useState, useEffect } from "react";
    import Movie from "./Component/Movie";
    
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      const getMovies = async () => {
        const response = await fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log(json);
      };
      useEffect(() => {
        getMovies();
      }, []);
      console.log(movies);
      return (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {movies.map((movie) => (
                <div key={movie.id}>{movie.title}</div>
              ))}
            </div>
          )}
        </div>
      );
    }
    export default App;
    ```
    
    - 그 후 map을 활용하여 movie 안에있는 정보를 빼온다.
    - map 에 있는 div에는 unique한 key값이 있어야함
    
    ```jsx
    import { useState, useEffect } from "react";
    import Movie from "./Component/Movie";
    
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      const getMovies = async () => {
        const response = await fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    	    console.log(json);
      };
      useEffect(() => {
        getMovies();
    	  }, []);
      console.log(movies);
      return (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {movies.map((movie) => (
                <div key={movie.id}>
                  <img src={movie.medium_cover_image} />
                  <h2>{movie.title}</h2>
                  <p>{movie.summary}</p>
                  <ul>
                    {movie.genres.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    export default App;
    ```
    
    map하면 unique한 키가 필요한데 고유하기만 하면 된다. 
    
- Movie app part two
    
    ```jsx
    import { useState, useEffect } from "react";
    import Movie from "./Component/Movie";
    
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      const getMovies = async () => {
        const response = await fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log(json);
      };
      useEffect(() => {
        getMovies();
      }, []);
      return (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {movies.map((movie) => (
                <div key={movie.id}>
                  <img src={movie.medium_cover_image} />
                  <h2>{movie.title}</h2>
                  <p>{movie.summary}</p>
                  <ul>
                    {movie.genres.map((genre) => (
                      <li key={genre}>{genre}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    export default App;
    ```
    
    - 이랬던 것을 component를 활용해서 다시 만들어보자 : react의 장점
    
    ```jsx
    import App from "../App";
    
    function Movie() {
      return (
        <div>
          <img src={medium_cover_image} />
          <h2>{title}</h2>
          <p>{summary}</p>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      );
    }
    export default App;
    ```
    
    이렇게 넣고 movie를 지운다.
    
    이후 props를 사용한다 
    
    ```jsx
    import App from "../App";
    
    function Movie({medium_cover_image,title,summary,genres}) {
      return (
        <div>
          <img src={medium_cover_image} />
          <h2>{title}</h2>
          <p>{summary}</p>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      );
    }
    export default App;
    ```
    
    부모 component에서 위를 받아온다
    
    ```jsx
    import { useState, useEffect } from "react";
    import Movie from "./Component/Movie";
    
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      const getMovies = async () => {
        const response = await fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log(json);
      };
      useEffect(() => {
        getMovies();
      }, []);
      return (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {movies.map((movie) => (
                <Movie />
              ))}
            </div>
          )}
        </div>
      );
    }
    
    export default App;
    ```
    
    ```jsx
    import { useState, useEffect } from "react";
    import Movie from "./Component/Movie";
    
    function App() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      const getMovies = async () => {
        const response = await fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log(json);
      };
      useEffect(() => {
        getMovies();
      }, []);
      return (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
        </div>
      );
    }
    
    export default App;
    ```
    
    ```jsx
    import App from "../App";
    
    function Movie({ coverImg, title, summary, genres }) {
      return (
        <div>
          <img src={coverImg} alt={title} />
          <h2>{title}</h2>
          <p>{summary}</p>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      );
    }
    export default App;
    ```
    
    props를 사용해봤다. 
    
    이제 props-types를 사용해야지
    
    ```jsx
    import App from "../App";
    import propTypes from "prop-types";
    
    function Movie({ coverImg, title, summary, genres }) {
      return (
        <div>
          <img src={coverImg} alt={title} />
          <h2>{title}</h2>
          <p>{summary}</p>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    Movie.propTypes = {
      coverImg: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      summary: propTypes.string.isRequired,
      genres: propTypes.arrayOf(propTypes.string).isRequired,
    };
    export default Movie;
    ```
    
    이제 페이지 단위로 하고싶으니까
    
    npm install react-router 
    
    routes에 Home.js 폴더 생성
    
    ```jsx
    app.js
    
    import { useState, useEffect } from "react";
    import Movie from "./Component/Movie";
    
    function App() {
    return null;
    }
    
    export default App;
    ```
    
    ```jsx
    home.js
    import { useState, useEffect } from "react";
    import Movie from "./Component/Movie";
    
    function Home() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      const getMovies = async () => {
        const response = await fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log(json);
      };
      useEffect(() => {
        getMovies();
      }, []);
      return (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
        </div>
      );
    }
    export default Home;
    ```
    
    detail.js 만들기
    
    ```jsx
    function Detail(){
        return <h1>Detail</h1>
    }
    export default Detail;
    ```
    
    이제 app.js에서 영화나 이런것들을 띄워주는게 아니라 , router를 render만 해주면 된다. 
    
- router
    
    ```jsx
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import { useState, useEffect } from "react";
    import Home from "./routes/Home";
    
    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      );
    }
    
    export default App;
    ```
    
    ```jsx
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import { useState, useEffect } from "react";
    import Home from "./routes/Home";
    import Detail from "./routes/Detail";
    
    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/movie" element={<Detail />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      );
    }
    
    export default App;
    ```
    
    ```jsx
    import App from "../App";
    import propTypes from "prop-types";
    import { Link } from "react-router-dom";
    
    function Movie({ coverImg, title, summary, genres }) {
      return (
        <div>
          <img src={coverImg} alt={title} />
          <h2>
            <Link to="/movie">{title}</Link>
          </h2>
          <p>{summary}</p>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    Movie.propTypes = {
      coverImg: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      summary: propTypes.string.isRequired,
      genres: propTypes.arrayOf(propTypes.string).isRequired,
    };
    
    export default Movie;
    ```
    
     movie에 linkto를 넣어서 detail로 가게한다.
    
- parameters
    
    url을 다이나믹 하게 넣는방법
    
    ```jsx
    import App from "../App";
    import propTypes from "prop-types";
    import { Link } from "react-router-dom";
    
    function Movie({ coverImg, title, summary, genres }) {
      return (
        <div>
          <img src={coverImg} alt={title} />
          <h2>
            <Link to="/movie/:id">{title}</Link>
          </h2>
          <p>{summary}</p>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    Movie.propTypes = {
      coverImg: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      summary: propTypes.string.isRequired,
      genres: propTypes.arrayOf(propTypes.string).isRequired,
    };
    
    export default Movie;
    ```
    
    이렇게 id로 다이내믹하게 갈수있음 
    
    id를 props에 추가해줘야겠지
    
    movie.js
    
    ```jsx
    import { useState, useEffect } from "react";
    import Movie from "../components/Movie";
    
    function Home() {
      const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      const getMovies = async () => {
        const response = await fetch(
          ` https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log(json);
      };
      useEffect(() => {
        getMovies();
      }, []);
      return (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id = {movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
        </div>
      );
    }
    export default Home;
    ```
    
    ```jsx
    import App from "../App";
    import propTypes from "prop-types";
    import { Link } from "react-router-dom";
    
    function Movie({ id, coverImg, title, summary, genres }) {
      return (
        <div>
          <img src={coverImg} alt={title} />
          <h2>
            <Link to="/movie/:id">{title}</Link>
          </h2>
          <p>{summary}</p>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    Movie.propTypes = {
      id: propTypes.number.isRequired,
      coverImg: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      summary: propTypes.string.isRequired,
      genres: propTypes.arrayOf(propTypes.string).isRequired,
    };
    
    export default Movie;
    ```
    
    ```jsx
    import App from "../App";
    import propTypes from "prop-types";
    import { Link } from "react-router-dom";
    
    function Movie({ id, coverImg, title, summary, genres }) {
      return (
        <div>
          <img src={coverImg} alt={title} />
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>{summary}</p>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    Movie.propTypes = {
      id: propTypes.number.isRequired,
      coverImg: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      summary: propTypes.string.isRequired,
      genres: propTypes.arrayOf(propTypes.string).isRequired,
    };
    
    export default Movie;
    ```
    
    Linkto를 하는 방법 
    
    매우 유용하다
    
    params를 통하여 
    
    ```jsx
    import { useParams } from "react-router-dom";
    function Detail() {
      const x = useParams();
      console.log(x);
      return <h1>Detail</h1>;
    }
    export default Detail;
    ```
    
    ```jsx
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import { useState, useEffect } from "react";
    import Home from "./routes/Home";
    import Detail from "./routes/Detail";
    
    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/movie/:id" element={<Detail />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      );
    }
    
    export default App;
    ```
    
    url의 변수값을 바로 id에 넘겨준다. 
    
    ```jsx
    import { useParams } from "react-router-dom";
    function Detail() {
      const { id } = useParams();
      console.log(id);
      return <h1>Detail</h1>;
    }
    export default Detail;
    ```
    

- 추가로 공부할 것