# Rest API

REST API 설계 시 가장 중요한 항목

**첫 번째,** URI는 정보의 자원을 표현해야 한다.

**두 번째,** 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현한다.

GET : 회원 정보를 가져올때

```jsx
GET /members/show/1     (x)
GET /members/1          (o)
```

POST : 회원을 추가할때 

```jsx
GET /members/insert/2 (x)
POST /members/2 (o)
```

![Untitled](Rest%20API%20a06f75d086bb44859b499ff7c20c823e/Untitled.png)

- URI 마지막 문자는 슬래시를 포함하지 않는다

```jsx
http://restapi.example.com/houses/apartments/ (X)
http://restapi.example.com/houses/apartments  (0)
```

- - 하이픈을 써서 URI 가독성을 높이기
- 밑줄(__)은 사용하지 않기
- URI 경로는 소문자가 적절 (대문자 X)
- 파일 확장자를 URI에 포함시키지 않기

```jsx
http://restapi.example.com/members/soccer/345/photo.jpg (X)
```

URI에 포함시키지 않고, Accept header를 사용하기

```jsx
GET /members/soccer/345/photo HTTP/1.1 Host: restapi.example.com Accept: image/jpg
```

### 리소스간의 관계를 표현하는 방법

```jsx
/리소스명/리소스 ID/관계가 있는 다른 리소스명

ex)GET : /users/{userid}/devices (일반적으로 소유 ‘has’의 관계를 표현할 때)
```

관계명이 복잡하다면 서브 리소스에 명시해준다

```jsx
GET : /users/{userid}/likes/devices (관계명이 애매하거나 구체적 표현이 필요할 때)
```

---

### 자원을 표현하는 Collection과 Document

- collection은 문서의 집합
- document는 객체, 문서

이는 모두 리소스임

```jsx
http:// restapi.example.com/sports/soccer
```

sports 라는 collection에 soccer이라는 document가 포함 

```jsx
http:// restapi.example.com/sports/soccer/players/13
```

sports 컬렉션 - soccer 문서 - players 컬렉션 - 13번인 선수

**컬렉션은 복수로 사용한다**

firebase에서 사용했던 Collection과 document라고 생각하면 되네

---

### HTTP 응답 상태 코드

![Untitled](Rest%20API%20a06f75d086bb44859b499ff7c20c823e/Untitled%201.png)

![Untitled](Rest%20API%20a06f75d086bb44859b499ff7c20c823e/Untitled%202.png)

![Untitled](Rest%20API%20a06f75d086bb44859b499ff7c20c823e/Untitled%203.png)

나중에 응답코드 구현할때 다시 살펴보기