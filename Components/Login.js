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
import {login, logout} from './DataModel'

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        // try {
        //     await login(emailRef.current.value, passwordRef.current.value);
        // } catch {
        //     alert("Error!");
        // }
        // setLoading(false);
        try {
            await login(email, password);
            alert("logged In")
            navigation.navigate('Home');
        } catch {
            alert("Error Loggin in!");
        }
    }

    async function handleLogout() {
        // try {
        //     await logout();
        // } catch {
        //     alert("Error!");
        // }
        await logout();
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Login</Text>
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
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {
                    navigation.navigate("SignUp");
                }
                }>
                    <Text style={styles.forgot_button}>Don't have an account? Sign Up!
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={
                    logout
                }>
                    <Text >LogOUt
                    </Text>
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
        flex: 0.3,
        height:'100%',
        justifyContent:'flex-end',
    },
    headerText: {
        fontSize: 40,
        color:'#a9a9a9'
    },
    inputCell: {
        flex:0.4,
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    inputView: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#D3D3D3',
        width: "70%",
        height: "20%",
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