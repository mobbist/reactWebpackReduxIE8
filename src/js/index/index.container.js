
const React = require("react");
const {connect} = require('react-redux');
const {bindActionCreators} = require('redux');
const actions = require('./index.action');
function matchStateToProps(state) {
    return {
      state: state.indexReducer
    }
  }
  function matchDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch);
  }

class Container extends React.Component{
    constructor(...args){
        super(...args);
    }
    clickFun(){
        this.props.testFun();
    }
    render(){
        let {name} = this.props.state
        return (
            <div className="div1"
             onClick={this.clickFun.bind(this)}>
            {this.props.state.name}
             </div>
        )
    }
}
module.exports= connect(matchStateToProps,matchDispatchToProps)(Container);