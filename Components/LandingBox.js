import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeView: {
    // backgroundColor:'black',
  },
 innerView : {
    display:'flex',
    // backgroundColor: '#f9f1f1',
    // backgroundColor:'black',
    height:'100%',
    width:'100%',
   alignItems:'center',
 },

 primaryText : {
  fontSize:40,
  // color:'grey',
  fontWeight:'bold',
  // backgroundColor: '#f9f1f1',
 },
 
  dashBoardBox : {
    display:'flex',
    width:'90%',
    height:100,
    padding:10,
    backgroundColor:'white',
    marginRight:20,
    marginLeft:20,
    marginVertical:20,
    borderRadius:10,
    alignContent:'center',
    justifyContent:'flex-end',
    backgroundColor: '#f7d6e0',
    shadowColor: 'rgb(38, 57, 77)',
    shadowOffset: {width: 5, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  spendingBox : {
    display:'flex',
    width:'90%',
    height:200,
    padding:10,
    backgroundColor:'white',
    marginRight:20,
    marginLeft:20,
    marginVertical:20,
    borderRadius:10,
    alignContent:'center',
    justifyContent:'flex-end',
  },
  spendbox: {
     width:'90%',
     marginLeft:20,
     marginRight:20,
  }
});
