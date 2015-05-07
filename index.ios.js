/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


var REQUEST_URL = 'https://maps.googleapis.com/maps/api/place/search/json?location=33.7167,73.0667&radius=500&type=restaurant&sensor=false&key=AIzaSyDN1QX-gWUR-mIYo_D21PNFLHHpNQkIkGU';
var Router = require('react-native-router');
var React = require('react-native');
var loginScreen = require('./Screens/loginScreen');
var styles = require('./Screens/styles.js');

var {
  AppRegistry,
  Image, 
  StyleSheet,
  Text,
  View,
} = React;


var mainApp = React.createClass({

  getInitialState: function() {
    return {
      results: null,
    };
  },

componentDidMount: function(){
  this.fetchData();
},

fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          results: responseData.results,
        });
        console.log(responseData.results);
      })
      .done();
  },


render: function() {
   return (
    <View style={styles.outerContainer}>
    <View style={styles.container}>
    <Card results={this.state.results}/>
    </View>
    </View>
  );

  },

});

var Card = React.createClass({

render: function(){
  if(!this.props.results)
    return this.renderLoadingView();
   
   var restaurant = this.props.results[0];
   return this.renderPlace(restaurant);
},

renderLoadingView: function(){
    return(
      <View style={styles.container}>
      <Text> Loading restaurant </Text>
      </View>

      );

  },
  
renderPlace: function(place){
    return(
      <View style={styles.card}>
        <Image 
        source = {{uri: place.icon}} 
        style = {styles.thumbnail}
        />
     <View style={styles.rightContainer}>
     <Text style ={styles.title}> {place.name} </Text>
     <Text style={styles.title}> {place.rating} </Text>
     </View>
    </View>
    );
},


});

var firstRoute= {
  name: "login!",
  component: loginScreen

};

var DoDo = React.createClass({

  render: function(){
    return(
        <Router headerStyle={styles.openingHeader}firstRoute={firstRoute}/>
        );

  }

});



AppRegistry.registerComponent('dodo', () => DoDo);
