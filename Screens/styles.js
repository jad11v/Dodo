'use strict'

var React = require('react-native');
var StyleSheet = React.StyleSheet;

module.exports = StyleSheet.create({
  
  card:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    width: 290,
    height: 290,

  },
  outerContainer:{
   flex: 1, 
   flexDirection: 'column',
   justifyContent: 'flex-end',
   paddingRight: 15,
   paddingLeft: 15, 
   opacity: 9,
   backgroundColor: '#FFAA00',
    },


  bodyContainer: {

    //make the children of our main container lay out horizontally instead of vertically
  },
  headContainer: {
    flex:4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    /*borderColor: 'black',
    borderWidth: 2,*/
    paddingTop: 50,
   

  },
  
  dodoIcon: {

    height: 125,
    width: 150,
  },


  thumbnail: {
    width: 53,
    height: 81,
  },

  title: {
    fontSize: 50,
    marginBottom: 40,
    textAlign: 'center',
    color: 'black',
    paddingTop:75,


  },

  year: {
    textAlign: 'center',
  },

  
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    margin: 20,
    //color: '#ffffff',
    color: 'black',
    textAlign: 'center',
    
  },

 button: {
  height: 50,
  backgroundColor: 'grey',
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 4,
  justifyContent: 'center',
  marginBottom: 11,
  opacity: 0.3,

},


facebookRegisterButton: {
opacity: 0.80,
backgroundColor: '#3B5998',


},

standardRegisterButton: {

opacity: 0.7,
backgroundColor: '#ffffff',



},
signInButton: {
opacity: 0.7,
backgroundColor: '#ffffff',

},

openingHeader: {

  backgroundColor: '#FFAA00',


},
  
});