import React from "react";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";

//calender
import { Calendar } from 'react-native-calendars';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>月間スケジュール</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Calendar 
              onDayPress={(day) => {}}
            />
        </Content>
      </Container>
    );
  }
}