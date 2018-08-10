import  React,{ Constants } from 'react';
import { Image , StyleSheet } from 'react-native';
import { Container, Content , Form , Label , Item , Input , Body , ListItem ,Text , List , Button } from 'native-base';

export default class LoginF extends React.Component {
  render() {
    return (
<Container style={styles.container} >
<Content> 
<Image
            source={{
              uri: "https://e.top4top.net/p_952het911.png"
            }}
            style={{
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 75
            }} resizeMode="contain" />
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
<Text style={{alignSelf: 'flex-end'}} > Forgot password </Text> 

  <Body>
    <Button
      block
      rounded
      style={{ width:150 , height: 53, marginBottom: 10 }} 
    >
      <Text>LOG IN</Text>
    </Button>

    <Text style={{ top: 260}} > Don't have an account? </Text>
    // must be link
    <Text style={{ top: 260,  color: '#C34A36' }} > Create new account </Text>    
  </Body>
</Content> 
</Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    
  },

});