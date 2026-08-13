# www.motara.org

[English](README.md) | [简体中文](README.zh-CN.md)

This repository contains the source of the official Motara website at
[www.motara.org](https://www.motara.org).

The site uses VitePress 2.0.0-alpha.19 with the default theme. Source content
is organized in `docs/en` and `docs/zh`; `docs/config.ts` and
`docs/zh/config.ts` provide the language-specific configuration. English is
served from the root path and Simplified Chinese from /zh/. It provides
product, Guide, Developers, privacy, legal, and invitation pages.

## Local Preview

Use Node.js and pnpm:

```powershell
pnpm install --frozen-lockfile
pnpm run docs:dev
```

Build the static site with:

```powershell
pnpm run docs:build
```

Friend and session invitation landing pages use fixed static routes with a
token query parameter. They only construct the local motara URI after an
explicit click and do not upload or persist invitation data.

## Motara Project Status

Product development takes place in the
[Motara repository](https://github.com/MotaraSoft/Motara). Its public source
tree is available and under active development, but there is no official binary
release yet. APIs, file formats, network behavior, and supported-platform scope
are not stable compatibility commitments.

The source currently includes desktop-shell, scene, model-library, rendering,
tracking, Cubism Editor output, and early collaboration components. Optional
native runtimes and external applications are not bundled with the public
source tree, and some planned capabilities remain unimplemented or are not
ready to ship. See the [Motara README](https://github.com/MotaraSoft/Motara#motara)
for the current implemented and not-yet-shippable boundaries.

Website source code is licensed under the
[Mozilla Public License 2.0](LICENSE). Original website prose and documentation
are licensed under [CC BY 4.0](LICENSES/CC-BY-4.0.txt), unless stated otherwise.
Motara names and visual marks are governed by the project's
[trademark policy](https://github.com/MotaraSoft/Motara/blob/main/TRADEMARKS.md).
