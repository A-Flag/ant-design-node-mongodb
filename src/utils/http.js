/**
 * get post
 */

import qs from 'querystring'

export function httpGet(url){
    const resulte = fetch(url);
    return resulte;
}

export function httpPost(url,params){
    const resulte = fetch(url,{
        method:"POST",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept':'application/json,text/plain,*/*'
          },
          //法2
          body:qs.stringify(params)
    });
    return resulte;
}