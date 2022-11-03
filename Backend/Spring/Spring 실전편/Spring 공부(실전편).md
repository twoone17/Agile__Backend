# Spring 공부(실전편)

- 초반
    
    `implementation 'org.springframework.boot:spring-boot-devtools'`  하면 웹페이지 recompile로 바로바로 바꿀수있음
    
- 찾아봐야 할 개념
    
    EntityManager 
    
    이것은 항상 transaction 안에서만 이루어져야한다
    
    ```java
    package jpabook.jpashop;
    
    import jpabook.jpashop.MemberRepository;
    import org.assertj.core.api.Assertions;
    import org.junit.Test;
    import org.junit.runner.RunWith;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.boot.test.context.SpringBootTest;
    import org.springframework.test.annotation.Rollback;
    import org.springframework.test.context.junit4.SpringRunner;
    import org.springframework.transaction.annotation.Transactional;
    import javax.persistence.EntityManager;
    @RunWith(SpringRunner.class)
    @SpringBootTest
    public class MemberRepositoryTest {
        @Autowired
        MemberRepository memberRepository;
        @Test
        @Transactional
        @Rollback(false)
        public void testMember() {
            Member member = new Member();
            member.setUsername("memberA");
            Long savedId = memberRepository.save(member);
            Member findMember = memberRepository.find(savedId);
            Assertions.assertThat(findMember.getId()).isEqualTo(member.getId());
            Assertions.assertThat(findMember.getUsername()).isEqualTo(member.getUsername());
            Assertions.assertThat(findMember).isEqualTo(member); //JPA 엔티티 동일성 보장
            //같은 영속성 안에서는 식별자가 같으면 같다고 판단한다
        }
    }
    ```
    
    영속성..
    

---

## 도메인 분석 설계

- 도메인 모델과 테이블 설계
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20bc3b31142b944aab9e93120d2f3f990a/Untitled.png)
    
    하나의 상품에 여러가지 카테고리가 복수로 들어있을수도 있다
    
    하나의 카테고리에 여러가지 상품이 들어갈 수 있다 
    
    Q) 싱글테이블 : Dtype ?
    
    카테고리에서 다대다 관계를 해소하는 mapping table을 만들어서 1대다 다대1로 만들어야함
    
    양방향 연관관계 ,foriegn 키가 있는곳이 다 테이블이다
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20bc3b31142b944aab9e93120d2f3f990a/Untitled%201.png)
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20bc3b31142b944aab9e93120d2f3f990a/Untitled%202.png)
    
    연관관계 매핑 분석
    
    - MEMBER 와 ORDERS
    
    MEMBER에 order : list 들어있고 ORDERS에 member : MEMBER이 들어있다 : 양방향 관계 → 외래키는 ORDERS, 다에 존재하게 된다 , 연관관계 주가 되는 테이블
    
    ORDERS에 있는 member가 연관관계의 주인이 된다.
    
    - ORDERS와 ORDER_ITEM
    
    ORDER에 orderitems list가 들어있으니 order_item은 n
    
    ORDER_ITEM에 하나의 Order가 들어있으니 1
    
    ORDER_ITEM이 다 기 때문에 외래키는 ORDER_ITEM에 있고, ORDER_ITEM이 연관관계의 주인이 된다.
    
    **외래키가 있는곳에 연관관계의 주인을 만든다, 외래키 하나로 양방향 조회 가능**
    
- 엔티티 클래스 개발
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20bc3b31142b944aab9e93120d2f3f990a/Untitled%203.png)
    
    이걸 보고 domain 패키지에 하나하나 추가해준다.
    
    item 과 album, book, movie는 상속관계 매핑이다
    
    `@Inheritance(strategy = InheritanceType.*SINGLE_TABLE*)`
    
    한 테이블에 다 넣는 방식으로 진행한다
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20bc3b31142b944aab9e93120d2f3f990a/Untitled%204.png)
    
    `@DiscriminatorColumn(name = "dtype")` : item 에 추가
    
    `@DiscriminatorValue("B")` :item을 상속받는 하위 클래스에 추가 : dtype이 왔을떄 B로 받음
    
    ---
    
    Delivery에 address는 @Embedded 를 붙인다
    
    DeliveryStatus는 enum 타입
    
    `~~@Enumerated(EnumType.*ORDINAL*)`~~ 
    
    을 넣으면 , 1, 2로 들어와서 enum이 변경될때 값도 변경된다  
    
    `@Enumerated(EnumType.*STRING*)`
    
    이러면 순서가 바뀌어도 잘들어온다 String으로 넣어주기 
    
    ```java
    package jpabook.jpashop.domain;
    
    import lombok.Getter;
    
    import javax.persistence.Embeddable;
    
    //내장타입이기 떄문에
    //값이 변경이 되면 안된다
    @Embeddable
    @Getter
    public class Address {
    
        private String city;
        private String street;
        private String zipCode;
    
    //jpa 스팩상 만들어놓는것
        protected Address() {
        }
    
        public Address(String city, String street, String zipCode) {
            this.city = city;
            this.street = street;
            this.zipCode = zipCode;
        }
    }
    ```
    
    OnetoOne일때 foreign키를 어디다 둘것인가 , 할때 실행이 많이 되는곳에 foreign key를 두는게 일반적. 
    
    연관관계 주인을 정해야 한다 : foriegn키가 가까이 있는 Order에 있는 delivery를 잡아주면된다.
    
    Order 코드에
    
    ```java
    		
    @OneToOne
    @JoinColumn(name = "delivery_id")
    private Delivery delivery;
    ```
    
    연관관계 주인에 JoinColumn, name에는 delivery column name 넣기
    
    Delivery 코드에
    
    ```java
    //order
    @OneToOne(mappedBy = "delivery")
    private Order order;
    ```
    
    카테고리 : 
    
    ```java
    category.class
    
        @ManyToMany
        @JoinTable(name = "category_item",
                joinColumns = @JoinColumn(name="category_id"),
                inverseJoinColumns = @JoinColumn(name = "item_id"))
        //다대다 관계에선 해소하는 테이블이 필요하다 : JoinTable 사용
        //왜 쓰지 말라면 이 그림말고 다른 데 사용이 안된다. 하지만 jpa에서 되긴한다
        private List<Item> items = new ArrayList<>();
    ```
    
    ```java
    item.class
    //category
    
        @ManyToMany(mappedBy = "items")
        private List<Category> categories = new ArrayList<>();
    ```
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20bc3b31142b944aab9e93120d2f3f990a/Untitled%205.png)
    
    Q) 여기선 연관관계의 주인을 왜 category로 잡은걸까? 
    
    실행이 많이 되고 시작지점에 foreign key를 잡는게 일반적인데? 
    
    ```java
    //parent
        //내 부모니까 many to one? 부모는 하나니까
        @ManyToOne
        @JoinColumn(name = "parent_id") //parent가 child의 외래키
        private Category parent;
    
        //child
        @OneToMany(mappedBy = "parent")
        private List<Category> child = new ArrayList<>();
    ```
    
    ---
    
    주의점
    
    가급적 Setter를 사용하지말자
    
    **모든 연관관계는 지연 로딩으로 설정해야한다 !**
    
    - 즉시로딩 : 로딩하는 시점에 한번에 받아온다 : 예측이 어렵고 어떤 SQL이 실행될지 어렵다 (EAGER)
    
    하나 가져오면 나머지 연관된것들 다 가져와버린다.(절대로 쓰면안된다)
    
    JPQL 사용할 때 N+1 문제 ? 
    
    → 지연로딩 LAZY로 모든 연관관계를 설정한다
    
    연관된 엔티티 함께 DB 조회해야하면 fetch join 또는 엔티티 그래프 사용
    
    @OneToMany는 LAZY 이다 
    
    @OneToOne @ManyToOne은 fatch 전략이 EAGER이기 때문에 
    
    모든 onetoone manytoOne control shif f 눌러서 다 LAZY로 바꿔야한다.
    
    컬렉션은 수정하지말자. em.persist() 하면 jpa에서 하이버네이트가 관리하면서 다르게 치환하기 때문에
    
    `private List<Order> orders = new ArrayList<>();` 필드에서 바로 초기화 시키기고 바꾸지 마셈 있는거 그대로 쓰자 . 
    
    Q) cascade all 과 즉시로딩 EAGER의 차이?
    
    부모 엔티티로 child 엔티티를 둘다 받아올수 있는데 뭐가 다른걸까?
    

---

## 애플리케이션 구현 준비

- 구현 요구사항
    
    핵심 비즈니스 메서드 먼저 구현
    
    회원기능
    
    - 회원 등록
    - 회원 조회
    
    상품 기능
    
    - 상품 등록
    - 상품 수정
    - 상품 조회
    
    주문 기능
    
    - 상품 주문
    - 주문 내역 조회
    - 주문 취소
- 아키텍쳐
    
    ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20bc3b31142b944aab9e93120d2f3f990a/Untitled%206.png)
    
    개발 순서
    
    서비스, 리포지토리 계층 개발, 테스트 케이스 작성해서 검증
    
    마지막에 웹 계층 적용
    

---

## 회원 도메인 개발

- 저장소 개발
    - 회원 도메인을 먼저 살피고 회원 리포지토리 만든다
    
- MemberRepository
    
    ```java
    package jpabook.jpashop.repository;
    
    import jpabook.jpashop.domain.Member;
    import lombok.RequiredArgsConstructor;
    import org.springframework.stereotype.Repository;
    
    import javax.persistence.EntityManager;
    import javax.persistence.PersistenceContext;
    import javax.persistence.PersistenceUnit;
    import java.util.List;
    
    //reqository로 spring이 등록을 해준다, component 어노테이션이 붙어있음, 컴포넌트 스캔의 대상이 된다
    @Repository
    @RequiredArgsConstructor //final로 넣어서 이렇게 해줄수있다
    public class MemberRepository {
    
        //jpa entityManager에 주입해준다.
        //@PersistenceContext -> autowired로 바꿀수있다 스프링부트가 -> @RequiredArgsCosntructor로 롬복을 사용하여 안써줘도된다
    
        private final EntityManager em;
        //스프링이 EntityManager를 만들어서 injection해준다
    
    //    public MemberRepository(EntityManager em) {
    //        this.em = em;
    //    }
    
        //persist 하면 영속성 컨텍스트에 member객체를 넣고 ,
        //transaction이 commit되는 시점에 db에 insert 쿼리가 들어가며 반영이 된다.
        public void save(Member member){
            em.persist(member);
            //이 순간에 영속성 컨텍스트를 올린다
            //key 랑 value가 있는데 id값이 키가 된다 , @GenerateValue 하면 id값이 항상 생성되는게 보장
            //key는 pk값이다. db 들어간 시점이 아니어도
        }
    
        //단건 조회
        public Member findOne(Long id){
            return em.find(Member.class,id);    //type, pk대입
        }
    
        /*sql을 거의 똑같긴한데 객체를 대상으로 검색한다.
          from 의 대상이 table이 아닌 객체
         */
        public List<Member> findAll(){
            List<Member> result = em.createQuery("select m from Member m", Member.class)
                    .getResultList();
            return result;
        }
    
        public List<Member> findByName(String name)
        {
            return em.createQuery("select m from Member m where m.name = :name",Member.class)
                    .setParameter("name",name) //parameter가 위의 쿼리에 바인딩 된다
                    .getResultList();
        }
    
    }
    ```
    
- MemberService 서비스
    
    ```java
    package jpabook.jpashop.service;
    
    import jpabook.jpashop.domain.Member;
    import jpabook.jpashop.repository.MemberRepository;
    import lombok.AllArgsConstructor;
    import lombok.RequiredArgsConstructor;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Service;
    import org.springframework.transaction.annotation.Transactional;
    
    import java.util.List;
    
    @Service
    //jpa의 모든 데이터변경이나 로직은 transactional 안에서 수행되어야한다
    @Transactional(readOnly = true)
    //@AllArgsConstructor //lombok , 생성자를 자동으로 만들어준다
    @RequiredArgsConstructor //final 이 있는 것만 생성자로 만들어준다. -> best
    public class MemberService {
    
        //필드 : test할때 바꿀수가없어서 안좋다
    //    @Autowired
        private final MemberRepository memberRepository;
    
    //    //test할때 장점이긴하지만 runtime할때 누군가가 바꿀수있다, 한번에 끝나는데?
    //    @Autowired
    //    public void setMemberRepository(MemberRepository memberRepository) {
    //        this.memberRepository = memberRepository;
    //    }
    
        //Best 생성자 한번에 끝나버리기 때문에 좋다
        //@Autowired
    //    public MemberService(MemberRepository memberRepository) {
    //        this.memberRepository = memberRepository;
    //    }
    
        /**
         * 회원 가입
         */
        @Transactional
        //transactional 을 클래스 자체에서 써주면 다 먹고 method에서 써줄때 우선권을 얻는다
        public Long join(Member member){
    
            validateDuplicateMember(member);  //중복 회원 검증
            memberRepository.save(member);
            return member.getId();
        }
    
        private void validateDuplicateMember(Member member) {
            //EXCEPTION
            List<Member> findMembers = memberRepository.findByName(member.getName());
            if(!findMembers.isEmpty()){
                throw new IllegalStateException("이미 존재하는 회원입니다");
            }
        }
        //읽기만 할때는 readOnly = true를 넣는게 좋다
        //쓰기는 데이터 변경이 안되므로 넣으면 안된다,
       // @Transactional(readOnly = true) //jpa가 조회한 곳에서 성능을 최적화
        //회원 전체 조회
        public List<Member> findMembers(){
            return memberRepository.findAll();
        }
       // @Transactional(readOnly = true)
        //단건조회
        public Member findOne(Long memberId){
            return memberRepository.findOne(memberId);
        }
    
    }
    ```
    
- MemberService test
    
    ```java
    package jpabook.jpashop.repository;
    
    import jpabook.jpashop.domain.Member;
    import jpabook.jpashop.service.MemberService;
    import org.junit.Test;
    import org.junit.runner.RunWith;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.boot.test.context.SpringBootTest;
    import org.springframework.test.annotation.Rollback;
    import org.springframework.test.context.junit4.SpringRunner;
    import org.springframework.transaction.annotation.Transactional;
    
    import javax.persistence.EntityManager;
    
    import static org.junit.Assert.*;
    
    @RunWith(SpringRunner.class)
    @SpringBootTest
    @Transactional
    public class MemberRepositoryTest {
    
        @Autowired
        MemberService memberService;
        @Autowired
        MemberRepository memberRepository;
        @Autowired
        EntityManager em;
    
        @Test
    //    @Rollback(value = false)
        public void 회원가입() throws Exception{
            //given
            Member member = new Member();
            member.setName("Kim");
    
            //when
            Long savedId = memberService.join(member);
    
            //then
    //        em.flush(); //영속성컨텍스트 멤버 객체가 들어가는데 db에 query가 나간다, db에 반영을 한다 .
            assertEquals(member,memberRepository.findOne(savedId));
    
            //persist 한다고해서 insert문이 나가진 않는다, commit하는 순간 플롯이 되면서 insert 문 만들어지면서 나간다.
        }
    
        @Test(expected = IllegalStateException.class)
        public void 중복_회원_예외() throws Exception {
            //given
            Member member1 = new Member();
            member1.setName("Kim");
    
            Member member2 = new Member();
            member2.setName("Kim");
    
            //when
            memberService.join(member1);
            memberService.join(member2); //예외가 발생해야한다
    //
            //then
            fail("예외가 발생해야 한다");
        }
    
    }
    ```
    

## 상품 개발

- 

## 주문 개발

- 기능
    
    상품 주문
    
    주문 내역 조회
    
    주문취소
    
- 도메인 모델 패턴 !
    
    트랜잭션 스크립트패턴
    

---

- 이게 뭐야 ㅡㅡ
    - Entity
        
        `JPA`에서는 `엔티티`는 테이블에 대응하는 하나의 클래스라고 생각하시면 편합니다.
        
        ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20bc3b31142b944aab9e93120d2f3f990a/Untitled%207.png)
        
        그래서 JPA에서 ***'하나의 엔티티 타입을 생성한다'라는 의미는 '하나의 클래스를' 작성한다는 의미***가 됩니다.
        
    - GeneratedValue
        
        기본키 자동생성 사용방법
        
        @Id 어노테이션을 사용한다.@GeneratedValue를 사용한다.@GeneratedValue에 원하는 키 생성 전략을 선택한다. (IDENTITY, SEQUENCE, TABLE, AUTO)
        
    - Column
        
        ```
        @Table(name = "TB_USER")
        @Entity
        public class User {
        
            @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            @Column(name="U_ID")
            private long id;
        
            @Column(name="ID")
            private String userId;
        
            @Column(name="NICK_NAME")
            private String nickName;
        
            @Builder
            public User(long id, String nickName) {
                this.id = id;
                this.nickName = nickName;
            }
        }
        ```
        
        여기서 **`@Column`을 사용하지 않으면** `userId`와 같이 **속성명 그대로 DB Column과 Mapping을 시도**한다.
        
        속성명을 바꾸기 위하여
        
        joinColumns현재 엔티티를 참조하는 외래키
        
    
    도메인 개발
    
    - PersistenceContext
        
        영속성 관리를 위해 EntityManager를 만들어서 빈으로 등록
        
    - JPQL
        
        테이블이 아닌 객체를 대상으로 검색하는 객체지향 쿼리이다.
        
        ![Untitled](Spring%20%E1%84%80%E1%85%A9%E1%86%BC%E1%84%87%E1%85%AE(%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A7%E1%86%AB)%20bc3b31142b944aab9e93120d2f3f990a/Untitled%208.png)
        
        JPQL_PERSON 테이블의 데이터를 모두 추출하고자 할 때 
        
        SQL로 작성하게 되면 "**select * from JPQL_PERSON”**
        
        JPQL : "**select p from Person p**"
        
        ```java
        List<Member> result = em.createQuery("select m from Member m", Member.class)
                        .getResultList();
        ```
        
    - Autowired에 대하여
        
        ```java
        @Repository @Primary
        public class MyBookRepository implements BookRepository {
               // test
        }
        ```
        
        autowired를 지정하면 어떤 식으로 의존성 주입이 되는지, 두개 이상이 있을떄 어떤것을 의존성 주입을 할지 헷갈렸는데 
        
        @Component로 지정해두면 @Bean으로 설정이 되어서 스프링 컨테이너에 다 넣어지고
        
        ```java
        @Component
        //@RequiredArgsConstructor
        public class OrderServiceImpl implements OrderService{
        
            private  final MemberRepository memberRepository;
            private  final DiscountPolicy discountPolicy;
        
        @Autowired
            public OrderServiceImpl(MemberRepository memberRepository, @MainDiscountPolicy DiscountPolicy discountPolicy) {
                this.memberRepository = memberRepository;
                this.discountPolicy = discountPolicy;
            }
        ```
        
        autowired에서 의존성 주입을 하게 되는데 
        
        ```java
        @Component
        @MainDiscountPolicy
        public class RateDiscountPolicy implements DiscountPolicy{
        
            private int discountPercent = 10;
            @Override
            public int discount(Member member, int price) {
                if(member.getGrade()== Grade.VIP) {
                    return price * discountPercent / 100;
                }
                else {
                    return 0;
                }
            }
        }
        ```
        
        @MainDiscountPolicy로 주입이 된다, 혹은 @Primary 어노테이션을 단 것으로 의존성 주입이 되는 방식
        
    
    - Q)
        
        Q) cascade all 과 즉시로딩 EAGER의 차이?
        
        부모 엔티티로 child 엔티티를 둘다 받아올수 있는데 뭐가 다른걸까?