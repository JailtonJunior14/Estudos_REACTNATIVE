import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { supabase } from '../../../services/supabase';



export default function Registro() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleAddUser = async (text) => {
    const {data, error} = await supabase.from("Usuarios").insert({Nome:newName, Email:newEmail, Senha:newPassword});
    if (error) {
      console.error('Erro ao cadastrar usuário:', error);
    } else {
      console.log('Usuário cadastrado com sucesso:', data);
    }
  }
  
  ////////////////////////////////////////

  const checkConnection = async () => {
    const { data, error } = await supabase.from('Usuarios').select('*');
    
    if (error) {
      console.error('Erro ao conectar ao Supabase:', error);
    } else {
      console.log('Conexão bem-sucedida! Dados:', data);
    }
  };
  
  useEffect(() => {
    checkConnection();
  }, []);
  /////////////////////////////////////////////////////

 return (
   <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Cadastro</Text>
        </View>
  
        <View style={styles.containerform}>
          <TextInput style={styles.textInput} placeholder='Nome' 
          onChangeText={(text) => setNewName(text)}
          value={newName}/>
          <TextInput style={styles.textInput} placeholder='Email'
          onChangeText={(text) => setNewEmail(text)}
          value={newEmail} />
          <TextInput style={styles.textInput} placeholder='Senha'
          onChangeText={(text) => setNewPassword(text)}
          value={newPassword} />
          <TouchableOpacity style={styles.button} onPress={() => handleAddUser()}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
        </View> 


   </View>
   
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  containerTitle:{
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  containerform:{
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 28,
    textAlign: 'left',
  },
  textInput:{
    backgroundColor: 'white',
    borderRadius: 5,
    padding: '5%',
    marginBottom: '1%',
    width: '100%',
  },
  button:{
    backgroundColor: '#FFD700',
    padding: '5%',
    borderRadius: 25

  },
  textButton:{
    fontSize: 18,
    color: '#121212',
    fontWeight: 'bold'
}
})
