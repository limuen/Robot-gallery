import React from 'react'
import styles from './Robot.module.css'
interface RobotProps {
    id: number,
    name: string,
    email: string
}

const Robot: React.FC<RobotProps> = (props) => {
    const { id, name, email } = props
    return (
        <li className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>{name}</h2>
            <p>{email}</p>
        </li>
    )
}

export default Robot