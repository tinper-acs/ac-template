# ac-template
AC组件开发模板

---

### 1. 简介

本仓库是基于tinper-bee开发应用组件模板，能够运行本地开发应用组件、构建发布ES5代码、提供npm版本使用等

### 2. 安装

1. 直接下载本仓库即可
2. 切换到根目录，安装依赖`npm install`

### 3. 本地调试

1. `npm run dev`    开启本地服务调试
2. `npm run dist`   构建本地项目工程

### 4. 构建发布

1. `npm run build`  构建组件代码用于发布npm使用
2. `npm run bundle` 构建UMD文件以及对应CSS

### 5. 使用说明

1. 启动本地调试服务，用于开发我们的应用组件调试，常用开发使用这种`npm run dev`
2. 本地开发测试完成后，需要发布到远端的npm仓库的时候，使用`npm run build`和`npm run bundle`即可，会在本地根目录里面产出`lib`和`build`
3. `lib`文件夹是我们构建好的ES5代码，是不需要babel转换的，是可以直接拿来使用的
4. `build`文件夹是产出的UMD格式的js文件以及对应打包出来的css文件