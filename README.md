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
