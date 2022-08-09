import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    email:"",
    password:""
  })

  const {email,password} = inputs
  const onChange = (e) => {
    const {value, name} = e.target
    setInputs({
      ...inputs,
      [name]:value
    })
    console.log(value)
  }

  const onLoginHandler = async () => {
    console.log(inputs)
    await axios.post("http://localhost:3001/login", {
      ...inputs
    }).then(navigate("/"))
  }

  return (
    <div>
      <input name={"email"} value={email} type="text" onChange={onChange} placeholder={"이메일"}/>
      <input name={"password"} value={password} type="text" onChange={onChange} placeholder={"비밀번호"}/>
      <div>
        {inputs.email},
        {inputs.password}
      </div>
      <button onClick={onLoginHandler}>로그인</button>
    </div>
  )
}

export default Login