import React, {Component} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Button , Text, Card , CardItem , Body , Header , Title , Footer } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';

export default class ProgramA extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      tableHead: [ 
        <Text style={{ fontSize:20 , fontWeight: 'bold' , color : '#845EC2' }} > {'\t'}Date 
        </Text> ,
        <Text style={{ fontSize:20 , fontWeight: 'bold' , color : '#845EC2' }} > 
       {'\t'}Subject</Text> ],
      tableData: [
        [<Text>{'\n'}{'\t'}01/04 </Text> , 
        <Text>{'\n'}{'\t'}Task 1</Text>
        ],
        [<Text>{'\n'}{'\t'}02/04 </Text>, 
        <Text>{'\n'}{'\t'}Task 2</Text> ],
        [<Text> {'\n'} {'\t'}03/04 </Text>, 
        <Text>{'\n'}{'\t'}Task 3</Text> ],
        [<Text> {'\n'} {'\t'}04/04 </Text>, 
        <Text style={{ color: '#C34A36' }}> {'\n'}{'\t'}Task4</Text> ],
        [<Text> {'\n'} {'\t'}05/04 </Text> , 
        <Text style={{ color: '#C34A36' }} >{'\n'}{'\t'}Task5</Text> ], 
                 ]
    }
  }
  render() {
    const state = this.state;
    return (
    <Container>
      <Header>
          <Body>
            <Title>Program A </Title>
          </Body>
      </Header>
        
      <Text style={{ 
         textAlign: 'center' , 
         top:50 , 
         color: '#4B4453' , 
         fontSize: 36 , 
         fontWeight: 'bold' }} > 
         Program A 
       </Text>
       <Text style={{ 
         textAlign: 'center' , 
         top:50 }} > 
         Explain the program 
       </Text>
       <Card style={{top: 90}}>
         <CardItem header>
         </CardItem>
         <Table borderStyle={{borderWidth: 0}} >
           <Row 
           data={state.tableHead}  
           style={styles.head} 
           textStyle={styles.text}
           />
           <Rows 
           data={state.tableData} 
           textStyle={styles.text}
           />
        <Text> {'\t'} </Text>
        </Table>
      </Card>
    <Text style={{
      textAlign: 'left' , 
      top:90 , 
      color: '#C34A36' }}> 
      Collective task </Text>
    <Body>
       <Button
          block
          rounded
          danger
            style={{
              marginTop: 10,
              width: 350,
              height: 45,
              top: 90 }}
                onPress={() => this.props.navigation.push('Prof')} >
                  <Text style={{fontSize:18 , color : 'white'}}> JOIN </Text>
         </Button>
      </Body>
    <Footer />
    </Container>

    );
  }
}

const styles = StyleSheet.create({

});
