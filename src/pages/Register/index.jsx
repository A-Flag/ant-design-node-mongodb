import React,{Component} from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import {actionCrators as registerActionCreators} from './store'
//引入css
import "./index.css"
//引入登陆与注册表单组件
// import LoginForm from "./LoginForm.jsx";
import RegisterForm from "../Register/RegisterForm.jsx";

class RegisterForm1 extends Component{

    render(){
        return(
            <div>
                <div>
                    <RegisterForm {...this.props}/>
                </div>
            </div>
        )
    }
    
}
const mapStateToProps = state =>{
    return {
        registerData:state.register
    };
}
const mapDispatchToProps = dispatch =>{
    return{
        registerFn:bindActionCreators(registerActionCreators,dispatch),
   
    };
}

 export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm1)
