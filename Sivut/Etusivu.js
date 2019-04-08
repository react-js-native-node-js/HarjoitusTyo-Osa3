import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Content,
  Form,
  Item,
  Label,
  Input,
  Card,
  CardItem,
  Thumbnail
} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';


class Etusivu extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left style={styles.header}>
          </Left>
          <Body style={styles.header}>
            <Title>Etusivu</Title>
          </Body>
         
        </Header>
        <Content>
          
          <Form>
           
            <Card >
           
              <CardItem style={styles.kortti}>
               
                <Left>
                   <Thumbnail
                    source={{uri:'http://myy.haaga-helia.fi/~a1700387/Kuvat/Finland.png',}} />
                </Left>
                <Body >
                  <Text style={styles.Text}>Suomi</Text>
                </Body>
              </CardItem>
               
            
            </Card>
            
             <Card >
              <CardItem style={styles.kortti}>
                <Left>
                   <Thumbnail
            source={{uri:'http://myy.haaga-helia.fi/~a1700387/Kuvat/ruotsi.jpg',}} />
                </Left>
                <Body >
                  <Text style={styles.Text}>Ruotsi</Text>
                </Body>
              </CardItem>
            </Card>

             <Card >
              <CardItem style={styles.kortti}>
                <Left>
                   <Thumbnail
            source={{uri:'http://myy.haaga-helia.fi/~a1700387/Kuvat/Englanti.png',}} />
                </Left>
                
                <Body >
                  <Text style={styles.Text}>Englanti</Text>
                </Body>
              </CardItem>
            </Card>

              <Card >
              <CardItem style={styles.kortti}>
                <Left>
                   <Thumbnail
            source={{uri:'http://myy.haaga-helia.fi/~a1700387/Kuvat/Italia.jpg',}} />
                </Left>
                <Body >
                  <Text style={styles.Text}>Italia</Text>
                </Body>
              </CardItem>
            </Card>

             <Card >
              <CardItem style={styles.kortti}>
                <Left>
                   <Thumbnail
            source={{uri:'http://myy.haaga-helia.fi/~a1700387/Kuvat/Norway.png',}} />
                </Left>
                <Body >
                  <Text style={styles.Text}>Norja</Text>
                </Body>
              </CardItem>
            </Card>

            
          </Form>
        </Content>
         <Header>
       
          <Body style={styles.header}>
            <Title>Tekijä: Abdulsatar Qaderzada</Title>
          </Body>
          
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    flex: 1,
  },
  Text: {
    fontSize:27,
    marginTop: 10,
    textColor: "Blue",
  },
kortti:{
    marginTop: 25,
}
});

export default Etusivu;
