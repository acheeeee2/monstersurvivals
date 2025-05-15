## Monster Survivors - 多页面游戏门户

> Monster Survivors 是一个多页面在线游戏门户网站，提供多种类型的网页游戏，包括动作、冒险、益智、策略等。网站设有游戏分类、游戏搜索、以及单个游戏详情页面。

> 项目的目的是构建一个内容丰富、易于浏览和搜索的游戏平台，吸引并服务于不同兴趣的玩家群体。

> 项目状态：从单页应用重构为多页面门户。近期主要更新包括：将分类列表页的游戏卡片预览图改为本地引用 (存放于 `assets/images/games/`)；移除了游戏详情页的预览图区域；修复了2048游戏源；新增了"Action"分类并将主游戏归类。

> 项目团队：前端开发团队

## 技术栈和框架

* HTML5：网站基础结构
* CSS3/Tailwind CSS：页面样式和响应式设计
* JavaScript：交互功能实现（如移动菜单、平滑滚动、未来可能的搜索过滤等）
* 字体：Google Fonts - Inter字体

## 开发环境

> 本项目是一个纯前端项目，可以直接在浏览器中打开 HTML 文件运行。游戏文件将按分类和游戏名称组织在 `games/` 目录下。

## 项目结构 (概览)

```
root
|-- index.html               (首页，包含搜索和特色游戏入口)
|-- categories.html          (游戏分类汇总页)
|-- game-detail-template.html (通用游戏详情页模板)
|-- favicon.png
|-- games/                   (所有游戏的根目录)
|   |-- puzzle/              (益智类游戏)
|   |   |-- 2048/
|   |   |   |-- index.html   (2048 游戏详情页)
|   |   |-- tetris/
|   |   |   |-- index.html   (Tetris 游戏详情页)
|   |-- casual/              (休闲类游戏)
|   |   |-- chrome-dino-game/
|   |   |   |-- index.html   (Chrome Dino 游戏详情页)
|   |   |-- slither-io/
|   |   |   |-- index.html   (Slither.io 游戏详情页)
|   |   |-- flappy-bird/
|   |   |   |-- index.html   (Flappy Bird 游戏详情页)
|   |-- [category_name]/     (未来可添加更多分类，如 action, adventure)
|   |   |-- [game_name]/
|   |   |   |-- index.html
|-- category/                (各分类的游戏列表页)
|   |-- action.html          (动作类游戏列表页)
|   |-- puzzle.html          (益智类游戏列表页)
|   |-- casual.html          (休闲类游戏列表页)
|   |-- [category_name].html (未来可添加更多分类列表页)
|-- assets/
|   |-- images/
|   |   |-- games/           (存放各游戏分类列表页的卡片预览图)
|   |   |   |-- 2048-card.png
|   |   |   |-- tetris-card.png
|   |   |   |-- monster-survivors-card.png
|   |   |   |-- ... (其他游戏卡片图)
|   |-- (未来可能存放全局 CSS/JS)
```

## 主要功能模块

1.  **首页 (`index.html`)**: 
    *   网站介绍和主要行动召唤 (CTA)。
    *   游戏搜索框。
    *   特色游戏展示区 (当前为 Monster Survivors 单个游戏，位于 `#game`锚点)。
    *   导航至游戏分类、关于我们等，具有平滑滚动效果。
2.  **游戏分类页 (`categories.html`)**: 
    *   展示所有主要游戏分类的卡片或列表 (目前有 Action, Puzzle, Casual)。
    *   每个分类链接到对应的分类列表页 (如 `category/action.html`, `category/puzzle.html`, `category/casual.html`)。
3.  **分类列表页 (例如 `category/action.html`, `category/puzzle.html`, `category/casual.html`)**: 
    *   列出该分类下的所有游戏，包含游戏预览图 (本地图片 `assets/images/games/[game-name]-card.png`) 和描述。
    *   每个游戏链接到其详情页。
4.  **游戏详情页 (基于 `game-detail-template.html`)**: 
    *   面包屑导航。
    *   游戏标题和描述。
    *   游戏嵌入区域 (iframe)。
    *   操作说明、分类标签等。
    *   (游戏预览截图区域已移除)。
    *   返回分类的链接。
5.  **导航栏**: 
    *   包含首页、游戏分类、关于等链接。
    *   响应式设计，支持移动端菜单。
6.  **页脚**: 版权信息和辅助链接。

## 注意事项
*   URL结构应保持清晰、语义化，便于SEO和用户理解。
*   `game-detail-template.html` 是添加新游戏的基础，确保所有游戏页面遵循此模板以保持一致性。
*   `category/action.html` 已创建，并将首页的 Monster Survivors 游戏作为第一个条目。
*   搜索功能目前仅为前端结构，后端或JavaScript搜索逻辑需要后续实现。
*   分类列表页的游戏卡片预览图已全部更新为本地图片引用，存放于 `assets/images/games/` 目录下。请确保图片文件存在且命名正确 (如 `[game-name]-card.png` 或 `.jpg`)。
*   游戏详情页的预览图区域已根据用户要求移除。
*   2048游戏源已更新为可用的HTML5版本。