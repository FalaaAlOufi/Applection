import React, {Component} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Button , Text, Card , CardItem , Body , Header , Title , Footer } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';

export default class Prof extends React.Component {
  render() {
    const state = this.state;
    return (
    <Container>
      <Header>
        <Body>
          <Title>Profile</Title>
         </Body>
     </Header>
     <Image 
       source={{ uri: "http://www2.0zz0.com/2018/08/10/09/443743270.png" }}
       style={{ 
         alignSelf: 'center',
         height: 150,
         width: 150,
         top:20 }} 
       resizeMode="contain" />
     <Image 
       source={{ uri: "http://www12.0zz0.com/2018/08/10/09/551089739.png" }}
       style={{
        alignSelf: 'center',
        height: 50,
        width: 50,
        top:20 }} 
       resizeMode="contain" />
     <Text 
       style={{ 
        textAlign: 'center' ,
        top:10 ,
        color: '#4B4453' ,
        fontSize: 23 ,
        fontWeight: 'bold' }} > 
          Hind 
     </Text>
     <Body>
       <Button 
         transparent 
         danger 
         style={{ 
           textAlign: 'center' , 
           color: '#C34A36'}}
             onPress={() => this.props.navigation.push('edit_account')} >
               <Text > Edit </Text>
        </Button> 
        </Body>
          <Text 
            style={{ 
              textAlign: 'left' ,
              top:-100 ,
              color: '#845EC2' ,
              fontSize: 25 ,
              fontWeight: 'bold' }} > 
                {'\t'} Programs joined by Hind 
           </Text>
         <Body>
          <Button 
            block 
             rounded
             warning
               style={{
                 width:330 ,
                 height: 30,
                 marginBottom: 10 ,
                 top : -90 }} 
                   onPress={() => this.props.navigation.push('ProgramADit')} >
                     <Text > Program A </Text>
          </Button> 
         </Body>
       <Footer />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
});
