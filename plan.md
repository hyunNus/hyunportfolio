# Hyunwoo Lee Portfolio — Implementation Plan

## Product

LinkedIn 기준의 최신 경력 정보를 중심으로 만든 한국어 개인 포트폴리오 단일 페이지입니다. 별도 프로젝트로 구성하고 GitHub Pages에 배포 가능한 정적 파일만 사용합니다.

## Design

- **Design movement:** `hyunNus.github.io`의 미니멀 아카이브 스타일
- **Core principles:** 영문 이름과 소개, 짧은 문장, 얇은 구분선, 충분한 여백
- **Color philosophy:** 색상 장식 없이 흰색/검은색과 회색만 사용하며, 사용자가 라이트·다크 모드를 전환합니다.
- **Layout paradigm:** 문서형 단일 흐름과 세로 타임라인을 사용합니다.
- **Signature elements:** 작은 모노스페이스 섹션 라벨, 흑백 원형 프로필, 아이콘 연락처
- **Interaction philosophy:** 앵커 이동, 외부 링크, 연락처 아이콘, 테마 전환만 제공합니다.
- **Animation:** 사용하지 않습니다.
- **Typography:** 시스템 산세리프와 모노스페이스 라벨을 조합합니다.
- **Brand essence:** Hyunwoo Lee의 AI·데이터 작업을 기록하는 개인 아카이브.
- **Brand voice:** 기존 사이트의 소개문을 그대로 사용합니다.

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
