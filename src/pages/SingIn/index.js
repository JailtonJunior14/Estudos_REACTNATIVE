import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'; // o yup é uma biblioteca do JS para validaçao e transformações de valores em tempo de execução
import { useNavigation } from '@react-navigation/native';



const USER_DATA = {
    email: 'teste@tes.com',
    password: '123456',
}

const schema = yup.object().shape({
    email: yup.string().email("Email invalido").required("Email é obrigatorio"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("A senha é obrigatória"),

});

export default function SingnIn() {
    
    const navigation = useNavigation();

    const { control, handleSubmit, formState:{errors } } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        if (data.email === USER_DATA.email && data.password === USER_DATA.password){
            navigation.navigate('TelaPrincipal');
        } else {
            Alert.alert("Erro", "Email ou senha inválidos!");
        }
    }

    const cadastro = () => {
        navigation.navigate('Registro');
    }

  return (
    <View style={styles.container}>
        
        <View style={styles.containerHeader}>
            <Text style={styles.message}>Bem-vindo(a)</Text>
        </View>

        <View  style={styles.containerform}>
            <Text style={styles.title} >Email</Text>
           <Controller
                control={control}
                name="email"
                render={({field: {onChange, onBlur, value }}) => (
                    <>
             
                         <TextInput style={styles.input} placeholder="seu email" 
                            returnKeyType='email-addres'
                            autoCapitalize='none'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                    </>
                )}
           />





            <Text style={styles.title} >Senha</Text>
            <Controller
                control={control}
                name='password'
                render={({ field : {onChange, onBlur, value}}) =>(
                    <>
                        <TextInput style={styles.input} placeholder="sua senha"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            secureTextEntry={true}
                            value={value}
                        />
                        {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
                    </>
                )
                }
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister} onPress={cadastro}>
                <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    </View>
   );
 }


const styles = StyleSheet.create({
    container:{

        flex: 1,
        backgroundColor: '#121212'
    },

    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'

    },

    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    containerform:{
        backgroundColor: '#1E1E1E',
        flex:1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        alignItems: 'center'
    },

    title:{
        fontSize: 20,
        marginTop:28,
        color: '#FFFFFF',
       alignSelf: 'flex-start',
    },

    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        borderBottomColor: '#FFD700',
        color: '#FFFFFF',
        width: '100%',
        
    },

    button:{
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#FFD700',
        borderRadius: 50,
        paddingVertical: 10,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    buttonText: {
        fontSize: 18,
        color: '#121212', // Preto para contraste no dourado
        fontWeight: 'bold',
    },

    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color:'#FFFFFF',
        fontSize: 14,
    }
})