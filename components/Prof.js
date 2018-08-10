import React, {Component} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Button , Text, Card , CardItem , Body} from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';

export default class Prof extends React.Component {
  render() {
    const state = this.state;
    return (
    <Container >
    <Image
            source={{
              uri: "http://www2.0zz0.com/2018/08/10/09/443743270.png"
            }}
            style={{
    alignSelf: 'center',
    height: 150,
    width: 150,
    top:100
            }} resizeMode="contain" />
            <Image
            source={{
              uri: "http://www12.0zz0.com/2018/08/10/09/551089739.png"
            }}
            style={{
    alignSelf: 'center',
    height: 50,
    width: 50,
    top:100
            }} resizeMode="contain" />

    <Text style={{ textAlign: 'center' , top:110 , color: '#00C9A7' , fontSize: 23 , fontWeight: 'bold' }} > Hind </Text>
    <Text style={{ textAlign: 'center' , top:110 , color: '#C34A36' }} > Edit {'\n'} {'\n'} </Text>
    <Text style={{ textAlign: 'left' , top:110 , color: '#00C9A7' , fontSize: 25 , fontWeight: 'bold' }} > {'\t'} Programs joined by Hind </Text>
    
    
    <Body>
    <Button block rounded danger style={{ width:330 , height: 30, marginBottom: 10 , top : 120 }} 
          onPress={() => this.props.navigation.push('ditA')} >
        <Text > Program A </Text>  </Button> 
        </Body>
      </Container>

    );
  }
}

const styles = StyleSheet.create({

});
