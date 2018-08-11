import React, {Component} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Button , Text, Card , CardItem , Header , Body , Title , Footer } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';

export default class Skills extends React.Component {
  render() {
    const state = this.state;
    return (
    <Container >
    <Header>
          <Body>
            <Title>Skills </Title>
          </Body>
      </Header>

    <Image
            source={{
              uri: "https://e.top4top.net/p_952het911.png"
            }}
            style={{
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 75,
    top:100
            }} resizeMode="contain" />
    <Text style={{ textAlign: 'center' , top:110 , color: '#00C9A7' , fontSize: 36 , fontWeight: 'bold' }} > S K I L L S </Text>
    <Text style={{ textAlign: 'center' , top:110 }} > This page is updated daily {'\n'} {'\n'} </Text>
    //must be link
    <Text style={{ textAlign: 'Left' , top:110 , color: '#C34A36' , fontSize: 25 }}>          First skill </Text>
    <Text style={{ textAlign: 'Left' , top:110 , color: '#C34A36' , fontSize: 25 }}>          Second skill </Text>
    <Text style={{ textAlign: 'Left' , top:110 , color: '#C34A36' , fontSize: 25 }}>          Third skill </Text>

 <Footer />
      </Container>

    );
  }
}

const styles = StyleSheet.create({

});
