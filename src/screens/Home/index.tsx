import React from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import {styles } from './styles';

import { Participante} from '../../components/Participante';

export function Home() {

  const participantes = ['Paulo', 'John', 'Lucca' ];

  function handleParticipanAdd(){
    console.log('Você clicou em adicionar novo participante');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou para remover o participante ${name}`);

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
          placeholder= 'Nome do participante'
          //cor do texto placeholder
          placeholderTextColor='#6B6B6B'
          //opções de teclado = keyboardType=""
          />

          <TouchableOpacity style={styles.button}
          onPress={handleParticipanAdd}
          >
            <Text style={styles.buttonText}>
              +
            </Text>
            
          </TouchableOpacity>

        </View>

  

            
          
        
        
        <Participante 
        name='Paulo'
        onRemove= {() => handleParticipantRemove('Paulo')}
        />

        

    </View>
  );
}