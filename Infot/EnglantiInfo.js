import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';

import {StyleSheet } from 'react-native';




export default class EnglantiInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { matkat: this.props.screenProps };
  }


  renderItem = matka => {
    return (
      <ListItem avatar>
        
        <Body style={styles.keho}>
          <Text style={styles.otsikko}>{matka.otsikko}</Text>
           <Text numberOfLines={1} style={styles.alleviivaus}>               
                        ____________________________
      </Text>
           <Text style={styles.text}note>{matka.pKaupunki}</Text>
          <Text style={styles.text}note>{matka.valuutta}</Text>
          <Text style={styles.text}note>{matka.pintAala}</Text>
          <Text style={styles.text}note>{matka.hallitsija}</Text>
          
        </Body>
        
      </ListItem>
    );
  };

  render() {
    return (
      <Container>
        <Content>
          <List dataArray={this.state.matkat} renderRow={this.renderItem} />
        </Content>
      </Container>
    );
  } 
}

const styles = StyleSheet.create({
keho:{
  flex: 1,
    marginTop: 30,
    paddingLeft:-40,
    fontSize:30,
},
text:{
  fontSize:25,
  marginTop:5,
},
otsikko:{
  fontSize:30,
  textAlign:'center',
  margiBottom:5,
},
alleviivaus:{
   marginTop: -20,
   paddingLeft:45,
}
});


