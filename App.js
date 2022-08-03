import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Cadastrofull from './src/screens/Cadastrofull';
import Restrito from './src/screens/restrito/Restrito';
import CadDeslocamento from './src/screens/restrito/CadDeslocamento';
import CadManutencao from './src/screens/restrito/CadManutencao';
import CadAbastecimento from './src/screens/restrito/CadAbastecimento';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false }}/>
            <Stack.Screen name="Restrito" component={Restrito} options={{headerShown:false }}/>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:false }}/>
            <Stack.Screen name="Cadastrofull" component={Cadastrofull} options={{headerShown:false }}/>
            <Stack.Screen name="CadDeslocamento" component={CadDeslocamento} options={{headerShown:false }}/>
            <Stack.Screen name="CadManutencao" component={CadManutencao} options={{headerShown:false }}/>
            <Stack.Screen name="CadAbastecimento" component={CadAbastecimento} options={{headerShown:false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
