import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Sign Up</Text>
            </View>

            <View style={styles.inputCell}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        placeholderTextColor="grey"
                        autoCapitalize='none'
                        spellCheck={false}
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="grey"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        spellCheck={false}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Confirm Password"
                        placeholderTextColor="grey"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        spellCheck={false}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>Create Account</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%',
        alignItems: "center",
        // justifyContent: "center",
        flexDirection:'column'
    },

    header: {
        flex: 0.22,
        height:'100%',
        justifyContent:'flex-end',
    },
    headerText: {
        fontSize: 40,
        color:'#8962F8',
        fontWeight: 'bold',
    },
    inputCell: {
        flex:0.55,
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    inputView: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#D3D3D3',
        width: "70%",
        height: "14%",
        marginBottom: 20,
    },

    TextInput: {
        flex: 1,
        padding: 10,
        marginLeft: 5,
        fontSize: 18
    },
    //
    // forgot_button: {
    //     height: 30,
    //     marginBottom: 30,
    // },

    loginBtn: {
        width: "70%",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#E8EAFE",
        marginBottom:15
    },
});