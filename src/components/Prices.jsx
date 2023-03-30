import React from "react";
import bg from "../background/bg.mp4";
import { getCategory, getPrices } from "./getData";
import { useQuery } from "react-query";

export const Prices = () => {
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
          <div>Kategória</div>
          <div>Diák</div>
          <div>Felnőtt</div>
        </div>
        {status == "success" &&
          data.data.map((obj) => (
            <div className="holder" key={obj.id}>
              <div>{obj.description} </div>
              <div>{obj.kedvezmenyesar}-FT </div>
              <div>{obj.Egeszar}-FT </div>
            </div>
          ))}
      </div>
</div>
    </>
  );
};
