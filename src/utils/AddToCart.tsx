import React, { useContext } from 'react'
import { appSetStateContext } from "../Appstate"
import { RobotProps } from '../components/Robot/Robot'

export const withAddToCart = (ChildComponet: React.ComponentType<RobotProps>) => {
    // 返回类组件
    // return class extends React.Component { }
    // 返回匿名函数式组件
    return (props) => {
        const setState = useContext(appSetStateContext)
        const addTocart = (id, name) => {
            if (setState) {
                setState(state => {
                    return {
                        // 展开是因为避免修改不需要的数据
                        ...state,
                        shoppingCart: {
                            items: [...state.shoppingCart.items, { id, name }]
                        }
                    }
                })
            }
        }
        return <ChildComponet {...props} addTocart={addTocart} />
    }
}

// 自定义Hook
export const useAddToCart = () => {
    const setState = useContext(appSetStateContext)
    const addTocart = (id, name) => {
        if (setState) {
            setState(state => {
                return {
                    ...state,
                    shoppingCart: {
                        items: [...state.shoppingCart.items, { id, name }]
                    }
                }
            })
        }
    }
    return addTocart
}