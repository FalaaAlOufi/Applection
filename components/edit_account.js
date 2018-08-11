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
import { Container, Content, Button ,Body, Card , CardItem , Header , Title , Footer  } from 'native-base';

export default class edit_account extends React.Component {
  render() {
    return (
    <Container>
      <Header>
          <Body>
            <Title>Edit Profile</Title>
          </Body>
      </Header>
    <Content >
     <Image
       source={{ uri: "http://www2.0zz0.com/2018/08/10/09/443743270.png" }}
       style={{ 
         alignSelf: 'center',
         height: 150,
         width: 150,
         top:10,}} 
            resizeMode="contain" />
    <Image source={{ uri: "http://www12.0zz0.com/2018/08/10/09/551089739.png" }}
        style={{
         alignSelf: 'center',
         height: 50,
         width: 50,
         top:4 }} resizeMode="contain" />
         
         
         
        <View style={styles.e}>
        
          <TextInput
            id="a"
            underlineColorAndroid={'transparent'}
            style={styles.a}
            placeholder="Username"
          />
        </View>
        <View style={styles.e}>
          <TextInput
            id="a"
            underlineColorAndroid={'transparent'}
            style={styles.a}
            placeholder="Age"
          />
        </View>
        <View style={styles.e}>
          <TextInput
            id="a"
            underlineColorAndroid={'transparent'}
            style={styles.a}
            placeholder="Major"
          />
        </View>
        <View style={styles.e}>
          <TextInput
            id="a"
            underlineColorAndroid={'transparent'}
            style={styles.a}
            placeholder="Organization"
          />
        </View>
        <View style={styles.e}>
          <TextInput
            id="a"
            underlineColorAndroid={'transparent'}
            style={styles.a}
            placeholder="Email address"
          />
          </View>
         <Body >
         <Image 
            style={{    marginTop: 2, width: 200, height: 58  ,}}
            source={{
              uri:  'https://www.freepnglogos.com/uploads/visa-card-and-mastercard-logo-png-28.png' }} />
          </Body>
         <View 
        style={styles.e}>
          <TextInput
            id="ve"
            underlineColorAndroid={'transparent'}
            style={styles.ve}
            placeholder="Cardholder name"
          />
        </View>
          <View 
        style={styles.e}>
          <TextInput
            id="ve"
            underlineColorAndroid={'transparent'}
            style={styles.ve}
            placeholder="Card number"
          /> 
        </View>
          <View 
        style={styles.e}>
          <TextInput
            id="q"
            underlineColorAndroid={'transparent'}
            style={styles.q}
            placeholder="Expiry date"
          /> 
        
        style={styles.e}>
          <TextInput
            id="q"
            underlineColorAndroid={'transparent'}
            style={styles.q}
            placeholder="CVV "
          /> 
        </View>
        <View> 
        <Body>
        <Button block
              rounded
              danger 
              style={{
          marginTop: 10,
          width: 350,
          height: 45 }} 
           >
          <Text style={{fontSize:18 , color : 'white'}} >SAVE </Text>
             </Button>
            </Body>
          </View>
       </Content>
      <Footer />
    </Container>
    );
  }
}

const styles = StyleSheet.create({

  e: {
    flexDirection: 'row',
    
    alignSelf: 'stretch',
  },
  a: {
    marginTop:1,
    height: 36,
    padding: 9,
    marginRight: 30,
    marginLeft:20,
    //paddingleft:88,
    

    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#696969',
  },
 
  ve:{
    marginTop:1,
    height: 36,
    padding: 9,
    marginRight: 30,
    marginLeft:20,
    //paddingleft:88,
    

    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#696969',
  },
   q:{
   marginTop: 1,
    height: 36,
    padding: 10,
    marginRight: 30,
    marginLeft:20,
    //paddingleft:88,
    
    

    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#696969',
  },
  
});
