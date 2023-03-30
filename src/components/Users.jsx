import React from 'react'
import bg from '../background/bg.mp4'
import { useState } from 'react';
import { useQuery,useQueryClient,useMutation } from 'react-query'
import {getUsers,delUser} from "./getData";
import { UpdateModal } from './UpdateModal';




export const  Users=()=> {
    const { data, status } = useQuery("users", getUsers); 

    const [updateItem,setUpdateItem] =useState({});
    const clientQuery = useQueryClient();
    const [modal,setModal] = useState(false);



    const handleUpdate = (item)=>{
      console.log(item)
      setUpdateItem(item)
      setModal(true)
    }
    

    const mutationDel=useMutation(delUser,{
      onSuccess:()=>{
        clientQuery.invalidateQueries("users");
      }
    })

    return (
        <>
          <video
            autoPlay
            loop
            muted
            style={{
              zIndex: "-1",
            }}
          >
            <source src={bg} type="video/mp4" />
          </video>
    <div className="holderMain">
          <div >
            <h1 className="text-center text-white">Felhasználók</h1>
          </div>
    
        
    
          <div className="list8">
            <div className="xhold holder bg-white ">
              <div align="center">Felhasználónév</div>
              <div align="center">Email</div>
              <div align="center">Rang</div>
              <div align="center">Törlés</div>
              <div align="center">Modosítás</div>
            </div>
            {status == "success" &&
              data.data.map((obj) => (
                <div className="holder" key={obj.id}>
                  <div align="center">{obj.username} </div>
                  <div align="center"> {obj.email}</div>
                  <div align="center"> {obj.role}</div>
                  <div  align="center" onClick={()=>mutationDel.mutate(obj.id)}><i class="text-danger fa-regular fa-trash-can"></i></div>
                  <div  align="center" onClick={()=>handleUpdate(obj) } ><i class="text-warning fa-solid fa-pen-to-square"></i></div>
                </div>
              ))}
    
    
    
          </div>
          <UpdateModal className="adminmodal1" {...updateItem} setUpdateItem={setUpdateItem} modal={modal} setModal={setModal} ></UpdateModal>
          </div>

        

    </>
    
    


    
  )
}


