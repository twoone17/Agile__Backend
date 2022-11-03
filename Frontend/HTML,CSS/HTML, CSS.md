# HTML, CSS

태그

html은 element로 이루어져있다

- Attribute
    
    HTML element의 추가적인 속성을 관리하기 위한 요소
    
    color, font-size 같이 style
    

이런 attribute를 각각이 아닌 한번에 적용을 시킬때 CSS를 사용

CSS를 통해서 전체 페이지 element에 디자인을 한번에 쉽게 적용한다

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .color-primary{
            color:red;
        }

        .font-50 {
            font-size: 50px;
        }
//head안에 style태그에서 css를 지정, class 속성을 설정
    </style>
</head>
<body>
    <h1>My First Heading</h1>
    <p class ="color-primary">My First Paragraph</p>
    <p class ="color-primary font-50">My blue Paragraph</p>
//head에서 지정한 class를 넣으면 css가 적용
    <p class ="color-primary" style ="font-size:50px;">My First Paragraph</p>
		<button type = "button" onclick = "javascript:alert('click button!!');">Click</button>
    <img width = "400px" src = "https://upload.wikimedia.org/wikipedia/commons/d/de/HTML5_oval_logo.png">
</body>
</html>
```

이렇게 하기보단 css파일을 만들어서 사용한다

element만 쓰면 다 똑같은데 css를 통하여 디자인을만든다

이벤트를 받을 수 있다 (javascrpit로)

선택자를 통하여 css 유용하게 적용

![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled.png)

![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%201.png)

# 실습

1. Layout 구조 분석하기

![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%202.png)

- Wireframing

디자인 하기전에 어떻게 나눌지 스케치북에 직접 그려본다

전반적인 구조를 잡는다

그 후 labeling 

- name같은것들

1. HTML 빠르게 마크업하기
- 준비물
    - html elements reference
        - 
        
        [HTML 요소 참고서 - HTML: Hypertext Markup Language | MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element)
        
    - fontawesome
        - 
        
        [Color Tool - Material Design](https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=9575CD)
        
    - googlefonts
        - 
        
        [Google Fonts](https://fonts.google.com/)
        
    
    - sementic tag를 사용하는 이유
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%203.png)
    
    사이트의 구성을 쉽게 알 수 있도록 태그들을 사용하고, 
    
    사이트 구조 분석 편리, 의미 단위 작성 유지보수 편리
    
    ```html
    header+section.player+section.info+section.Uptext
    ```
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%204.png)
    
    - emmet 문법
        
        이것을 emmet 문법이라고 하는데
        
        [Visual Studio Code Emmet 문법](https://swooki.tistory.com/937)
        
        ```html
        .logo+.icons
        
        <div class="logo"></div>
        <div class="icons"></div>
        ```
        
        .하면 div +. 해서 연속된 값 추가
        
    - span
        
        `<span>`은 `[<div>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/div)`와 매우 유사하지만, `[<div>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/div)`는 [블록 레벨 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Block-level_elements)인 반면 `<span>`은 [인라인 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Inline_elements)입니다.
        
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%205.png)
    
    ## Header
    
    ```html
    <!--Header-->
        <header>
            <div class="logo">
                <i class="fa-brands fa-youtube"></i>
                <span class="title">Youtube</span>
            </div>
            <div class="icons">
                <i class="fas fa-search"></i>
                <i class="fas fa-ellipsis-v"></i>
            </div>
        </header>
    ```
    
    div class로 logo, icons로 나눈후에
    
    아이콘을 넣고, span으로 나눠줘서 youtube라는 글귀를 만들었다
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%206.png)
    
    **header 끝**
    
    ## Section : VideoPlayer
    
    ```html
    <!--VideoPlayer-->
        <section class="player">
            <video controls muted src ="video/test.mp4"></video>
        </section>
    ```
    
    html elements에서 참고한 후에 video를 검색 후 입맛에 맛게 변형시킬수있다
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%207.png)
    
    ## Section : videoinfo
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%208.png)
    
    info에선 우선 큼지막한 세개의 부분으로 나눈다
    
    ```html
    .metadata+.actions+.channel
    
    <div class="metadata"></div>
    <div class="actions"></div>
    <div class="channel"></div>
    ```
    
    이후에
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%209.png)
    
    ## metadata
    
    metadata div안에는 l
    
    - list로 하기좋은 hashtags
    - tittle과버튼
    - 조회수 views
    
    ```html
    ul.hashtags+.titleAndButton+.viewsh
    
    <ul class="hashtags"></ul>
    <div class="titleAndButton"></div>
    <div class="views"></div>
    ```
    
    hashtag안에는 list가 세가지 있다
    
    ```html
    li*3
    
    <li>#DreamCoding</li>
    <li>#DreamCoders</li>
    <li>#Ellie</li>
    ```
    
    ```html
    <div class="titleAndButton">
                    <span class="title">
                        Clone Coding: 프론트엔드 공부를 해보고 있는데요
                        뭔가 모르는게 존니 많아서 하면서 도움이 많이됨가 동시에
                        조금 어려운것 같기도 해요 
                    </span>
                    <button class="moreBtn">
                        <i class="fas fa-caret-down"></i>
                    </button>
    ```
    
    title과 밑에 내리는 버튼 
    
    ```html
    <div class="views">
                    <span class="views">1M views 1 month ago</span>
    </div>
    ```
    
    조회수 문자열
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%2010.png)
    
    Q) 나중에 ul list는 어떻게 가로로 나열할것인가?
    
    Q) 현재까지 icon button이나 그냥 icon은 보이지 않는다 어떤것을 설정해야 icon이 보일까? 
    
    - Header에 아직 링크들을 안걸어줘서 그렇다
    - awesome link 회원가입후에 받으면 된다~
    
    ## Actions
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%2011.png)
    
    list안에 버튼 5개가 있다
    
    ```html
    (li>button)*5
    
    <li><button></button></li>
    <li><button></button></li>
    <li><button></button></li>
    <li><button></button></li>
    <li><button></button></li>
    
    ```
    
    그 뒤 button에는 
    
    - 아이콘
    - 그 밑에 text (Span)이 있다
    
    ```html
    <div class="actions">
                <li>
                    <button><i class="fas fa-thumbs-up"></i><span>1K</span></button>
                </li>
                <li>
                    <button><i class="fas fa-thumbs-down"><span>10</span></i></button>
                </li>
                <li>
                    <button><i class="fas fa-share"><span>Share</span></i></button>
                </li>
                <li>
                    <button><i class="fas fa-plus"><span>Save</span></i></button>
                </li>
                <li>
                    <button><i class="fab fa-font-awesome-flag"><span>Report</span></i></button>
                </li>
            </div>
    ```
    
    ## Channel
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%2012.png)
    
    - metadata
    
    ```html
    <div class="metadata"></div>
     <div class="subscribe"></div>
    
    <!-- Channel Descriptions -->
            <div class="channel">
                <div class="metadata">
                    <img src = "image/avatar.jpg" alt=""/>
                    <div class="info">
                        <span class="name">레슬패션</span>
                        <span class="subscribers">1.3M</span></div>
                </div>
                <button class="subscribe">subscribe</button>
            </div>
    ```
    
    ## Section: Upnext
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%2013.png)
    
    ```html
    <span class="title">Up next</span>
    
    ```
    
    글자는 보통 span을 쓴다
    
    그 후에 똑같은 아이템이 반복해서 나오는 것을 확인할 수 있다
    
    - ul태그 이용
    - li 이용해서 만들면 되겠다
        - li는 각각 upnext의 item이라고 부르자
    - *3
    
    ```html
    ul>li.item*3
    
    <ul>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    </ul>
    ```
    
    item안에는 
    
    - img
    - info 텍스트
    - 버튼
    
    ```html
    img+.info+button.moreBtn
    
    <img src="" alt="">
    <div class="info"></div>
    <button class="moreBtn"></button>
    ```
    
    ```html
    <section class="UpNext">
            <span class="title">Up next</span>
            <ul>
                <li class="item">
                    <img src="image/1.jpg" alt="">
                    <div class="info">
                        <span class="title">1번 페이지</span>
                        <span class="name">레슬패션</span>
                        <span class="views">1M</span>
                    </div>
                    <button class="moreBtn"><i class="fas fa-ellipsis-v"></i></button>
                </li>
                <li class="item">
                    <img src="image/2.jpg" alt="">
                    <div class="info">
                        <span class="title">2번 페이지</span>
                        <span class="name">레슬패션2</span>
                        <span class="views">1M</span>
                    </div>
                    <button class="moreBtn"><i class="fas fa-ellipsis-v"></i></button>
                </li>
                <li class="item">
                    <img src="image/3.jpg" alt="">
                    <div class="info">
                        <span class="title">3번 페이지</span>
                        <span class="name">레슬패션3</span>
                        <span class="views">1M</span>
                    </div>
                    <button class="moreBtn"><i class="fas fa-ellipsis-v"></i></button>
                </li>
            </ul>
        </section>
    ```
    
    자바스크립트를 이용하면 데이터를 동적으로 가져오기 떄문에 이렇게 쓰지 않는다 
    
    # CSS 파일
    
    일관성 있게 작성하는게 중요하기 때문에 전반적으로 어떤것을 쓸건지 root에 할당
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%2014.png)
    
    display : flex;
    
    justify-content: space-between
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%2015.png)
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%2016.png)
    
    ```css
    :root{
        /* Color */
    --white-color: #fff;
    --black-color: rgba(0, 0, 0, 0.912); 
    --blue-color: rgb(2, 49, 255);
    --red-color: rgb(255, 2, 2);
    --grey-dark-color: rgba(43, 42, 42, 0.738);
    --grey--light-color: rgb(74, 73, 73);
    
        /* Size */
    --side--padding: 12px;
    --avatar-size: 36px;
    
        /* Font Size */
    --font-large: 18px;
    --font-medium: 14px;
    --font-small: 12px;
    --font-micro: 10px;
    
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body{
        font-family: Roboto;
    }
    
    header{
        display: flex;
        justify-content: space-between;
        padding: var(--padding);
        background-color: var(--black-color);
        color: var(--white-color);
    }
    
    header .logo {
        font-size: var(--font-large);
    }
    
    header .logo i {
        color: var(--red-color);
    }
    
    header .icons .fa-search{
        margin-right: var(--side--padding);
    }
    
    header{
        .logo {
    
        }
        .icons {
    
        }
    }
    이런식으로 하는걸 css 전처리기
    SASS & LESS 라이브러리 사용하는게 좋다 
    
    react 는 postCSS를 사용한다
    ```
    
    header.icons.fa-search 이렇게 띄어쓰기 안하면 적용이 안된다.
    
    Video Player
    
    ```css
    /* Video Player */
    .player{
        position: sticky; //스크롤을 내렸을때 위치가 고정된다, 힌트를 줘야 알 수 있음
        top: 0; //힌트주기
        text-align: center;
        background-color: var(--black-color)
    }
    
    .player video{
        width: 100%;
        height: 50%;
        max-width: 1000px;
        max-height: 500px;
    }
    ```
    
    Video info
    
    ```css
    .info{
        padding: var(--padding)
    }
    
    .hashtags{
        display: flex;
        font-size: var(--font-small);
        color: var(--blue-color);
    }
    
    .hashtags li{
        margin-right: var(--padding);
    }
    
    이렇게 했을떄 li모양에 디스크가 뜨는 것을 확인 할 수 있는데
    ul{
        list-style:none;
    }
    
    li{
        list-style:none;
    }
    이렇게 작성하면 지워진다.
    li도 마찬가지
    
    그리고 이렇게하면 모든 아이템에 있는 info , hashtags,hashtags li 등이
    다 바뀌게 되는데 작은 단위로 작게작게 설정해서 만드는게 좋다
    
    ```
    
    ```css
    .info .metadata .titleAndButton{
        display: flex;
    }
    
    .info .metadata .titleAndButton .title {
        font-size: var(--font-medium);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
        -webkit-box-orient: vertical;
    }
    
    이렇게 모르는게 있을때 
    css line 제한 구글에 쳐보고 복붙하기
    
    button이 띠껍게 보이는데 원래 있는 효과를 제거하기 위해 
    
    button,
    button:focus {
        border: none;
        cursor: pointer;
        outline: none;
    }
    
    작성
    
    .info .metadata .titleAndButton .moreBtn {
        height: 100%;
    }
    btn의 위치를 설정하기 위해 
    
    .info .views {
        font-size: var(--font-small);
        color: var(--grey--dark-color)
    }
    
    ```
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%2017.png)
    
    ## actions
    
    ```css
    .actions{
        display: flex;
        justify-content: space-around; //아이콘이 space가 생기게
        margin: var(--padding) 0;
    
    }
    
    .actions button {
        display: flex;
        flex-direction: column; //default가 row라 수직인데, 수평으로 맞춤
        font-size: var(--font-small);
    }
    
    .actions button i {
        margin: 0 auto; //아이콘이 중심에 오게 설정
        margin-bottom: calc(var(--padding)/2); //cal 함수 이용하여 padding 값 설정
        font-size: 16px;
    }
    
    .actions button i.active {
        color: var(--blue-color); //acvite 라는 태그를 i class= 'active fas fa-thumb
    }
    
    ```
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%2018.png)
    
    ## Channel
    
    ```css
    .channel {
        display: flex;
        justify-content: space-between; 
        border-top: 1px solid var(--grey--light-color);
        border-bottom: 1px solid var(--grey--light-color);
    //구분선
    }
    .channel .metadata {
        display: flex;
        align-items: center; //아이템이 중앙에 오게 
    }
    .channel .metadata .info {
       display: flex;
       flex-direction: column; //레슬패션과 1.3m이 vertical하게
    }
    .channel .metadata img {
        width: var(--avatar-size); //가로 세로 길이 설정
        height: var(--avatar-size);
        border-radius:50%; //이미지가 원이 되게
    }
    
    .channel .metadata .info .name{
        font-size: var(--font-medium);
    }
    
    .channel .metadata .info .subscribers{
        font-size: var(--font-small);
        color: var(--grey--dark-color)
    }
    
    .channel .subscribe {
        text-transform: uppercase; //대문자로
        color: var(--red-color);
        font-size: var(--font-medium);
    }
    ```
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%2019.png)
    
    ## Upnext
    
    ```css
    .UpNext > .title{ 
        font-size: var(--font-large);
        color: var(--grey--dark-color);
        margin-bottom: cacl(var(--padding)/2);
    }
    .UpNext .title 
    로 하면 UpNext에있는 모든 자식들이 꾸며지게 되는데
    >를 사용하여 바로 밑의 자식만 바꾸게 설정
    
    <section class="UpNext">
            <span class="title">Up next</span>
            <ul>
                <li class="item">
                    <img src="image/1.jpg" alt="">
                    <div class="info">
                        <span class="title">1번 페이지</span>
                        <span class="name">레슬패션</span>
                        <span class="views">1M</span>
                    </div>
                    <button class="moreBtn"><i class="fas fa-ellipsis-v"></i></button>
                </li>
                <li class="item">
                    <img src="image/2.jpg" alt="">
                    <div class="info">
                        <span class="title">2번 페이지</span>
                        <span class="name">레슬패션2</span>
                        <span class="views">1M</span>
                    </div>
                    <button class="moreBtn"><i class="fas fa-ellipsis-v"></i></button>
                </li>
                <li class="item">
                    <img src="image/3.jpg" alt="">
                    <div class="info">
                        <span class="title">3번 페이지</span>
                        <span class="name">레슬패션3</span>
                        <span class="views">1M</span>
                    </div>
                    <button class="moreBtn"><i class="fas fa-ellipsis-v"></i></button>
                </li>
            </ul>
        </section>
    ```
    
    javascript는 이후에
    
    ```jsx
    const moreBtn = document.querySelector('.info . metadata .moreBtn');
    const title = document.querySelector('.info .metadata .title');
    
    moreBtn.addEventListener('click', () => {
        moreBtn.classList.toggle('clicked');
        title.classList.toggle('clamp');
    });
    ```
    
    [](http://127.0.0.1:5500/html/youtubemobile/index.html)
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%2020.png)
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%2021.png)
    
    ![Untitled](HTML,%20CSS%200d3660718bd947e29721250ad05c9cf3/Untitled%2022.png)