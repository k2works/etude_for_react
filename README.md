Etude For React
===================

# 目的 #
Reactの練習

# 前提 #
| ソフトウェア   | バージョン   | 備考        |
|:---------------|:-------------|:------------|
| node           |8.10.0    |             |
| docker         |17.06.2  |             |
| docker-compose |1.21.0  |             |
| vagrant        |2.0.3  |             |

# 構成 #
1. [構築](#構築 )
1. [配置](#配置 )
1. [運用](#運用 )
1. [開発](#開発 )

## 構築
Install create-react-app
```
npm install -g create-react-app
```

**[⬆ back to top](#構成)**

## 配置
```
aws s3 mb s3://etude-for-react
aws s3 ls
npm run build && aws s3 sync build/ s3://etude-for-react --grants full=uri=http://acs.amazonaws.com/groups/global/AllUsers
aws s3 website s3://etude-for-react/ --index-document index.html --error-document error.html
open  http://etude-for-react.s3-website-us-east-1.amazonaws.com
```
**[⬆ back to top](#構成)**

## 運用
**[⬆ back to top](#構成)**

## 開発
Create our new project
```
create-react-app client
cd client
npm start
```
ESLint
```
npm info eslint-config-airbnb@latest peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --dev eslint-config-airbnb@latest
npm install --dev eslint
npm install --dev eslint-plugin-compat
```

Compat
```
npm install --dev eslint-plugin-compat
```

Flow
```
npm install --dev flow-bin babel-preset-flow babel-eslint eslint-plugin-flowtype flow-typed
npx flow init
npx flow-typed install
```

Jest
```
npm install -D enzyme enzyme-adapter-react-16 react-test-renderer
```

Redux
```
npm install -S redux react-redux
npx flow-typed install react-redux
```

**[⬆ back to top](#構成)**

# 参照 #
+ [Hello World](https://reactjs.org/docs/hello-world.html)
+ [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter)
+ [flow-typed](https://github.com/flow-typed/flow-typed)
+ [Deploying create-react-app to S3 and CloudFront](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af)
 