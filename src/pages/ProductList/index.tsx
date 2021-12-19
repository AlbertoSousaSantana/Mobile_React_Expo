import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlatList,Button, Text, View } from "react-native";

import MyTextInput from '../../components/MyTextInput';
import { snService } from '../../services/sn.service';
import { TypeRoutes } from '../../routes';

import styles from './styles';
import { Product, User } from '../../entities';
import { TextInput } from 'react-native-gesture-handler';


import ProductItem from '../../components/Product';

export default function ProductList() {

    const navigation = useNavigation<NavigationProp<TypeRoutes>>();
   
    React.useEffect(() => {
        navigation.setOptions({ title: 'Lista de Produtos:' });
   
        pesquisar();
   
    }, []);


    const numbers = [1, 2, 3, 4, 5];


    const iniProdutos = [  {id: 1, name: 'teste', price: 10, amount: 20 }]; 
    const [ refreshing, setRefreshing ] = React.useState(false);

    const [produtos, setprodutos] = React.useState(iniProdutos);
    type Props = { post: Product }
    async function pesquisar() {
        
        
        const retorno = await snService.getProduct();
  
        setprodutos(retorno);
        return retorno;
    }


  

    return (
        <View style={styles.container}>
            
            <FlatList
                data={produtos}             
                refreshing={refreshing}
                renderItem={({ item }) => <ProductItem produto={item} />}
             
            />      
         
        </View>
    );
}