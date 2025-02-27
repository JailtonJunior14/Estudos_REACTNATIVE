import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';


//a navegaçao entre paginas usamos o react navigation configurado na pasta routes


export default function Welcome() {
    const navigation = useNavigation();

 return (
   <View style={styles.container}>
    <View style={styles.containerLogo}>
        <Image source={require('../../assets/Furia_Esports_logo.png')}
            style={{width: '100%'}}
            resizeMode='contain'
            
        />
    </View>

    <View style={styles.containerForm}>
        <Text style={styles.title}>
            Prestadores de Serviços
        </Text>
        <Text style={styles.text}  >Faça o login</Text>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SingIn')}>
            <Text style={styles.buttomText}>
                Acessar
            </Text>
        </TouchableOpacity>

    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#121212'

    },

    containerLogo:{
        flex: 2,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerForm:{
        flex: 1,
        backgroundColor: '#1E1E1E',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'


    },
    
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 28,
        marginBottom: 12,
    },

    text:{
        color:'#FFFFFF',

    },
    button:{
        position: 'absolute',
        backgroundColor:'#FFD700',
        borderRadius: 50,
        paddingVertical:8,
        width: '60%',
        alignSelf:'center',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '15%',

    },

    buttomText:{
        fontSize: 18,
        color: '#121212',
        fontWeight: 'bold'

    }
})