//Importa o componente Status Bar do Expo que perimite customizar a barra de status do dispositivo
import { StatusBar } from 'expo-status-bar';
//Importa os módulos necessários para navegação no aplicativo
import { StyleSheet, Text, View } from 'react-native';

//Importa os módulos necessários para navegação no aplicativo
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';

//Importa as telas que serão utilizadas na navegação
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

//Definir os tipos das rotas para garantir tipagem segura no typescript
type RootStackParamList = {
  Home: undefined; //A tela Home não recebe nenhum parâmetro
  Detail: undefined; //A tela Detail não recebe nenhum parâmetro
};

//Cria o stack navigator que gerencia a navegação entrea as telas
const Stack = createStackNavigator<RootStackParamList>();

//Componentes pricipais do aplicativo
const App: React.FC =() => {
  return (
    //O navigationContainer é o elemento principal que envolve toda a navegação do App
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{title:"HomePage"}}
        />
       

      </Stack.Navigator>

    </NavigationContainer>
  );
};

//Exportar o componente App;
export default App;



