# Todo App

[프리온보딩 프론트엔드 인턴십 선별과제](https://github.com/walking-sunset/selection-task) Todo 앱 입니다.

## 직접 사용해 보기

[여기](https://ellie-todo.netlify.app/)에서 앱을 직접 사용해 볼  수 있습니다. <br/>
**⚠️ 보안을 위해 테스트용 이메일/비밀번호를 사용 해 주세요. ⚠️**

## 실행 방법

본 프로젝트를 클론 받아 아래 명령어로 앱을 실행할 수 있습니다.

```shell
> yarn
> yarn start
```

## 프로젝트 구조

```tree
/src
├── apis        // 서버 요청 api
│   ├── auth
│   └── todo
├── context     // context api
│   ├── todos       // todo 데이터 관리용 컨텍스트
│   └── token       // access token 관리용 컨텍스트
├── features    // 기능(도메인)별로 폴더링
│   ├── auth        // 로그인, 회원가입 기능
│   │   ├── components
│   │   └── validation    // 유효성 검사 로직
│   └── todo        // Todo 기능
│       ├── components
│       │   ├── header
│       │   ├── todo_add_form
│       │   ├── todo_edit_form
│       │   ├── todo_item
│       │   └── todo_list
│       └── types
└── pages       // 라우터 별 페이지
    ├── not_found
    ├── redirect    // 페이지 리다이렉트 처리
    ├── signin
    ├── signup
    └── todo
```

## 사용 기술

| 사용처 | 기술 |
| :-: | - |
| 프로젝트 설정 | Create React App + TypeScript |
| 스타일링 | Tailwind CSS |
| 아이콘 | FontAwesome |
| 서버 통신 | axios |
| 페이지 처리 | React Router |

## 고민한 부분

### 폴더 구조

파일을 타입(성격)에 따라 분리하는 방식(components, hooks, types, ...)과 도메인(기능) 별로 분리하는 방식 중에 고민했고, [colocation 원칙](https://reactjs.org/docs/faq-structure.html)에 따라 도메인 별로 분류하는 방식을 택했습니다.

### 리다이렉션

페이지에 진입하기 전에 권한이나 조건 체크가 필요한 경우, Nested Routes를 이용해 리다이렉션을 처리했습니다. <br />
이렇게 하면 권한이 필요한 페이지에서 권한을 검사하는 책임을 분리해 좀 더 응집도 높은 코드를 만들 수 있습니다.

### 로그인/회원가입 페이지

로그인과 회원가입 페이지는 지금은 같은 UI를 가질 수 있으나 언제든 요구사항에 따라 UI가 달라질 수 있다고 생각했습니다. <br />
그래서 작은 단위이면서 잘 바뀌지 않을 것 같은 EmailInput, PasswordInput을 분리해서 재사용하는 방식을 사용했습니다.

### Todo 페이지

Todos 데이터를 다루는 로직을 `TodosContext`로 모듈화 시켰습니다. <br />
TodosContext를 이용해 Todos 데이터를 필요로 하는 컴포넌트는 props를 이용할 필요 없이 어느 곳에서나 Todos 데이터에 접근하고 변경할 수 있게 됩니다. <br />
이렇게 하면 UI를 보여주는 부분과 데이터를 처리하는 로직을 분리해서 관리하기 때문에 가독성이 높은 코드를 작성할 수 있습니다.

### UI/UX

깔끔한 UI와 예측 가능한 UX를 만들기 위해 노력했고, 반응형(모바일) UI에 신경썼습니다.
- 유효성 검사 에러 메시지가 레이아웃을 변경시키지 않도록 처리
- 파괴적인 행위(삭제, 로그아웃)에서 다시 한 번 확인 메시지 띄우기

