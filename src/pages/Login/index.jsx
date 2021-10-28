import React,{Component} from "react";
import { connect } from "react-redux";

//引入登陆与注册表单组件
import { bindActionCreators } from "redux";
import {actionCrators as loginActionCreators} from './store'
import LoginForm from "./LoginForm.jsx";

// import RegisterForm from "../Register/RegisterForm.jsx";

class Login1 extends Component{
    // constructor(){
    //     super()
    //     this.state ={
    //         formType:"login"
    //     }
    // }
    // switchForm = (value) =>{
    //     this.setState({
    //         formType:value
    //     })  
    // }
      // // 路由跳转
            // this.props.history.push('/index');
  
    render(){
        console.log('loginActionCreators',loginActionCreators)
        return(
            <div>
                <div>
                    {/* {
                        this.state.formType ==='login'
                        ?<LoginForm switchForm={this.switchForm}/>
                        :<RegisterForm switchForm={this.switchForm}/>
                    } */}
                    <LoginForm  {...this.props}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    console.log('state',state)
    return {
        loginData:state.register
    };
}
const mapDispatchToProps = dispatch =>{
    return{
        loginFn:bindActionCreators(loginActionCreators,dispatch),
   
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Login1)
// export default Login