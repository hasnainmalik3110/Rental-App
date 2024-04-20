import { StyleSheet } from "react-native"
export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 3
    },
    iput_view: {
        marginVertical: '20%'
    },

    input_email: {
        width: '90%',
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 5
    },
    btn: {
        width: '70%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 20,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 5,
        backgroundColor:'red',
        justifyContent:'center'
    },
    btn_txt:{
        alignSelf:'center'
    },
    errorText:{
        fontSize:15,
        color:'red',
        paddingHorizontal:19,
        
        bottom:10
    }
})