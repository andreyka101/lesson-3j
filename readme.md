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

в консоле

вписать

``` bash
npm install -D sass
```
в фаиле ts

вписать вверху

``` bash
import './style.scss'
```

# сделать глобольную ссылку github для vite


создать фаил tsconfig.json
 и вписать

``` bash
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

создать фаил vite.config.ts
и вписать

``` bash
export default {
  base: '/lesson-2j/'
}
```
