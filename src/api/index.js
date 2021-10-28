import {httpGet} from "../utils/http"
import base from "./base"

const api = {
    getChengpin(){
        return httpGet(base.ownUrl + base.chengpin)
    },
    getLogin(){
        return httpGet(base.ownUrl + base.login)
    }
}
export default api