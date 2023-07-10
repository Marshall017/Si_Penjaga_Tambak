import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Pressable,
    Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Octicons from "react-native-vector-icons/Octicons"
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class Navbar extends Component {
    
    render() {
        const { navigation } = this.props;
        const screenWidth =  Dimensions.get('window').width;
        return (
                <View style={[{width: screenWidth},styles.container, {backgroundColor: "#ffffff"}]}>
                    <Pressable style={styles.itemNavbar} onPress={() => this.props.navigation.replace('home')}>
                        <Foundation name="home" size={30} style={{color: this.props.whichPage === "home" ? "#0E8388" : "#2C3333"}}/>
                        <Text style={{fontSize: 12, fontWeight:"400", color: this.props.whichPage === "home" ? "#0E8388" : "#2C3333"}}>Home</Text>
                    </Pressable>
                    <Pressable style={styles.itemNavbar} onPress={() => this.props.navigation.replace('setting')}>
                        <FontAwesome name="gear" size={30} style={{color: this.props.whichPage === "setting" ? "#0E8388" : "#2C3333"}}/>
                        <Text style={{fontSize: 12, fontWeight:"400", color: this.props.whichPage === "setting" ? "#0E8388" : "#2C3333"}}>Setting</Text>
                    </Pressable>
                </View>
        );
    }
}
export default function (props) {
    const navigation = useNavigation();
    return <Navbar {...props} navigation={navigation} />;
  };

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection : 'row',
        alignItems : "center",
        justifyContent: 'space-around',
        paddingTop: 8,
        borderRadius:25
    },
    navbarText:{
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        color: "#CBE4DE",

        alignSelf: "center",
    },
    itemNavbar:{
        alignItems: "center",
        justifyContent: "center",
    },
});