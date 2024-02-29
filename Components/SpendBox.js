import { SafeAreaView , StyleSheet, Text, View } from "react-native";
import {useState,useEffect} from 'react';
import { Video } from 'expo-av';
export default function SpendBox(){

    const [data,setData] = useState([]);

    useEffect(()=>{
        async function getData(){
            try{
                let a = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Florence,Alabma,US?key=TGRABGMCPKPB6TVXWV7X9KSH2');
                let response = await a.json();
                console.log(response.days[0]); 
                console.log("Done");
                setData(response.days);
            }
            catch{
                console.log("Error Occured");
            }
        }
        getData()
    },[])

    const changePicture = (data,index) => {
        let backgroundColor = ''
        console.log(data.conditions);
        if(data.conditions === 'Rain, Partially cloudy' || data.conditions === 'Rainy' || data.conditions === 'Partially cloudy' || data.conditions ==='cloudy'){
             backgroundColor = require('./video.mp4');
        }
        else if(data.conditions === 'Sunny'){
             backgroundColor = require('./video.mp4')
        }
        console.log('color is' , backgroundColor);
        return (
        
            <View>
                {backgroundColor && (
                    <Video source={backgroundColor} resizeMode="cover" style={StyleSheet.absoluteFill} isLooping shouldPlay/>
                )}
            <View key={index} style={[styles1.weatherData]}>
            <Text style={styles1.flex}>{data.conditions}</Text>
            <Text style={styles1.flex}>{data.temp}</Text>
                  
           </View>
           </View>
         
        )
    }
    
    return (
        <SafeAreaView style={styles1.safe}>
            <View style = {styles1.container}>
                <View style = {styles1.innerBox}>
                <Text style={styles1.PrimaryText}>Today's Weather</Text>
                </View>
                <View style={[styles1.flex  , styles1.center] }>
                { Array.isArray(data) && data.slice(0,1).map((data,index)=>(changePicture(data,index)))}
                </View>
            </View>
        </SafeAreaView>
       
    )
}

const styles1 = StyleSheet.create({
        safe:{
            // flex:1,
            marginTop:20,
        },
        flex:{
            display:'flex',
            width:'100%',
            justifyContent:'center',
            textAlign:'center',
            marginTop:20,
            fontSize:20,
            color:'white',
        },
        container : {
            borderRadius:10,

            width:'100%',
            height : 300,
            alignItems : 'center',
            backgroundColor :'#F0F8FF',
            backgroundColor:'black',
            marginLeft:0,
            marginRight:0,
            paddingTop:20,
            shadowColor: 'rgb(38, 57, 77)',
            shadowOffset: {width: 5, height: 8},
            shadowOpacity: 0.1,
            // justifyContent:'space-between',
            // alignContent:'space-between'

        },

        center : {
            
        },
        
// TGRABGMCPKPB6TVXWV7X9KSH2
        PrimaryText:{
            fontSize:18,
            fontWeight:'bold',
            display:'flex',
            flexDirection:'row',
            alignContent:'flex-start',
            textAlign:'center',
            color:'white',
            fontFamily:'Karrik',
        },
        innerBox:{
            width:'100%',
            height:'200',
            justifyContent:'flex-start',
        },
        weatherData:{
            height:200,
            // backgroundColor:'red',
            width:'100%',
            display:'flex',
        },
})