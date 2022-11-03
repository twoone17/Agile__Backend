# MVC

- HTTP 기본 구성
    
    웹 서버 
    
    - HTTP 기반으로 동작
    - 정적 리소스를 서버에 넣으면 프로토콜로 데이터 주고받을수있다
    - 특정 사용자마다 다른 화면을 보여줄수는없음
    
    웹 애플리케이션 서버 (WAS)
    
    - HTTP 기반으로 동작
    - 앞의 기능 수행
    - 동적으로 다른 화면 보여줄수있음
    - 애플리케이션 코드를 실행하는데 더 특화되어있다
    
    웹 시스템은 was와 db만으로 구성이 가능하다
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled.png)
    
    애플리케이션 로직이 비싸기 때문에 was 하나만으로는 서버 과부하의 우려가 있다
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%201.png)
    
    정적인 것들을 web server에서 처리하고,
    
    정적인게 아니면 was로 처리한다.
    
    WAS: 중요한 애플리케이션 로직 처리 전담한다
    
    이렇게 되면 정적 리소스만 처리하는 web server는 잘 죽지 않고, was는 잘 죽는다
    
    오류 화면 html을 띄워줄수 있다
    
- 서블릿
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%202.png)
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%203.png)
    
    이런것들을 일일이 할수없기때문에 다 자동화해주는게 서블릿이다
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%204.png)
    
    httpServletRequest 요청 정보 편리하게 사용 
    
    httpServeltResponse 응답 정보 편리하게 제공 
    
    http 알아야함 
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%205.png)
    
    기본 동작 방식
    
    서블릿 컨테이너
    
    - 서블릿 객체를 생성, 초기화, 호출, 종료하는 생명주기 관리
    - 싱글톤으로 관리
        - 동일한 서블릿 객체 인스턴스에 접근한다
        - **공유 변수 사용을 주의해야한다**
    - JSP도 서블릿으로 변환되어서 사용한다.
    - 동시 요청을 위한 멀티 쓰레드 처리 지원
        - 만명들어와도 동시에 가능해진다.
    
- 동시요청- 멀티쓰레드
    
    중요 ! 트래픽 많을때 해결하는 방법
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%206.png)
    
    쓰레드가 호출해준다 !
    
    - 애플리케이션 코드를 하나하나 순차적으로 실행시켜준다
    - 자바 메인 메서드처음 실행하면 main이라는 이름의 쓰레드 실행
    - 한번에 하나의 코드를 실행하기 때문에 동시처리 필요하면 쓰레드 추가로 생성해야함
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%207.png)
    
    1번 지연되고 2번이 쓰레드 요청하면 둘다 안된다.
    
    → 신규 쓰레드 생성하면됨
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%208.png)
    
    이렇게 되면 동시 요청 처리 할수 있지만
    
    쓰레드는 생성 비용이 매우 비싸서 응답 속도가 늦어진다
    
    컨텍스트 스위칭 비용이 발생한다
    
    - 코어 하나가 각각의 쓰레드를 실행하는데 쓰레드 전환할때의 비용
    
    고객 요청이 너무 많이 오고 쓰레드를 그만큼 생성하게 되면 cpu, 메모리 임계점을 넘어서 서버가 죽을수있다.
    
    그럼 어떻게 해결?
    
    → 쓰레드 풀을 이용한다 
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%209.png)
    
    풀안에 쓰레드를 미리 만들어놓고 쓰레드를 다 쓰면 버리지 않고 다시 반납한다.
    
    쓰레드 풀 다쓰면 대기하거나 거절한다.
    
    너무 많은 요청 들어와도 기존 요청은 안전하게 처리 가능하다
    
    was의 주요 튜닝 포인트는 최대 쓰레드 수이다.
    
    10으로 설정했는데 cpu 5프로면 이걸 늘리면되지 서버를 하나 더만드는건 부끄러운일이야
    
    적정 수준은 어떻게 찾지? 
    
    - 애플리케이션 로직의 복잡도, cpu, 메모리, io 리소스 상황에 따라서 다르기 때문에 성능테스트 해봐야함
    - 툴: 아파치, ab, 제이미터, nGrinder
    
    was는 멀티 쓰레드를 지원하고 이에 관련한 코드는 신경쓸필요없음!
    
    싱글 쓰레드 프로그래밍 하듯이 개발하면 된다
    
    싱글톤 객체는 (서블릿, 스프링 빈)은 주의해서 사용해야함 
    
- HTML, HTTP API, CSR, SSR
    
    
    HTML : 동적으로, 정적으로 필요한 html 파일을 생성해서 전달 
    
    HTML API: 
    
    - HTML이 아니라 데이터(JSON) 을 전달
    - 데이터만 주고받고 UI 화면 필요하면 클라이언트가 별도로 처리
    
    SSR - 서버 사이드 렌더링
    
    - 서버사이드에서 html화면을 다 렌더링한다
    - 동적으로 서버에서 생성되는것
    - 정적인 화면에 사용
    - JSP, 타임리프
    
    CSR - 클라이언트 사이드 렌더링
    
    - html 결과를 자바스크립트를 사용해서 웹 브라우저에서 동적으로 생성한다
    - 웹 프론트엔드 개발자들이 사용
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%2010.png)
    
- 자바 웹기술 역사
    
    

---

## 서블릿

- 프로젝트 생성
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%2011.png)
    
- Hello 서블릿
    
    ```jsx
    package hello.servlet;
    
    import org.springframework.boot.SpringApplication;
    import org.springframework.boot.autoconfigure.SpringBootApplication;
    import org.springframework.boot.web.servlet.ServletComponentScan;
    
    @ServletComponentScan
    @SpringBootApplication
    public class ServletApplication {
    
    	public static void main(String[] args) {
    		SpringApplication.run(ServletApplication.class, args);
    	}
    
    }
    ```
    
    ```jsx
    package hello.servlet.basic;
    
    import javax.servlet.ServletException;
    import javax.servlet.annotation.WebServlet;
    import javax.servlet.http.HttpServlet;
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;
    import java.io.IOException;
    
    @WebServlet(name = "helloServlet", urlPatterns = "/hello")
    public class HelloServlet extends HttpServlet {
        @Override
        protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    
            System.out.println("HelloServlet.service");
            System.out.println("req = " + req);
            System.out.println("resp = " + resp);
        }
    }
    
    HelloServlet.service
    req = org.apache.catalina.connector.RequestFacade@32205d6d
    resp = org.apache.catalina.connector.ResponseFacade@1619c26
    ```
    
    구현체들이 찍힌다. 
    
    [http://localhost:8080/hello?username=kim](http://localhost:8080/hello?username=kim) 
    
    쿼리 파라미터
    
    ```jsx
    package hello.servlet.basic;
    
    import javax.servlet.ServletException;
    import javax.servlet.annotation.WebServlet;
    import javax.servlet.http.HttpServlet;
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;
    import java.io.IOException;
    
    @WebServlet(name = "helloServlet", urlPatterns = "/hello")
    public class HelloServlet extends HttpServlet {
        @Override
        protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    
            System.out.println("HelloServlet.service");
            System.out.println("req = " + request);
            System.out.println("resp = " + response);
    
            String username = request.getParameter("username");
            System.out.println("username = " + username);
    
        }
    }
    
    HelloServlet.service
    req = org.apache.catalina.connector.RequestFacade@291b173
    resp = org.apache.catalina.connector.ResponseFacade@2fe7dc91
    username = kim
    ```
    
    파라미터를 쉽게 받아올수있다
    
    응답은 ?
    
    ```jsx
    package hello.servlet.basic;
    
    import javax.servlet.ServletException;
    import javax.servlet.annotation.WebServlet;
    import javax.servlet.http.HttpServlet;
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;
    import java.io.IOException;
    
    @WebServlet(name = "helloServlet", urlPatterns = "/hello")
    public class HelloServlet extends HttpServlet {
        @Override
        protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    
            System.out.println("HelloServlet.service");
            System.out.println("req = " + request);
            System.out.println("resp = " + response);
    
            String username = request.getParameter("username");
            System.out.println("username = " + username);
    
            response.setContentType("text/plain");
            response.setCharacterEncoding("utf-8");
            response.getWriter().write("hello" + username);
    
        }
    }
    ```
    
    응답을 보내보기
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%2012.png)
    
    들어온것은 좋은데 http 요청을 다 보고싶다 ? 
    
    `logging.level.org.apache.coyote.http11:debug` appproperties에 넣으면됨
    
    ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%2013.png)
    
- HttpServletRequest
    
    http 요청 메시지 파싱 일일이 하는거 불편하니까 httpServletRequest 객체 담아서 제공, 파싱 알아서 해준다
    
    HTTP 요청 메시지
    
    POST /save HTTP/1.1
    Host: localhost:8080
    Content-Type: application/x-www-form-urlencoded
    username=kim&age=20
    
    - POST /save HTTP/1.1
        
        StartLine :
        
        - HTTP 메소드 : Post
        - URL
        - 쿼리 스트링
        - 스키마, 프로토콜
    - Host: [localhost:8080](http://localhost:8080) ,
        
        Content-Type: application/x-www-form-urlencoded
        
        헤더 조회
        
    - username=kim&age=20
        
        바디
        form 파라미터 형식 조회
        message body 데이터 직접 조회
        
        데이터가 오면 편리하게 읽을수있는 기능을 제공한다
        
    - 
    
    해당 HTTP 요청이 시작부터 끝날 때 까지 유지되는 임시 저장소 기능
    저장: request.setAttribute(name, value)
    조회: request.getAttribute(name)
    
    ```jsx
    package hello.servlet.basic.request;
    
    import javax.servlet.ServletException;
    import javax.servlet.annotation.WebServlet;
    import javax.servlet.http.HttpServlet;
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;
    import java.io.IOException;
    
    @WebServlet(name = "requestHeaderServlet", urlPatterns = "/request-header")
    public class RequestHeaderServlet extends HttpServlet {
        @Override
        protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            printStartLine(request);
        }
    
        private void printStartLine(HttpServletRequest request) {
            System.out.println("--- REQUEST-LINE - start ---");
            System.out.println("request.getMethod() = " + request.getMethod()); //GET
            System.out.println("request.getProtocol() = " + request.getProtocol()); // HTTP/1.1
            System.out.println("request.getScheme() = " + request.getScheme()); //http
    // http://localhost:8080/request-header
            System.out.println("request.getRequestURL() = " + request.getRequestURL());
    // /request-header
            System.out.println("request.getRequestURI() = " + request.getRequestURI());
    //username=hi
            System.out.println("request.getQueryString() = " +
                    request.getQueryString());
            System.out.println("request.isSecure() = " + request.isSecure()); //http 사용 유무
            System.out.println("--- REQUEST-LINE - end ---");
            System.out.println();
        }
    }
    ```
    
- HTTP 요청 데이터
    - 기본 개념
        
        3가지 방법을 사용한다
        
        - Get - 쿼리 파라미터
        
        /url?username=hello&age=20
        
        메시지 바디없이 ul 쿼리 파라미터에 데이터 포함해서 전달
        
        검색, 필터 ,페이징
        
        - Post - HTML form
            
            content-type , 메시지 바디에 쿼리 파라미터 형식으로 전달 
            
            회원가입, 상품주문 ,html form 사용
            
        
        ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%2014.png)
        
        - HTTP message body
            
            http api에서 주로 사용 , json ,xml , text
            
            데이터 형식은 주로 json 형식 사용
            
            post, put , patch
            
    - HTTP 요청 데이터 - GET 쿼리 파라미터
        
        username=hello , age=20 을 메시지 바디없이 쿼리파라미터로 전송해보자 
        
        url 후에 ?를 시작으로 , 추가 파라미터는 &으로 구분하면 된다.
        
        파라미터를 꺼내는것 : request.getParameterNames();
        
        ```jsx
        package hello.servlet.basic.request;
        
        import javax.servlet.ServletException;
        import javax.servlet.annotation.WebServlet;
        import javax.servlet.http.HttpServlet;
        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;
        import java.io.IOException;
        
        /**
         * 1. 파라미터 전송 기능
         * http://localhost:8080/request-param?username=hello&age=20
         */
        @WebServlet(name = "requestParamServlet", urlPatterns = "/request-param")
        public class RequestParamServlet extends HttpServlet {
            @Override
            protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
                System.out.println("[전체 파라미터 조회] - start");
        
                request.getParameterNames().asIterator()
                        .forEachRemaining(paramName -> System.out.println("paramName = " + paramName));
        
                request.getParameterNames().asIterator()
                        .forEachRemaining(paramName -> System.out.println(paramName + "=" + request.getParameter(paramName)));
        
            }
        }
        
        paramName = username
        paramName = age
        username=hello
        age=20
        ```
        
        paramName은 key값, request.getParameter(paramName)은 그 뒤의 값 
        
        단일 파라미터
        
        ```jsx
        package hello.servlet.basic.request;
        
        import javax.servlet.ServletException;
        import javax.servlet.annotation.WebServlet;
        import javax.servlet.http.HttpServlet;
        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;
        import java.io.IOException;
        
        /**
         * 1. 파라미터 전송 기능
         * http://localhost:8080/request-param?username=hello&age=20
         */
        @WebServlet(name = "requestParamServlet", urlPatterns = "/request-param")
        public class RequestParamServlet extends HttpServlet {
            @Override
            protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
                System.out.println("[전체 파라미터 조회] - start");
        
                request.getParameterNames().asIterator()
                        .forEachRemaining(paramName -> System.out.println(paramName + "=" + request.getParameter(paramName)));
        
                System.out.println("[전체 파라미터 조회] - end");
                System.out.println();
        
                System.out.println("[단일 파라미터 조회]");
                String username = request.getParameter("username");
                String age = request.getParameter("age");
        
                System.out.println("age = " + age);
                System.out.println("username = " + username);
        
                System.out.println("[이름이 같은 복수 파라미터 조회]");
                //http://localhost:8080/request-param?username=hello&username=kim&age=20
                String[] usernames = request.getParameterValues("username");
                for (String name : usernames) {
                    System.out.println("username = " + name);
        
                }
                response.getWriter().write("ok");
            }
        }
        ```
        
        복수 파라미터일떄 사용하는 방법
        
        request.getParameter()는 하나의 파라미터 이름에 대해서 단 하나의 값이 있을때만 사용
        
        중복일때는 request.getParameterValues()를 사용한다 . 
        
        하지만 중복으로 보내는 경우는 드물다 .
        
    - HTTP 요청 데이터 - POST html form
        
        content-type가 추가된다는 차이점.
        
        - htp 메시지 바디의 데이터 형식을 지정한다.
        - content type 꼭 지정해줘야한다.
        
        get 이랑 웹브라우저가 만들어준다.
        
        postman 사용
        
        ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%2015.png)
        
        이거 사용하면 html 만들필요없음 
        
    - HTTP 요청 데이터 - API 메시지 바디 - 단순 텍스트
        
        바디에 데이터를 직접 담아서 요청 
        
        post, put, patch에서 사용된다.
        
        ```jsx
        package hello.servlet.basic.request;
        
        import org.springframework.util.StreamUtils;
        
        import javax.servlet.ServletException;
        import javax.servlet.ServletInputStream;
        import javax.servlet.annotation.WebServlet;
        import javax.servlet.http.HttpServlet;
        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;
        import java.io.IOException;
        import java.nio.charset.StandardCharsets;
        
        @WebServlet(name = "requestBodyStringServlet", urlPatterns = "/request-body-string")
        public class RequestBodyStringServlet extends HttpServlet {
        
            @Override
            protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
                ServletInputStream inputStream = request.getInputStream();
                String messageBody = StreamUtils.copyToString(inputStream, StandardCharsets.UTF_8);
        
                System.out.println("messageBody = " + messageBody);
        
                response.getWriter().write("ok");
            }
        }
        
        messageBody = hello
        ```
        
        postman에서 body에 hello 적기
        
        - inputStream으로 받고, body에 data를 처리할수있다.
    - HTTP 요청 데이터 - API 메시지 바디 - JSON
        
        POST [http://localhost:8080/request-body-json](http://localhost:8080/request-body-json)
        content-type: application/json
        message body: {"username": "hello", "age": 20}
        결과: messageBody = {"username": "hello", "age": 20}
        
        ```jsx
        package hello.servlet.basic.request;
        
        import com.fasterxml.jackson.databind.ObjectMapper;
        import hello.servlet.basic.HelloData;
        import org.springframework.util.StreamUtils;
        
        import javax.servlet.ServletException;
        import javax.servlet.ServletInputStream;
        import javax.servlet.annotation.WebServlet;
        import javax.servlet.http.HttpServlet;
        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;
        import java.io.IOException;
        import java.nio.charset.StandardCharsets;
        //http://localhost:8080/request-body-json
        @WebServlet(name = "requestBodyJsonServlet" , urlPatterns = "/request-body-json")
        public class RequestBodyJsonServlet extends HttpServlet {
        
            private ObjectMapper objectMapper = new ObjectMapper();
            @Override
            protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
                ServletInputStream inputStream = request.getInputStream();
                String messageBody = StreamUtils.copyToString(inputStream,StandardCharsets.UTF_8);
        
                System.out.println("messageBody = " + messageBody);
        
                HelloData helloData = objectMapper.readValue(messageBody, HelloData.class);
                System.out.println("helloData.username = " + helloData.getUsername());
                System.out.println("helloData.age = " + helloData.getAge());
        
                response.getWriter().write("ok");
            }
        }
        ```
        
         json도 문자기 떄문에 일단 똑같다.
        
        postman으로 하기 
        
    
- HTTP 응답
    - HttpServletResponse 기본 사용법
        - HTTP 응답코드 지정(404)
        - 헤더생성
        - 바디 생성
        
        ```jsx
        package hello.servlet.basic.response;
        
        import javax.servlet.ServletException;
        import javax.servlet.annotation.WebServlet;
        import javax.servlet.http.HttpServlet;
        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;
        import java.io.IOException;
        import java.io.PrintWriter;
        
        @WebServlet(name = "responseHeaderServlet", urlPatterns = "/response-header")
        public class ResponseHeaderServlet extends HttpServlet {
            @Override
            protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //        response.setStatus(200);  status-line
                response.setStatus(HttpServletResponse.SC_OK);
        
                //[response-headers]
                response.setHeader("Content-Type", "text/plain");
                response.setHeader("Cache-Control","no-cache,no-store,must-revalidate");
                response.setHeader("Pragma","no-cache"); // 기존 캐시 없애는것
                response.setHeader("my-header","hello");
        
                PrintWriter writer = response.getWriter();
                writer.println("ok");
            }
        }
        ```
        
        ![Untitled](MVC%20bc8e9cc3109d4f31a69bed9cf95a890c/Untitled%2016.png)
        
        ```java
        package hello.servlet.basic.response;
        
        import javax.servlet.ServletException;
        import javax.servlet.annotation.WebServlet;
        import javax.servlet.http.Cookie;
        import javax.servlet.http.HttpServlet;
        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;
        import java.io.IOException;
        import java.io.PrintWriter;
        
        @WebServlet(name = "responseHeaderServlet", urlPatterns = "/response-header")
        public class ResponseHeaderServlet extends HttpServlet {
            @Override
            protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //        response.setStatus(200);  status-line
                response.setStatus(HttpServletResponse.SC_OK);
        //        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        
                //[response-headers]
                response.setHeader("Content-Type", "text/plain");
                response.setHeader("Cache-Control","no-cache,no-store,must-revalidate");
                response.setHeader("Pragma","no-cache"); // 기존 캐시 없애는것
                response.setHeader("my-header","hello");
        
                //[Header 편의 메서드]
                content(response);
                cookie(response);
                redirect(response);
        
                PrintWriter writer = response.getWriter();
                writer.println("ok");
        
            }
        
            private void content(HttpServletResponse response) {
        //Content-Type: text/plain;charset=utf-8
        //Content-Length: 2
        //response.setHeader("Content-Type", "text/plain;charset=utf-8");
                response.setContentType("text/plain");
                response.setCharacterEncoding("utf-8");
        //response.setContentLength(2); //(생략시 자동 생성)
            }
        
            private void cookie(HttpServletResponse response) {
        //Set-Cookie: myCookie=good; Max-Age=600;
        //response.setHeader("Set-Cookie", "myCookie=good; Max-Age=600");
                Cookie cookie = new Cookie("myCookie", "good");
                cookie.setMaxAge(600); //600초
                response.addCookie(cookie);
            }
        
            private void redirect(HttpServletResponse response) throws IOException {
        //Status Code 302
        //Location: /basic/hello-form.html
        //response.setStatus(HttpServletResponse.SC_FOUND); //302
        //response.setHeader("Location", "/basic/hello-form.html");
                response.sendRedirect("/basic/hello-form.html");
            }
        }
        ```
        
    - HTTP 응답 데이터 - 단순 텍스트, HTML
        
        ```java
        package hello.servlet.basic.response;
        
        import javax.servlet.ServletException;
        import javax.servlet.annotation.WebServlet;
        import javax.servlet.http.HttpServlet;
        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;
        import java.io.IOException;
        import java.io.PrintWriter;
        
        @WebServlet(name = "responseHtmlServlet",urlPatterns = "/response-html")
        public class ResponseHtmlServlet extends HttpServlet {
            @Override
            protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
                //Content-Type : text/html;charset=utf-8
                response.setContentType("text/html");
                response.setCharacterEncoding("utf-8");
        
                PrintWriter writer = response.getWriter();
                writer.println("<html>");
                writer.println("<body>");
                writer.println("<div>안녕?</div>");
                writer.println("</body>");
                writer.println("</html>");
        
            }
        }
        ```
        
    - HTTP 응답 데이터 - API JSON
        
        ```java
        package hello.servlet.basic.response;
        
        import com.fasterxml.jackson.databind.ObjectMapper;
        import hello.servlet.basic.HelloData;
        
        import javax.servlet.ServletException;
        import javax.servlet.annotation.WebServlet;
        import javax.servlet.http.HttpServlet;
        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;
        import java.io.IOException;
        
        @WebServlet(name = "responseJsonServlet",urlPatterns = "/response-json")
        public class ResponseJsonServlet extends HttpServlet {
        
            private ObjectMapper objectMapper = new ObjectMapper();
        
            @Override
            protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
                //Content-Type : application/json
                response.setContentType("application/json");
                response.setCharacterEncoding("utf-8");
        
                HelloData helloData = new HelloData();
                helloData.setUsername("kim");
                helloData.setAge(20);
        
                //{"username":"kim", "age":20}
                String result = objectMapper.writeValueAsString(helloData);
                response.getWriter().write(result);
            }
        }
        ```
        
        content type을 application/json 으로 해야함.
        

---