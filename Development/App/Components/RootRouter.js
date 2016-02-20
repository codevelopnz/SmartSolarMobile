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
    closeControlPanel: function(){
        this.refs.drawer.close()
    },

    openControlPanel: function(){
        this.refs.drawer.open()
    },
   
    componentDidMount: function(){
        InteractionManager.runAfterInteractions(() => {
          this.setState({isReady: true});
        });
        var that =this;
        AppDispatcher.register(function(payload){
            switch (payload.actionType) {
                case 'Navigate':
                    that.closeControlPanel();
                    that.refs.navigator.push(
                    {
                    component: payload.component,
                    sceneConfig: Navigator.SceneConfigs.FadeAndroid
                })
            break;
                case 'Back' :
                    that.refs.navigator.pop()
            break;
                case 'Open' :
                    that.openControlPanel()
            break;
            }
      });
        console.log(AppDispatcher);
    },
    render: function() {
        return (
             <Drawer
                ref="drawer"
                type="overlay"
                openDrawerOffset={50} 
                panCloseMask={1} 
                styles={{
                    drawer: {
                        shadowColor: "#000000",
                        shadowOpacity: 0.8,
                        shadowRadius: 0,                    
                        backgroundColor: '#7ACECC'
                    }
                }}
                tweenHandler={(ratio) => {
                    return {
                        drawer: { shadowRadius: Math.min(ratio*5*5, 5) },
                        main: { opacity:(2-ratio)/2 },
                    }
                }}
                content={ <ControlPanel close=
                    { this.closeControlPanel }/> }
                >                
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
            </Drawer>
        );
    }
});


module.exports = Router;