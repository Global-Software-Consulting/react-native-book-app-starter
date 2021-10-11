import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';
import SwipeButton from 'rn-swipe-button';

import { useStyles } from './styles';
const Cart: React.FC = () => {
    const styles = useStyles();
    const dummyBooks = [
        { name: 'Kingdom', author: 'Richard', price: 2 },
        { name: 'Shadow', author: 'Willian', price: 3 },
    ];

    const addAllPrices = () => {
        let total: number = 0;
        for (let initial: number = 0; initial < dummyBooks.length; initial++) {
            total = total + dummyBooks[initial].price;
        }
        return total;
    };

    return (
        <ScrollView contentContainerStyle={styles.mainView}>
            <DataTable style={{ alignContent: 'center' }}>
                <DataTable.Header>
                    <DataTable.Title style={{ flex: 3 }}>Name</DataTable.Title>
                    <DataTable.Title style={{ flex: 3 }}>Author</DataTable.Title>
                    <DataTable.Title style={{ flex: 2 }}>Price</DataTable.Title>
                </DataTable.Header>
                {dummyBooks.map((item) => (
                    <DataTable.Row>
                        <DataTable.Cell style={{ flex: 3 }}>{item.name}</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 3 }}>{item.author}</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 2 }}>{item.price}</DataTable.Cell>
                    </DataTable.Row>
                ))}
                <DataTable.Row>
                    <DataTable.Cell style={{ flex: 6, backgroundColor: '#D3D3D3' }}>
                        Total
                    </DataTable.Cell>
                    <DataTable.Cell style={{ flex: 2, backgroundColor: '#D3D3D3' }}>
                        {addAllPrices()}
                    </DataTable.Cell>
                </DataTable.Row>
            </DataTable>
            <SwipeButton
                containerStyles={{ borderRadius: 5 }}
                height={30}
                onSwipeStart={() => console.log('Swiped')}
            />
        </ScrollView>
    );
};
export default Cart;
