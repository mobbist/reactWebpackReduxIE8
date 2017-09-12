require('es5-shim');
require('es5-shim/es5-sham');
//require('console-polyfill');
//require("babel-polyfill");
const React = require("react")
const ReactDOM = require("react-dom")


//兼容Promise 

//redux相应引用
const configureStore = require("./utils/store");
const  { Provider } =  require('react-redux');
const  Container = require("./index/index.container");
class Entry extends React.Component{
    constructor(...args){
        super(...args);
    }
    
    render(){
        return (
            <Provider store={configureStore}>
                <Container />
            </Provider>
        )
    }
}

ReactDOM.render(<Entry />,document.getElementById("content"));