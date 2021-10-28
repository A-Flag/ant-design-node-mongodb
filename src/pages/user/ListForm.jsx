
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import axios from '../../utils/request'
import { userlist,deleteUserList } from "../../api/useList";
import { Table, Divider, Tag, Button,message,Popconfirm } from 'antd';
import "./ListForm.scss"
function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }
class ListForm extends Component {
    state ={
        userlist:[]
    }
    async componentDidMount(){
        userlist().then(response => {
            console.log('1',response.data)
            if(response.data.status===0){
                this.setState({
                    userlist:response.data.data
                })
            }else{
                message.error({
                    content: response.data.msg+'',
                    className: 'custom-class',
                    style: {
                      marginTop: '20vh',
                    },
                })
            }
           
        })
    }
     deleteOne = (id)=>{
         console.log('id',id)
         let param = {'id':id}
         confirm({
            title: '操作?',
            content: '删除该数据',
            okText: '确定',
            cancelText: '取消',
            /* 
            	* 官网文档写法
				onOk() {
			      console.log(this); // undefined
			    }
			*/
            onOk: () => {
               console.log('123')
            },
            onCancel() { },
        });

        //  deleteUserList(param).then(response => {
        //      console.log('12',response.data)
        //     if(response.data.status===0){
        //         message.success({
        //             content: response.data.msg+'',
        //             className: 'custom-class',
        //             style: {
        //               marginTop: '20vh',
        //             },
        //         })
        //         userlist().then(response => {
        //             console.log('1',response.data)
        //             if(response.data.status===0){
        //                 this.setState({
        //                     userlist:response.data.data
        //                 })
        //             }else{
        //                 message.error({
        //                     content: response.data.msg+'',
        //                     className: 'custom-class',
        //                     style: {
        //                       marginTop: '20vh',
        //                     },
        //                 })
        //             }
                   
        //         })
        //     }else{
        //         message.error({
        //             content: response.data.msg+'',
        //             className: 'custom-class',
        //             style: {
        //               marginTop: '20vh',
        //             },
        //         })
        //     }
        //  }).catch((err)=>{
        //     message.error({
        //         content: '服务异常',
        //         className: 'custom-class',
        //         style: {
        //           marginTop: '20vh',
        //         },
        //     })
        //  })
     }
    // confirm=(e)=> {
    //     console.log(e);
    //     message.success('Click on Yes');
    //   }
      
    // cancel=(e)=> {
    //     console.log(e);
    //     message.error('Click on No');
    //   }
   
	render() {
        let userlists = this.state.userlist;
        const columns = [
            {
              title: 'Username',
              dataIndex: 'username',
              key: 'username',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Id',
              dataIndex: '_id',
              key: 'id',
            },
            {
              title: 'Password',
              dataIndex: 'password',
              key: 'password',
            },
            {
                title: '操作',
                dataIndex: 'action',
                align: 'center' ,
                key: 'action',
                render: (text, record) => 
                <span>
                    <Button>修改</Button>
                    {/* <Popconfirm
                        title="Are you sure delete this task?"
                        onConfirm={confirm}
                        onCancel={this.cancel}
                        okText="Yes"
                        cancelText="No"
                    > */}
                        <Button style={{marginLeft:'4px'}} 
                        type="danger"  
                        onClick={()=>this.deleteOne(record._id)}
                        >
                            
                            删除
                        </Button>
                    {/* </Popconfirm> */}
                </span>
            }
        ]

        const data = userlists;
		return (
            <div>
                <div className="listHeader">
                    <Button className="addBtn" type="primary">新增</Button>
                </div>
                
                <Table columns={columns} dataSource={data} rowKey={data=>data._id}/>
            </div>
           
        
	  )
  }
}


export default ListForm;