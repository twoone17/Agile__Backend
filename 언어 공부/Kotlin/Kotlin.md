# Kotlin

- 인트로
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled.png)
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%201.png)
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%202.png)
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%203.png)
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%204.png)
    
- 변수를 다루는 방법
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%205.png)
    
    java에서 long과 final long의 차이
    
    이 변수가 가변인가 불변인가의 차이
    
    var : variable 다시 바뀔수 있다
    
    val : final이라는 불변이라는 뜻
    
    수정할수 있는지 없는지 val 과 var로 선언해줘야한다
    
    타입을 자동으로 컴파일러가 알아내줌
    
    만약 타입을 작성해주고 싶다면 : 을 이용해서 타입을 작성할 수 있다
    
    var number1: Long = 10L
    
    var number1 = 10L
    
    val number2: Long = 10L
    
    val nubmer2 = 10L
    
    초기값을 지정해주지 않는경우?
    
    var , val 변수에 대해서 있겠지
    
    val number1 이렇게 하면 빨간줄이 뜨는데
    
    컴파일러가 타입을 추론을 못하기때문에 빨간줄이 뜬다 
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%206.png)
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%207.png)
    
    자바에서 final 사용했을때 list 자체를 바꾸진 못하지만 add나 append를 통해서 바꿀수있잖아
    
    같은 느낌이지
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%208.png)
    
    아 이건 javascript와 비슷하게 모든걸 const로 선언하고 필요한 경우에만 let으로 바꾸는 느낌이구나
    
    - 자바에선 reference type인 Long 과 primitive type인 long이 구분되는데 코틀린은 알아서 똑똑하게 해준다
    
    연산하게 될 경우에 알아서 primitive type으로 바꿔준다는 의미 ! 
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%209.png)
    
    - nullable 변수
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2010.png)
    
    java에선 null이 들어가면 nullexeption이 뜨게 되는데
    
    kotilin에서는 null이 들어갈 수 있다? 그러면 type 선언할떄 null이 들어갈 수 있다고 미리 명시를 해주면 된다 !!!
    
    var number3: Long**?** = 1000L
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2011.png)
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2012.png)
    
    원래는
    
    Person person = new Person(”홍의성”);
    
    이렇게 써줘야하는데 new를 쓰면 안된다
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2013.png)
    
- 클래스를 다루는 방법
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2014.png)
    
    근데 여기에서
    
    constructor를 생략할 수 있다 
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2015.png)
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2016.png)
    
    원래 자바에선 이렇게 getName()을 통해 가져왔었지만 
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2017.png)
    
    이렇게 .을 통해서 get, set을 알아서 불러와준다 
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2018.png)
    
    값을 적절히 만들어주거나, validation하는 로직이다
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2019.png)
    
    이렇게 생성자를 새롭게 만들수 있다
    
    기존에 생성된 생성자를 생성할 수 있었다
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2020.png)
    
    부 생성자를 쓰고 싶을때는(파라미터 개수 조정할때 ) constructor를 사용하여 쓴다  
    
    주 생성자 : val name .. 
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2021.png)
    
    이렇게 되면 맨 밑 파라미터가 없는 생성자에  this가 그 위를 가리키고, 그 위는 주 생성자를 가리키게된다 (호출하게 된다)
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2022.png)
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2023.png)
    
    역순으로 실행되구나
    
    ![Untitled](Kotlin%20b8c4a0d79d7b4d5cbe2ceb24a4c5aa61/Untitled%2024.png)
    
    근데 사실 default constructor을 이용해서 부생성자가 없으면 기본 값을 갖게 하는게 제일 좋다
    
- Nullable 처리
    
    ```
    var strNullable: String? = null
    var strNonNull: String = ""
    ```
    
    이렇게 ?를 붙여서 null을 허용한다 
    
    ```java
    strNullable.split("/"); // NPE
    if (strNullable != null) {
        strNullable.split("/");
    }
    ```
    
    자바에선 ≠null임을 확인하여 빌드가 안되는걸 막았다 
    
    ```kotlin
    strNullable.split("/") // NPE
    다음과 같이 쓰면 null이라 nullpointexeption이 발생
    
    strNullable?.split("/")
    ?를 붙이면 실행이 되지 않고 넘어간다
    ```
    
- 객체 초기화
    
    ```kotlin
    Intent testIntent = new Intent(this, SecondActivity.class); // 일반적인 객체 초기화 및 초기 작업
    testIntent.putExtra("ext1", 1);
    testIntent.putExtra("ext2", 2);
    testIntent.putExtra("ext3", "3");
    testIntent.putExtra("ext4", "4");
    testIntent.putExtra("ext5", false);
    ```
    
    자바에선 이렇게 new로 초기화하고 초기화된 객체를 이용해 값을 넣어준다
    
    ```kotlin
    val testIntent = Intent(this, SecondActivity::class.java).apply { // 객체 초기화 시 초기 작업 수행
    
        putExtra("ext1", 1)
        putExtra("ext2", 2)
        putExtra("ext3", "3")
        putExtra("ext4", "4")
        putExtra("ext5", false)
    }
    ```
    
    그러나 코틀린에선 apply block을 이용해서 초기화 작업을 한다 
    
    apply block에선 초기화된 객체 자신을 this로 사용하기 떄문에 객체를 따로 명시해주지 않고 바로 putExtra를 사용할 수 있다.
    
    test.Intent.putExtra(”ext1”, 1);
    
    putExtra(”ext1”,1) ㅇㅎ
    
- Data class
    
    ```java
    public class JavaData {
    
        JavaData(String s, int i, boolean b) {
            this.s = s;
            this.i = i;
            this.b = b;
        }
    
        private String s;
        private int i;
        private boolean b;
    
        public String getS() {
            return s;
        }
    
        public void setS(String s) {
            this.s = s;
        }
    
        public int getI() {
            return i;
        }
    
        public void setI(int i) {
            this.i = i;
        }
    
        public boolean isB() {
            return b;
        }
    
        public void setB(boolean b) {
            this.b = b;
        }
    }
    
    JavaData data1 = new JavaData("", 0, true); // 생성자로 초기화
    
    JavaData data2 = new JavaData(); // 빈 생성자로 생성 후 set 함수로 초기화
    data2.setS("");
    data2.setI(0);
    data2.setB(true);
    ```
    
    데이터 클래스를 사용할때 constructor, set, get을 만들어주고 
    
    new를 활용해서 초기화 후에 set으로 값을 초기화 시켜준다. 
    
    dto 활용할때 이렇게 복잡했다
    
    ```java
    data class KotlinData(var s: String?,
                          var i: Int,
                          var b: Boolean)
    
    val data1 = KotlinData("hi", 1, false) // 생성자로 초기화
    ```
    
    이렇게 간단하게 만들어 줄 수 있다