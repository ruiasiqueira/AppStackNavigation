// Impora os módulos 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Importa os tipos das rotas para garantir tipagem no typescript
import { StackScreenProps } from '@react-navigation/stack';

//Definindo o tipo de rota
type RootStackParamList = {
    Home: undefined;
    Detail: undefined;
};

//Define as props do componente HomeScreen usando o tipo StackScreenProps
type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

//Declarando o componente funcional
const DetailScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Bem vindo a home screen</Text>
        </View>
    );
};

//Define o estilo
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'



    }
})

export default DetailScreen;