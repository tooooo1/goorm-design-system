# goorm-design-system
<div align="center">
<p>๊ตฌ๋ฆํค 1๊ธฐ - GDS</p>
<img src="https://user-images.githubusercontent.com/77133565/186065701-5486c03a-b63d-43cf-b7bb-e751a483cfcf.png" width="400" />
</div>


[tokenlink]: https://github.com/settings/tokens "Go token"
# ๐์์ํ๊ธฐ
### npmrc ์ธํ
- [github personal access tokens][tokenlink]
- write package, read package ๊ถํ ํ๋ํ ํ ํฐ ์์ฑ

```
vim ~/.npmrc

@goorm-dev:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=[github ํ ํฐ]
```

### ํจํค์ง ์ค์น
```
npm install reactstrap @goorm-dev/gds-goormthon
```

### CDN URL head์ ๋ฃ๊ธฐ
```
<head>
  <link
    rel="stylesheet"
    href="https://statics.goorm.io/css/goormstrap.v4.min.css"
  />
</head>
```

# โจ์ฌ์ฉํ๊ธฐ
```
import { ์ฌ์ฉํ  ์์ดํ } from "@goorm-dev/gds-goormthon";
```

