import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useQuery, useQueryClient , useMutation } from 'react-query';
import { getUsers , updateAr } from './getData';

export const UpdateAr = ({ id,kedvezmenyesar,modalAr,setModalAr,setArItem }) => {

    //const { data, status } = useQuery("users", getUsers); 
    const clientQuery = useQueryClient();
    const [newkedvezmenyesar,setNewkedvezmenyesar ] = useState(kedvezmenyesar)
  const toggle = () => setModalAr(!modalAr);

  const mutationUpdate=useMutation(updateAr,{
    onSuccess:()=>{
      clientQuery.invalidateQueries("prices");
      setNewkedvezmenyesar(null)    
      setArItem({})
      toggle()
    }
  })

  console.log(kedvezmenyesar)

  return (
    <div >
      <Modal  isOpen={modalAr} toggle={toggle}>
        <ModalHeader className='adminmodal2 'toggle={toggle}>Jelenlegi Diák ára : {kedvezmenyesar}</ModalHeader>
        <ModalBody className='adminmodal1'>
          <form className='kedvezmenyesar'> Add meg az új Diák árat :  <input type="text"  value={newkedvezmenyesar} contentEditable onChange={(e)=>setNewkedvezmenyesar(e.target.value)}/></form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={()=>mutationUpdate.mutate({id,kedvezmenyesar:newkedvezmenyesar})}>
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
