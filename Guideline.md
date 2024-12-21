
## 프로젝트 시작
1. git clone [레포지토리 URL]  -> 프로젝트 폴더 생성
2. git checkout develop  -> develop 브랜치로 이동
3. git branch feature/[페이지명]  -> 브랜치 생성  
ex) git branch feature/main, git branch feature/payment
4. git checkout feature/[페이지명] -> 담당 브랜치로 이동
5. npm install
6. 프로젝트 시작

<br />

## 프로젝트 관리
1. 페이지 구현 시, 지정 폴더에서만 작업
2. 단위 테스트를 위해 **index.ejs 파일은 수정 가능**
3. 이미지, CSS 파일은 images, styles 폴더에 지정폴더 생성하여 관리
4. 지정폴더 외 파일 수정이 필요할 경우, 꼭 사전 논의 필요
5. 1개의 브랜치에서 1개의 페이지(담당파트)만 작업  
(담당하는 파트가 2개이면 2개 브랜치 생성하여 별도 작업)
6. commit -m "진행한 작업 간략히 명시" -> 작업 진행 상황 확인 목적