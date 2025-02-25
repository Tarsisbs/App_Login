import {StyleSheet, Text, TextInput, Image, View, ScrollView, TouchableOpacity} from 'react-native'

import styles from './css/style'
 
export default function App(){
  return(
 
    <ScrollView showsVerticalScrollIndicator = {false} style = {styles.viewScroll}>
 
      <View style = {styles.viewPrincipal}>
 
        <Text style = {styles.textoPrincipal}> Login </Text>
 
        <View style = {styles.viewImage}>
 
          <Image style = {styles.imagem} 

            source={{uri:'https://img.myloview.com.br/quadros/nerd-face-emoji-clever-emoticon-with-glasses-geek-or-student-700-192037364.jpg'}}>

          </Image>

          <TextInput placeholder='Username' style = {styles.input}></TextInput>
          <TextInput placeholder='Password' style = {styles.input}></TextInput>

          <TouchableOpacity style = {styles.botao}>Login</TouchableOpacity>
 
        </View>
 
       
 
      </View>
 
    </ScrollView>
 
  )
}