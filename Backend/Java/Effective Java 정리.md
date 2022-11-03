# 자바 공부

[https://github.com/WegraLee/effective-java-3e-source-code](https://github.com/WegraLee/effective-java-3e-source-code)

[Java 핵심정리](https://www.notion.so/Java-0dcb21282aa44c2e9ed01689f1a4bff3)

# Effective Java 정리

## 객체 생성과 파괴

- 생성자 대신 정적 팩터리 메서드를 고려하라
    - 정리
        
        constructer보다 static factory method를 사용해라
        
        ```java
        public class Person{
            private int age;
            public Person(int age){
                this.age = age;
            }
        }
        
        Person p = new Person(10);
        ```
        
        일반적인 생성자를 사용, 
        
        ```java
        public class Person{
            private int age;
            private Person(int age){
                this.age = age;
            }
            
            public static Person ofAge(int age){
                return new Person(age);
            }
        }
        
        Person p = Person.ofAge(10);
        ```
        
        팩토리 메서드 사용
        
        첫 번째 장점은, 생성자와는 달리 **팩토리 메서드에는 이름이 있다**는 것이다. 생성자는 이것이 어떤 객체가 생성되는지 쉽게 알 수 없지만, 팩토리 메서드는 이름을 잘 지어 놓으면 코드의 가독성이 높아지며 사용하기도 쉬워진다.
        
        두 번째 장점은, **생성자와 달리 호출할 때마다 새로운 객체를 생성할 필요가 없다.** 때문에, 동일한 객체가 요청되는 일이 잦고, 객체를 만드는 비용이 클 때 적용시키면 성능을 크게 개선할 수 있다.
        
        세 번째 장점은, **생성자와 달리 반환값 자료형의 하위 자료형 객체를 반환할 수 있다.** 따라서 반환되는 **객체의 클래스를 훨씬 유연하게 결정할 수 있다.** 이 유연성을 활용하면 public으로 선언되지 않은 클래스의 객체를 반환할 수 있기 때문에 구현의 세부사항을 감출 수 있어 간결한 코드가 된다. 예로는 인터페이스 기반 프레임워크 구현이 있다.
        
        new person(10)이  person.ofAge(10)으로 되는것
        
        네 번째 장점은, 형인자 자료형 객체를 만들 때 편하다.
        
        ```java
        Map<String, List<Points>> map = new HashMap<String, List<Points>>();
        ```
        
        ```java
        public static <K, V> HashMap<K, V> newInstance(){
            return new HashMap<K, V>();
        }
        Map<String, List<Points>> map = HashMap.newInstance();
        ```
        
       ![Untitled](https://user-images.githubusercontent.com/84762786/198508088-613ca13d-cf5b-4f1f-b88f-ff10f3607395.png)


        
        생성자와 같은 역할이지만 조금 더 다양한 장점을 가지고 있으니 public 생성자를 사용하는것보다 정적 팩터리 메소드 (static factory method)를 사용해보자
        
    
     **생성자보다 훨씬 좋구나**
    
    정적 팩터리 사용 방법을 익혀야 할듯
    
    생성자를 한번만 호출하고, 나머지 팩토리 메소드를 사용해보기
    
- 생성자에 매개변수가 많다면 빌더를 고려하라
    - 18P
        
        매개변수가 너무 많으면 점층적 생성자 패턴도 한계가 있음
        
        정적 팩토리와 생성자는 이걸 대응해주지못함
        
        두번째 대안인 자바빈즈 패턴
        
        생성자 안에 setter로 설정, 하지만 일관성이 완전히 무너진다
        
        ```java
        ublic class NutritionFacts {
            // 매개변수들은 (기본값이 있다면) 기본값으로 초기화된다.
            private int servingSize  = -1; // 필수; 기본값 없음
            private int servings     = -1; // 필수; 기본값 없음
            private int calories     = 0;
            private int fat          = 0;
            private int sodium       = 0;
            private int carbohydrate = 0;
        
            public NutritionFacts() { }
            // Setters
            public void setServingSize(int val)  { servingSize = val; }
            public void setServings(int val)     { servings = val; }
            public void setCalories(int val)     { calories = val; }
            public void setFat(int val)          { fat = val; }
            public void setSodium(int val)       { sodium = val; }
            public void setCarbohydrate(int val) { carbohydrate = val; }
        
            public static void main(String[] args) {
                NutritionFacts cocaCola = new NutritionFacts();
                cocaCola.setServingSize(240);
                cocaCola.setServings(8);
                cocaCola.setCalories(100);
                cocaCola.setSodium(35);
                cocaCola.setCarbohydrate(27);
            }
        }
        ```
        
        세번째 다안, 점층적 생성자 패턴의 안정석과 자바빈즈 패턴의 가독성을 겸비한
        
        **빌더 패턴 (Builder Pattern)**
        
        ```java
        빌더 사용 전
        ```
        
       ![Untitled 1](https://user-images.githubusercontent.com/84762786/198508130-aae9bec4-b3b5-43d6-9cd9-479edf077e70.png)


        
        ```java
        빌더 사용 후
        
        ```
        
        ![Untitled 2](https://user-images.githubusercontent.com/84762786/198508140-64f12f0c-a5e0-44ba-a047-04f56fd18975.png)

        
        ![Untitled 3](https://user-images.githubusercontent.com/84762786/198508151-704d4e12-923a-4221-9cd1-6d5bed5db705.png)

        
        ```java
        public static void main(String[] args) {
            PersonBuilder personBuilder = new PersonBuilder();
        
            Person ktko = personBuilder.setName("ktko").setAge("30").setSex("Male").setJob("Programmer").setAddress("Seoul").build();
            System.out.println(ktko.toString()); //Person [name=ktko, age=30, sex=Male, phoneNumber=null, address=Seoul, job=Programmer]
        
            Person yjs = personBuilder.setName("yjs").setAge("30").setSex("FeMale").setJob("Designer").build();
            System.out.println(yjs.toString()); //Person [name=yjs, age=30, sex=FeMale, phoneNumber=null, address=null, job=Designer]
        }
        
        ```
        
        출처:
        
        [https://ktko.tistory.com/entry/디자인-패턴-빌더-패턴Build-Pattern](https://ktko.tistory.com/entry/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4-%EB%B9%8C%EB%8D%94-%ED%8C%A8%ED%84%B4Build-Pattern)
        
        [[생성 패턴] 빌더 패턴(Builder pattern) 이해 및 예제](https://readystory.tistory.com/121)
        
    
    매개변수 많을떄 정적 팩토리 메소드도 이를 해결해주지 못한다 
    
    **결론적으로 생성자나 매개변수가 많다면 빌더패턴을 사용하여** 
    
    **set과 생성자를 적절하게 섞어주는게 보기 간결하고 안전하다.**
    
    **.build()**
    
    이쁘게 보기 위해서
    
- Private 생성자나 열거 타입으로 싱글턴임을 보증하라
    - 23P 정리
        
        싱글턴이란? 
        
        인스턴스 오직 하나만 생성할 수 있는 클래스
        
        ```java
        // 코드 3-1 public static final 필드 방식의 싱글턴 (23쪽)
        public class Elvis {
            public static final Elvis INSTANCE = new Elvis();
        
            private Elvis() { }
        
            public void leaveTheBuilding() {
                System.out.println("Whoa baby, I'm outta here!");
            }
        
            // 이 메서드는 보통 클래스 바깥(다른 클래스)에 작성해야 한다!
            public static void main(String[] args) {
                Elvis elvis = Elvis.INSTANCE;
                elvis.leaveTheBuilding();
            }
        }
        ```
        
        private 생성자, static final 멤버로 만들면 인스턴스가 전체 시스템에서 하나뿐임
        
        → 클라이언트 손 쓸 방법 없고 공격 방어
        
        하지만 단점이 있고 가장 좋은 방법으로 싱글턴을 보증하는 방법은 열거방식이다
        
        ```java
        // 열거 타입 방식의 싱글턴 - 바람직한 방법 (25쪽)
        public enum Elvis {
            INSTANCE;
        
            public void leaveTheBuilding() {
                System.out.println("기다려 자기야, 지금 나갈께!");
            }
        
            // 이 메서드는 보통 클래스 바깥(다른 클래스)에 작성해야 한다!
            public static void main(String[] args) {
                Elvis elvis = Elvis.INSTANCE;
                elvis.leaveTheBuilding();
            }
        }
        ```
        
        - 열거 방식이 뭘까? enum?
            
            요일이나 계절 같은 몇가지의 한정된 데이터들을 가지는 경우 사용한다
            
            열거형으로 데이터들을 묶어주면 편하고 
            
            people.favorite_session = Season.봄 ; 
            
            이렇게 사용한다 class에서 변수 값 땡겨갈때 사용하는것과 같이 
            
            ```java
            enum Season {
                봄, 여름, 가을, 겨울
            }
            
            public class People {
                public String name; //이름
                public Season favorite_session; //좋아하는계절
            
                public static void main(String[] args) {
                	People people = new People();
                    
                	people.name = "홍길동";
                	people.favorite_session = Season.봄;
                     
                    System.out.println("이름 : " + people.name);
                    System.out.println("좋아하는 계절 : " + people.favorite_session);
                }
            }
            ```
            
            [https://coding-factory.tistory.com/522](https://coding-factory.tistory.com/522)
            
        
        열거형으로 싱글턴을 보증하는구나 
        
    
    싱글턴은 하나의 인스턴스만 생성하는 클래스이고 메모리 낭비방지, 재사용하기위해 사용  
    
    열거형 방법 enum을 이용하는게 싱글턴을 보증하는 가장 바람직한 방법이구나
    
- 인스턴스화를 막으려거든 prviate 생성자를 사용하라
    - 26p 정리
        
        static 메소드나 정적 필드만을 클래스 남용 별로다
        
        이렇게 설계할때 자동적으로 public 생성자가 만들어지고 이를 인스턴스화하여 상속하는것으로 오해할 수 있다. 
        
        **private 생성자를 추가하여 클래스의 인스턴스화를 막는다**
        
        ```java
        // 코드 4-1 인스턴스를 만들 수 없는 유틸리티 클래스 (26~27쪽)
        public class UtilityClass {
            // 기본 생성자가 만들어지는 것을 막는다(인스턴스화 방지용).
            private UtilityClass() {
                throw new AssertionError();
            }
        
            // 나머지 코드는 생략
        }
        ```
        
        prviate으로 생성자를 만들면 인스턴스화를 막을 수 있고
        
        이는 상속을 불가능하게 한다 , 하위 클래스가 생성자에 접근(super)불가능하게 함
        
    
    **자동적으로 생성자가 public으로 생성되고 이를 상속하려고 하는 잘못된 접근방식 : 인스턴스화를 막기 위해 prviate 생성자를 사용해라**
    

- 자원을 직접 명시하지 말고 의존 객체 주입을 사용하라 (DI)
    - 정리 30p
        
        많은 클래스가 하나 이상의 자원에 의존할때, dictionary는 하나인데 이를 다양한 클래스에서 사용할때 static으로 자원을 사용하거나, 싱글턴으로 구현하는 경우는 안좋다
        
        사전을 예로 들어서 , 사전 하나로 이 모든 쓰임에 대응하는것은 불가능하다.
        
        사용하는 자원에 따라 동작이 달라지는 클래스에는 static 클래스나 싱글턴 방식은 적합하지않다
        
        → 인스턴스를 생성할때 생성자에 **필요한 자원**을 넘겨준다 
        
        : 의존 객체 주입( Dependency Injection)
        
        ```java
        public class Main {
        
          public static void main(String[] args) {
            Controller controller = new Controller();
            controller.print();
          }
        }
        
        class Controller {
        
          private Service service;
        
          public Controller() {
            this.service = new Service();
          }
        
          public void print() {
            System.out.println(service.message());
          }
        }
        
        class Service {
        
          public String message() {
            return "Hello World!";
          }
        }
        출처: https://7942yongdae.tistory.com/177 [프로그래머 YD:티스토리]
        ```
        
        이러한 방식은 Controller와 Service와 직접적인 강한 관계가 있고 이는 프로그램의 유연성을 떨어트린다.
        
        controller와 service와의 관계를 직접적이 아닌 간접적인 관계로 만든다→ 의존객체 주입
        
        ```java
        public class Main {
        
          public static void main(String[] args) {
            Controller controller = new **Controller(new MessageService());**
            controller.print();
          }
        }
        
        interface IService {
        
          String message();
        }
        
        class Controller {
        
          private IService service;
        
         ** public Controller(IService service) {
            this.service = service;
          }**
        
          public void print() {
            System.out.println(service.message());
          }
        }
        
        class MessageService implements IService {
        
          public String message() {
            return "Hello World!";
          }
        }
        출처: https://7942yongdae.tistory.com/177 [프로그래머 YD:티스토리]
        ```
        
        이번에는 controller가 service 객체를 생성하지 않고 그저 interface인 Iservice 객체를 사용했다
        
        controller 객체는 messageservice 객체를 몰라도 iservice 객체를 이용하여 출력한다 
        
        →"객체(MessageService)는 내가(Main) 만들게 넌 사용(IService) 해"
        
        **main에 messageserivce 주입** 
        
        [https://7942yongdae.tistory.com/177](https://7942yongdae.tistory.com/177)
        
    
    **직접적인 관계를 갖던 클래스를 간접적인 관계를 갖게해주고**
    
    **필요한 자원을 생성자에 넘겨주는 의존객체 주입을 이용하자.**
    
    **유연성, 재사용성, 테스트 용이성 개선한다.**
    
    자바에서는 이렇게 활용이 됐는데 SOLID 법칙의 DIP를 지키기 위해선 DI가 필수적이다
    
- 불필요한 객체 생성을 피하라
    - 35p 정리
        
        string함수 경우에 s.match 사용하면 시간 오래걸린다 
        
        → pattern 사용 : 정규표현식 ..
        
        오토박싱 : 기본 타입과 그에 대응하는 박싱된 기본 타입의 구분 흐려준다
        
        ![Untitled](%E1%84%8C%E1%85%A1%E1%84%87%E1%85%A1%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE%20bfd6917cdfdc4e32815e89d341027206/Untitled%204.png)
        
        ![Untitled](%E1%84%8C%E1%85%A1%E1%84%87%E1%85%A1%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE%20bfd6917cdfdc4e32815e89d341027206/Untitled%205.png)
        
        이렇게 자동으로 해주긴하는데 시간이 오래걸린다, 오토박싱 조심
        
        무거운 객체가 아닌이상 객체 생성을 피하고자 나만의 객체 풀을 만드는 것은 안좋음
        
        헷갈리고 메모리 사용량 늘리고 성능 떨어트림
        
        - 기존 객체를 재사용해야 한다면 새로운 객체를 만들지 마라
        - 새로운 객체를 만들어야 한다면 기존 객체를 재사용하지마라
    
    String 사용과 오토박싱 주의
    
    - 기존 객체를 재사용해야 한다면 새로운 객체를 만들지 마라
    - 새로운 객체를 만들어야 한다면 기존 객체를 재사용하지마라
- 다 쓴 객체 참조를 해제하라
    - 정리
        
        **자기 메모리를 직접 관리하는 클래스**라면 (Stack 클래스같이) 메모리 누수에 주의해야 하고 원소를 다 사용한 즉시 그 **원소가 참조한 객체들을 다 null처리** 해줘서 가비지 컬렉터에게 알려야한다
        
        캐시 역시 메모리 누수를 일으킨다
        
        Listener callback 등록하고 명확히 해지 안해서 발생
        
        - weakhashmap
    
    자기가 메모리 관리하는 class
    
    - 다 쓰면 null 처리
    
    캐시
    
    listener callback
    
    - weakhashmap
- finalizer와 cleaner 사용을 피해라
    
    java에선 안좋다
    
    아 그냥 안쓸게용ㅋ
    
- try-finally보다는 try-with-resources를 사용하라
    - 47p 정리
        
        close를 사용하는 inputstream,outputstream같은 경우에 try-finally를 사용하면 두번째 발생하는 예외가 첫번째 예외를 집어삼킬 수 있다, 지저분한다
        
        try-with-resources
        
        ```java
        
        public class TopLine {
            // 코드 9-1 try-finally - 더 이상 자원을 회수하는 최선의 방책이 아니다! (47쪽)
            static String firstLineOfFile(String path) throws IOException {
                BufferedReader br = new BufferedReader(new FileReader(path));
                try {
                    return br.readLine();
                } finally {
                    br.close();
                }
            }
        
            public static void main(String[] args) throws IOException {
                String path = args[0];
                System.out.println(firstLineOfFile(path));
            }
        }
        © 2022 GitHub, Inc.
        ```
        
        ```java
        public class TopLine {
            // 코드 9-3 try-with-resources - 자원을 회수하는 최선책! (48쪽)
            static String firstLineOfFile(String path) throws IOException {
                try (BufferedReader br = new BufferedReader(
                        new FileReader(path))) {
                    return br.readLine();
                }
            }
        
            public static void main(String[] args) throws IOException {
                String path = args[0];
                System.out.println(firstLineOfFile(path));
            }
        }
        ```
        
         
        
    
    꼭 회수해야 하는 자원을 다룰때는(Close) try-finally 말고 try-with-resources를 사용하자
    
    예외 정보가 유용해진다.
    
    나중에 한번 사용해보자
    

- 정리
    - 생성자보단 정적 팩토리 메소드가 좋다
    - 매개변수 많을땐 빌더를 항상 염두해두자
    - 객체 재활용을 위해선 인스턴스를 하나만 생성하는 싱글턴을 만들고, 이는 열거타입(enum)으로 구현하자
    - 의존객체 DI를 통해서 직접적인 관계를 간접적으로 만들고, 이는 필요한 자원을 선택적으로 사용할때 쓴다, 생성자에 필요한 자원을 넘겨주며 사용
    - String이나 오토박싱처럼 불필요한 객체 생성을 피하자
    - 메모리를 자기가 관리하는 class는 null로 처리하여 가비지 컬렉터에게 알려주자
    - finalizer와 clenaer 별로다
    - close와 같은 회수해야하는 자원을 다룰땐 try-finally보단 try-with-resource 사용하자

## 모든 객체의 공통 메서드

Object에서 final이 아닌 method(equals, hashcode, toString,clone)이나 comparable.compareTo는 override(재정의)를 염두해두고 설계된 것이기 때문에 지켜야 할 규약이 있다

- equals는 일반 규약을 지켜 재정의해라
    - 66p 정리
        
        eqauls를 재정의를 일반적으로 하지 않지만, 해야할때는 객체 식별성이 아니라 논리적 동치성을 확인해야한다
        
        - == 연산자를 사용해 입력이 자기 자신의 참조인지 확인
        - instanceof 연산자로 입력이 올바른 타입인지 확인
        - 입력을 올바른 타입으로 형변환한다
        - 입력 객체와 자기 자신의 대응되는 핵심 필드들이 모두 일치하는지 하나씩 검사
        
        ```java
        // 코드 10-6 전형적인 equals 메서드의 예 (64쪽)
        public final class PhoneNumber {
            private final short areaCode, prefix, lineNum;
        
            public PhoneNumber(int areaCode, int prefix, int lineNum) {
                this.areaCode = rangeCheck(areaCode, 999, "지역코드");
                this.prefix   = rangeCheck(prefix,   999, "프리픽스");
                this.lineNum  = rangeCheck(lineNum, 9999, "가입자 번호");
            }
        
            private static short rangeCheck(int val, int max, String arg) {
                if (val < 0 || val > max)
                    throw new IllegalArgumentException(arg + ": " + val);
                return (short) val;
            }
        
            **@Override public boolean equals(Object o) {
                if (o == this)
                    return true;
                if (!(o instanceof PhoneNumber))
                    return false;
                PhoneNumber pn = (PhoneNumber)o;
                return pn.lineNum == lineNum && pn.prefix == prefix
                        && pn.areaCode == areaCode;
            }**
        
            // 나머지 코드는 생략 - hashCode 메서드는 꼭 필요하다(아이템 11)!
        }
        ```
        
        그 후 
        
        - 대칭적인가?
            - x.equals(y) = y.equlas(x)
        - 추이성이 있는가?
            - x.equals(y) = y.equals(z) → x.equals(z) true여야함
        - 일관성이 있는가?
            - 항상 true, 항상 false
        
        eqauls를 재정의한 클래스 모두에서 hasecode도 재정의해야한다
        
    
    equals를 재정의해야할 때는 일반 규약을 잘 지키자
    
    잘 와닿진 않음. 재정의의 필요성을 확인했다면 다시 공부해서 익혀야할듯 
    
- equals를 재정의하려거든 hasecode도 재정의하라
    - 67p 정리
        
        재정의를 했을떄 hasecode를 재정의 안하면 null값을 반환하기 때문에 재정의해야한다
        
    
    재정의를 했을떄 hasecode를 재정의 안하면 null값을 반환하기 때문에 재정의해야한다
    
- toString을 항상 재정의하라
    - 73p 정리
        
        object의 toString 메서드는 문자열을 그대로 반환하는 경우가 없고 hashcode만 만든다
        
        실전에서 toString은 그 객체가 가진 주요 정보 모두를 반환하는게 좋다 
        
        ```java
        /**
             * 이 전화번호의 문자열 표현을 반환한다.
             * 이 문자열은 "XXX-YYY-ZZZZ" 형태의 12글자로 구성된다.
             * XXX는 지역 코드, YYY는 프리픽스, ZZZZ는 가입자 번호다.
             * 각각의 대문자는 10진수 숫자 하나를 나타낸다.
             *
             * 전화번호의 각 부분의 값이 너무 작아서 자릿수를 채울 수 없다면,
             * 앞에서부터 0으로 채워나간다. 예컨대 가입자 번호가 123이라면
             * 전화번호의 마지막 네 문자는 "0123"이 된다.
             */
        //    @Override public String toString() {
        //        return String.format("%03d-%03d-%04d",
        //                areaCode, prefix, lineNum);
        //    }
        ```
        
        이런 방식으로 toString을 항상 재정의하고, 반환한 값에 포함된 정보를 얻어올 수 있는 api를 제공하자.
        
        하위 클래스들이 공유해야 할 문자열 표현이 있는 추상 클래스라면 toString 재정의
        
        **abstract 클래스 : toString 메소드 상속한다**
        
    
    toString을 편의에 맞게 재정의하는 습관을 기르자.
    
    명확하고 유용한 정보를 읽기 좋은 형태로 반환하는 게 좋다.
    
- clone 재정의는 주의해서 진행하라
    
    cloneable을 사용할때 다시 살펴볼것 
    
    배열만은 clone 메서드 방식이 가장 깔끔한 예시이다.
    
    그외에는 주의
    
- comparable을 구현할지 고려해라
    - 87p 정리
        
        compareable 인터페이스의 유일한 메서드 compareTo
        
        이는 array같은것에서 순서가 있다면 검색, 극단값 계산, 자동 정렬 등 알파벳순.. 해결해준다
        
        **알파벳, 숫자, 연대 같이 순서가 명확한 값 클래스 작성한다면 반드시 Comparable 인터페이스 구현하기**
        
        compareTo도 equals와 같이 동치성 검사해야한다
        
        - 반사성
        - 대칭성
        - 추이성
        
        기존 클래스를 확장한 구체클래스에서 새로운 값 컴포넌트를 추가했다면 compareTo 규약 지킬 방법이 없음
        
    
    **알파벳, 숫자, 연대 같이 순서가 명확한 값 클래스 작성한다면 반드시 Comparable 인터페이스 구현하기**
    

- 정리
    
    Object의 method나 compareable는 재정의 할때 지켜야 할 규약이 있다
    
    이는 실제로 구현을 하면서 익혀야 할듯 하다.. 원리는 대충 알겠음
    

## 클래스와 인터페이스

- 클래스와 멤버의 접근 권한을 최소화하라
    - 96p 정리
        
        정보 은닉, 캡슐화의 장점들
        
        public 클래스의 인스턴스 필드는 되도록 public이 아니어야 한다
        
        상수용 public static final 필드는 public으로 놓을 수 있지만 이 필드가 참조하는 객체는 불변해야한다. 
        
    
- public 클래스에서는 public 필드가 아닌 접근자 메서드를 사용하라
    - 103p Q
        
        public 클래스가 필드를 공개하면 이를 사용하는 클라이언트가 생겨날 것이므로 내부 표현 방식을 마음대로 바꿀 수 없게 된다 ?
        
    
    public 클래스에선 public으로 필드를 설정하지말고 private으로 하고 
    
    getter setter를 사용해라
    
    package-private 클래스 혹은 private 중첩 클래스면 그냥 필드값 setter getter 사용안하고 직접적으로 사용해도 된다.
    
- 변경 가능성을 최소화하라
    - 정리 105p
        
        클래스를 불변으로 만들어라
        
        - 객체 상태 변경하는 메서드를 제공하지 않는다
        - 클래스 확장못하게 한다
        - 모든 필드 final로 선언해서 강제하는 수단 이용 설계자 의도 명확히 전달
        - 모든 필드 private으로 선언
        - 자신 외에는 내부의 가변 컴포넌트에 접근할 수 없도록 한다
            - 가변 객체 참조하는 필드 하나라도 있다면 클라이언트에서 그 객체의 참조 얻을 수 없게한다
        
        - 불변객체는 근본적으로 스레드에 안전함
        - 변하지 않아서 안심하고 공유
        - 자유롭게 공유, 불변객체끼리는 내부 데이터 공유 가능
        - 코드의 복잡성을 없애고 오류를 해결할때 쉬워진다
        
        여러가지 장점이 있으니까 클래스는 꼭 필요한 경우가 아니라면 불변이어야한다
        
        getter가 있다고 해서 setter를 무조건 적으로는 만들지 말자
        
        다른 합당한 이유가 없다면 모든 필드는 private final이어야 한다 
        
        생성자는 불변식 설정이 모두 완료된, 초기화가 완벽히 끝난 상태의 객체를 생성해야한다
        
        확실한 이유가 없다면 생성자와 정적 팩터리 외에는 그 어떠한 초기화 메서드도 public으로 제공해서는 안된다.
        
    
    final을 이용하여 불변으로 만드는게 좋다
    
    여러가지 장점이 있으니까 클래스는 꼭 필요한 경우가 아니라면 불변이어야한다
    
    getter가 있다고 해서 setter를 무조건 적으로는 만들지 말자
    
    다른 합당한 이유가 없다면 모든 필드는 private final이어야 한다 
    
    생성자는 불변식 설정이 모두 완료된, 초기화가 완벽히 끝난 상태의 객체를 생성해야한다
    
    확실한 이유가 없다면 생성자와 정적 팩터리 외에는 그 어떠한 초기화 메서드도 public으로 제공해서는 안된다.
    
- 상속보다는 컴포지션을 사용하라
    - 114p 정리
        
        다른 패키지의 구체 클래스를 상속하는 일은 위험하다
        
        클래스가 인터페이스를 구현하거나 인터페이스가 다른 인터페이스를 확장하는것과는 무관한 주제
        
        메소드 호출과 달리 상속은 캡슐화를 깨뜨림
        
        - 상위 클래스의 메서드를 이용시, 메서드의 내부 구현에서 예상치 못한 재정의 메서드를 호출하는 경우
        - 상위 클래스에 하위 클래스의 조건을 깨뜨리는 새로운 메서드가 추가되는 경우.클래스가 특정 조건을 만족해야만 하는데 새로운 메서드가 이를 만족하지 않는다면, 다시 하위 클래스에서 이를 수정해야하는 번거로움이 있다.
        
        이를 해결하는 방법은 컴포지션
        
        새로운 클래스를 만들고 private 필드로 기존 클래스의 인스턴스를 참조하게 한다
        
        기존 클래스가 새로운 클래스의 구성요소로 쓰인다 : 컴포지션
        
        전달 : forwarding 대응하는 메서드 호출하여 결과 반환 
        
        - 컴포지션을 사용하면 새로운 클래스는 기존 클래스의 내부 구현방식의 영향에서 벗어난다
        - 기존 클래스에 새로운 메서드가 추가되더라도 전혀 영향받지 않는다
        
        ```jsx
        import java.util.*;
        
        // 코드 18-3 재사용할 수 있는 전달 클래스 (118쪽)
        public class ForwardingSet<E> implements Set<E> {
            private final Set<E> s;
            public ForwardingSet(Set<E> s) { this.s = s; }
        
            public void clear()               { s.clear();            }
            public boolean contains(Object o) { return s.contains(o); }
            public boolean isEmpty()          { return s.isEmpty();   }
            public int size()                 { return s.size();      }
            public Iterator<E> iterator()     { return s.iterator();  }
            public boolean add(E e)           { return s.add(e);      }
            public boolean remove(Object o)   { return s.remove(o);   }
            public boolean containsAll(Collection<?> c)
                                           { return s.containsAll(c); }
            public boolean addAll(Collection<? extends E> c)
                                           { return s.addAll(c);      }
            public boolean removeAll(Collection<?> c)
                                           { return s.removeAll(c);   }
            public boolean retainAll(Collection<?> c)
                                           { return s.retainAll(c);   }
            public Object[] toArray()          { return s.toArray();  }
            public <T> T[] toArray(T[] a)      { return s.toArray(a); }
            @Override public boolean equals(Object o)
                                               { return s.equals(o);  }
            @Override public int hashCode()    { return s.hashCode(); }
            @Override public String toString() { return s.toString(); }
        }
        ```
        
        Set 인터페이스를 구현하고 set의 인스턴스를 인수로 받는 생성자를 하나 제공
        
        ```jsx
        // 코드 18-2 래퍼 클래스 - 상속 대신 컴포지션을 사용했다. (117-118쪽)
        public class InstrumentedSet<E> extends ForwardingSet<E> {
            private int addCount = 0;
        
            public InstrumentedSet(Set<E> s) {
                super(s);
            }
        
            @Override public boolean add(E e) {
                addCount++;
                return super.add(e);
            }
            @Override public boolean addAll(Collection<? extends E> c) {
                addCount += c.size();
                return super.addAll(c);
            }
            public int getAddCount() {
                return addCount;
            }
        
            public static void main(String[] args) {
                InstrumentedSet<String> s = new InstrumentedSet<>(new HashSet<>());
                s.addAll(List.of("틱", "탁탁", "펑"));
                System.out.println(s.getAddCount());
            }
        }
        ```
        
    
    상속은 캡슐화를 해친다 : 상위 클래스가 어떻게 구현되느냐에 따라 하위 클래스의 동작에 이상이 생길 수 있다.
    
    컴포지션과 전달을 사용하자. 
    
    래퍼 클래스로 구현할 적당한 인터페이스가 있다면 더욱 그렇다.
    
    자바 상속에는 치명적인 문제가 존재한다고 흔히들 말하며 상위 클래스를 구현하여 자식 클래스에 extend하기 보다 interface 클래스를 구현하여 implement하는 습관을 들이라고 설명한다. 
    
    상위 클래스와 하위 클래스의 관계가 정말 **is-a 관계** 일때 상속을 사용하고 
    
    확신할 수 없다면 컴포지션을 사용하자.
    
    composition 코딩 연습하기
    
- 상속을 고려해 설계하고 문서화하라. 그러지 않았다면 상속을 금지하라
- 추상 클래스보다는 인터페이스를 우선하라+
    - 130p 정리
        
        인터페이스는 믹스인(mixin) 정의에 안성맞춤
        
        mixin이란? 
        
        - 클래스가 구현할 수 있는 타입으로, 믹스인을 구현한 클래스에 원래의 주된타입 외에도 특정 선택적 행위 제공한다고 선언하는 효과 : compareable
        
        다중 구현용으로는 인터페이스가 적합하다.
        
        복잡한 인터페이스라면 구현하는 수고를 덜어주는 골격 구현을 함께 제공하자. 
        
        **골격구현 .. ?**
        
- 인터페이스는 구현하는 쪽을 생각해 설계하라
    - 136p 정리
        
        인터페이스에서 디폴드 메소드로 새로운 메소드를 추가하는게 가능해졌다
        
        디폴드 메소드 기능이 있다고 해서, 막 쓰게 되면 기존 구현체에 런타임 오류를 일으킬 수 있다
        
        인터페이스 설계할때 세심한 주의해서 디폴트 메소드 쓰는거 주의해야한다
        
        디폴트 메소드를 기존 메서드를 제거하거나 시그니처 수정하는 용도로 쓰지말자
        
    
- 인터페이스는 타입을 정의하는 용도로만 사용하라
    - 139p 정리
        
        인터페이스는 자신의 인스턴스로 무엇을 할 수 있는지 클라이언트에 얘기해주는것이고 이 용도로만 사용해야한다.
        
        상수 공개용 수단으로 사용하지말자
        
        interface에 final double avoga_..  = 6.0 이런식 x
        
- 태그 달린 클래스보다는 클래스 계층구조를 활용하라
    - 144p 정리
        
        ```java
        // 코드 23-1 태그 달린 클래스 - 클래스 계층구조보다 훨씬 나쁘다! (142-143쪽)
        class Figure {
            enum Shape { RECTANGLE, CIRCLE };
        
            // 태그 필드 - 현재 모양을 나타낸다.
            final Shape shape;
        
            // 다음 필드들은 모양이 사각형(RECTANGLE)일 때만 쓰인다.
            double length;
            double width;
        
            // 다음 필드는 모양이 원(CIRCLE)일 때만 쓰인다.
            double radius;
        
            // 원용 생성자
            Figure(double radius) {
                shape = Shape.CIRCLE;
                this.radius = radius;
            }
        
            // 사각형용 생성자
            Figure(double length, double width) {
                shape = Shape.RECTANGLE;
                this.length = length;
                this.width = width;
            }
        
            double area() {
                switch(shape) {
                    case RECTANGLE:
                        return length * width;
                    case CIRCLE:
                        return Math.PI * (radius * radius);
                    default:
                        throw new AssertionError(shape);
                }
            }
        }
        ```
        
        이런식의 태그 달린 클래스는 매우 복잡하고 비효율적
        
        → 클래스 계층구조를 어설프게 흉내낸 아류이다.
        
        ```java
        abstract class Figure {
            abstract double area();
        }
        
        // 태그 달린 클래스를 클래스 계층구조로 변환 (145쪽)
        class Square extends Rectangle {
            Square(double side) {
                super(side, side);
            }
        }
        
        ```
        
        태그는 쓸일이 없고 다 상속을 이용해서 구현하자
        
- 멤버 클래스는 되도록 static으로 만들라, **Static의 개념**
    - 149 p
        
        [Java - Static 키워드 이해하기](https://codechacha.com/ko/java-static-keyword/)
        
        Static 정리
        
        **우선 static field 는 프로그램이 실행될 떄 생성 및 초기화가 자동으로 된다.**
        
        **객체 생성하지 않아도 접근이 가능하고, 이는 객체와 분리되어 있다는 뜻이다**
        
        1. Static **변수, 상수** 
        
        static keyword를 사용하여 변수를 선언하면 멤버 변수와 다른 특성을 갖습니다. 다음과 같이 객체를 통해서 접근할 수 있지만, 클래스를 통해서도 접근할 수 있습니다.
        
        ```java
        public class Car {
            public final static String MANUFACTURE_NAME = "BMW";
            public final static String CAR_NAME = "BMW 320D";
        
            public static int sNumberOfCars = 0;
        
            public Car() {
                sNumberOfCars++;
            }
        }
        ```
        
        ```java
        Car car1 = new Car();
        Car car2 = new Car();
        Car car3 = new Car();
        
        System.out.println(Car.CAR_NAME);
        System.out.println(Car.MANUFACTURE_NAME);
        System.out.println("Number of cars : " + Car.sNumberOfCars);
        ```
        
        이렇게 sNumbeOfCars는 static이니까, 멤버 변수와는 다르게 선언과 동시에 생성과 초기화가 되기때문에 객체를 생성하면 값이 한번만 생성, 새롭게 생성되진않음
        
        ![Untitled](%E1%84%8C%E1%85%A1%E1%84%87%E1%85%A1%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE%20bfd6917cdfdc4e32815e89d341027206/Untitled%206.png)
        
        요로케 nubmer of cars는 3이됨 
        
        이때 car1.sNumberofCars로 객체에 접근 할 수 있지만, 
        
        static field는 위와 같이 Class를 통해서 접근하는 방법을 권장합니다.
        
        그 이유는 **멤버 변수를 접근하고 있는지 static 변수를 접근하고 있는지 쉽게 구분이 안되기 때문입니다.**
        
        final , public, private 등으로 접근 설정할 수 있다.
        
        static field는 상수를 선언할 때 많이 사용합니다.
        
        ---
        
        1. Static 메서드
        
        메소드를 선언할 때 static을 사용하면 **객체를 생성하지 않아도 그 메소드를 호출할 수 있습니다.**
        
        ```java
        public class Car {
            public final static String MANUFACTURE_NAME = "BMW";
            public final static String CAR_NAME = "BMW 320D";
        
            public int year = 2018;
        
            public Car() {
            }
        
            public static void printCarName() {
                System.out.println("{ Brand : " + MANUFACTURE_NAME + ", Name : " + CAR_NAME + " }");
            }
        }
        
        Car.printCarName();
        
        Car car1 = new Car();
        car1.printCarName();
        ```
        
        이렇게 하면 Car.printCarName해서 바로 메서드를 사용할 수 있다.
        
        메소드에서 static을 사용하면 메소드가 객체와 분리되어 있다는 의미 , 멤버 필드와 다르다
        
        메소드 내부에서 super, this같은 키워드 사용할 수 없다.
        
        내부에 선언된 변수 외에 static field, static 메소드만 접근할 수 있기 때문입니다.
        
        ```java
        public static void printCarName() {
            // System.out.println("{ year : " + year + " }");  // compile error!
            System.out.println("{ Brand : " + MANUFACTURE_NAME + ", Name : " + CAR_NAME + " }");
        }
        ```
        
        static 메소드는 static 필드만 사용 할 수 있고, 외부에 선언된 멤버 필드와는 다른 차원이기때문이다.
        
        1. static class
        
        static class도 분리라는 의미에서 위와 비슷한 특성이 있습니다.
        
        static 키워드를 이용하여 class를 선언하면, 상위 클래스와 분리를 해 줍니다.
        
        ```java
        public class Car {
            public int year = 2018;
        
            public Car() {
            }
        
            public class Wheel {
                public Wheel() {
                    year = 10;
                }
            }
        }
        ```
        
        원래는 이렇게 상위 class와 안에 있는 class가 연결이 된다. 하지만 static을 사용하면 분리가 된다.
        
        ```java
        public class Car {
            public int year = 2018;
        
            public Car() {
            }
        
            public static class Wheel {
                public Wheel() {
                    // year = 10; // compile error!
                }
            }
        }
        ```
        
        분리가 되는것을 확인
        
        Static nested class는 상위 클래스가 생성되지 않아도, 외부에서 직접 객체를 생성할 수 있습니다.
        
        예를 들어, 다음과 같이 하위 클래스를 외부에서 직접 객체를 생성할 수 있습니다.
        
        `Car.Wheel wheel = new Car.Wheel();`
        
        static class는 하위 클래스를 선언할 때만 가능합니다. 아래와 같이 상위 클래스를 static으로 선언하려고 하면 컴파일 에러가 발생합니다.
        
        ```java
        public static class Car {  // compile error!
            public int year = 2018;
        
            public Car() {
            }
        
            public class Wheel {
                public Wheel() {
                    // year = 10; // compile error!
                }
            }
        }
        ```
        
        static class를 사용하면 좋은점 : **Grouping**
        
        - 어떤 클래스와 연관된 클래스들을 하위에 선언하여 관련있는 클래스들을 모아둘 수 있습니다.
        
        - **정적 멤버 클래스(static)** -> 애만 nested 클래스다.
        - **(비정적) 멤버 클래스**
        - **익명 클래스**
        - **지역 클래스**
        
        static은 분리의 이믜로
        
        우선 static field 는 프로그램이 실행될 떄 생성 및 초기화가 자동으로 된다.
        
        객체 생성하지 않아도 접근이 가능하다
        
        메소드에서 static을 사용하면 메소드가 객체와 분리되어 있다는 의미 ,
        
        메소드 내부에서 super, this같은 키워드 사용할 수 없다.
        
        ```java
        public class OuterClass {
        
          private int x = 10;
        
          private static class InnerClass {
            void test() {
              OuterClass outerClass = new OuterClass();
              //바깥 클래스에 private 멤버에 접근하는 중
              outerClass.x = 100;
            }
          }
        }
        
        바깥 클래스의 private 멤버에 접근할 수 있음
        ```
        
        prviate static하면 클래스 안에서만 사용할 수 있음
        
        멤버 클래스의 인스턴스 각각이 바깥 인스턴스를 참조하지 않음, 바깥 클래스에서 참조를 하지 않는다 → static
        
        ```java
        public class MySet<E> extends AbstractSet<E> {
          
          @Override public Iterator<E> iterator() {
            return new MyIterator();
          }
          // 어댑터
          private class MyIterator implements Iterator<E> {
            
          }
        }
        ```
        
        바깥 인스턴스로부터 숨은 외부참조가 생긴다
        
        **멤버 클래스에서 바깥 인스턴스에 접근할 일이 없다면 무조건 static을 붙여서 정적 멤버 클래스로 만들자.**
        
        익명클래스
        
        지역클래스 .. 
        
    
    **멤버 클래스에서 바깥 인스턴스에 접근할 일이 없다면 무조건 static을 붙여서 정적 멤버 클래스로 만들자.**
    
    아 어려워 아어려워아우러열우랑러아우어려어ㅜ 나중에 다시보자
    
- 톱 레벨 클래스는 한 파일에 하나만 담으라
    
    소스 파일 하나에는 반드시 톱레벨 클래스를 하나만 담기
    

## 제네릭

- 제네릭 기본 정리
    
    
    ```java
    public class ClassName <T, K> { ... }
     
    public class Main {
    	public static void main(String[] args) {
    		ClassName<String, Integer> a = new ClassName<String, Integer>();
    	}
    }
    ```
    
    ![Untitled](%E1%84%8C%E1%85%A1%E1%84%87%E1%85%A1%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE%20bfd6917cdfdc4e32815e89d341027206/Untitled%207.png)
    
    일반적으로 이렇게 쓰임
    
    - primitive (int, double) 은 올 수 없고 Integer, Double같은 Wrapper Type으로 쓴다
    
    ClassName<Student> a = new ClassName<Student>();
    
    이렇게 사용자가 정의한 클래스 타입도 올 수 있다.
    
    ```java
    // 제네릭 클래스
    class ClassName<E> {
    	
    	private E element;	// 제네릭 타입 변수
    	
    	void set(E element) {	// 제네릭 파라미터 메소드
    		this.element = element;
    	}
    	
    	E get() {	// 제네릭 타입 반환 메소드
    		return element;
    	}
    	
    }
     
    class Main {
    	public static void main(String[] args) {
    		
    		ClassName<String> a = new ClassName<String>();
    		ClassName<Integer> b = new ClassName<Integer>();
    		
    		a.set("10");
    		b.set(10);
    	
    		System.out.println("a data : " + a.get());
    		// 반환된 변수의 타입 출력 
    		System.out.println("a E Type : " + a.get().getClass().getName());
    		
    		System.out.println();
    		System.out.println("b data : " + b.get());
    		// 반환된 변수의 타입 출력 
    		System.out.println("b E Type : " + b.get().getClass().getName());
    		
    	}
    }
    ```
    
    generic은 메서드에서도 사용이 되는데, static은 객체가 생성되기 전에 이미 메모리 위에 올라가는데 유형이 설정되지도 않았는데 타입을 어디서 얻어올 수 있을까? 
    
    라는 점에서 generic 메서드를 사용함
    
    ```java
    // 제네릭 클래스
    class ClassName<E> {
     
    	private E element; // 제네릭 타입 변수
     
    	void set(E element) { // 제네릭 파라미터 메소드
    		this.element = element;
    	}
     
    	E get() { // 제네릭 타입 반환 메소드
    		return element;
    	}
     
    	// 아래 메소드의 E타입은 제네릭 클래스의 E타입과 다른 독립적인 타입이다.
    	static <E> E genericMethod1(E o) { // 제네릭 메소드
    		return o;
    	}
     
    	static <T> T genericMethod2(T o) { // 제네릭 메소드
    		return o;
    	}
     
    }
     
    public class Main {
    	public static void main(String[] args) {
     
    		ClassName<String> a = new ClassName<String>();
    		ClassName<Integer> b = new ClassName<Integer>();
     
    		a.set("10");
    		b.set(10);
     
    		System.out.println("a data : " + a.get());
    		// 반환된 변수의 타입 출력
    		System.out.println("a E Type : " + a.get().getClass().getName());
     
    		System.out.println();
    		System.out.println("b data : " + b.get());
    		// 반환된 변수의 타입 출력
    		System.out.println("b E Type : " + b.get().getClass().getName());
    		System.out.println();
     
    		// 제네릭 메소드1 Integer
    		System.out.println("<E> returnType : " + ClassName.genericMethod1(3).getClass().getName());
     
    		// 제네릭 메소드1 String
    		System.out.println("<E> returnType : " + ClassName.genericMethod1("ABCD").getClass().getName());
     
    		// 제네릭 메소드2 ClassName a
    		System.out.println("<T> returnType : " + ClassName.genericMethod1(a).getClass().getName());
     
    		// 제네릭 메소드2 Double
    		System.out.println("<T> returnType : " + ClassName.genericMethod1(3.0).getClass().getName());
    	}
    }
    ```
    
    이렇게 독립적으로 제네릭 메서드 
    
    ![Untitled](%E1%84%8C%E1%85%A1%E1%84%87%E1%85%A1%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE%20bfd6917cdfdc4e32815e89d341027206/Untitled%208.png)
    
    "아니 그러면 특정 범위만 허용하고 나머지 타입은 제한 할 수 없나요?”
    
    근데, 만약 특정 범위 내로 좁혀서 제한하고 싶다면 어떻게 해야할까?
    
    이 때 필요한 것이 바로 extends 와 super, 그리고 ?(물음표)다. ? 는 와일드 카드라고 해서 쉽게 말해 **'알 수 없는 타입'** 이라는 의미다.
    
    ![Untitled](%E1%84%8C%E1%85%A1%E1%84%87%E1%85%A1%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE%20bfd6917cdfdc4e32815e89d341027206/Untitled%209.png)
    
    **extends T : 상한 경계**
    
    **? super T : 하한 경계**
    
    **<?> : 와일드 카드(Wild card)**
    
    ```java
    /*
     * Number와 이를 상속하는 Integer, Short, Double, Long 등의
     * 타입이 지정될 수 있으며, 객체 혹은 메소드를 호출 할 경우 K는
     * 지정된 타입으로 변환이 된다.
     */
    <K extends Number>
     
     
    /*
     * Number와 이를 상속하는 Integer, Short, Double, Long 등의
     * 타입이 지정될 수 있으며, 객체 혹은 메소드를 호출 할 경우 지정 되는 타입이 없어
     * 타입 참조를 할 수는 없다.
     */
    <? extends T>	// T와 T의 자손 타입만 가능
    ```
    
- 정리
    
    Optional : null exception을 처리하기위해, null 자체를 받기위해 사용한다
    
    자바는 null값에 되게 민감하다
    

DB 구조
