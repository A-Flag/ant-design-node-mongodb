import './index.css'
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import decode from 'jwt-decode'
import { Button,Row,Col,Form, Icon, Input, Checkbox,message} from 'antd';

class NormalLoginForm extends Component {
    state ={
        userInfo:{
            username:"",
            password:""
        }
    }
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
        const { data } = await this.props.loginFn.loginAc(this.state.userInfo)
        if(data.status===0){
            message.success({
                content: data.msg+'',
                className: 'custom-class',
                style: {
                  marginTop: '20vh',
                },
            },[0]);
            //存储token放到本地
            localStorage.setItem('@#@TOKEN',data.token);
            //同步用户状态和用户信息到redux
            this.props.loginFn.syncInfoAc(decode(data.token));
             //跳转首页
             setTimeout(()=>{
                this.props.history.push('/Index');
             },2000)
             
            return
        }
        message.error({
            content: data.msg+'',
            className: 'custom-class',
            style: {
              marginTop: '20vh',
            },
        })
    }
    componentDidMount(){
    }
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
                        <h2 className="loginTitle">登陆</h2>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item name="l1">
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                id="username"
                                name="username"
                                onChange={this.handleChange}
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item  name="l2">
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                onChange={this.handleChange}
                                id="password"
                                name="password"
                                placeholder="Password"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item  name="l3">
                                <div className="otherFunc">
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(<Checkbox>Remember me</Checkbox>)}
                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                </div>
                            <Button type="primary" htmlType="submit" className="loginBtn">
                                Log in
                            </Button>
                             
                            </Form.Item>
                            <Link to={"/register"} >去注册!</Link> 
                        </Form>
                    </div>
                </Col>
            </Row>
            
        </div>
	  )
  }
}


const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;