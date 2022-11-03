# Java 핵심정리

- 상속
    
    [[JAVA/자바] 상속의 개념 및 부모/자식 클래스](https://blog.naver.com/PostView.nhn?isHttpsRedirect=true&blogId=heartflow89&logNo=220960019390)
    
- 다형성
    
    [[JAVA] 자바 다형성(Polymorphism) 개념부터 응용 쉬운 설명](https://reakwon.tistory.com/48)
    
- 클래스, 메소드, 변수
- Encapsulation
    
    [[JAVA] 자바 캡슐화 (Encapsulation) 개념 정리](https://jaynamm.tistory.com/entry/JAVA-%EC%9E%90%EB%B0%94-%EC%BA%A1%EC%8A%90%ED%99%94-Encapsulation)
    
    [캡슐화란 무엇인가? 어떤 이점이 있는가?](https://bperhaps.tistory.com/entry/%EC%BA%A1%EC%8A%90%ED%99%94%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-%EC%96%B4%EB%96%A4-%EC%9D%B4%EC%A0%90%EC%9D%B4-%EC%9E%88%EB%8A%94%EA%B0%80)
    
- Singleton pattern
    
    [싱글톤(Singleton) 패턴이란?](https://tecoble.techcourse.co.kr/post/2020-11-07-singleton/)
    
    [싱글톤 패턴이 필요한 이유와 실제 서비스에 적용까지](https://injae-kim.github.io/dev/2020/08/06/singleton-pattern-usage.html)
    
- JVM 메모리 구조
    
    [JVM 메모리 구조란? (JAVA)](https://steady-coding.tistory.com/305)
    
- static / final
    
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
    
    ![Untitled](Java%20%E1%84%92%E1%85%A2%E1%86%A8%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%200dcb21282aa44c2e9ed01689f1a4bff3/Untitled.png)
    
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
- Design Pattern : builder pattern , factory pattern
    
    [[생성 패턴] 팩토리 패턴(Factory Pattern) 이해 및 예제](https://readystory.tistory.com/117?category=822867)
    
    [[생성 패턴] 빌더 패턴(Builder pattern) 이해 및 예제](https://readystory.tistory.com/121)