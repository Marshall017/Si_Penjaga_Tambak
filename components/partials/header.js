import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Pressable
} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { useNavigation  } from "@react-navigation/native";

class Header extends Component {
    render() {
        const { navigation } = this.props;
        return (
<SafeAreaView>
  <View style={[styles.container, { backgroundColor: "#67E1F6" }]}>
    <Pressable onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
      <Octicons name="arrow-left" size={30} style={{ color: "black" }} />
    </Pressable>
    <Text style={styles.headerText}>{this.props.headerTitle}</Text>
    <View style={styles.dummyItem}></View>
     <Octicons name="bell" size={30} style={{ color: "black" }} />
  </View>
</SafeAreaView>

        );
    }
}
export default function (props) {
    const navigation = useNavigation();
    return <Header {...props} navigation={navigation} />;
  };;

const styles = StyleSheet.create({
    container: {
        height: 90,
        alignItems : "center",
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: "#5FD3F7",
        paddingRight: 13,
        paddingLeft: 13,
        borderRadius:500
    },
    headerText:{
        fontWeight: "700",
        fontSize: 20,
        color: "white",
    },
    dummyItem : {
        width: 280,
        height: 30,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 100,
      },
});