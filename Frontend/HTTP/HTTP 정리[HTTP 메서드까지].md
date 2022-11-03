# HTTP

- 인터넷 통신
    
    IP 프로토콜 문제점
    
    - 비 연결성
        - 패킷 받을 대상 없거나 서비스 불능 상태에도 전송
    - 비 신뢰성
    - 프로그램 구분
    
    문제를 해결해주는게 TCP와 UDP
    
    4계층
    
    TCP 
    
    - 연결지향
        - SYN과 ACK를 활용 , 3 way handshake 이후 데이터전송
        
        → 진짜 연결이 된건 아님 논리적으로만 연결이 됨
        
        수많은 서버나 노드가 연결이 된건 보장하지 않음 
        
    
    UDP는 빠르다 
    
    최적화 하고 싶을때 UDP를 사용하면 된다 .
    
    한번에 둘 이상을 연결하려면? 
    
    포트 이용 ! 
    
    ip가 아파트라면 포트는 몇동몇호 
    
    ip는 변경될수 있다 ! 
    
    → DNS 사용 
    
    URI는 가장 큰 개념 
    
    주민번호처럼 식별한다 
    
    그 안에 
    
    URL 어디에 위치해있다
    
    URN 그냥 이름 
    
    이 있다
    
- HTTP 기본
    - 모든것이 HTTP
        
        HyperText Transfer Protocol
        
        - http 메시지에 모든것을 전송한다 , 모든 데이터를 전송한다
        - 서버간에 데이터를 주고 받을때도 대부분 HTTP 사용 !
        - TCP를 연결해서 하진 않는다 게임 뺴고
        
        HTTP/1.1, HTTP/2 는 TCP
        
        HTTP/3는 UDP 
        
        현재는 HTTP/1.1로 사용한다 
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled.png)
        
        이렇게 1.1을 사용하고 있네
        
        1.1의 스팩을 잘 알면된다 !
        
        - 클라이언트 서버 구조
        - 무상태 프로토콜, 비연결성
        - HTTP 메시지를 통해 통신
        - 단순하고 확장 가능하다
        
    - 클라이언트 서버 구조
        
        HTTP는 클라이언트가 메세지를 통해 서버에 요청을 보내고, 응답을 대기
        
        서버가 요청에 대한 결과를 만들어서 응답을 한다 
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%201.png)
        
        비즈니스 로직, 데이터 같은것들은 서버에 집어넣음
        
        UI, 사용성 등은 클라이언트에 넣어서 **독립적으로** 진화할수 있음
        
    - 무상태 프로토콜(Stateless)
        - 서버가 클라이언트의 상태를 보존하지 않는다.
        
        문맥을 보존한다
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%202.png)
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%203.png)
        
        문맥을 보존하지 않는다
        
        중간에 점원이 바뀐다 ! 
        
        Stateful : 중간에 다른 점원으로 바뀌면 안된다
        
        Stateless(무상태)
        
        - 중간에 다른 점원으로 바뀌어도 된다
        - 갑자기 고객이 증가해도 점원을 대거 투입할수 있다
        - **갑자기 클라이언트 요청이 증가해도 서버를 대거 투입할 수 있다**
        - 무상태는 응답 서버를 쉽게 바꿀 수 있다
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%204.png)
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%205.png)
        
        모든것을 무상태로 설계 할 수 있고 없는 경우도 있다
        
        - 무상태
            - 로그인이 필요 없는 단순한 서비스 소개 화면
            - 데이터 전송량이 많다
        - 상태 유지
            - 로그인
            - 상태를 유지해야함
            
        
        일반적으로 최소한의 상태유지를 사용하는게 좋고, 브라우저 쿠키와 서버 세션등을 사용해서 상태유지를 한다 
        
    - 비 연결성(Connectionless)
        
        연결을 유지하는 모델이다
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%206.png)
        
        클라이언트 2랑 3이 놀고있어도 계속 자원이 소모된다. 단점
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%207.png)
        
        연결하지 않으면 자원 소모를 덜하게 하고 최소한의 자원을 사용한다.
        
        비연결성은 자원 소모를 덜하게 함 !
        
        - **한계**
        
        TCP / IP 연결을 새로 맺어야함 - 3 way handshake ack ack 시간 추가
        
        사이트를 요청하면 html 뿐만아니라 자바스크립트, css, 추가 이미지 등 수많은 자원이 함께 다운로드 된다
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%208.png)
        
        → Persistent Connection을 사용
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%209.png)
        
        연결 후에 매커니즘에 따라 몇초간 연결을 유지한다
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2010.png)
        
        머리를 쥐어짜서라도 stateless로 설계하는게 굉장히 중요하다 !
        
        html에서 놀게 한다던지 .. 
        
    - HTTP 메시지
        
        요청메시지와 응답 메시지
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2011.png)
        
        - 요청 메시지
            
            Start-line은 request-line과 status-line으로 구분
            
            ## Start-line
            
            - **request-line**
            
            ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2012.png)
            
            request-line = method SP(공백) request-target SP HTTP-version CRLF(엔터)
            
            SP는 스페이스
            
            - **HTTP 메서드 :  method SP(공백)**
            
            GET : 리소스 조회
            
            POST : 요청 내역 처리
            
            - **요청 대상**
            
            절대 경로에 쿼리까지 들어간다
            
            absolute-path[?query] 
            
            / 로 시작하는경로
            
            - **HTTP 버전**
            
            HTTP/1.1 
            
            - status-line
            
            ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2013.png)
            
            status-line = HTTP-version SP status-code SP reason-phrase CRLF
            
            - status-code
            
            200: 성공
            
            400 : 클라이언트 요청 오류
            
            500 : 서버 내부 오류
            
            - reason-phrase는 사람이 알 수 있는 코드
            
            ---
            
            ## HTTP 헤더
            
            ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2014.png)
            
            http 전송에 필요한 모든 부가정보가 다 들어있다
            
            - 메시지 바디의 내용, 크기, 압축, 인증, 요청 브라우저 정보, 서버정보, 캐시정보 ..
            - 필요시 임의의 헤더 추가 가능
            
            ---
            
            ## HTTP 메시지 바디
            
            ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2015.png)
            
            - 실제 전송할 데이터
            
            ---
            
            HTTP는 단순하고 확장 가능한 기술이다.
            
- HTTP 메서드
    - HTTP API를 만들어보자
        
        URI : 
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2016.png)
        
        리소스를 고민해야한다 : 이렇게 하면 별로임 
        
        미네랄을 캐라 : 미네랄이 리소스 
        
        회원이라는 개념 자체가 바로 리소스 
        
        리소스를 어떻게 식별하는게 좋지?
        
        - 회원을 등록하고, 수정하고, 조회하는 것을 모두 배제
        - 회원이라는 리소스만 식별하면 된다 → 리소스를 uri에 매핑
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2017.png)
        
        **리소스와 행위를 분리해라**
        
        리소스 : 회원 ( 명사)
        
        행위 : 조회, 등록, 삭제, 변경 (동사)
        
        행위를 구분하는 방법 : HTTP 메서드 
        
    - HTTP 메서드 - GET, POST
        - GET : 리소스 조회
        - POST : 요청 데이터 처리, 주로 등록에 사용된다
        - PUT : 리소스를 대체, 해당 리소스가 없으면 생성 (폴더에 파일 넣는것 덮어쓰기)
        - PATCH : 리소스 부분 변경
        - DELETE : 리소스 삭제
        
        ---
        
        ## GET
        
        - 리소스 조회
        - 서버에 전달하고 싶은 데이터는 query를 통해서 전달
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2018.png)
        
        클라이언트가 GET으로 조회 메시지를 서버에게 전달
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2019.png)
        
        서버에 도착하면 서버에 있는 데이터베이스를 조회해서 이에 맞는 데이터를 찾음
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2020.png)
        
        json형식을 응답으로 클라이언트에게 전달 
        
        ---
        
        ## POST
        
        - 요청 데이터를 처리
        - 메시지 바디를 통해 들어온 데이터를 처리하는 모든 기능 수행
        - 신규 리소스 등록, 프로세스 처리에 사용
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2021.png)
        
        신규 등록할 데이터를 메시지 바디를 통해 전달 
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2022.png)
        
        신규 리소스를 서버에서 생성하고, 식별자 100을 만든다
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2023.png)
        
        응답 데이터를 보내고, 201 created 응답 메시지 전달 
        
        location, 바디 응답을 클라이언트에게 전달 
        
        POST 요청 데이터를 어떻게 처리한다는 뜻일까 ?
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2024.png)
        
        이 리소스 url에 POST 요청이 오면 요청 데이터를 어떻게 처리할지 각 리소스마다 따로 정해야한다 : 정해진것이 없음
        
        POST 정리
        
        - 새 리소스를 생성(등록)
        - 요청 데이터를 처리한다
            - 데이터 생성, 변경을 넘어서 프로세스를 처리하는 경우
            - 주문 : 결제완료 → 배달시작 → 배달완료처럼 값 변경을 넘어 프로세스 상태가 변경되는 경우
            - 새로운 데이터가 생성되지 않을 수 있다 !!
        
        리소스만 가지고 설계를 하는게 가장 좋지만 어쩔수 없는 부분은 컨트롤 URI를 쓴다 
        
        ex) POST /orders/{orderId}/start-delivery(컨트롤 URI)
        
        - 다른 메서드로 처리하기 애매한 경우 그냥 POST를 사용한다
        - 모든 것을 할 수 있는 POST 메서드 !!! 하지만 효율적인 면이 떨어지긴한다 (get에서 사용시)
        
    - HTTP 메서드 - PUT, PATCH, DELETE
        
        ## PUT
        
        - 리소스를 대체
            - 리소스가 있으면 대체
            - 리소스가 없으면 생성
            - 쉽게 얘기해서 덮어씌운다는 의미
        - 클라이언트가 리소스를 식별
            - 클라이언트가 리소스 위치를 안다 , 딱 지정을 해줌
            - POST에선 members에 넣어줬는데 PUT은 100 이렇게 위치가 정확하게 지정된것을 볼 수 있다
            
            ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2025.png)
            
            ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2026.png)
            
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2027.png)
        
        리소스가 있다면 덮어씌운다
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2028.png)
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2029.png)
        
        리소스가 없다면 
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2030.png)
        
        신규 리소스를 생성한다 ! 
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2031.png)
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2032.png)
        
        수정하는 느낌이 아니라 파일 자체를 덮어씌우는 느낌이구나 
        
        리소스를 수정하는게 아니다 ! 
        
        수정하려면 ? PATCH
        
        ## PATCH
        
        - 리소스 부분 변경
        - 부분변경이 안되는 경우일때? POST를 사용해서 수정하면 된다 !
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2033.png)
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2034.png)
        
        ## DELETE
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2035.png)
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2036.png)
        
    - HTTP 메서드 속성
        - 안전(Safe)
        
        호출해도 리소스를 변경하지 않는다
        
        변경이 일어나지 않는걸 안전하다고 한다 
        
        GET, HEAD는 안전, POST등은 안전하지 않다
        
        - 멱등(Idempotent)
        
        ![Untitled](HTTP%2010ee5e91a067406d9fcdc44c0de46eb6/Untitled%2037.png)
        
        - get : 한번 조회하든, 여러번 조회하든 같은 결과가 조회된다
        - PUT : 결과를 대체한다. 따라서 같은 요청을 여러번 해도 최종 결과가 같음 !
        - DELETE : 결과 삭제한다, 같은 요청 여러번해도 삭제된 결과 같다 !
        - POST : 멱등이 아니다 ! 두번 호출하면 같은 결제 중복해서 발생할 수 있음
        
        응답이 느리거나 없으면 자동으로 재시도한다 : 자동 복구 메커니즘 사용에 쓰임
        
        Q) 재요청 중간에 다른 곳에서 리소스를 변경해버리면 ?
        
        외부 요인으로 중간에 리소스 변경되는 것 까지 고려하지 않음 
        
        - 캐시가능(Cacheable)
        
        응답 결과 리소스를 캐시해서 사용해도 되는가? 
        
        로컬 pc에 저장
        
        get, head정도로만 캐시로 사용한다