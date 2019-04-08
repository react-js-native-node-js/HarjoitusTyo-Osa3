import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';

class NorjaSaa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paikkakunta: '',
      kuva: '',
      lampotila: '',
      kuvaus: '',
      tuuli: '',
    };
  }

  componentDidMount = () => {
    return fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=Oslo&APPID=32f1264bba3945837fa37cc1c29b4db1'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          paikkakunta: responseJson.name,
          lampotila: responseJson.main.temp,
          kuvaus: responseJson.weather[0].description,
          tuuli: responseJson.wind.speed,
          kuva:
            'http://api.openweathermap.org/img/w/' +
            responseJson.weather[0].icon,
        });
      })
      .catch(error => {
        alert('Säätietoja ei saatu haettua. Lisää oma APPID');
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.otsikko}>{this.state.paikkakunta}</Text>
      <Text numberOfLines={1} style={styles.alleviivaus}>               
                        ______________________
      </Text>
        <View style={styles.saatieto}>
          <Image source={{ uri: this.state.kuva }} style={styles.kuva} />
          <View>
            <Text style={styles.tiedot}>{this.state.lampotila} astetta</Text>
            <Text style={styles.tiedot}>{this.state.kuvaus} </Text>
            <Text style={styles.tiedot}>{this.state.tuuli} m/s</Text>
          </View>
        </View>
      </View>
    ); // return
  } // render
} // class Saa

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  otsikko: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
  kuva: {
    height: 100,
    width: 100,
    marginRight: 20,
    marginTop: 20,
  },
  saatieto: {
    flexDirection: 'row',
  },
tiedot:{
  fontSize: 20,
  marginTop: 30,
},
alleviivaus:{
   marginTop: -20,
}
});

export default NorjaSaa;