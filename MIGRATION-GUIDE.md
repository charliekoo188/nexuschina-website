# NEXUS CHINA 迁移指南

## 项目概述
- **项目名称**: NEXUS CHINA
- **项目类型**: Full-stack Web Application (React + TypeScript + Express + PostgreSQL)
- **GitHub仓库**: https://github.com/charliekoo188/nexuschina-website
- **功能特性**: 
  - 用户认证系统（Manus OAuth）
  - 在线咨询预约功能
  - 博客/Insights内容管理
  - 响应式奢华设计系统

---

## 迁移步骤

### 第一步：在新Manus账号中导入项目

1. **登录新的Manus账号**

2. **创建新项目**
   - 选择 "Import from GitHub"
   - 连接GitHub账号并授权
   - 选择仓库：`charliekoo188/nexuschina-website`
   - Manus会自动识别为 `web-db-user` 项目类型

3. **等待初始化完成**
   - Manus会自动安装依赖
   - 启动开发服务器
   - 创建数据库并运行migrations

---

### 第二步：验证基础功能

1. **检查开发服务器状态**
   - 打开Management UI → Preview
   - 确认网站可以正常访问

2. **检查数据库连接**
   - 打开Management UI → Database
   - 确认表结构已创建（users, consultations等）

3. **测试基础页面**
   - Home页面（视频背景Hero区域）
   - About页面
   - Programs页面（无定价）
   - Insights页面（文章列表和详情）
   - Contact页面（预约表单）

---

### 第三步：恢复数据（如果需要）

#### 如果当前账号有重要数据需要迁移：

1. **在旧账号导出数据**
   ```
   让AI助手执行：
   - webdev_execute_sql("SELECT * FROM users;")
   - webdev_execute_sql("SELECT * FROM consultations;")
   保存结果
   ```

2. **在新账号导入数据**
   ```
   将导出的数据转换为INSERT语句
   使用 webdev_execute_sql 执行导入
   ```

#### 如果是全新开始（推荐）：
- 无需数据迁移
- 用户可以重新注册
- 咨询预约从零开始

---

### 第四步：配置检查

#### 自动配置的环境变量（无需手动设置）：
- ✅ `DATABASE_URL` - 数据库连接
- ✅ `JWT_SECRET` - JWT密钥
- ✅ `OAUTH_SERVER_URL` - OAuth服务器
- ✅ `VITE_APP_ID` - 应用ID
- ✅ 其他Manus系统变量

#### 需要验证的配置：
- ✅ 网站标题：NEXUS CHINA
- ✅ 网站Logo：检查是否正确显示
- ✅ 联系邮箱：info@nexuschina.co.uk
- ✅ 微信号：aplanetUK

---

### 第五步：域名配置（可选）

如果需要绑定自定义域名：

1. **在Management UI中配置**
   - Settings → Domains
   - 添加自定义域名（如 nexuschina.com）
   - 按照提示配置DNS记录

2. **DNS配置**
   - 添加CNAME记录指向Manus提供的域名
   - 等待DNS生效（通常5-30分钟）

---

## 功能验证清单

迁移完成后，请逐一验证以下功能：

### 前端功能
- [ ] 首页Hero区域视频播放正常
- [ ] 导航栏滚动效果正常
- [ ] 所有页面链接可访问
- [ ] Insights文章详情页可以打开
- [ ] 图片正常加载
- [ ] 响应式设计在移动端正常

### 后端功能
- [ ] 用户可以登录（Manus OAuth）
- [ ] 咨询预约表单可以提交
- [ ] 数据库正常存储数据
- [ ] API接口响应正常

### 设计系统
- [ ] 字体正确加载（Cormorant Garamond + Montserrat）
- [ ] 颜色主题正确（charcoal black + champagne gold）
- [ ] 滚动动画效果正常
- [ ] 按钮hover效果正常

---

## 关键文件说明

### 配置文件
- `package.json` - 依赖和脚本配置
- `drizzle.config.ts` - 数据库配置
- `vite.config.ts` - Vite构建配置

### 数据库
- `drizzle/schema.ts` - 数据库表结构定义
- `server/db.ts` - 数据库查询helpers

### 前端核心
- `client/src/App.tsx` - 路由配置
- `client/src/index.css` - 全局样式和设计系统
- `client/src/pages/` - 所有页面组件

### 后端核心
- `server/routers.ts` - tRPC API路由
- `server/_core/` - 认证、OAuth等核心功能

---

## 常见问题

### Q: 数据库表没有创建怎么办？
A: 运行 `pnpm db:push` 命令，或让AI助手执行

### Q: 开发服务器启动失败？
A: 检查依赖是否安装完整，运行 `pnpm install`

### Q: 图片无法加载？
A: 检查图片URL是否可访问，CDN链接应该仍然有效

### Q: OAuth登录失败？
A: Manus会自动配置新项目的OAuth，无需手动设置

### Q: 如何修改网站内容？
A: 直接在新Manus账号中使用AI助手修改代码，就像当前账号一样

---

## 技术栈说明

### 前端
- **框架**: React 19 + TypeScript
- **路由**: Wouter
- **样式**: Tailwind CSS 4
- **UI组件**: shadcn/ui
- **状态管理**: tRPC + React Query
- **动画**: react-intersection-observer

### 后端
- **运行时**: Node.js + Express
- **API**: tRPC 11
- **数据库**: PostgreSQL (TiDB)
- **ORM**: Drizzle ORM
- **认证**: Manus OAuth

### 开发工具
- **构建工具**: Vite
- **包管理器**: pnpm
- **代码格式化**: Prettier
- **测试**: Vitest

---

## 支持与帮助

如果迁移过程中遇到问题：

1. **查看日志**
   - Management UI → Dashboard
   - 检查服务器日志和错误信息

2. **使用AI助手**
   - 在新Manus账号中，AI助手可以帮助调试和修复问题
   - 提供详细的错误信息以获得更好的帮助

3. **联系Manus支持**
   - 访问 https://help.manus.im
   - 提交技术支持请求

---

## 迁移完成后的下一步

1. **测试所有功能** - 确保网站完全正常运行
2. **更新内容** - 根据需要更新文案、图片等
3. **配置域名** - 绑定自定义域名（如果需要）
4. **SEO优化** - 提交sitemap到搜索引擎
5. **监控运行** - 定期检查网站状态和用户反馈

---

**迁移完成！** 🎉

您现在可以在新的Manus账号中继续开发和运维NEXUS CHINA网站了。
