import axios from "../../src/utils/request";

/**
 * 登录接口
 */
 export function userlist(data){
    return axios.request({
        url: "/api/userlist",
        method: "get",
        params:data, // 请求类型为 post 时
        // params: data // 请求类型为 get 时
    })
}
export function deleteUserList(data){
    return axios.request({
        url: "/api/userlist/delete",
        contentType: "application/json; charset=utf-8",
        method: "post",
        data, // 请求类型为 post 时
        // params: data // 请求类型为 get 时
    })
}