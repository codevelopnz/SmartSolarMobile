/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
	textInput: {
		height: 51, 
		backgroundColor: 'transparent',
		color: 'rgba(109, 110, 133, 0.6)',
		paddingLeft: 32,
        fontSize: 16
	},
	bg : {
		backgroundColor: '#ffffff',
		flex: 1,
		justifyContent: 'center',
		padding: 0
	},
	loginLogo: {
		width: 100,
	},
	background: {
        flex: 1,
        resizeMode: 'stretch'
    },
	logo: {
		marginBottom: 60,
		marginTop: 0,
		alignSelf: 'center',
		width: 94,		
		height: 94,		
		resizeMode: 'stretch'
	},
	navbar: {
		borderBottomColor: 'transparent',
	},
    forgotPassword: {
        bottom: 24,
        position: 'absolute',
        marginBottom: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        left: 0,
        right: 0
    },
    bigButton: {
      marginTop: 10  
    },
    smllButton: {
        marginTop: 16,
    },
    buttonBordered: {
        fontSize: 10,
        padding: 12
    },
	border: {
		alignSelf: 'stretch',
		position: 'relative',										
		borderColor: 'rgba(109, 110, 133, 0.6)',
		borderBottomWidth: 0.5,
		borderTopWidth: 0.5,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		marginTop: 0,
		marginRight: 0,
		marginLeft: 0,
		height: 51
	},
    borderTop: {
		alignSelf: 'stretch',
		position: 'relative',										
		borderColor: 'rgba(109, 110, 133, 0.6)',
		borderBottomWidth: 0,
		borderTopWidth: 0.5,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		marginTop: 0,
		marginRight: 0,
		marginLeft: 0,
		height: 51
	},
    
});
