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
  Right, 
  Header,
  Left,
  Icon,
  Title,
  Footer
} from 'native-base';

export default class SignIn extends React.Component {
  render() {
    return (
      <Container>
      <Header>
          <Body>
            <Title>Sign In</Title>
          </Body>
        </Header>
        <Content >
          <Image
            source={{
              uri: 'https://e.top4top.net/p_952het911.png',
            }}
            style={{
              alignSelf: 'center',
              height: 250,
              width: 250,
            }}
            resizeMode="contain"
          />
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          // must be link
          <Right style={{ left: 120, top : -10}} >
               <Button transparent danger>
                   <Text> Forgot password  </Text>
               </Button>
          </Right>
         
          <Body>
            <Button
              block
              full
              rounded
              danger
              >
              <Text>LOG IN</Text>
            </Button>
            
            <Text style={{ top: 20 }}> Don't have an account?
                 <Button transparent danger style={{ top: 10,  }}
          onPress={() => this.props.navigation.push('create_account')} >
                   <Text style={{ top: 14 }}>Sign Up </Text>
                 </Button>
        </Text>
                 </Body>
        </Content>
        <Footer />
      </Container>
    );
  }
}
