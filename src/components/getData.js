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

export const delUser= async (id)=>{
    console.log("getdata: ",id)
    const response = await axios.get(url+'/auth/deleteUser/'+id)
    return response
}

export const deleteAr= async (id)=>{
    console.log("getdata:Ar ",id)
    const response = await axios.get(url+'/gym/deletePrices/'+id)
    return response
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
    console.log(url+'/gym/category')
    const response = await axios.get(url+'/gym/category')
    return await response
}

export const getTrainings= async ()=>{
    console.log(url+'/gym/trainings')
    const response = await axios.get(url+'/gym/trainings')
    return await response
}


export const getUsers= async ()=>{
    console.log(url+'/gym/users')
    const response = await axios.get(url+'/gym/users')
    return await response
}


export const updateUser =    async (formdata) =>{
    const response = await axios.post(url+'/auth/update',formdata);
    return response
}

export const updateAr =    async (formdata) =>{
    console.log(formdata)
    const response = await axios.post(url+'/auth/updateprices',formdata);
    return response
}