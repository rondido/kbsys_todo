## Todo List

## 1. 자신이 개발한 앱에 대한 설명

Todo List 

할일 목록 추가 및 수정 삭제


## 2. 소스 빌드 및 실행 방법 메뉴얼


## 실행 방법

```
npm install
npm run dev


로컬 주소
http://localhost:5173/
```

## 3. 주력으로 사용한 컴포넌트에 대한 설명 및 사용 이유 기입

react vite를 사용
cra에 보다 가볍고 빌드 및 핫 리로링 속도가 빠르다는 장점으로 인해 프로젝트 초기 설정 진행

TodoAdd는 할일 목록 추가 form

TodoItem은 각 할일 목록 CRUD 기능

상태 관리의 경우 useState를 사용하였고 다른 라이브러리 사용 가능 유무에 대한 이야기가 없어 props를 이용하여 상태관리 진행

types는 각 컴포넌트별 type 정의

buttons는 공통으로 사용되는 버튼에 대한 재사용 증대를 위해 만듬

