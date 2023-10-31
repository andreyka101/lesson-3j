# установить scss для vite
в фаиле package.json

заменить это :

"devDependencies": {
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }

  на это :

``` bash
"devDependencies": {
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  },
  "dependencies": {
    "sass": "^1.63.5",
    "scss": "^0.2.4"
  }
```

# в консоле

вписать

``` bash
npm install -D sass
```
# в фаиле ts

вписать вверху

``` bash
import './style.scss'
```

# сделать глобольную ссылку github для vite


вписать вверху

``` bash
import './style.scss'
