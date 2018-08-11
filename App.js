import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Container, Content, Button, Text, Card, CardItem } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';
import { createStackNavigator } from 'react-navigation';
import SignIn from './components/SignIn';
import create_account from './components/create_account';
import edit_account from './components/edit_account';
import Prof from './components/Prof';
import ProgramADit from './components/ProgramADit';
import Submit from './components/Submit';
import Skills from './components/Skills';
import ProgramA from './components/ProgramA';
import programs from './components/programs';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
const styles = StyleSheet.create({});

const RootStack = createStackNavigator(
  {
    Home: SignIn,
    create_account: create_account,
    Prof: Prof,
    edit_account: edit_account,
    ProgramADit: ProgramADit,
    Submit: Submit,
    Skills: Skills,
    ProgramA: ProgramA,
    programs: programs,
  },
  {
    initialRouteName: 'Home',
  }
);
