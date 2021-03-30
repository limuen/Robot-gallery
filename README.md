# React with TS

> 使用 create-react-app 脚手架创建 React 项目

## 创建项目

- npx create-react-app my-app-ts --template typescript

## 配置 React 的 CSS 模组

- src/创建文件名 xxx.d.ts
  - > declare module '\*.css' {
    > const css: { [key: string]: string };
    > export default css;
    > }

* css 文件命名约定以 module.css
* npm install typescript-plugin-css-modules --save-dev
* 打开 tsconfig
* "plugins": [
  {
  "name": "typescript-plugin-css-modules"
  }
  ]
* 创建.vscode 文件创建 settings.json
* {
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
  }
* vscode 下边会出现一个提示点击 allow

### CSS in JS（JSS）

#### JSS 是什么

简单来说，一句话概括 CSS in JS (JSS)，就是"行内样式"（inline style）和"行内脚本"（inline script）。

> React 对 CSS 封装非常简单，就是沿用了 DOM 的 style 属性对象。CSS-in-JS 是一种技术（technique），而不是一个具体的库实现（library）。简单来说 CSS-in-JS 就是将应用的 CSS 样式写在 JavaScript 文件里面，而不是独立为一些.css，.scss 或者 less 之类的文件，这样你就可以在 CSS 中使用一些属于 JS 的诸如模块声明，变量定义，函数调用和条件判断等语言特性来提供灵活的可扩展的样式定义。值得一提的是，虽然 CSS-in-JS 不是一种很新的技术，可是它在国内普及度好像并不是很高，它当初的出现是因为一些 component-based 的 Web 框架（例如 React，Vue 和 Angular）的逐渐流行，使得开发者也想将组件的 CSS 样式也一块封装到组件中去以解决原生 CSS 写法的一系列问题。还有就是 CSS-in-JS 在 React 社区的热度是最高的，这是因为 React 本身不会管用户怎么去为组件定义样式的问题，而 Vue 和 Angular 都有属于框架自己的一套定义样式的方案。

#### JSS 的常见实现

由于 React 对 CSS 的封装非常弱，导致出现了一系列的第三方库，用来加强 React 的 CSS 操作。它们统称为 CSS in JS，意思就是使用 JS 语言写 CSS。根据不完全统计，各种 CSS in JS 的库至少有 47 种。老实说，现在也看不出来，哪一个库会变成主流。

1. Styled-components（垃圾恶心厌恶吐你一脸
2. 使用模块化 css（目前用的就是这一种
