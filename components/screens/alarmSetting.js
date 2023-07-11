import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions ,Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AndroidSafeView from '../AndroidSafeView';
import Header from '../partials/header';
import Navbar from '../partials/navbar';

const screenWidth = Dimensions.get('window').width;

const alarm = ({ navigation }) => {
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
    
            <View style={styles.column}>
              <View style={styles.card}>
                <Text style={styles.cardValue}> 09 : 41</Text>
              </View>
              <View style={[styles.card, styles.lowerCard]}>
                <Text style={styles.cardTextlow}>Sun Mon Tue Wed Thu Fri Sat</Text>
              </View>
            </View>

            <View style={styles.column2}>
          <View style={styles.row2}>
            <View style={[styles.card2]}>
            <Pressable style={styles.addButton}>
                <Ionicons name="add" size={40} color="blue" />
              </Pressable>
            </View>

          </View>
        </View>



          </View>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#ECF0FB',
        alignItems: 'center',
        justifyContent: 'center',
      },
      column: {
        position: 'absolute',
        top: 100,
        left: 10,
      },
      card: {
        width: 200,
        height: 60,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#5FD3F7',
        zIndex: 2,
        elevation: 4,
      },
      card2: {
        width: 130,
        height: 100,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#D5D9EA',
        zIndex: 2,
        elevation: 4,
        marginLeft:50,
        marginTop:-311,
      },
      lowerCard: {
        backgroundColor: 'white',
        top: 10,
        height: 90,
        zIndex: 1,
        elevation: 2,
      },
      cardValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
      },
      cardTextlow: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 40,
      },
    
    });

export default alarm;

0