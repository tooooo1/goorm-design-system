# goorm-design-system
<div align="center">
<p>구름톤 1기 - GDS</p>
<img src="https://user-images.githubusercontent.com/77133565/186065701-5486c03a-b63d-43cf-b7bb-e751a483cfcf.png" width="400" />
</div>


[tokenlink]: https://github.com/settings/tokens "Go token"
# 📄시작하기
### npmrc 세팅
- [github personal access tokens][tokenlink]
- write package, read package 권한 획득한 토큰 생성

```
vim ~/.npmrc

@goorm-dev:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=[github 토큰]
```

### 패키지 설치
```
npm install reactstrap @goorm-dev/gds-goormthon
```

### CDN URL head에 넣기
```
<head>
  <link
    rel="stylesheet"
    href="https://statics.goorm.io/css/goormstrap.v4.min.css"
  />
</head>
```

# ✨사용하기
```
import { 사용할 아이템 } from "@goorm-dev/gds-goormthon";
```

