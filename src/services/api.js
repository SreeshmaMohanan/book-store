import { commonAPI } from "./commonAPI"
import { serverUrl } from "./serverUrl"

//register
export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${serverUrl}/user/register`,user,"")

}
//login
export const loginAPI = async (user) =>{
    return  await commonAPI('POST', `${serverUrl}/user/login`, user, "")
    }

    //add book
    export const addBookApi = async (reqBody,reqHeader) =>{
        return await commonAPI('POST', `${serverUrl}/book/add`, reqBody ,reqHeader);
    
    }