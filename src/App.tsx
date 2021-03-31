import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css'
import Robot from './components/Robot/Robot'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import RobotDiscount from './components/Robot/RobotDiscount'
interface Props {
}
interface State {
  robotGallery: any[],
  count: number
}
const App: React.FC = (props) => {
  // * 生命周期第一阶段：初始化
  // 初始化组件 state
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     robotGallery: [],
  //     count: 0
  //   };
  // }




  // 在组件创建好dom元素以后，挂载进页面的时候调用
  // componentDidMount() {
  //   fetch("http://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res => {
  //     console.log(res)
  //     this.setState({
  //       robotGallery: res
  //     })
  //   })
  // }

  // * 生命周期第二阶段：更新
  // 在组件接受到一个新的prop（更新后）时被调用
  // static getDerivedStateFromProps(nextProps, prevState) {}
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.some !== this.state.some
  // }
  // 组件更新后调用
  // componentDidUpdate() { }

  // * 生命周期第三阶段：销毁
  // 组件销毁后调用
  // 可以当作析构函数 destructor 来使用
  // componentWillUnmount() { }
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [robotGallery, setRobotGallery] = useState<any>([])
  useEffect(() => {
    document.title = `点击了${count}次`
  }, [count])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch("http://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        setRobotGallery(data)
      } catch (e) {
        setError(e.message)
      }
      setLoading(false)
    }
    fetchData()
  }, [])



  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} />
        <h1>罗伯特机器人张耀镭炫酷张耀镭吊张耀镭炸张耀镭天online购物平台的名字要长</h1>
      </div>
      <button onClick={() => {
        setCount(count + 1)
      }}>click</button>
      <span>count: {count}</span>
      <ShoppingCart />
      {error && <div>网站出错: {error}</div>}
      { !loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((item, index) =>
            index % 2 === 0 ? (
              <RobotDiscount id={item.id} name={item.name} email={item.email} key={index} />
            ) : (
              <Robot id={item.id} name={item.name} email={item.email} key={index} />)
          )}
        </div>
      ) : (
        <h2>loading 加载中...</h2>
      )}
    </div>
  );
}

export default App;
