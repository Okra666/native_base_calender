import React, { Component } from "react";
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem,
  Left,
  Icon,
  Right
} from 'native-base';
import { Calendar } from 'react-native-calendars';
import { DrawerActions } from '@react-navigation/native';


export default class Calender_page extends Component {

    render(){
      return(
        <Container>
        <Header>
            <Left>
                <Button
                transparent
                onPress={() =>  this.props.navigation.dispatch(DrawerActions.openDrawer())}
                >
                <Icon name="menu" />
                </Button>
            </Left>
            <Body>
            <Title>月別スケジュール</Title>
            </Body>
        </Header>
        <Content padder>
          <Calendar 
            onDayPress={(day) => this.props.navigation.navigate("Contact", {day:day.dateString})}
          />
         </Content>
      </Container>
      );
    }
  }
  
