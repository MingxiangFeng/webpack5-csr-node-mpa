# 项目目的
1. 承接- webpack5搭建的csr的mpa架构[webpack-vue-csr-mpa](https://github.com/MingxiangFeng/webpack-vue-csr-mpa)
2. 使用`webpack-hot-middleware`进行调试，意图替代`webpack-dev-server`
# 开发须知
## 1、安装依赖及运行
```
npm i
# 运行
npm run dev
# 构建
npm run build
```
## 其他
- 存在问题
  - webpack-hot-middleware不生效 ("webpack-hot-middleware": "^2.25.1")
    - 解决方法1 
      -  "webpack-hot-middleware": "git+https://github.com/lukeapage/webpack-hot-middleware#2cdfe0d0111dab6432b8683112fd2d17a5e80572"
      (提示，此解决方式并不很好，且并不能完全解决，有时候依然不会进行热更新）

