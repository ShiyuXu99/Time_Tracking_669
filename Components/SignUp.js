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
import {login, signup} from './DataModel'


export default function SignUp({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    let handleSignUp = async ()=>{
        try {
            await signup(email, password);
            alert("Signed Up")
            navigation.navigate('Home');
        } catch {
            alert("Error signing up!");
        }
    }

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
                        placeholderTextColor="#979BF0"
                        autoCapitalize='none'
                        spellCheck={false}
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="#979BF0"
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
                        placeholderTextColor="#979BF0"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        spellCheck={false}
                        onChangeText={(password) => setConfirmPassword(password)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={handleSignUp}
                >
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
        justifyContent: "center",
        flexDirection:'column'
    },

    header: {
        height:'10%',
        justifyContent:'center',
    },
    headerText: {
        fontSize: 40,
        color:'black',
        fontWeight: '500',
        letterSpacing: 0.5,
        marginBottom: 40,
    },
    inputCell: {
        height:'50%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    inputView: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#979BF0',
        width: "70%",
        height: "15%",
        marginBottom: 20,
    },

    TextInput: {
        flex: 1,
        padding: 10,
        marginLeft: 5,
        fontSize: 18,
        color: 'black',
        fontWeight: '500',
        letterSpacing: 0.5,
    },
    //
    // forgot_button: {
    //     height: 30,
    //     marginBottom: 30,
    // },

    loginBtn: {
        width: "70%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#6F6FF8",
        marginBottom:20,
        backgroundColor: "#6F6FF8",
        padding: 20,
    },
    loginText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '500',
        letterSpacing: 0.5,
      },
});