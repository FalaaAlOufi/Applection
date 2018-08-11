import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TextInput,
  CheckBox,
  Avatar,
  AppRegistry,
  Image,
} from 'react-native';
import { 
Button, 
Body , 
Container , 
Header , 
Title ,  
Content , 
Footer ,
Form ,
Item ,
Label ,
Input
} from 'native-base';

export default class create_account extends React.Component {
  render() {
    return (
       <Container>
      <Header>
          <Body>
            <Title>Sign Up</Title>
          </Body>
        </Header>
        <Content style={{top :100}}>
       <Text style={{ textAlign: 'center', color: '#4B4453' , fontSize: 36 , fontWeight: 'bold' }} > Welcome to FortyDays family. </Text>  
       
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>Email address</Label>
              <Input />   
            </Item>
            
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />   
            </Item>
            
            <Item floatingLabel last>
              <Label>Repeat Password</Label>
              <Input />   
            </Item>
          </Form>
         
        <Body>
          <Button
            block
            rounded
            danger
            style={{
              marginTop: 10,
              width: 270,
              height: 45,
            }}
            onPress={() => this.props.navigation.push('programs')} >
            <Text style={{fontSize:18 , color : 'white'}}> SIGN UP </Text>
             </Button>
        </Body>
</Content>
        <Footer />
      </Container>
    );
  }
}
