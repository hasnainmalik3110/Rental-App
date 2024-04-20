import React, { useState } from "react";
import { View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text } from "react-native";

import { Styles } from "./style";

const Login = ({ navigation }: { navigation: any }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    


    const handleLogin = async () => {
            
            let result = await fetch('http://localhost:5000/login', {
                method: 'post',
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            const data = await result.json();
            if (result.ok) {
                // Login successful
                setMessage('');
                navigation.navigate('Home');
            } else {
                // Login failed
                setMessage(data.message);
                
            }
        
            // if (data.success) {
            //   setMessage(data.message);
              
            // } else {
            //   setMessage(data.message);
            //   navigation.navigate('Home')
            // }
          
        }
    

    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView>
                <View style={Styles.iput_view}>
                    <TextInput style={Styles.input_email}
                        placeholder="email"
                        placeholderTextColor={'grey'}
                        value={username}
                        onChangeText={(txt)=>{setUsername(txt)}}
                    />
                    <TextInput style={Styles.input_email}
                        placeholder="password"
                        placeholderTextColor={'grey'}
                        value={password}
                        onChangeText={(txt)=>{setPassword(txt)}}
                    />
                    {message !== '' && <Text>{message}</Text>}
                    <TouchableOpacity style={Styles.btn}  onPress={handleLogin}>

                        <Text style={Styles.btn_txt}>login</Text>
                    </TouchableOpacity>

                    
                   
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default Login

