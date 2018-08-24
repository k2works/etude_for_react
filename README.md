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
Flow
```
npm install --dev flow-bin babel-preset-flow babel-eslint eslint-plugin-flowtype
```
**[⬆ back to top](#構成)**

# 参照 #
 