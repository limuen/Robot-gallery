import React, { useContext } from 'react'
import styles from './Robot.module.css'
import { appContext } from '../../Appstate'
import { useAddToCart } from '../../utils/AddToCart'

interface RobotProps {
    id: number,
    name: string,
    email: string
}

const RobotDiscount: React.FC<RobotProps> = (props) => {
    const { id, name, email } = props
    const value = useContext(appContext)
    const addToCart = useAddToCart()
    return (
        <li className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>打折商品</h2>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者：{value.username}</p>
            <button onClick={() => { addToCart(id, name) }}>加入购入车</button>
        </li>
    )
}

export default RobotDiscount