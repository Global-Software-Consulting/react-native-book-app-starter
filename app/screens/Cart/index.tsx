import React from 'react'
import { View } from 'react-native'
import { useStyles } from './styles'

const Cart: React.FC = () => {
    const styles = useStyles()
    const dummyBooks = [
        { name: 'Kingdom', author: 'Richard', price: 2 },
        { name: 'Shadow', author: 'Willian', price: 3 },
    ]

    const addAllPrices = () => {
        let total: number = 0
        for (let initial: number = 0; initial < dummyBooks.length; initial++) {
            total = total + dummyBooks[initial].price
        }
        return total
    }

    return <View></View>
}
export default Cart
