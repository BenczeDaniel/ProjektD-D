import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useQuery, useQueryClient , useMutation } from 'react-query';
import { getUsers , updateUser } from './getData';

export const UpdateModal = ({ id,role,modal,setModal,setUpdateItem }) => {

    //const { data, status } = useQuery("users", getUsers); 
    const clientQuery = useQueryClient();
    const [newRole,setNewRole ] = useState(role)
  const toggle = () => setModal(!modal);

  const mutationUpdate=useMutation(updateUser,{
    onSuccess:()=>{
      clientQuery.invalidateQueries("users");
      setNewRole(null)
      setUpdateItem({})
      toggle()
    }
  })

  console.log(role)

  return (
    <div >
      <Modal  isOpen={modal} toggle={toggle}>
        <ModalHeader className='adminmodal2 'toggle={toggle}>Jelenlegi role : {role}</ModalHeader>
        <ModalBody className='adminmodal1'>
          <form className='role'> Add meg az új role-t :  <input type="text"  value={newRole} contentEditable onChange={(e)=>setNewRole(e.target.value)}/></form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={()=>mutationUpdate.mutate({id,role:newRole})}>
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
