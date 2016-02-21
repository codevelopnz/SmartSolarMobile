var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

var styles = StyleSheet.create({
 
    container: {
      flex: 1,
       backgroundColor: '#fff',
    },
   
    transparent: {
        marginTop: 70,
        padding: 15,
        backgroundColor: 'transparent',
        flex: 1
        
    },
    bg : {
      backgroundColor: '#fff',
      flex: 1,
    },
    verticalCenter: {
      justifyContent: 'center'
    },
    name: {
        color: 'rgba(255, 255, 255, 1)',
        flex: 1,
        fontSize: 15
    },
    subject: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 12
    },
    time: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 11,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flex: 2,
    },
    message: {
        color: 'rgba(255, 255, 255, 1)',
        marginTop: 12,
        flexWrap: 'wrap',
        fontSize: 12
    },
    background: {        
        flex: 1,
    },
     sidebar: {
        padding: 10,
        paddingTop: 30,
     },
     link: {
        backgroundColor: 'transparent',
        padding: 5,
        borderColor: '#eeeeee',
        borderWidth:1,
        borderColor: 'transparent',
     },
    controlPanel: {
      flex: 1,
      backgroundColor:'#326945',
    },
    controlPanelText: {
      color:'white',
    },
    linkText: {
      fontSize: 20,
      color: '#fff'
    },
    logo: {
      color: '#fff',
      fontSize: 25,
      textAlign: 'center',
      marginTop: -50
    },
     desc: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10
    },
    controlPanelWelcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 25,
      color:'white',
      fontWeight:'bold',
    },
   
    sliderMetric: {
      right:10,
      width:30,
    },
    slider: {
      width: 150,
      height: 10,
      margin: 10,
    },

    button: {
      backgroundColor: '#EF6C00',
      padding: 15,
      borderColor: '#EF6C00',
      borderWidth:1,
      borderBottomColor: '#EF6C00',
      marginRight:0,
      marginLeft:0,
      alignSelf: 'center',
      marginTop: 10
    },
    buttonFull: {
      backgroundColor: '#EF6C00',
      padding: 15,
      borderColor: '#EF6C00',
      borderWidth:1,
      borderBottomColor: '#EF6C00',
      marginRight:0,
      marginLeft:0,
      alignSelf: 'center',
      marginTop: 10
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 24
    },
    buttonOpen: {
        backgroundColor: '#fff',
        borderColor: '#EF6C00',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10
    },
    buttonTextOpen: {
        color: '#EF6C00',
        alignSelf: 'center',
        fontSize: 24
    },
    buttonBordered: {
        height: 50.5,
        fontSize: 16,
        padding: 20,
    },
    buttonLink: {
        alignSelf: 'stretch',
        marginLeft: 0,
        marginRight: 0,
        padding: 20,
        height: 50,
    },
    buttonTextLink: {
        textAlign: 'center',
        color: '#6D6E85',
        fontSize: 12
        
    }
});

module.exports= styles;