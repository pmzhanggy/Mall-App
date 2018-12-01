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

### 改造新闻资讯路由链接
### 新闻资讯页面制作
1. 绘制页面
2. 使用vue-resource 获取数据
3. 渲染数据

### 实现新闻资讯详情
1. 把列表中的每一项改造为router-link，同时在跳转时应该提供唯一的ID标识符
2. 创建新闻详情的组件页面 Newsinfo.vue
3. 在路由模块中，将新闻详情的路由地址和组件模块中

### 实现评论
1. 创建响应的公共组件
2. 在info组件用引用
3. 在components中注册