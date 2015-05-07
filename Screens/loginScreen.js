'use strict'
var LinearGradient = require('react-native-linear-gradient');
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Navigator,
} = React;
var styles = require('./styles');

var UserLogin = React.createClass({

	render: function(){

	return(
		<View style={styles.outerContainer}>
		<View style={styles.headContainer}>
		<Image 
			style={styles.dodoIcon}
			source={{isStatic:true, uri: '/Users/joe/Desktop/Dodo/Images/dodo.png'}}
			/>
		</View>
		<View style={styles.bodyContainer}>
		<TouchableHighlight onPress={this.handlePress} style={[styles.button,styles.facebookRegisterButton]}>
			<Text style={styles.buttonText}>Register with Facebook</Text>
		</TouchableHighlight>
		<TouchableHighlight onPress={this.handlePress} style={[styles.button,styles.standardRegisterButton]}>
			<Text style={styles.buttonText}>Register with Email</Text>
		</TouchableHighlight>
		<TouchableHighlight onPress={this.handlePress} style={[styles.button,styles.signInButton]}>
			<Text style={styles.buttonText}>Sign In</Text>
		</TouchableHighlight>
		</View>
		</View>

		);

	},
handlePress: function(){

console.log("button press");	

},


});



module.exports = UserLogin