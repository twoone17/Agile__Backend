# Spring 공부(인프런 입문편)

- controller, view
    
    첫번째 진입이 controller
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A5%E1%86%AB%20%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20de181e8fd9c74396a650e17923ecc594/Untitled.png)
    
    컨트롤러에서 리턴 값으로 문자를 반환하면 뷰 리졸버( viewResolver )가 화면을 찾아서 처리한다.
    
- 스프링 웹 개발 기초
    - 정적 컨텐츠
    - MVC와 템플릿 엔진
    - API
    
    정적 컨텐츠
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A5%E1%86%AB%20%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20de181e8fd9c74396a650e17923ecc594/Untitled%201.png)
    
    MVC와 템플릿 엔진
    
    Model, View, Controller
    
    View : 화면을 그리는데만 집중
    
    Controller : 내부 로직, 비지느시, 서버 뒷단에 관련된 것들을 넘겨주는것
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A5%E1%86%AB%20%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20de181e8fd9c74396a650e17923ecc594/Untitled%202.png)
    
    view를 템플릿 방식으로 랜더링한 html로 클라이언트에게 전달해준다
    
    API 
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A5%E1%86%AB%20%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20de181e8fd9c74396a650e17923ecc594/Untitled%203.png)
    
    문자형이 아닌 객체형이 들어오면 json형태로 반환해줌
    
    converter를 통해, view를 사용하지 않는다
    
    @ResponseBody
    
    - HTTP의 body에 문자 내용을 직접 반환
- 예제
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A5%E1%86%AB%20%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20de181e8fd9c74396a650e17923ecc594/Untitled%204.png)
    
    DI를 왜 주입하냐?
    
    클라이언트가 어떤 서비스를 사용할 것인지 지정하는대신 클라이언트에게 무슨 서비스를 사용할것인지 직접 지정
    
    **관심사를 분리한다**
    
    ## Controller, Service, Repository 연결 : Autowired
    
    - 이 세개는 @Component 의 디테일한 annotation이다
    - component와 관련된 모든것들을 다 spring 객체 생성해서 스프링 컨테이너에 넣는다
    - autowired로 연결해줌
    - main class에 @SpringbootApplication이 있는데, 여기 componet scan이 있고 이것에 해당하는 하위 패키지의 @component를 뒤져 스프링 컨테이너에 넣고 autowired로 연결해준다
    - 등록할때는 싱글톤으로 등록해서 공유한다
    
    화면을 붙이고싶은데 controller view가 필요하다
    
    member controller가 필요하다 
    
    member service를 통하고 .. 의존한다 
    
    @Controller를 통해 spring bean이 관리된다
    
    Controller, Service, Repository 이 세개를 연결시켜야 하는데 
    
    @Autowired로 연결시킨다
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A5%E1%86%AB%20%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20de181e8fd9c74396a650e17923ecc594/Untitled%205.png)
    
    Autowired로 연결
    
    ## Controller, Service, Repository 연결 : 설정정보를 자바코드로 직접 연결
    
    ```java
    @Configuration
    public class SpringConfig {
    
        @Bean
        public MemberService memberService(){
            return new MemberService(memberRepository());
        }
    
        @Bean
        public MemberRepository memberRepository(){
            return new MemoryMemberRepository();
        }
    }
    ```
    
    - @configuration을 달고 설정정보를 수동으로 입력
    - @Bean으로 의존관계 주입
    - 이는 나중에 MemoryRepository가 변경될때 간단하게 MemoryMemberReposiory에 들어갈 구현체를 변경만 해주면 된다. 이럴때 유용함
    
    HTTP 공부! 
    
    ```
    @Transactional
    //transactional 은 afterEach에 초기화 해주는것과 같음 . 롤백해준다
    ```
    
- JDBC 템플릿
    
    JDBC api에서 반복 코드 대부분 제거해준다.
    
    ```
    
    //db에 insert를 할때 id를 자동으로 생성하는데 이를 identity라고 한다
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    ```
    
    jpa는 인터페이스를 통한 기본적인 CRUD
    
    찾는것것, findbyName, findbyemiail() 처럼 메서드 이름만으로 조회 기능 제공
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A5%E1%86%AB%20%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20de181e8fd9c74396a650e17923ecc594/Untitled%206.png)
    
    AOP가 필요한 상황
    
    - 모든 메소드의 호출 시간 측정하고싶을때?
    - 
    
    회원가입, 회원 조회에 시간을 측정하는 기능은 핵심 관심 사항이 아니다.
    시간을 측정하는 로직은 공통 관심 사항이다.
    시간을 측정하는 로직과 핵심 비즈니스의 로직이 섞여서 유지보수가 어렵다.
    시간을 측정하는 로직을 별도의 공통 로직으로 만들기 매우 어렵다.
    시간을 측정하는 로직을 변경할 때 모든 로직을 찾아가면서 변경해야 한다.
    
    중간에 인터셉트해서 ~~ 핵심 관심사항ㅇ을 깔끔하게 
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A5%E1%86%AB%20%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20de181e8fd9c74396a650e17923ecc594/Untitled%207.png)
    
    의존관계 주입 전 가짜가 주입된후 인터셉트함 
    
    DI의 장점이 여기서 나옴~