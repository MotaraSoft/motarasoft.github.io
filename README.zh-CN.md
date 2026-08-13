# www.motara.org

[English](README.md) | [简体中文](README.zh-CN.md)

本仓库存放 Motara 官方网站 [www.motara.org](https://www.motara.org) 的源码。

网站使用 VitePress 2.0.0-alpha.19 与默认主题。源内容按 `docs/en` 与 `docs/zh`
组织，`docs/config.ts` 和 `docs/zh/config.ts` 分别维护对应语言配置。英文位于根路径，
简体中文位于 /zh/；网站包含产品、指南、开发者、隐私、法律和邀请页面。

## 本地预览

使用 Node.js 和 pnpm：

```powershell
pnpm install --frozen-lockfile
pnpm run docs:dev
```

构建静态站点：

```powershell
pnpm run docs:build
```

好友与会话邀请页使用带 token 查询参数的固定静态路由。它们只会在用户明确点击后构造本地
motara URI，不上传或持久化邀请数据。

## Motara 项目状态

产品开发工作位于 [Motara 仓库](https://github.com/MotaraSoft/Motara)。公开源码树已可用，
项目正在积极开发，但尚无官方二进制发行版；API、文件格式、网络行为和受支持平台范围均不构成
稳定的兼容性承诺。

当前源码包含桌面外壳、场景、模型库、渲染、捕捉、Cubism Editor 输出和早期协作组件。可选原生
运行时与外部应用不会随公开源码树一并提供，部分计划能力尚未实现或尚不能发行。已实现与未具备
发行条件的具体边界请参阅 [Motara README](https://github.com/MotaraSoft/Motara#motara)。

网站源码采用 [Mozilla Public License 2.0](LICENSE)。原创网站文字和文档
采用 [CC BY 4.0](LICENSES/CC-BY-4.0.txt)，另有说明的除外。Motara 名称与视觉
标识由项目的[商标政策](https://github.com/MotaraSoft/Motara/blob/main/TRADEMARKS.zh-CN.md)
管理。
