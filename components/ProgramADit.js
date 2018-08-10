import React, {Component} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Button , Text, Card , CardItem , Body} from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';

export default class ProgramADit extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      tableHead: [ 
        <Text style={{ fontSize:20 , fontWeight: 'bold' }} > {'\t'}Date
        </Text> ,
        <Text style={{ fontSize:20 , fontWeight: 'bold' }} > {'\t'}Subject
        </Text> , ' '],
      tableData: [
        [<Text> {'\n'} {'\t'}01/04 </Text> , 
        <Text>{'\n'}{'\t'}Task1</Text> , 
        <Button block rounded style={{ width:100 , height: 30, marginBottom: 10  }} > <Text>DONE</Text> </Button>
        ],
        [<Text> {'\n'} {'\t'}02/04 </Text> , 
        <Text>{'\n'}{'\t'}Task2</Text> , 
        <Button block rounded style={{ width:100 , height: 30, marginBottom: 10 }} > <Text>DONE</Text> </Button>
        ],
        [<Text> {'\n'} {'\t'}05/04 </Text> , 
        <Text>{'\n'}{'\t'}Task3</Text>, 
        <Button block rounded danger style={{ width:100 , height: 30, marginBottom: 10 }} > <Text>DONE</Text> </Button>
        ],
        [<Text> {'\n'} {'\t'}04/04 </Text> , 
        <Text style={{ color: '#C34A36' }} >{'\n'}{'\t'}Task4</Text> , <Button block rounded success style={{ width:100 , height: 30, marginBottom: 10 }}  onPress={() => this.props.navigation.push('Submit')} > <Text>SUBMIT</Text> </Button>
        ],
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
    top:100
            }} resizeMode="contain" />
    <Text style={{ textAlign: 'center' , top:110 , color: '#00C9A7' , fontSize: 36 , fontWeight: 'bold' }} > Program A </Text>
    <Text style={{ textAlign: 'center' , top:110 }} > Explain the program </Text>
    //must be link
<Body>
    <Button block rounded danger style={{ width:130 , height: 30, marginBottom: 10 , top : 120 }} 
          onPress={() => this.props.navigation.push('Skills')} >
        <Text > Skills owned </Text>  </Button> 
        </Body>
         <Card style={{top: -100}}>
          <CardItem header>
            </CardItem>
          <Table borderStyle={{borderWidth: 0}} >
           <Row data={state.tableHead}  style={styles.head} textStyle=                       {styles.text}/>
             <Rows data={state.tableData} textStyle={styles.text}/>
             
        </Table>
        </Card>
        <Text style={{textAlign: 'left' , top:-100 , color: '#C34A36' }}  > Collective task </Text>

      </Container>

    );
  }
}

const styles = StyleSheet.create({

});
