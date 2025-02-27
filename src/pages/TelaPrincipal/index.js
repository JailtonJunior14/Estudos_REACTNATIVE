
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, Modal, TouchableOpacity, FlatList, StyleSheet  } from 'react-native';
import {supabase} from '../../../services/supabase';


export default function TelaPrincipal() {
  const [users, setUsers] = useState([]);
  const[Nome, setName] = useState('');
  const[Email, setEmail] = useState('');
  const[Senha, setPassword] = useState('');
  const[selectedUserId, setSelectedUserId] = useState(null);
  const[modalVisible, setModalVisible] = useState(false);
  
  //busca os dados da tabela no supabase
  const fetchUser = async() => {
    const {data, error} = await supabase.from("Usuarios").select("*");

    if(error){
      console.error("ta tudo errado",error);
    } else{
      setUsers(data);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  //////////////////////////////////////////////////////////////////////////////

  
  //update (o back vai ser via API em php, entao essa parte é meio inutil, mas se quiserem ver e continuar. OBS: não terminei, talvez um dia eu continue)
  const updateUser = async () => {
    if (!selectedUserId) return;

    const {error} = await supabase.from('Usuarios').update({Nome, Email, Senha}).eq('id', selectedUserId); ///litereralmente um update no sql, o .eq busca um valor especifico

    if (error) {
      console.error('Erro ao atualizar', error);
    } else{
      fetchUser();
      closeModal();
    }
    
  };
   ////////////////////////////////////////////////////////////////////////////

   //função abrir modal pra editar na mesma tela sem precisar de outra pagina
   const openModal = (user) => {
    setSelectedUserId(user.id);
    setName(user.Nome);
    setName(user.Email);
    setName(user.Senha);
    setModalVisible(true);
   };
   ///////////////////////////////////////////////////////////////////////////

   //fecha o modal
   const closeModal = () => {
    setModalVisible(false);
    setName('');
    setEmail('');
    setPassword('');
    setSelectedUserId(null);
   }




 return (
   <View>
    {/* Faz aparecer na tela oque esta no banco */}
    {users.map((user, id) => ( 
      <View key={id}> 
        <Text >Nome: {user.Nome}</Text> 
        <Text>Email: {user.Email}</Text>
      </View> 
    ))}

    
   </View>
  )
}