import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Haetaan Saa kansiot
import EnglantiSaa from './Saat/EnglantiSaa';
import ItaliaSaa from './Saat/ItaliaSaa';
import NorjaSaa from './Saat/NorjaSaa';
import RuotsiSaa from './Saat/RuotsiSaa';
import SuomiSaa from './Saat/SuomiSaa';

//Heetaan Navigaatiot
import EnglantiTabit from './Navigaatio/EnglantiTabit';
import ItaliaTabit from './Navigaatio/ItaliaTabit';
import NorjaTabit from './Navigaatio/NorjaTabit';
import RuotsiTabit from './Navigaatio/RuotsiTabit';
import SuomiTabit from './Navigaatio/SuomiTabit';

//Haetaan Infot
import EnglantiInfo from './Infot/EnglantiInfo';
import SuomiInfo from './Infot/SuomiInfo';
import ItaliaInfo from './Infot/ItaliaInfo';
import NorjaInfo from './Infot/NorjaInfo';
import RuotsiInfo from './Infot/RuotsiInfo';

import Etusivu from './Sivut/Etusivu';

const englantiInfo = [
  { otsikko: 'Perustiedot', 
    pKaupunki: 'Pääkaupunki: Lontoo',
    valuutta: 'Valuutta: Punta',
    pintAala: 'Pinta-ala: 130 395 km²',
    hallitsija: 'Hallitsija: Elisabeth II',
  },
  { otsikko: 'Nähtävyydet', 
    pKaupunki: 'Big Ben Kello',
    valuutta: 'Buckinghamin palatsi',
    pintAala: 'London Eye',
    hallitsija: 'Tower Bridge',
  },
  ];  

const italiaInfo = [
  { otsikko: 'Perustiedot', 
    pKaupunki: 'Pääkaupunki: Rooma',
    valuutta: 'Valuutta: euro',
    pintAala: 'Pinta-ala: 301 338 km²',
    hallitsija: 'Presidentti:	Sergio Mattarella',
  },
  { otsikko: 'Nähtävyydet', 
    pKaupunki: 'Colosseum',
    valuutta: 'Pisan Torni',
    pintAala: 'Pantheon',
    hallitsija: 'Duomo di Milano',
  },
  ];  

  
const norjaInfo = [
  { otsikko: 'Perustiedot', 
    pKaupunki: 'Pääkaupunki: Oslo',
    valuutta: 'Valuutta: Norjan kruunu ',
    pintAala: 'Pinta-ala: 323 787 km²',
    hallitsija: 'Kuningas: Harald V',
  },
  { otsikko: 'Nähtävyydet', 
    pKaupunki: 'Preikestolen',
    valuutta: 'Viikinkilaivamuseo',
    pintAala: 'Akershusin linna',
    hallitsija: 'Oslon kuninkaallinen linna',
  },
  ];  

  const suomiInfo = [
  { otsikko: 'Perustiedot', 
    pKaupunki: 'Pääkaupunki: 	Helsinki',
    valuutta: 'Valuutta: Euro',
    pintAala: 'Pinta-ala: 338 448,72 km²',
    hallitsija: 'Presidentti:	Sauli Niinistö',
  },
  { otsikko: 'Nähtävyydet', 
    pKaupunki: 'Suomenlinna',
    valuutta: 'Joulupukin Pajakylä',
    pintAala: 'Kauppatori',
    hallitsija: 'Senaatintori',
  },
  ];  

  const ruotsiInfo = [
  { otsikko: 'Perustiedot', 
    pKaupunki: 'Pääkaupunki: Tukholma',
    valuutta: 'Valuutta: ruotsin kruunu ',
    pintAala: 'Pinta-ala: 450 295 km²',
    hallitsija: 'Kuningas: Kaarle XVI Kustaa',
  },
  { otsikko: 'Nähtävyydet', 
    pKaupunki: 'Tukholman vanhakaupunki',
    valuutta: 'Kuninkaallinen linna',
    pintAala: 'Drottningholmin linna',
    hallitsija: 'ABBA-museo',
  },
  ];  


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Etusivu /> 
      </View> 
    );
  }
}



class SuomiApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SuomiTabit screenProps={suomiInfo} /> 
      </View> 
    );
  }
}

class RuotsiApp extends React.Component {
  render() {
    return (
       <View style={styles.container}>
        <RuotsiTabit screenProps={ruotsiInfo} /> 
      </View> 
    );
  }
}

class EnglantiApp extends React.Component {
  render() {
    return (
       <View style={styles.container}>
        <EnglantiTabit screenProps={englantiInfo} /> 
      </View> 
    );
  }
}


class NorjaApp extends React.Component {
  render() {
    return (
       <View style={styles.container}>
        <NorjaTabit screenProps={norjaInfo} /> 
      </View> 
    );
  }
}

class ItaliaApp extends React.Component {
  render() {
    return (
       <View style={styles.container}>
        <ItaliaTabit screenProps={italiaInfo} /> 
      </View> 
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8, 
  },
});

export default App;
