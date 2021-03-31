import React, { useContext } from 'react'
import styles from './Robot.module.css'
import { appContext } from '../../Appstate'
import { withAddToCart } from '../../utils/AddToCart'

export interface RobotProps {
    id: number,
    name: string,
    email: string,
    addTocart: (id, name) => void
}

const Robot: React.FC<RobotProps> = (props) => {
    const { id, name, email, addTocart } = props
    const value = useContext(appContext)
    return (
        <li className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者：{value.username}</p>
            <button onClick={() => { addTocart(id, name) }}>加入购入车</button>
        </li>
    )
}

export default withAddToCart(Robot)