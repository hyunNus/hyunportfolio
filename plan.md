# Hyunwoo Lee Portfolio — Implementation Plan

## Product

LinkedIn 기준의 최신 경력 정보를 중심으로 만든 한국어 개인 포트폴리오 단일 페이지입니다. 별도 프로젝트로 구성하고 GitHub Pages에 배포 가능한 정적 파일만 사용합니다.

## Design

- **Design movement:** CV / technical document minimalism
- **Core principles:** 짧은 문장, 선명한 정보 계층, 얇은 구분선, 충분한 여백
- **Color philosophy:** 흰 배경과 검은 본문을 기본으로 하고 링크와 작은 포인트에만 코발트 블루를 사용합니다.
- **Layout paradigm:** 중앙 정렬 카드 그리드 대신 넓은 본문 폭의 문서형 단일 흐름과 세로 타임라인을 사용합니다.
- **Signature elements:** 대문자 섹션 라벨, 얇은 수평선, 날짜가 고정된 경력 타임라인
- **Interaction philosophy:** 링크와 앵커 이동만 사용하고, 정보 이해를 방해하는 인터랙션은 배제합니다.
- **Animation:** 기본적으로 사용하지 않습니다. 시스템이 모션 감소를 요청한 경우에도 동일하게 정적 표시합니다.
- **Typography:** 시스템 한글 산세리프와 모노스페이스 날짜/기술 라벨을 조합합니다.
- **Brand essence:** 비정형 데이터에서 신뢰할 수 있는 LLM/RAG 시스템을 만드는 AI 데이터 개발자. 정확함, 담백함, 실행력.
- **Brand voice:** 짧고 사실 중심으로 씁니다. 예: “비정형 데이터를 모델이 이해할 수 있는 구조로 바꿉니다.” / “학습부터 평가와 서빙까지 연결합니다.”
- **Wordmark:** 이름 옆에 작은 `AI DATA / 01` 식별 라벨을 두어 문서 헤더처럼 표현합니다.
- **Signature brand color:** cobalt blue `#2855d9`

## Structure

- `index.html`: 프로필, 경력, 프로젝트, 기술, 연락처 전체 문서
- `styles.css`: 반응형 CV 레이아웃, 타이포그래피, 타임라인
- `script.js`: 현재 연도 및 앵커 링크의 최소 동작
- `assets/`: 사용자 제공 프로필 사진과 CV 프로젝트 이미지
- `manus-routes.json`: 정적 홈 라우트 선언
- `app.config.ts`: 프로젝트 로고 메타데이터

## Content rules

- IMS Laboratory 기간은 LinkedIn 기준 `2025.02 — 2025.10`으로 표기합니다.
- 대한민국 공군 경력은 공개 가능한 기술 범위만 표시합니다.
- 과도한 홍보 문구, 장식, 네온 스타일, 긴 부연 설명은 사용하지 않습니다.
