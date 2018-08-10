// class HomeScreen + class DetailsScreen , u can remove it 
import React, {Component} from 'react';
import { StyleSheet, Image , View } from 'react-native';
import { Container, Content, Button , Text, Card , CardItem } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';
import { createStackNavigator } from 'react-navigation';
import LoginF from './components/LoginF';
import ProgramA from './components/ProgramA';
import Skills from './components/Skills';
import ProgramADit from './components/ProgramADit';
import Prof from './components/Prof';
import Submit from './components/Submit';


class HomeScreen extends React.Component {
  render() {
    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button block rounded
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button block rounded
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button block rounded
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button block rounded
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({

});

const RootStack = createStackNavigator(
  {
    //Now the Home page is ProgramA, change it to LoginF to see it.
    // still miss (Create new account , Programs , Edit ) Pages
    // Submit (Input must be take link ) 
    // login pages  ( (Forgot password) + ( Create new account ) must be link not a Text 
    //Colors + (Explain Program , Program A ,etc) must be change
    Home: ProgramA,
    Skills: Skills,
    ProgramA: ProgramA,
    ditA: ProgramADit,
    Prof:Prof,
    Submit:Submit
  },
  {
    initialRouteName: 'Home',
  }
);


