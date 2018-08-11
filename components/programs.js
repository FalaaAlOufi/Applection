import * as React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Container, Content, Button ,Body, Card , CardItem , Header , Title , Footer } from 'native-base';

export default class programs extends React.Component {
  render() {
    return (
<Container>
  <Header>
    <Body>
      <Title>Programs</Title>
    </Body>
  </Header>
    <Content style={{ top : 30}}>
      <Text style={{  
        textAlign: 'center', 
        color: '#4B4453' , 
        fontSize: 30 , 
        fontWeight: 'bold', 
        marginBottom: 30 }} > 
      Now you can join the training programs </Text>
     <Text style={{  
       marginRight: 110 , 
       color: '#845EC2' , 
       fontSize: 20 , 
       fontWeight: 'bold' }} > 
       {'\t'}Paid Training Programs </Text>  
    <Body>
      <Button
        block
        rounded
        warning
        style={{
          marginTop: 10,
          width: 350,
          height: 45 }}
        onPress={() => this.props.navigation.push('programs')} >
          <Text style={{fontSize:18 , 
            color : 'white'}}> 
            Program A </Text>
     </Button>
     <Button
      block
      rounded
      warning
      style={{
        marginTop: 10,
        width: 350,
        height: 45 }} >
          <Text style={{fontSize:18 , color : 'white'}}> Program B </Text>
     </Button>
     <Button
       block
       rounded
       warning
       style={{
         marginTop: 10,
         width: 350,
         height: 45 ,
         marginBottom: 30 }} >
          <Text style={{fontSize:18 , color : 'white'}}> Program C </Text>
       </Button>
    </Body>
    <Text style={{  
       marginRight: 110 , 
       color: '#845EC2' , 
       fontSize: 20 , 
       fontWeight: 'bold' }} > 
       {'\t'}Free Training Programs </Text>
    <Body>
    <Button
      block
      rounded
      warning
      style={{
        marginTop: 10,
        width: 350,
        height: 45 }}
      onPress={() => this.props.navigation.push('ProgramA')} >
      <Text style={{fontSize:18 , color : 'white'}}> Program A </Text>
    </Button>
    <Button
      block
      rounded
      warning
      style={{
        marginTop: 10,
        width: 350,
        height: 45 }} >
          <Text style={{fontSize:18 , color : 'white'}}> Program B </Text>
     </Button>
     <Button
       block
       rounded
       warning
       style={{
         marginTop: 10,
         width: 350,
         height: 45 }} >
          <Text style={{fontSize:18 , color : 'white'}}> Program C </Text>
       </Button>
        </Body>
    </Content>
  <Footer />
</Container>
      
    );
  }
}