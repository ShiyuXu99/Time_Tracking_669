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
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="grey"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="grey"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Don't have an account? Sign up</Text>
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
        color:'#a9a9a9'
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
        backgroundColor: "purple",
        marginBottom:15
    },
});