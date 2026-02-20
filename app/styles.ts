import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../constants/themes";

export const style = StyleSheet.create(
    {
        contanier: {
            flex: 1,
            alignItems: 'center' ,
            justifyContent: 'center',
            // padding:20
        },
        boxTop: {
            height:Dimensions.get('window').height/3,
            width:'100%',
            // backgroundColor:'red',
            alignItems:'center',
            justifyContent:'center'
        },
        boxMiddle: {
            height:Dimensions.get('window').height/4,
            width:'100%',
            // backgroundColor:'green',
            paddingHorizontal:37
        },
        boxBottom: {
            height:Dimensions.get('window').height/3,
            width:'100%',
            // backgroundColor:'blue'
        },
        logoText:{
            fontSize:60,
            fontWeight:"bold",
            color:themes.colors.primary
        },
        loginInput:{
            marginLeft:10,
            fontSize:20,
            color:themes.colors.gray
        },
        boxLoginInput:{
            height:40,
            fontSize:20,
            color:themes.colors.black,
            paddingLeft:20,
            margin:5,
            borderWidth:1,
            borderRadius:40,
            borderColor:themes.colors.gray
        }

    }
) 