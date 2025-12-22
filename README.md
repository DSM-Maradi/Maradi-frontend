# 🌟 Maradi - 프로젝트 펀딩 플랫폼

![image](https://user-images.githubusercontent.com/81161675/231728521-86acef06-2aca-4b9a-b24f-c9e06936660d.png)

**버려지는 프로젝트를 살리는 크라우드 펀딩 플랫폼**

</div>

---

## 📖 프로젝트 소개

> "좋은 아이디어인데 유지 비용이 없어서, 개발 시간이 없어서 버려지는 프로젝트들을 살려보자!"

**Maradi**는 대덕소프트웨어마이스터고등학교(DSM) 2학년 프로젝트 실무 교과에서 제작한 프로젝트 크라우드 펀딩 플랫폼입니다. 요즘 많은 개발자들이 토이 프로젝트를 진행하지만, 유지 비용 문제나 시간 부족으로 인해 훌륭한 아이디어를 가진 프로젝트들이 중단되는 경우가 많습니다. Maradi는 이러한 프로젝트들에게 새로운 생명을 불어넣기 위해 만들어졌습니다.

### ✨ 주요 기능

- 🚀 **프로젝트 등록**: 펀딩을 받고 싶은 프로젝트를 자유롭게 등록
- 💰 **펀딩 시스템**: 마음에 드는 프로젝트에 후원 가능
- 🏆 **펀딩 랭킹**: 실시간 펀딩 랭킹으로 경쟁 유도
- 📊 **펀딩 현황 추적**: 프로젝트별 펀딩 상태와 금액 확인
- 🔐 **소셜 로그인**: GitHub와 Naver OAuth를 통한 간편한 로그인

---

## 🛠 기술 스택

### Frontend
- **Core**: React 18, TypeScript
- **Styling**: Styled-Components
- **HTTP Client**: Axios
- **Notifications**: react-toastify
- **Deployment**: Vercel

### 인증
- GitHub OAuth 2.0
- Naver OAuth 2.0

---

## 👥 팀 구성

| 역할 | 인원 | 설명 |
|------|------|------|
| 🎨 Frontend | 2명 | React & TypeScript 기반 UI/UX 개발 |
| ⚙️ Backend | 1명 | Kotlin & Spring Boot 기반 API 서버 개발 |
| 🎭 Design | 1명 | UI/UX 디자인 |

---

## 🚀 시작하기

### 사전 요구사항

- Node.js 14 이상
- npm 또는 yarn

### 설치 방법

```bash
# 저장소 클론
git clone https://github.com/DSM-Maradi/Maradi-frontend.git
cd Maradi-frontend

# 의존성 설치
npm install
# 또는
yarn install

# 개발 서버 실행
npm run dev
# 또는
yarn dev
```

### 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 변수들을 설정하세요:

```env
# API 엔드포인트
NEXT_PUBLIC_API_URL=your_backend_api_url

# OAuth 설정 (필요한 경우)
NEXT_PUBLIC_GITHUB_CLIENT_ID=your_github_client_id
NEXT_PUBLIC_NAVER_CLIENT_ID=your_naver_client_id
```

---

## 📂 프로젝트 구조

```
Maradi-frontend/
├── .github/              # GitHub Actions 및 워크플로우
├── public/               # 정적 파일 (이미지, 아이콘 등)
├── src/                  # 소스 코드
│   ├── components/       # 재사용 가능한 React 컴포넌트
│   ├── pages/           # Next.js 페이지 라우팅
│   ├── styles/          # Styled-Components 스타일
│   ├── utils/           # 유틸리티 함수
│   ├── hooks/           # Custom React Hooks
│   ├── api/             # API 통신 로직
│   └── types/           # TypeScript 타입 정의
├── package.json          # 프로젝트 의존성
├── tsconfig.json         # TypeScript 설정
└── README.md            # 프로젝트 문서
```

---

## 🔐 보안 및 인증

### OAuth 2.0 인증 흐름

Maradi는 사용자 인증을 위해 OAuth 2.0 프로토콜을 사용합니다. 간단히 설명하면:

1. **사용자가 로그인 버튼 클릭**: GitHub 또는 Naver 로그인 선택
2. **OAuth 제공자로 리다이렉트**: 사용자는 GitHub/Naver의 인증 페이지로 이동
3. **권한 승인**: 사용자가 앱에 권한을 부여
4. **인증 코드 수신**: OAuth 제공자가 인증 코드를 Maradi로 전송
5. **토큰 교환**: 백엔드 서버가 인증 코드를 액세스 토큰으로 교환
6. **사용자 정보 조회**: 액세스 토큰으로 사용자 정보를 가져옴
7. **세션 생성**: 사용자 세션이 생성되고 로그인 완료

> **보안 참고사항**:
> - OAuth 인증은 전체 과정이 HTTPS를 통해 암호화되어 전송됩니다
> - 클라이언트(프론트엔드)는 절대 사용자의 비밀번호를 직접 다루지 않습니다
> - 액세스 토큰은 백엔드 서버에서만 관리되며, 프론트엔드는 세션 쿠키만 사용합니다
> - CSRF(Cross-Site Request Forgery) 공격 방지를 위해 state 파라미터를 사용합니다

---

## 💡 주요 기능 상세

### 1. 프로젝트 등록 및 관리
- 프로젝트 제목, 설명, 목표 금액 설정
- 프로젝트 이미지 업로드 (AWS S3 저장)
- 펀딩 기간 설정

### 2. 펀딩 시스템
- 실시간 펀딩 금액 업데이트
- 펀딩 참여자 명단 표시
- 목표 금액 달성률 시각화

### 3. 랭킹 시스템
- 펀딩 금액 기준 프로젝트 순위
- 실시간 랭킹 업데이트
- 인기 프로젝트 하이라이트

---

## 🔧 API 엔드포인트 (참고용)

```
GET    /api/projects           # 프로젝트 목록 조회
GET    /api/projects/:id       # 프로젝트 상세 조회
POST   /api/projects           # 프로젝트 생성
PUT    /api/projects/:id       # 프로젝트 수정
DELETE /api/projects/:id       # 프로젝트 삭제

POST   /api/funding            # 펀딩하기
GET    /api/funding/:projectId # 프로젝트별 펀딩 내역

GET    /api/ranking            # 펀딩 랭킹 조회

POST   /api/auth/github        # GitHub 로그인
POST   /api/auth/naver         # Naver 로그인
GET    /api/auth/user          # 현재 사용자 정보
POST   /api/auth/logout        # 로그아웃
```

---

## 🎓 학습 포인트

이 프로젝트는 고등학교 2학년 실무 프로젝트로, 다음과 같은 기술들을 학습하고 적용했습니다:

### Frontend 개발
- React의 컴포넌트 기반 아키텍처
- TypeScript를 활용한 타입 안정성 확보
- Styled-Components를 이용한 CSS-in-JS
- Axios를 통한 비동기 HTTP 통신
- OAuth 2.0 인증 플로우 구현

### Backend 연동
- RESTful API 설계 원칙 이해
- HTTP 메서드(GET, POST, PUT, DELETE) 활용
- CORS(Cross-Origin Resource Sharing) 처리
- 인증 토큰 관리

### 배포 및 운영
- Vercel을 통한 자동 배포
- 환경 변수를 통한 설정 관리
