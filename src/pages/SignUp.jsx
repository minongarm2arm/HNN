import React, {useState} from "react";
import axios from "axios";

const SignUp = () => {
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

  const onRegistHandler = async () => {
    console.log(inputs)
    await axios.post("http://localhost:3001/register", {
      ...inputs
    })
  }

  return (
    <div>
      <input  name={"email"} value={email} type="text" onChange={onChange} placeholder={"이메일"}/>
      <input  name={"password"} value={password} type="text" onChange={onChange} placeholder={"비밀번호"}/>
      <div>
        {inputs.email},
        {inputs.password}
      </div>
      <button onClick={onRegistHandler}>회원가입</button>
    </div>
  )
}

export default SignUp