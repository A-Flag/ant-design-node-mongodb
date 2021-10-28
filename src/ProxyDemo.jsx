import React from "react";
// https://music.taihe.com/v1/tracklist/list?sign=41803430ce7506a180d23ac7f310426b&subCateId=2377&pageSize=50&appid=16073360&timestamp=1632711158
/**
 * 跨域解决方案
 * 开发模式下
 *  利用环境解决：
 * 生产模式下
 * jsonp cors postMessage
 */
export default class ProxyDome extends React.Component{
    componentDidMount(){
        fetch('/api/students')
        .then(res=>res.json())
        .then(data =>{
            console.log('poxx---',data)
        })
    }
    render(){
        return(
            <div>
                proxydemo123
            </div>
        )
    }
}
    
