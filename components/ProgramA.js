import React, {Component} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Button , Text, Card , CardItem , Body} from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';

export default class ProgramA extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      tableHead: [ 
        <Text style={{ fontSize:20 , fontWeight: 'bold' }} > {'\t'}Date </Text> ,
        <Text style={{ fontSize:20 , fontWeight: 'bold' }} > {'\t'}Subject</Text> ],
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
    <Container >
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
    top:50
            }} resizeMode="contain" />
    <Text style={{ textAlign: 'center' , top:50 , color: '#00C9A7' , fontSize: 36 , fontWeight: 'bold' }} > Program A </Text>
    <Text style={{ textAlign: 'center' , top:50 }} > Explain the program </Text>
    //must be link
         <Card style={{top: 50}}>
          <CardItem header>
            </CardItem>
          <Table borderStyle={{borderWidth: 0}} >
           <Row data={state.tableHead}  style={styles.head} textStyle=                       {styles.text}/>
             <Rows data={state.tableData} textStyle={styles.text}/>
             <Text> {'\t'} </Text>
        </Table>
        </Card>
        <Text style={{textAlign: 'left' , top:50 , color: '#C34A36' }}  > Collective task </Text>

        <Body>
    <Button block rounded success style={{ width:130 , height: 30, marginBottom: 10 , top : 60 }} 
          onPress={() => this.props.navigation.push('Prof')} >
        <Text > JOIN </Text>  </Button> 
        //must be going to prof not dkills
        </Body>

      </Container>

    );
  }
}

const styles = StyleSheet.create({

});
