import React, { Component } from "react";
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem,
  Left,
  Icon,
  Right
} from 'native-base';
import { DrawerActions } from '@react-navigation/native';

export default class Logout extends Component {

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
            <Title>ログアウト</Title>
            </Body>
        </Header>
        <Content padder>
            <Text>aaaa</Text>
         </Content>
      </Container>
      );
    }
  }
  
