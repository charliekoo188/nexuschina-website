# Google Search Console 提交指南

## 概述

本指南将帮助您将 NEXUS CHINA 网站提交到 Google Search Console，以便 Google 搜索引擎可以索引您的网站内容，并提供搜索性能数据。

## 前置条件

1. 网站已发布到生产环境（通过 Manus Publish 按钮）
2. 拥有 Google 账号
3. 拥有网站域名的管理权限

## 步骤 1：访问 Google Search Console

1. 访问 [Google Search Console](https://search.google.com/search-console/)
2. 使用您的 Google 账号登录

## 步骤 2：添加资源

1. 点击左上角的"添加资源"按钮
2. 选择"网域"或"网址前缀"方式：
   - **推荐：网域方式** - 验证整个域名（包括所有子域名）
   - **网址前缀方式** - 仅验证特定 URL 前缀

### 网域方式验证

1. 输入您的域名（例如：`nexuschina.com`）
2. Google 会提供一个 TXT 记录
3. 登录您的域名注册商（如 GoDaddy、Namecheap 等）
4. 在 DNS 设置中添加 TXT 记录
5. 返回 Google Search Console 点击"验证"

### 网址前缀方式验证

1. 输入完整的 URL（例如：`https://nexuschina.com`）
2. 选择验证方法：
   - **HTML 文件上传**（推荐）
   - HTML 标签
   - Google Analytics
   - Google Tag Manager
   - 域名提供商

#### HTML 文件上传验证（推荐）

1. 下载 Google 提供的 HTML 验证文件（例如：`google1234567890abcdef.html`）
2. 将文件上传到网站的 `client/public/` 目录
3. 重新部署网站
4. 验证文件可以通过 `https://nexuschina.com/google1234567890abcdef.html` 访问
5. 返回 Google Search Console 点击"验证"

## 步骤 3：提交 Sitemap

验证成功后，提交 sitemap 以加速索引：

1. 在 Google Search Console 左侧菜单中选择"站点地图"
2. 输入 sitemap URL：`https://nexuschina.com/sitemap.xml`
3. 点击"提交"

Google 将开始抓取您的网站。通常需要几天到几周时间才能完全索引所有页面。

## 步骤 4：监控搜索性能

提交后，您可以在 Google Search Console 中监控：

1. **效果报告**：查看搜索展示次数、点击次数、平均排名
2. **覆盖范围**：查看已索引的页面和索引错误
3. **体验**：查看页面加载速度和移动设备友好性
4. **增强功能**：查看富媒体搜索结果（如文章、面包屑等）

## 步骤 5：请求索引（可选）

如果您希望 Google 立即索引某个页面：

1. 在 Google Search Console 顶部的搜索框中输入页面 URL
2. 点击"请求编入索引"
3. Google 会优先抓取该页面

## 常见问题

### Q: 为什么我的页面没有被索引？

A: 可能的原因：
- Google 还没有抓取您的网站（通常需要几天时间）
- robots.txt 文件阻止了 Google 抓取
- 页面内容质量不高或重复内容过多
- 网站存在技术问题（如 404 错误、服务器错误）

### Q: 如何提高搜索排名？

A: 建议：
- 定期发布高质量、原创的内容
- 优化页面标题和描述
- 提高页面加载速度
- 获取高质量的外部链接
- 确保网站移动设备友好

### Q: Sitemap 提交后多久会被索引？

A: 通常需要几天到几周时间。您可以在"覆盖范围"报告中查看索引进度。

## 当前网站 Sitemap 信息

NEXUS CHINA 网站的 sitemap.xml 包含以下页面：

### 主要页面
- 首页 (/)
- 关于 (/about)
- 项目 (/programs)
- 体验 (/experience)
- 资源 (/resources)
- 洞察 (/insights)
- 联系 (/contact)

### Insights 文章（11 篇）
1. China's AI Revolution: What Western Leaders Need to Know
2. BYD's Global Expansion: Lessons for Western Automakers
3. Alumni Spotlight: From NEXUS CHINA to Schwarzman Scholars
4. China's Green Tech Ecosystem: A Deep Dive
5. UK-China Relations Reset: What It Means for Your Career
6. Inside ByteDance: A NEXUS CHINA Experience
7. Sino-Middle Eastern Partnerships: New Opportunities
8. China's Quantum Computing Breakthrough: What UK Students Need to Know
9. How China Dominates the EV Battery Supply Chain
10. The Rise of Chinese Cultural Soft Power
11. Belt and Road Initiative: Opportunities for UK Professionals

## 下一步

提交 sitemap 后，建议：

1. 每周检查 Google Search Console 的"效果"报告
2. 修复任何索引错误或警告
3. 定期发布新的 Insights 文章以保持网站活跃
4. 监控搜索关键词表现，优化内容策略

## 支持

如需更多帮助，请访问 [Google Search Console 帮助中心](https://support.google.com/webmasters/)。
