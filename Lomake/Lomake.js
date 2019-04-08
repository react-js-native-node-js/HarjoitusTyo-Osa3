import React, { Component } from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Item,
  Label,
  Input,
} from 'native-base';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';
import {Icon} from "react-native-elements";

class Lomake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otsikko: '',
      paiva: this.teePaiva(),
      paikka: '',
      saa: '',
      kuvaus: '',
    };
  }

  teePaiva = () => {
    let tanaan = new Date();
    let kk = tanaan.getMonth() + 1;
    let pp = tanaan.getDate();
    let vv = tanaan.getFullYear();

    let pvm = pp + '.' + '' + kk + '.' + vv;
    return pvm;
  };

  lisaa = () => {};

  tyhjenna = () => {
    this.setState({
      otsikko: '',
      paiva: this.teePaiva(),
      paikka: '',
      saa: '',
      kuvaus: '',
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Otsikko</Label>
              <Input
                value={this.state.otsikko}
                onChangeText={text => this.setState({ otsikko: text })}
              />
            </Item>

            <Item inlineLabel>
              <Label>Päivä</Label>
              <Input
                value={this.state.paiva}
                onChangeText={text => this.setState({ paiva: text })}
              />
            </Item>

            <Item inlineLabel>
              <Label>Paikka</Label>
              <Input
                value={this.state.paikka}
                onChangeText={text => this.setState({ paikka: text })}
              />
            </Item>

            <Item inlineLabel>
              <Label>Sää</Label>
              <Input
                value={this.state.saa}
                onChangeText={text => this.setState({ saa: text })}
              />
            </Item>

            <Item inlineLabel>
              <Label>Kuvaus</Label>
              <Input
                multiline
                style={{ height: 80 }}
                value={this.state.kuvaus}
                onChangeText={text => this.setState({ kuvaus: text })}
              />
            </Item>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Button
                iconLeft
                rounded
                style={{ padding: 10, marginRight: 10 }}
                onPress={this.lisaa}>
                <Icon name="create" color="white" />
                <Text>Lisää</Text>
              </Button>

              <Button
                danger
                iconLeft
                rounded
                style={{ padding: 10 }}
                onPress={this.tyhjenna}>
                <Icon name="backspace" color="white" />
                <Text>Tyhjennä</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Lomake;
