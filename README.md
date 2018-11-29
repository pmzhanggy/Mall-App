# 手机商场APP
# NPM INSTALL
# git 命令
git status
git add .
git status
git commit -m "描述"
git status

## 项目制作记录
### 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的 Header 组件
2. 制作底部的 Tabbar 区域，使用 MUI 中的 Tabbar.html
3. 中间区域放置一个 router-view 来展示路由匹配到的组件

### 改造 tabbar 为 router-link
### 设置路由高亮
### 点击 tabbar，展示响应的路由组件
### 制作首页轮播图
### 加载首页轮播图
1. 获取数据，vue-resource
2. 使用 vue-resource 中 this.$http.get 获取数据
3. 使用 v-for 循环渲染 每个item项

### 改造九宫格区域的样式