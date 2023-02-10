import axios from 'axios';
let url=""




export const checkOpening =    async (formdata) =>{
    const response = await axios.get(url+'/auth/checkOpening',formdata);
    return await response
}


export const checkUsername =    async (formdata) =>{
    const response = await axios.post(url+'/auth/checkUsername',formdata);
    return await response
}

export const login =    async (formdata) =>{
    const response = await axios.post(url+'/auth/login',formdata);
    return await response
}

export const checkEmail =    async (formdata) =>{
    const response = await axios.post(url+'/auth/checkEmail',formdata);
    return await response
}

export const register =    async (formdata) =>{
    const response = await axios.post(url+'/auth/register',formdata);
    return await response
}

export const updateAvatar =    async (formdata) =>{
    const response = await axios.put(url+'/auth/updateAvatar',formdata,
        {header:
            {"Content-Type" : "multipart/form-data"
        }
    }
    );
    return await response
}

export const deleteUser= async (formdata)=>{
    console.log("getdata: ",formdata)
    const response = await axios.delete(url+'/auth/deleteUser',{data:formdata})
    return await response
}

export const changePassword= async (formdata)=>{
    console.log("getdata: ",formdata)
    const response = await axios.put(url+'/auth/changePassword',formdata)
    return await response
}


export const getOpening= async ()=>{
    const response = await axios.get(url+'/gym/opening')
    return await response
}
export const getPrices= async ()=>{
    const response = await axios.get(url+'/gym/prices')
    return await response
}
export const getCategory= async ()=>{
    const response = await axios.get(url+'/gym/category')
    return await response
}
