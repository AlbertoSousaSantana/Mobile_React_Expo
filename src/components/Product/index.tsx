import React from 'react';
import { Text, View } from 'react-native';

import { Product } from '../../entities';
import storage from '../../repositories/storage';
import styles from './styles';

type Props = { produto: Product }

export default function ProdutoItem({produto}: Props) {

    const [isOwner, setIsOwner] = React.useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{produto.id}</Text>
            <View style={styles.info}>
                <Text style={styles.product}>Name: {produto.name}</Text>
                <Text style={styles.product}>Amount: {produto.amount}</Text>
                <Text style={styles.product}>Price: {produto.price}</Text>
           
            </View>
        </View>
    );
}