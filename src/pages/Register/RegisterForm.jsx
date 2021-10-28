// import './index.css'
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import { Button,Row,Col,Form, Icon, Input, Checkbox,message} from 'antd';
// import qs from "querystring"
// import api from '../../api'

class NormalLoginForm extends Component {
    state ={
        userInfo:{
            username:'',
            password:'',
            passwordConfirm:'',
        },
    };
    handleChange =e =>{
        this.setState({
            userInfo:{
                ...this.state.userInfo,
                [e.target.name]:e.target.value
            }
        })
    };
    handleSubmit = async e => {
        e.preventDefault();
        const { data } = await this.props.registerFn.registerAc(this.state.userInfo)
        if(data.status===0){
            message.success({
                content: data.msg+'',
                className: 'custom-class',
                style: {
                  marginTop: '20vh',
                },
            });
        }else{
            message.error({
                content: data.msg+'',
                className: 'custom-class',
                style: {
                  marginTop: '20vh',
                },
            });
        }
    }
    componentDidMount(){}
	render() {
        const { getFieldDecorator } = this.props.form;
		return (
        <div  className="setwh">
            <Row className="setwh">
                <Col span={15}>
                    <div className="setwh gray">
                        <img className="loginBackground" src="./svg/log.svg"></img>   
                    </div>
                </Col>
                <Col span={9}>
                    <div className="liginBox">
                        <h2 className="loginTitle">注册</h2>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item name="l1">
                            {getFieldDecorator('username', {
                                rules: [
                                    { required: true, message: 'Please input your username!' },
                                    { min: 6, message: '请输入至少6位数字或字母' }
                                ],
                            })(
                                <Input
                                id="username"
                                name="username"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={this.handleChange}
                                placeholder="Username"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item  name="l2">
                            {getFieldDecorator('password', {
                                rules: [
                                    { required: true, message: 'Please input your Password!' },
                                    { min: 6, message: '请输入至少6位数字或字母' }
                                ],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={this.handleChange}
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item  name="l3">
                                {getFieldDecorator('passwordConfirm', {
                                    rules: [
                                        { required: true, message: 'Please input your PasswordConfirm!' },
                                        { min: 6, message: '请输入至少6位数字或字母' }
                                    ],
                                })(
                                    <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    onChange={this.handleChange}
                                    placeholder="passwordConfirm"
                                    id="passwordConfirm"
                                    name="passwordConfirm"
                                    />,
                                )}
                            </Form.Item>
                           <Button type="primary" htmlType="submit" className="loginBtn">
                                注册
                            </Button>
                            
                            {/* <Button onClick={this.toLogin}>去登陆!</Button> */}
                           
                        </Form>
                        <Link to={"/login"} >去登陆!</Link> 
                    </div>
                </Col>
            </Row>
            
        </div>
	  )
  }
}


const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;