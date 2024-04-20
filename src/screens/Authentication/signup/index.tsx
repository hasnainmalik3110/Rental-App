import React, { useEffect, useState ,} from "react";

import { View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text } from "react-native";


import { Styles } from "./style";



const Signup = ({navigation} : { navigation: any }) => {
    //chatgpt code
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');




    const handleLogin = async () => {
        
        //    await AsyncStorage.getItem('userData')
          let result = await fetch('http://localhost:5000/post', {
            method: 'post',
            body: JSON.stringify({ name, username, password, confirmPassword }),
            headers: {
              'Content-Type': 'application/json',
            }
          });
          const userData = await result.json();
          if (result.ok) {
            
            // await AsyncStorage.setItem('userData', JSON.stringify(userData));
            navigation.navigate('LoginScreen');
        } else {
            
            setErrorMessage(userData.message);
        }
    
};


    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView>
                <View style={Styles.iput_view}>
                    <TextInput style={Styles.input_email}
                        placeholder="name"
                        placeholderTextColor={'grey'}
                        value={name}
                        onChangeText={(txt)=>{setName(txt)}}
                    />
                    <TextInput style={Styles.input_email}
                        placeholder="username"
                        placeholderTextColor={'grey'}
                        value={username}
                        onChangeText={(txt)=>{setUsername(txt)}}
                    />
                    {errorMessage && <Text style={Styles.errorText}>{errorMessage}</Text>}
                    <TextInput style={Styles.input_email}
                        placeholder="password"
                        placeholderTextColor={'grey'}
                        value={password}
                        onChangeText={(txt)=>{setPassword(txt)}}
                    />
                    <TextInput style={Styles.input_email}
                        placeholder="confirm password"
                        placeholderTextColor={'grey'}
                        value={confirmPassword}
                        onChangeText={(txt)=>{setConfirmPassword(txt)}}
                    />
                    
                    <TouchableOpacity style={Styles.btn}
                    onPress={handleLogin}   >
                        <Text style={Styles.btn_txt}>Signup</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default Signup

