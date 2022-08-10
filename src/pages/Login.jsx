import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import CommonHeader from "../components/CommonHeader";

const Login = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })

  const {email, password} = inputs
  const onChange = (e) => {
    const {value, name} = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
    console.log(value)
  }

  const onLoginHandler = async () => {
    console.log(inputs)
    await axios.post("http://localhost:3001/login", {
      ...inputs
    }).then(()=> {
      
      navigate("/")
    }).catch((res)=> {
      if (res.response.data === "Cannot find user") {
        alert("유효하지 않은 이메일입니다.")
        return
      }
      if (res.response.data === "Incorrect password") {
        alert("잘못된 비밀번호입니다.")
        return
      }
      if (res.response.data === "Password is too short") {
        alert("잘못된 비밀번호입니다.")
        return
      }
    })
  }

  return (
    <div>
      <h2>로그인</h2>
      <div>
        <input name={"email"} value={email} type="text" onChange={onChange} placeholder={"이메일"}/>
      </div>
      <div>
        <input name={"password"} value={password} type="text" onChange={onChange} placeholder={"비밀번호"}/>
      </div>
      <button onClick={onLoginHandler}>로그인</button>
      <button onClick={()=> {
        navigate("/signup")
      }}>회원가입</button>
    </div>
  )
}

export default Login