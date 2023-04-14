import React from "react";
import { useState } from 'react';
import { UpdateAr } from './UpdateAr';
import bg from "../background/bg.mp4";
import { getCategory, getPrices, deleteAr, } from "./getData";
import { useQuery,useQueryClient,useMutation } from "react-query";


export const UpdatePrices = () => {
  
  const [arItem,setArItem] =useState({});
  const [modalAr,setModalAr] = useState(false);
  const { data, status } = useQuery("category", getCategory);
  const clientQuery = useQueryClient()

  const mutationDelete = useMutation(deleteAr,{
    onSuccess:()=>{
      clientQuery.invalidateQueries("category")
    }
  })
  status=="success" && console.log(data.data)

  



    const handleAr = (item)=>{
      console.log(item)
      setArItem(item)
      setModalAr(true)
    }

    console.log("aritem:",arItem)

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
        <h1 className="text-center text-white">Árak</h1>
      </div>

    

      <div className="list1">
        <div className="xhold holder bg-white ">
          <div align="center">Kategória</div>
          <div align="center">Diák</div>
          <div align="center">Felnőtt</div>
          <div align="center">Törlés</div>
          <div align="center">Módosítás</div>
        </div>
        {status == "success" &&
          data.data.map((obj) => (
            <div className="holder" key={obj.id}>
              <div align="center">{obj.description} </div>
              <div align="center">{obj.kedvezmenyesar}-FT </div>
              <div align="center">{obj.Egeszar}-FT </div>
              <div align="center"><i onClick={()=> mutationDelete.mutate(obj.priceid)} class="text-danger fa-regular fa-trash-can"></i></div>
              <div align="center"><i onClick={()=>handleAr(obj) } class="text-warning fa-solid fa-pen-to-square"></i></div>
            </div>
          ))}
        </div>
        <UpdateAr className="adminmodal1" {...arItem} setArItem={setArItem} modalAr={modalAr} setModalAr={setModalAr} ></UpdateAr>

    </div>

    </>
  );
};
