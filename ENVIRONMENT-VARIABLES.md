# NEXUS CHINA 环境变量清单

## 自动配置的系统环境变量

以下环境变量由Manus平台自动配置，**无需手动设置**：

### 数据库相关
- `DATABASE_URL` - PostgreSQL/TiDB数据库连接字符串
  - 格式: `mysql://user:password@host:port/database`
  - 由Manus自动生成和管理

### 认证相关
- `JWT_SECRET` - JWT令牌签名密钥
- `OAUTH_SERVER_URL` - Manus OAuth后端服务器URL
- `VITE_OAUTH_PORTAL_URL` - Manus OAuth前端登录页面URL
- `VITE_APP_ID` - Manus应用ID
- `OWNER_OPEN_ID` - 项目所有者OpenID
- `OWNER_NAME` - 项目所有者名称

### Manus内置服务
- `BUILT_IN_FORGE_API_URL` - Manus内置API服务URL
- `BUILT_IN_FORGE_API_KEY` - Manus内置API服务密钥（服务端）
- `VITE_FRONTEND_FORGE_API_KEY` - Manus内置API服务密钥（前端）
- `VITE_FRONTEND_FORGE_API_URL` - Manus内置API服务URL（前端）

### 分析统计
- `VITE_ANALYTICS_ENDPOINT` - 网站分析服务端点
- `VITE_ANALYTICS_WEBSITE_ID` - 网站分析ID

### 应用配置
- `VITE_APP_TITLE` - 网站标题（当前: "NEXUS CHINA - Where Future Leaders Meet Modern China"）
- `VITE_APP_LOGO` - 网站Logo URL

---

## 自定义环境变量

当前项目**没有**需要手动设置的自定义环境变量。

所有配置都使用Manus系统提供的默认值。

---

## 迁移到新账号时的注意事项

### ✅ 自动处理（无需操作）
1. 所有上述系统环境变量会在新项目中自动重新生成
2. 数据库连接会自动配置到新的数据库实例
3. OAuth认证会自动配置到新的应用ID
4. 所有密钥和令牌会自动生成新的值

### ⚠️ 需要注意
1. **数据库数据不会自动迁移** - 需要手动导出/导入（见 database-backup.sql）
2. **用户会话会失效** - 旧账号的登录用户需要在新网站重新登录
3. **应用ID会改变** - 这是正常的，每个Manus项目有独立的APP_ID

---

## 如何查看当前环境变量

### 方法一：通过Management UI
1. 打开Management UI
2. Settings → Secrets
3. 查看所有已配置的环境变量

### 方法二：通过代码
在服务端代码中可以访问：
```typescript
import { env } from './server/_core/env';

console.log(env.DATABASE_URL);
console.log(env.VITE_APP_ID);
```

### 方法三：通过AI助手
直接询问AI助手："显示当前项目的环境变量"

---

## 如何添加新的环境变量（如果未来需要）

### 使用 webdev_request_secrets 工具

```typescript
// 示例：添加第三方API密钥
webdev_request_secrets({
  secrets: [
    {
      key: "OPENAI_API_KEY",
      description: "OpenAI API密钥，用于AI功能",
      // 不提供value参数，让用户在UI中输入
    }
  ],
  message: "请提供OpenAI API密钥以启用AI功能"
});
```

### 或通过Management UI
1. Settings → Secrets
2. 点击"Add Secret"
3. 输入Key和Value
4. 保存

---

## 环境变量使用规范

### 服务端（server/）
- 通过 `server/_core/env.ts` 访问
- 所有环境变量都经过类型检查和验证
- 敏感信息（如API密钥）只在服务端访问

### 客户端（client/）
- 只能访问 `VITE_` 前缀的环境变量
- 通过 `import.meta.env.VITE_XXX` 访问
- 不要在客户端暴露敏感信息

### 示例
```typescript
// ✅ 正确：服务端访问敏感信息
import { env } from './server/_core/env';
const dbUrl = env.DATABASE_URL;

// ✅ 正确：客户端访问公开配置
const appTitle = import.meta.env.VITE_APP_TITLE;

// ❌ 错误：客户端访问敏感信息
// const dbUrl = import.meta.env.DATABASE_URL; // 不会工作
```

---

## 故障排查

### 问题：环境变量未定义
**原因**: 项目初始化未完成或配置错误
**解决**: 
1. 重启开发服务器
2. 检查 Management UI → Settings → Secrets
3. 运行 `pnpm dev` 重新启动

### 问题：数据库连接失败
**原因**: DATABASE_URL配置错误
**解决**:
1. 检查 Management UI → Database 面板
2. 确认数据库服务正常运行
3. 运行 `pnpm db:push` 初始化数据库

### 问题：OAuth登录失败
**原因**: VITE_APP_ID或OAuth配置错误
**解决**:
1. 确认项目已在Manus平台正确初始化
2. 检查浏览器控制台错误信息
3. 清除浏览器缓存和Cookies

---

## 安全最佳实践

1. ✅ **永远不要**在代码中硬编码敏感信息
2. ✅ **永远不要**将 `.env` 文件提交到Git
3. ✅ **使用**环境变量存储所有配置和密钥
4. ✅ **区分**开发环境和生产环境的配置
5. ✅ **定期轮换**API密钥和访问令牌

---

## 总结

NEXUS CHINA项目完全依赖Manus平台提供的系统环境变量，无需手动配置任何环境变量。

迁移到新Manus账号时，所有环境变量会自动重新生成，开箱即用。

只需要关注数据迁移（如果需要）和功能验证即可。
