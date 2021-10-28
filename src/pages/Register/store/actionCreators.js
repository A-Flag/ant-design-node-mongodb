import axios from 'axios';
export const registerAc = data => {
    return dispatch =>{
        return axios.post('/api/register',data)
        // return {
        //     type:'##'
        // }
    }
   
}