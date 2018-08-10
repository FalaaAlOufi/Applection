//this page for me (Explain the link between pages)
import React, {Component} from 'react';
import { StyleSheet, Image , View } from 'react-native';
import { Container, Content, Button , Text, Card , CardItem } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';
import { createStackNavigator } from 'react-navigation';
import LoginF from './components/LoginF';
import ProgramC from './components/ProgramC';


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
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


