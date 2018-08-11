import React, { Constants } from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Form,
  Label,
  Item,
  Input,
  Body,
  ListItem,
  Text,
  List,
  Button,
  Header , 
  Title , 
  Footer
} from 'native-base';

export default class Submit extends React.Component {
  render() {
    return (
      <Container>
         <Header>
          <Body>
            <Title>Submit</Title>
          </Body>
      </Header>
      
       <Image
            source={{
              uri: 'https://e.top4top.net/p_952het911.png',
            }}
            style={{
              alignSelf: 'center',
              height: 150,
              width: 150,
              borderWidth: 1,
              borderRadius: 75,
              top: 100
            }}
            resizeMode="contain"
          />
        <Content>
            <Text style={{ textAlign: 'center' , top:100 , color: '#00C9A7' , fontSize: 36 , fontWeight: 'bold' }} > Program A </Text>
                <Text style={{ textAlign: 'center' , top:120 }} > Task4 </Text>
                                <Text style={{ textAlign: 'center' , top:120 }} > First skill, Second skill </Text>
//The Form must be changed to take a link
          <Form style={{ top: 100 }}>
            <Item floatingLabel>
              <Label >Link</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label >Link</Label> 
              <Input />
            </Item>
          </Form>
          // must be link
          <Body>
            <Button
              block
              rounded
              success
              style={{ top:130 , width: 150, height: 53, marginBottom: 10 }}>
              <Text>SUBMIT</Text>
            </Button>
          </Body>
        </Content>
         <Footer />
      </Container>
    );
  }
}
