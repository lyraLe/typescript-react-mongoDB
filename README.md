### 安装依赖包
#### react基础依赖包
```
cnpm install -S react react-dom react-router-dom react-transition-group react-swipe antd qs
``` 
- react/react-dom react核心库
- react-router-dom 路由库
- react-transition-group 动画库
- react-swipe 轮播图
- antd 组件库
- qs 查询字符串库
#### react基础包的类型声明库
```
cnpm install -S @types/react @types/react-dom @types/react-router-dom @types/react-transition-group @types/react-swipe @types/qs
```
#### webpack基础依赖包
`cnpm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin`
#### typescript基础依赖包
```
cnpm install -D typescript ts-loader source-map-loader style-loader css-loader less-loader less url-loader
```
#### redux基础依赖包
`cnpm install -S redux react-redux redux-thunk redux-promise redux-logger`
#### redux相关类型声明文件
`cnpm install -S @types/react-redux @types/redux-logger @types/redux-promise`
#### router
`cnpm install -S connected-react-router`
#### nodeJS相关依赖包
`cnpm install -S express express-session body-parser cors axios`

### 配置文件
#### tsconfig.js
```
{
  "compilerOptions": {
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "jsx": "react",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    "sourceMap": true,                     /* Generates corresponding '.map' file. */
    "outDir": "./dist",                        /* Redirect output structure to the directory. */
    "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
  },
  "include": [
    "./src/**/*"
  ]
}
```
#### webpack.config.js
```
```
### ts导入文件的方式
- commonjs方式
`import * as Sth from './..'`
- es6方式
`import XX from 'x./xx'`