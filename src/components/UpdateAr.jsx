import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useQuery, useQueryClient , useMutation } from 'react-query';
import { getCategory, getUsers , updateAr } from './getData';

export const UpdateAr = ({ id,kedvezmenyesar,modalAr,setModalAr,setArItem,Egeszar }) => {

    const { data, status } = useQuery("category", getCategory); 
    const clientQuery = useQueryClient();
    const [newkedvezmenyesar,setNewkedvezmenyesar ] = useState(kedvezmenyesar)
    const [ newEgeszar,setnewEgeszar ] = useState(Egeszar)
  const toggle = () => setModalAr(!modalAr);

status=='success'&& console.log("category",data.data)


  const mutationUpdate=useMutation(updateAr,{
    onSuccess:()=>{
      clientQuery.invalidateQueries("category");
      setNewkedvezmenyesar(null)    
      setnewEgeszar(null) 
      setArItem({})
      toggle()
    }
  })


  return (
    <div >
      <Modal  isOpen={modalAr} toggle={toggle}>
        <ModalHeader className='adminmodal2 'toggle={toggle}></ModalHeader>
      
        <ModalBody className='adminmodal1'>
          <span>Jelenlegi Felnőtt ár : {Egeszar} </span>
          <form className='kedvezmenyesar'> Add meg az új Felnőtt árat :  <input type="text"  value={newkedvezmenyesar} 
          contentEditable onChange={(e)=>setNewkedvezmenyesar(e.target.value)}/></form>
        </ModalBody>
        <ModalBody className='adminmodal1'> <span>Jelenlegi Diák ára : {kedvezmenyesar}</span>
          <form className='kedvezmenyesar'> Add meg az új Diák árat : <input type="text" value={newEgeszar} 
         contentEditable onChange={(e)=>setnewEgeszar(e.target.value)} /> </form>
        </ModalBody>

        <ModalFooter>
          <Button color="success" onClick={()=>mutationUpdate.mutate({id,kedvezmenyesar:newkedvezmenyesar,Egeszar:newEgeszar})}>
           Update
          </Button>{' '}
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

   
    </div>
  );
}
