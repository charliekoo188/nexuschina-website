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
