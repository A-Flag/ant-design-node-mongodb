import React, { Component } from "react";
import { Popover, Button,Avatar } from 'antd';
// antd icon
import { MenuFoldOutlined } from "@ant-design/icons";
//css 
import "./aside.scss";
class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: props.collapsed
        };
    }
    // 生命周期，监听父级 props 的值变化
    componentWillReceiveProps({ collapsed }){
        this.setState({
            collapsed
        })
    }
    toggleMenu = () => {
        this.props.toggle();
    }
    logout = () =>{
        console.log('123')
        localStorage.removeItem('@#@TOKEN')
        window.location.href = '/login'
        
    }
    render(){
        const { collapsed } = this.state;
        console.log('collapsed',this.state,this.props)
        const text = <span>Title</span>;
        const content = (
        <div className="personal-hover">
            <p>修改密码</p>
            <p>修改信息</p>
            <p onClick={this.logout}>退出登陆</p>
        </div>
        );
        return (
            <div className={collapsed ? "collapsed-close" : ""}>
                <h1 className="logo"><span>测试系统平台</span></h1>
                <div className="header-wrap">
                    <span className="collapsed-icon" onClick={this.toggleMenu}><MenuFoldOutlined /></span>
                    {/* <span style={{float:"right",cursor:"pointer"}}>设置</span> */}
                    <span style={{float:"right",cursor:"pointer"}}>
                        <Popover placement="bottom" content={content} trigger="click">
                        {/* <Button>个人中心</Button> */}
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </Popover>
                    </span>
                    
                </div>
               
            </div>
        )
    }
}

export default Index;