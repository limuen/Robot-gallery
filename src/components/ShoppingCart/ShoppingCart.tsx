import React from 'react'
import styles from './ShoppingCart.module.css'
import classNames from 'classnames';
import { FiShoppingCart } from 'react-icons/fi'
interface Props {

}

interface State {
    isOpen: boolean,
}


class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e.target, e.currentTarget)
        if ((e.target as HTMLElement).nodeName === "SPAN") {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }


    render() {

        const Divclasses = classNames({
            'open': this.state.isOpen,
            'close': !this.state.isOpen
        })


        return (
            <div className={styles.cartContainer}>
                <button className={styles.button} onClick={this.handleClick}>
                    <FiShoppingCart />
                    <span>购物车 2 （件</span> ）</button>
                <div
                    className={styles.cartDropDown}
                    style={{
                        display: this.state.isOpen ? "block" : "none"
                    }}
                >
                    <ul>
                        <li>robot1</li>
                        <li>robot1</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShoppingCart