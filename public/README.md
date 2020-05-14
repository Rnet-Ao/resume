简历地址: https://rnet-ao.github.io

个人主页: http://howduudu.site

项目可作为CRA框架配置的入门参考, 基于`create-react-app`配置了`TypeScript`、`eslint`、`prettier`、`precommit`、`commitlint`

也可基于此项目个性化定制自己的简历, 如果有所帮助欢迎star

# 目录结构

```
├── .eslintrc.js
├── .eslintignore
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── commitlint.config.js
├── tsconfig.json
├── config                                      # CRA脚手架配置文件
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── images
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── scripts                                     # CRA脚手架脚本文件
├── src
│   ├── components
│   │   ├── index.tsx
│   │   └── Resume                              # 简历组件
│   │       ├── data.tsx
│   │       ├── index.scss
│   │       ├── index.test.tsx
│   │       ├── index.tsx
│   │       └── Photo.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── resources                               # 字体等资源文件
│   ├── scss
│   │   ├── index.scss
│   │   └── varible.scss
│   ├── serviceWorker.ts
│   └── setupTests.ts
└── yarn.lock
```

# 开发环境

* Ubuntu Linux 16.04
* Node v10.16.0
* Npm v6.14.4
* Yarn v1.12.3
* Git v2.26.0

# 命令

1. 安装依赖: `yarn`
2. 启动开发环境: `yarn start`
3. 构建: `yarn build`
4. 代码lint检查: `yarn lint`
5. 代码格式化: `yarn prettier`
6. 启动服务器: `yarn server`

# 关联

布局参考: [ESPEN HOVLANDSDAL](https://espen.codes/resume)

头像参考: [xiao555](https://xiao555.github.io/Resume/)
