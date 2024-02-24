import axios from "axios";



const BASE_URL = process.env.REACT_APP_BASEURL
//const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDQ4ZjNlYmRmMDYxNzA2M2NhNDI2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODk5MjEyMSwiZXhwIjoxNzAxNTg0MTIxfQ.BZVbvJOGpHrelAL3QhSgxvGvcCSoQyMKv4veNhu2FUw"
  
// const Token = JSON.parse(localStorage.getItem("user")).accessToken

const Token = () => {
    if(JSON.parse(localStorage.getItem("user")).accessToken){
       return JSON.parse(localStorage.getItem("user")).accessToken
    } else{
        return ""
    }
}
 
 
 
  console.log(Token)


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer${Token}`}
});