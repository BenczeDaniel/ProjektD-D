import React from 'react';
import { getCategory, getPrices , getOpening } from "./getData";
import bg from '../background/bg.mp4'
import { useQuery } from "react-query";
import ListGroup from 'react-bootstrap/ListGroup';


export const Admin = () => {
  const { data, status } = useQuery("category", getCategory,  'opening',getOpening); 


  

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
</div><ListGroup>
     {status == 'success' && data.data.map(obj=>(
       <ListGroup.Item className='list'>{obj.day}:      {obj.start}-{obj.end} </ListGroup.Item>
     ))
       }


      </ListGroup>
    </>
  );
};
