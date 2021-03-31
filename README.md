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

### 安装 react-icons

npm install react-icons

# setState（）是异步还是同步的

异步更新同步执行
setState()本身并非异步，但对 state 的处理机制给人一种异步的假象。state 处理一般发生在生命周期变化的时候。

# React 组件的生命周期

- Mounting: 创建虚拟 DOM，渲染 UI
- Updating: 更新虚拟 DOM，重新渲染 UI
- Unmounting: 删除虚拟 DOM，移除 UI

初始化-> 构建函数 -> static getDerivedStateFromProps(探测 state 和 props 是否有变化) -> render():渲染 UI -> componentDidMount<br />
-------->只要 state 和 props 发生变化 就会进去下个阶段-------> <br />更新阶段
static getDerivedStateFromProps(探测 state 和 props 是否有变化) -> shouldComponentUpdate(返回 true 更新、返回 false 不更新) -> render():渲染 UI -> componentDidUpdate(处理组件更新以后的逻辑)<br />
------><br />
componentWillUnmount()

# Breaking Changes

- 事件委托机制改变
- 向原生浏览器靠拢
- 删除事件池
- useEffect 清理操作改为异步操作
- JSX 不可返回 undefined
- 删除部分私有 API（都是 rn 的，对 web 无影响

# React 未来展望

- React v17 并不是过渡版本，而是承上启下的战略版本
- 未来将会更加强调函数式组件
- 支持微前端架构

# 函数式组件与 React Hooks

## 钩子（hooks）

### 非类组件中使用 state

- 什么是 hooks
  > 消息处理的一种方法，用来监听指定程序<br />
  > 函数组件中需要处理副作用，可以用钩子把外部代码钩进来<br />
  > 常用钩子: useState, useEffect, useContext, useReducer<br />
  > hooks 一律使用 use 前缀命名: useXxx
- hooks 的本质
  > 一类特殊的函数，为你的函数型式组件(functonal component)注入特殊的功能
- hooks 产生的原因<br />
  > 有些类组件亢长而且复杂，难以复用<br />
  > 结局方案: **无状态组件**与**HOC(高阶组件)**，但还是存在诸多问题<br />
  > hooks 的目的就是为了给函数式组件加上状态<br />
  > 生命周期函数会同时处理多项任务: 发起 ajax、跟踪数据状态、绑定事件监听<br />
  > 函数式组件则轻量化很多，使用 hooks 钩子来钩入组件状态<br />
  > 不再需要类组件<br />
  > 不会再有 this、不会再有 binding、甚至有可能取代 redux<br />
  > 简化了代码、减少了模版
- 常见的 hooks 函数

  > ### 1.状态钩子：useState()

  ```js
  const [count, setCount] = useState(0);
  ```

  > React 自带的一个 hook 函数，声明组件状态<br />
  > 参数可以设置 state 的初始值(initial state)<br />
  > 返回值是一个只有两个元素的数组：[状态,状态更新函数]<br />

  > ### 2.副作用钩子：useEffect()

  ```js
  useEffect(() => {
    document.title = `点击${count}次`;
  }, [count]);
  ```

  > 通常写有状态的组件时候，通常会产生很多的副作用，比如：发起 ajax 请求获取数据、添加或者取消事件监听、手动修改 dom 等等<br />
  > useEffect 可以取代生命周期函数 componentDidMount，componentDidUpdate 和 componentWillUnmount<br />
  > 给函数式组件添加副作用（side effect）

### 自带的 Effect Hooks？

- useContext 处理跨组件的数据传递
- useReducer 管理全局状态
- useCallback 用来处理回调的副作用
- useRef 可以返回一个引用的对象，而这个引用对象可以在整个组件的生命周期中都会保持不变
- useLayoutEffect 也用来处理副作用，他会在 dom 元素变更之后同步调用，并会同步读取 dom 布局并同步触发重新渲染
- useDebugValue 可以在 react 开发中显示自定义的 hook 标签方便开发

### useState

```js
const [count, setCount] = useState<number>(0)
<button onClick={() => {
    setCount(count + 1)
}}>click</button>
```

### useEffect

```js
useEffect(() => {
  document.title = `点击了${count}次`;
}, [count]);

// 如果useEffect第二个参数使用了一个空数组，那就是在模仿类组件生命周期函数componentDidMount() 也就是组件加载的时候调用一次
useEffect(() => {
  fetch('http://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setRobotGallery(res);
    });
}, []);

// 如果不传第二个参数，则直接进入死循环 ui组件渲染一次 useEffect再调用，就是在模拟类组件生命周期函数componentDidUpdate()，每次渲染结束都会被调用
```

#### 如何在 useEffect 中使用 async/await

```js
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    // .then(res => res.json()).then(res => {
    //   console.log(res)
    //   setRobotGallery(res)
    // })
    const data = await res.json();
    setRobotGallery(data);
    setLoading(false);
  };
  fetchData();
}, []);
```

#### useEffect 如何处理异常

```js
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setRobotGallery(data);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };
  fetchData();
}, []);
{
  error && <div>网站出错: {error}</div>;
}
```

#### Context 与 useContext

##### Context 用法

```js
const defaultContextValue = {
  username: '李沐恩',
};

export const appContext = React.createContext(defaultContextValue);

ReactDOM.render(
  <React.StrictMode>
    <appContext.Provider value={defaultContextValue}>
      <App />
    </appContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// 子组件
import { appContext } from '../../index';
<appContext.Consumer>
  {(value) => {
    return (
      <li className={styles.cardContainer}>
        <img src={`https://robohash.org/${id}`} alt="robot" />
        <h2>{name}</h2>
        <p>{email}</p>
        <p>作者：{value.username}</p>
      </li>
    );
  }}
</appContext.Consumer>;
```

##### useContext 用法

###### Appstate.tsx

```js
import React, { useState } from 'react';

interface AppstateValue {
    username: string,
    shoppingCart: {
        items: { id: number, name: string }[]
    }
}

const defaultContextValue: AppstateValue = {
    username: '李沐恩',
    shoppingCart: {
        items: []
    }
}

export const appContext = React.createContext(defaultContextValue)
// 传入函数的话传入setState的定义类型和定义的undefined即可
export const appSetStateContext = React.createContext<
    React.Dispatch<React.SetStateAction<AppstateValue>> | undefined
>(undefined)

export const AppStateProvider: React.FC = (props) => {
    const { children } = props
    const [state, setState] = useState(defaultContextValue)
    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {children}
            </appSetStateContext.Provider>

        </appContext.Provider>
    )
}
```

###### index.tsx

```js
ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

###### ShoppingCart.tsx

```js
import { appContext } from '../../Appstate';
<appContext.Consumer>
  {(value) => {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button} onClick={this.handleClick}>
          <FiShoppingCart />
          <span>购物车{value.shoppingCart.items.length}（件</span> ）
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? 'block' : 'none',
          }}
        >
          <ul>
            {value.shoppingCart.items.map((item, index) => (
              <li key={index}> {item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }}
</appContext.Consumer>;
```

###### Robot.tsx

```js
import React, { useContext } from 'react';
import styles from './Robot.module.css';
import { appContext, appSetStateContext } from '../../Appstate';
interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = (props) => {
  const { id, name, email } = props;
  const value = useContext(appContext);
  const setState = useContext(appSetStateContext);

  const addTocart = () => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };

  return (
    <li className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={addTocart}>假如购入车</button>
    </li>
  );
};

export default Robot;
```

# [自定义高阶组件 HOC](https://zh-hans.reactjs.org/docs/higher-order-components.html)

- 高阶组件是 react 中非常重要的概念
- react-redux,react-router
- const hoc = higherOrde(wrappedComponent)
  > 高阶组件（HOC）就是一个返回了组件的函数<br />
  > 通过组件嵌套的方法给子组件添加更多的功能<br />
  > 接受一个组件作为参数并返回一个经过改造的新组件<br />
- 高阶组件的有点
  > 抽取重复代码，实现组件复用<br />
  > 条件渲染，控制组件的渲染逻辑（渲染劫持）<br />
  > 捕获/劫持被处理组件的生命周期<br />
- 命名规范

  > withXXX() -> withAddToCart()

# 自定义 Hook

- 命名规范
  > useXXX() -> useAddToCart()
- 函数内部可以调用其他的 Hook
- 并非 React 的特性

```js
// 自定义Hook
export const useAddToCart = () => {
  const setState = useContext(appSetStateContext);
  const addTocart = (id, name) => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };
  return addTocart;
};
```
