var React = require('react-native');
var Drawer = require('react-native-drawer');

var AppDispatcher = require('./../Dispatcher/AppDispatcher');
var ControlPanel = require('./ControlPanel');
var styles = require('./../Styles/style');
var Login = require('./../Components/Login');
var Button = require('./../Components/Button');

var {  
    Navigator,
    InteractionManager
} = React;



var Router = React.createClass({
   
    componentDidMount: function(){
        InteractionManager.runAfterInteractions(() => {
          this.setState({isReady: true});
        });
        var that =this;
        AppDispatcher.register(function(payload){
            switch (payload.actionType) {
                case 'Navigate':
                    that.refs.navigator.push(
                    {
                    component: payload.component,
                    sceneConfig: Navigator.SceneConfigs.FadeAndroid
                })
            break;
                case 'Back' :
                    that.refs.navigator.pop()
            break;
            }
      });
        console.log(AppDispatcher);
    },
    render: function() {
        return (
                           
                <Navigator
                    ref='navigator'
                    initialRoute={{name: 'Login', component: Login}}
                    configureScene={() => {
                        return Navigator.SceneConfigs.FloatFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        console.log(route); 

                        if (route.component) {
                            return React.createElement(route.component, { navigator });
                        }
                    }}
                />
            
        );
    }
});


module.exports = Router;