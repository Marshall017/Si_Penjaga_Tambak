import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';

import AndroidSafeView from '../AndroidSafeView';
import Header from '../partials/header';
import Navbar from '../partials/navbar';

const screenWidth = Dimensions.get('window').width;

const Beranda = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.container, AndroidSafeView.AndroidSafeArea]}>
      <View style={[{ width: screenWidth }, styles.container]}>
        <View style={{ position: "absolute", top: 0 }}>
          <Header headerTitle="   Detail" />
        </View>

        <StatusBar style="auto" />

        <View style={{ position: "absolute", bottom: 0 }}>
          <Navbar whichPage="home" />
        </View>


       
        <View style={styles.row}>
        <View style={styles.column}>
        <View style={styles.row3}>
            <View style={[styles.card, styles.upperCard]}>
                <Text style={styles.cardText}>pH</Text>
                <Text style={styles.cardValue}>7</Text>
                <Text style={styles.cardUnit}> </Text>
            </View>
            <View style={[styles.card, styles.lowerCard]}>
                <Text style={styles.cardTextlow}>Status pH normal</Text>
            </View>
            
          </View>
        </View>


        {/* <View style={styles.column2}>
          <View style={styles.row2}>
            <View style={[styles.card, styles.upperCard]}>
                <Text style={styles.cardText}>O2</Text>
                <Text style={styles.cardValue}>5</Text>
                <Text style={styles.cardUnit}> mg/l</Text>
            </View>
            <View style={[styles.card, styles.lowerCard]}>
                <Text style={styles.cardTextlow}>Status Oksigen normal</Text>
            </View>
          </View>
        </View> */}


        </View>



        <View style={styles.row1}>
          <View style={styles.card1}>
            <View style={styles.cardColumn}>
              <Text style={styles.cardText1}>Sisa Pakan</Text>
              <Text style={styles.cardValue}>800 g</Text>
            </View>
            <View style={styles.cardSeparator} />
            <View style={styles.cardColumn}>
              <Text style={styles.cardText1}>Sisa Baterai</Text>
              <Text style={styles.cardValue}>94%</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column:{
    marginLeft:25
  },
  column2:{
    marginRight:50
  },

  row1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:100,
  },
  card1: {
    width: 340,
    height: 115,
    backgroundColor: '#5FD3F7',
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cardColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardSeparator: {
    width: 1,
    backgroundColor: 'white',
    marginHorizontal: 16,
  },
  
  cardText1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  card: {
    width: 155,
    height: 90,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  upperCard: {
    backgroundColor: '#5FD3F7',
    zIndex: 2,
    elevation: 4,
  },
  lowerCard: {
    backgroundColor: 'white',
    top: 10,
    height:70,
    zIndex: 1,
    elevation: 2,
  
  },
  cardSeparator: {
    width: 1,
    backgroundColor: 'white',
    marginHorizontal: 16,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginRight:100,
    marginBottom: 8,
  },
  cardTextlow: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 40,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  cardUnit: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    marginLeft:80,
    
  },

});
