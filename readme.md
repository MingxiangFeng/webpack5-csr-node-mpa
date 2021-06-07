# 项目目的
1. 承接- webpack5搭建的csr的mpa架构[webpack-vue-csr-mpa](https://github.com/MingxiangFeng/webpack-vue-csr-mpa)
2. 使用`webpack-hot-middleware`进行调试，妄图替代`webpack-dev-server`
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
- 问题
  - webpack-hot-middleware不生效 ("webpack-hot-middleware": "^2.25.0")
    - 解决方法1 
      -  "webpack-hot-middleware": "git+https://github.com/lukeapage/webpack-hot-middleware#2cdfe0d0111dab6432b8683112fd2d17a5e80572"
      - （并不能解决）
    - 解决方法2
        - localhost:3000访问时热更新不生效，改用0.0.0.0:3000 
        - （并不能完全解决，启动服务后，第一次需要刷新串口，如果不行就多刷几遍）

