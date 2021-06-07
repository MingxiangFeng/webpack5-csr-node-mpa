# 架构初衷
- 因组织架构调整后，接手纯粹的html页面
- 产品需求中，需要频繁开发单页应用，这些页面往往只有一个路由页
- 更换webpack5血液
- 为了更好的重构迭代。单页应用重构时，在多页面架构中，某一个页面升级vue3并不会影响其他页面


# 特性
- 需要基本环境依赖：npm >= 5.28.0 node >= 10.13.0 
- 支持最新的es2019语法开发
- 尝试支持ie8以及safari10
- 默认支持sass语法，同时支持vue2,vue3语法
- 支持html热更新
- vue单页应用路由暂不支持history模式


# 开发须知
## 1、安装依赖及运行
```
npm i
# 运行
npm run dev
# 构建
npm run build
```
## 2、快捷地新建页面
#### a、步骤1
```
```
#### b、步骤2
根据开发的页面所属环境是否pc，在postcss.config.js中的exclude中设置相应的目录

# 问题
- webpack-hot-middleware不生效 ("webpack-hot-middleware": "^2.25.0")
  - 解决方法1 
    -  "webpack-hot-middleware": "git+https://github.com/lukeapage/webpack-hot-middleware#2cdfe0d0111dab6432b8683112fd2d17a5e80572"
    - （并不能解决）
  - 解决方法2
      - localhost:3000访问时热更新不生效，改用0.0.0.0:3000 
      - （并不能完全解决，启动服务后，第一次需要刷新串口，如果不行就多刷几遍）

