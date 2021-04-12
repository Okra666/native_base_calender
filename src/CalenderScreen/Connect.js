import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem,
    Left,
    Icon,
    Right,
    Form,
    Textarea,
} from 'native-base';
import { Image,StyleSheet,Dimensions,View } from "react-native";
import { useNavigation, useRoute, DrawerActions } from '@react-navigation/native';

export default function(props){
    const navigation = useNavigation();
    const route = useRoute(); 

    return <Connect {...props} navigation={navigation} route={route} />
}


class Connect extends Component {

    constructor(props) {
      super(props);
      this.state = {
        helper_comment: "",
      };
    }

    render(){

        const { route } = this.props;
        const { width, height, scale } = Dimensions.get('window');

        return(
          <Container>
            <Header>
                <Left>
                    <Button
                    transparent
                    onPress={() =>  this.props.navigation.goBack()}
                    >
                    <Icon name="md-arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>連絡</Title>
                </Body>
            </Header>
            <Content padder>
              <Card>
                <CardItem header>
                  <Text>{route.params.day}</Text>
                </CardItem>
              </Card>
              <Text>コメント</Text>
              <Form>
                <Textarea rowSpan={5} bordered placeholder="コメント"
                  onChangeText={text => this.setState({helper_comment:text})}
                ></Textarea>
              </Form>
              <View  style={{alignItems: 'center'}}>
                <Image source={require('../../Image/no_image.png')} 
                    style={{marginTop: 10, width: width*0.9, height:width*0.9}}
                />
              </View>

              <Button block style={styles.btn}>
                <Text>カメラ</Text>
              </Button>
    
              <Button block style={styles.btn}>
                <Text>送信</Text>
              </Button>
    
             </Content>
          </Container>
        );
      }
}

 //スタイルシート
 const styles = StyleSheet.create({
    btn:{
      marginTop:10,
      height:60
    },
    image:{
        marginTop: 10,
        width: 390,
        height: 390,

    }
   });