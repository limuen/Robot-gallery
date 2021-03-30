import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css'
import robots from './mockdata/robots.json'
import Robot from './components/Robot'


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map((item, index) =>
          <Robot id={item.id} name={item.name} email={item.email} key={index} />
        )}
      </div>
    </div>

  );
}

export default App;
