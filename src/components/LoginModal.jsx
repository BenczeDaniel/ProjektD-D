import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React,{useState} from "react";
import { checkUsername,login } from "./getData";
import {useMutation} from 'react-query';
import {useNavigate} from 'react-router-dom'

export const LoginModal=({loginmodal,setLoginModal}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isValidU, setIsValidU] = useState(null)
  const [isValidP, setIsValidP] = useState(null)
  const navigate=useNavigate()

  const toggle = () => setLoginModal(!loginmodal);

  const mutationCheckUsername=useMutation(checkUsername,{
    onSuccess:(data)=>{
      console.log(data.data.rowCount,data.data.username)
      if(data.data.rowCount==0)
        setIsValidU(false)
      else
        setIsValidU(true)
    }
  })

  const handleCheckUsername = () =>{
    if(username)
      mutationCheckUsername.mutate({username:username})
    else
      setIsValidU(false)
  }

  const mutationLogin=useMutation(login,{
    onSuccess:(data) =>{
      console.log(data.data)
      if(data.data?.error)
        setIsValidP(false)
      else{
        setIsValidP(true)
        const {username,email,id,avatar,avatar_id} = data.data
        setLoginModal({username:username,email:email,id:id,avatar:avatar,avatar_id:avatar_id})
        navigate('/')
      }
       
    }
  })

  return (
    <div>
      <Modal isOpen={loginmodal} fade={false} toggle={toggle}>
        <ModalHeader className='reg1' toggle={toggle}>Bejelentkezés</ModalHeader>
        <ModalBody className='reg2'>A bejelentkezési adatokat , kérem helyesen adja meg ! <br /> <br /> <br />

            <label className='logpanel2' for="username"><b>Felhasználónév:</b></label><br />
            <input className={isValidU==null ? "" : (isValidU ? "is-valid" : "is-invalid")}
            autoFocus
            value={username} onChange={(e)=>setUsername(e.target.value)}
            onBlur={handleCheckUsername}
            onKeyPress={(e)=>e.key=='Enter' ? document.getElementById("password").focus() : ''}/>
            <br />
            <label className='logpanel2' for="password"><b>Jelszó:</b></label><br />
            <input type="password" className= {isValidP==null ? "" : (isValidP ? "is-valid" : "is-invalid")}
            id="password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
            onKeyPress={(e)=>e.key=='Enter' ? document.getElementById("login").focus() : ''}/>
            <br />
        </ModalBody>
        <div>
        <Button disabled={!isValidU || !password} color="dark" className='loggomb'
        id="login"
        onClick={()=>mutationLogin.mutate({username:username, password:password})}
        >Bejelentkezés</Button>
      </div>
      </Modal>
    </div>
  );
}
