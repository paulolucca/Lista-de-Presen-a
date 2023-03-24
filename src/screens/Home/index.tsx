import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participante } from '../../components/Participante';


export function Home() {

  const [participantes,setParticipantes] = useState <string[]> ([]);

  const [participanteName,setParticipanteName] = useState('');

 

  function handleParticipanAdd() {

    if(participantes.includes(participanteName)){

     return  Alert.alert("Participante já existe","Já existe participante com esse nome");


    }

    setParticipantes(prevState => [...prevState, participanteName]);
    setParticipanteName('');

   
  }

  function handleParticipantRemove(name: string) {

      

    setParticipantes(prevState => prevState.filter (participante => participante !== name));



    Alert.alert("Deseja remover o participante", `Remover o participante ${name}? `,  [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não'
        
      }

    ]);

    

  }


  return (
    <View style={styles.container}>
      <Text style={styles.nameEvent}>
        Nome do Evento
      </Text>

      <Text style={styles.dateEvent}>
        24 de Março de 2023
      </Text>


      <View style={styles.form} >


        <TextInput
          style={styles.input}
          //texto no input enquanto nada foi digitado
          placeholder='Nome do participante'
          //cor do texto placeholder
          placeholderTextColor='#6B6B6B'
        //opções de teclado = keyboardType=""
        onChangeText={ text => setParticipanteName(text)}

        value={participanteName}
        />

        <TouchableOpacity style={styles.button}
          onPress={handleParticipanAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>

        </TouchableOpacity>

      </View>

     <FlatList 
     data={participantes}
     keyExtractor={item => item}
     renderItem={({item}) => (

      <Participante

      key={item}
      name={item}
      onRemove={() => handleParticipantRemove(item)}
    />


     )}

     showsVerticalScrollIndicator={false}
     
     />

    
  

    </View>
  );
}