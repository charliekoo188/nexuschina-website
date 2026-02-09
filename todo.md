# NEXUS CHINA 网站迁移任务清单

## 核心配置和依赖
- [ ] 迁移 package.json 依赖（i18next、react-i18next 等）
- [x] 配置 Tailwind CSS 4 和自定义主题
- [ ] 配置 Vite 构建选项
- [ ] 设置 TypeScript 配置

## 数据库和服务端
- [x] 迁移数据库 schema（drizzle/schema.ts）
- [x] 迁移服务端路由（server/routers.ts）
- [x] 迁移数据库查询函数（server/db.ts）

## 前端核心功能
- [x] 迁移路由配置（client/src/App.tsx）
- [x] 迁移国际化配置（i18n 设置）
- [x] 迁移全局样式（client/src/index.css）

## 页面迁移
- [x] 迁移首页（Home.tsx）- 包括英雄区域、统计数据、价值主张卡片
- [x] 迁移项目页面（Programs.tsx）- 三个核心项目展示
- [x] 迁移关于页面（About.tsx）- 使命、愿景、价值观、统计数据
- [x] 迁移体验页面（Experience.tsx）
- [x] 迁移资源页面（Resources.tsx）
- [x] 迁移洞察页面（Insights.tsx）
- [x] 迁移联系页面（Contact.tsx）

## UI 组件迁移
- [x] 迁移导航栏组件（包含语言切换）
- [x] 迁移页脚组件
- [ ] 迁移统计数据展示组件
- [ ] 迁移项目卡片组件
- [ ] 迁移价值主张卡片组件
- [ ] 迁移表单组件

## 动画和交互
- [x] 配置 Framer Motion
- [x] 迁移页面过渡动画
- [x] 迁移滚动动画效果
- [x] 迁移按钮悬停效果

## 静态资源和 SEO
- [x] 复制 robots.txt
- [x] 复制 sitemap.xml
- [x] 配置 meta 标签和 SEO 设置
- [ ] 迁移图标和图片资源

## 响应式和移动端
- [x] 验证移动端布局
- [x] 验证平板端布局
- [x] 验证桌面端布局

## 测试和发布
- [x] 测试所有页面功能
- [x] 测试语言切换功能
- [x] 测试表单提交功能
- [x] 测试响应式布局
- [x] 保存 checkpoint
- [ ] 发布到永久域名

## GitHub 同步配置
- [x] 配置 Git remote 指向现有 GitHub 仓库
- [x] 测试自动同步功能
- [x] 验证代码推送到 GitHub

## 网站优化任务
- [x] 修复所有跳转按钮，确保跳转到目标页面顶部
- [x] 添加返回顶部的浮动按钮组件
- [x] 优化图片加载（懒加载、压缩）
- [x] 优化代码分割和打包
- [x] 优化 SEO meta 标签
- [x] 添加结构化数据（Schema.org）
- [x] 优化 sitemap 和 robots.txt
- [x] 测试所有优化功能

## Insights 文章 404 修复
- [x] 检查 Insights 文章路由配置
- [x] 修复文章页面 404 错误
- [x] 测试所有文章链接

## 新增 Insights 文章和 SEO 优化
- [x] 创建第 1 篇文章：中国科技领域（面向英国精英大学生）
- [x] 创建第 2 篇文章：中国新能源领域（面向英国精英大学生）
- [x] 创建第 3 篇文章：中国文化影响力（面向英国精英大学生）
- [x] 创建第 4 篇文章：中国全球影响力（面向英国精英大学生）
- [x] 为所有文章添加独立的 SEO meta 描述和关键词
- [x] 在文章底部添加社交媒体分享按钮
- [x] 测试所有新文章和分享功能

## 新功能优化任务
- [x] Resources 页面添加机构详情弹窗
- [x] About 页面添加名人引用（斯塔默、Ray Dalio 等）
- [x] Program Gallery 添加详情弹窗
- [ ] 创建文章系列（中国科技系列、可持续发展系列等）
- [ ] 添加文章系列导航组件
- [ ] 添加文章评论功能
- [ ] 测试所有新功能

## Insights 文章页面 SEO 修复
- [x] 优化文章页面标题长度（30-60字符）
- [x] 添加文章页面描述信息（50-160字符）
- [x] 添加文章页面关键词
- [x] 测试 SEO 优化效果

## 高级 SEO 优化任务
- [x] 优化 sitemap.xml 包含所有文章链接
- [x] 创建 Google Search Console 提交指南
- [x] 为所有文章添加 Article Schema（JSON-LD）
- [x] 创建相关文章推荐组件
- [x] 在文章页面集成相关文章推荐
- [x] 测试所有 SEO 优化功能

## SEO 索引加速策略
- [x] 创建 SEO 索引加速策略文档
- [x] 优化 robots.txt 确保所有页面可被爬取
- [x] 添加 Google Search Console 验证文件
- [x] 添加 Bing Webmaster Tools 验证文件
- [x] 创建并提交 RSS feed
- [ ] 优化页面加载速度（Core Web Vitals）
- [x] 添加 canonical 标签
- [ ] 优化图片 alt 标签
- [ ] 添加内部链接结构
- [x] 创建外部链接建设指南

## 代码层面 SEO 执行
- [x] 优化所有页面的图片 alt 标签（已存在）
- [x] 优化首页内部链接结构
- [x] 优化 Insights 页面内部链接（相关文章推荐）
- [x] 添加面包屑导航
- [x] 优化图片加载性能（懒加载已实现）
- [x] 优化 CSS/JS 加载
- [x] 测试 Core Web Vitals
