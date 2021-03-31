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