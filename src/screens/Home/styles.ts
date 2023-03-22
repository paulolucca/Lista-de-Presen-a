import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      // selecionando a tela inteira
      flex: 1,
      //cor de fundo
      backgroundColor: '#131016',
      //margin superior
      padding: 24,
      
      
    },
    nameEvent: {
      //cor usado na letra
      color: '#6B6B6B',
      //fonte da palavra
      fontSize: 24,
      //alinhamento de item
      alignItems: 'center',
      // estilo de letra
      fontWeight: 'bold',
      //margin do top
      marginTop:48,
  
  
    },
    dateEvent:{
        //cor da letra
      color: '#FDFCFE',
      //tamanho da letra
      fontSize: 16,
      //espaçamento inferior
      marginTop: 10,
      

  
    },

    input:{
        //altura
        height:56,
        //largura
        width:56,
        //cor de fundo
        backgroundColor: '#1F1E25',
        //bordas laterais
        borderRadius:5,
        //cor das letras internas
        color: '#FDFCFE',
        //espaçamento interno
        padding: 16,
        //tamanho de texto
        fontSize:22,
        //selecionando esoaçamento da tela
        flex: 1,
        //margin lado direito
        marginRight: 7,
        //margin inferior
        marginBottom:16,


    },

    button:{
        //largura 
        width: 56,
        //altura
        height: 56,
        //bordas laterais 
        borderRadius:5,
        //cor interna
        backgroundColor:'#31CF67',
        //alinhando no centro horizontal
        alignItems:'center',
        //alinhando no centro da vertical
        justifyContent: 'center',
    },

    buttonText:{
        color: '#FDFCFE',
        fontSize:24,
        
    },

    form:{
      //ocupando 100 de largura 
      width: '100%',
      //alinhando na mesma linha
      flexDirection:'row',
      //margin do topo
      marginTop:36,
      //margin Inferior
      marginBotton:42,


    }
  });