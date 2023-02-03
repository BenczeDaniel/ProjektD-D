import React, { useState } from "react";
import { FileDrop } from "./FileDrop";
import { useMutation } from "react-query";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import { updateAvatar,changePassword } from "./getData";
import { Button,Spinner } from "reactstrap"
import { MyModal } from "./MyModal";
import bg from '../background/bg.mp4'


export const UserProfile = ({ loggedInUser, setLoggedInUser }) => {
  const [selFile, setSelFile] = useState({});
  const [msg, setMsg] = useState("");
  const [ isUploading, setIsUploading ] = useState(false);
  const [modal, setModal] = useState(false);
  const [newPw,setNewpw] = useState("");



  const mutationAvatar = useMutation(updateAvatar, {
    onSuccess: (data) => {
      console.log(data.data.msg);
      setMsg(data.data.msg);
      setLoggedInUser({
        ...loggedInUser,
        avatar: data.data.avatar,
        avatar_id: data.data.avatar_id,
      });
      setIsUploading(false);
    },
  });

  const handleUpdateAvatar = () => {
    const formdata = new FormData()
    formdata.append("selFile", selFile)
    formdata.append("username", loggedInUser.username)
    formdata.append("avatar_id", loggedInUser.avatar_id)
    setIsUploading(true)
    mutationAvatar.mutate(formdata)
  };

const handleDelete = ()=>{
  setModal(true)
}



const handleChangePw=() => {
console.log('új jelszó',newPw)
mutationChangePw.mutate({username:loggedInUser.username ,password:newPw})

}

const mutationChangePw = useMutation(changePassword, {
  onSuccess: (data) => {
    console.log(data.data.msg);
    setMsg(data.data.msg);
    
  }
});


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










    <div className="profile mt-3">
      <h3 className="textfiok p-2  text-center">Saját fiók beállításai </h3>
      <br />
      <div className="email row    p1">
        <span className="col-2">Email:</span>
        <span className="col-10">{loggedInUser.email}</span>
      </div>
      <Form className="myform p-2 m-2 shadow">
        <FormGroup row>
          <Label for="pw" sm={12}>
            Új jelszó
          </Label>
          <Col sm={8}>
            <Input id="pw" name="password" type="password" value={newPw} onChange={(e)=>setNewpw(e.target.value)} />
          </Col>
          <Col sm={4}>
            <Input
            className="csere"
              type="button"
              disabled={!newPw || newPw.length<6}
              value="Jelszó csere"
              onClick={handleChangePw}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <FileDrop setSelFile={setSelFile} />
        </FormGroup>
        <FormGroup row className="justify-content-center">
          {!isUploading ? (
            <Input
              type="button"
              className="btn w-50 m-1 btn-success"
              value="Kép modosítása"
              disabled={!selFile.name}
              onClick={handleUpdateAvatar}
            />
          ) : (
            <Button color="primary" className="w-50" disabled>
              <Spinner size="sm">Feltőltés...</Spinner>
              <span> Feltőltés</span>
            </Button>
          )}

          <Input
            type="button"
            className="btn w-50 m-1 btn-danger"
            onClick={handleDelete}
            value="Fiók törlése"
          />
        </FormGroup>
        <div className="msg text-center ">{msg}</div>
      </Form>
      {modal && <MyModal modal={modal} setModal={setModal} setLoggedInUser={setLoggedInUser} username={loggedInUser.username} avatar_id={loggedInUser.avatar_id}/>}
    </div>
    </>
  );
};
