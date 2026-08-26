# 刘纪元 · 视觉 / 交互设计作品集

这是一个基于 React、TypeScript 与 Vinext 的交互式作品集网站，包含本科作品、硕士课程作品、课程研究与在线 CV。

## 本地运行

需要 Node.js 22.13 或更高版本，并使用项目现有的 pnpm lockfile。

```bash
pnpm install
pnpm dev
```

生产构建：

```bash
pnpm run build
```

## 上传前安全检查

- 不要上传 `.env.local`，其中可能包含 Canvas 等服务的访问凭据。
- 不要上传 `node_modules`、`.next`、`.vinext`、`.wrangler` 或临时预览文件。
- 修改后先运行 `pnpm run build`，确认构建成功再提交。

## GitHub 上传

推荐使用 GitHub Desktop：

1. 选择 `File > Add Local Repository`。
2. 选择当前项目文件夹。
3. 如果提示还不是 Git 仓库，选择 `Create a repository`。
4. 在 Changes 页面确认没有 `.env.local`。
5. 填写提交说明并点击 `Commit to main`。
6. 点击 `Publish repository`，把仓库发布到你的 GitHub 账号。

## 云端部署

项目构建会生成 Cloudflare Worker 所需的 `dist/server` 和 `dist/client`。仓库中的 GitHub Actions 工作流会在每次推送后先进行构建检查；配置 Cloudflare 密钥后，也可以自动部署到 Cloudflare Workers。

不要把任何 Token 直接写入代码、README 或工作流文件。云端凭据应保存在 GitHub Repository Secrets 中。
