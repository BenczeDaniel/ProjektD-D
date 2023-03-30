import React from "react";
import bg from "../background/bg.mp4";
import { getCategory, getPrices } from "./getData";
import { useQuery } from "react-query";

export const UpdatePrices = () => {
  const { data, status } = useQuery("category", getCategory);

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
              <div align="center"><i class="text-danger fa-regular fa-trash-can"></i></div>
              <div align="center"><i class="text-warning fa-solid fa-pen-to-square"></i></div>
            </div>
          ))}
      </div>
</div>
    </>
  );
};
