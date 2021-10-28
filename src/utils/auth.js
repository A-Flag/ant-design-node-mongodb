import React from "react";
import { connect } from "react-redux";
import {nanoid} from 'nanoid'

export default function(Comp){
    class Auth extends React.Component{
        componentDidMount(){
            if(this.props.isAuth===false){
                //提示请登录
            }
            this.props.history.push('/login')
        }
        render(){
            return <Comp {...this.props}/>
        }
    }
    const mapStateToProps = state=>{
        return {
            isAuth:state.login.isAuth
        }
    }
    return connect(mapStateToProps)(Auth)

}