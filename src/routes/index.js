import Welcome from '../pages/Welcome';
import SingIn from '../pages/SingIn';
import TelaPrincipal from "../pages/TelaPrincipal";
import Registro from "../pages/Registro";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//para toda pagina que queremos que tenha na navegaçao devemos importar. EX: import nomedapastadapagina from "../pastaondetemaspaginas/pagina";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} 
            options={{headerShown: false }}
            />

            <Stack.Screen name="SingIn" component={SingIn}
            options={{headerShown: false }}/>

            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal}
            options={{headerShown: false}}/>

            <Stack.Screen name="Registro" component={Registro} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}