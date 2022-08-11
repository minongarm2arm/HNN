import React, { useState } from "react";
import axios from "axios";
import CommonHeader from "../components/CommonHeader";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    nick: "",
    introduction: "",
  });

  const [password2, setPassword2] = useState("");

  const onChangeRePassword = (e) => {
    setPassword2(e.target.value);
  };

  const { email, password, nick } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(value);
  };

  const onRegistHandler = async () => {
    //비밀번호 일치 확인
    if (inputs.password !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (inputs.email && inputs.password && inputs.nick && password2) {
      await axios
        .post("http://try-eat.herokuapp.com/register", {
          ...inputs,
        })
        .then((res, rej) => {
          setInputs({
            email: "",
            password: "",
            nick: "",
          });
          navigate("/login");
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
          
          if (res.response.data === "Email already exists") {
            alert("가입된 이메일이 있습니다.");
            return;
          }

          if (res.response.data === "Email format is invalid") {
            alert("이메일 형식이 아닙니다.");
            return;
          } 

          if (res.response.data === "Password is too short") {
            alert("비밀번호는 4자리 이상 입력해주세요.");
            return;
          }
        });
    } else {
      alert("빈칸을 모두 채워주세요.");
    }
  };

  return (
    <div className={"auth-wrapper"}>
      <div className="auth-inner">
        <h1>회원가입</h1>
        <div>
          이메일
          <input
            name={"email"}
            value={email}
            type="text"
            onChange={onChange}
            placeholder={"example@example.com"}
          />
        </div>
        <div>
          비밀번호
          <input
            name={"password"}
            value={password}
            type="password"
            onChange={onChange}
            placeholder={"비밀번호 4자리 이상"}
          />
        </div>
        <div>
          재확인 비밀번호
          <input
            name={"password2"}
            value={password2}
            type="password"
            onChange={onChangeRePassword}
            placeholder={"비밀번호 재확인"}
          />
        </div>
        <div>
          닉네임
          <input
            name={"nick"}
            value={nick}
            type="text"
            onChange={onChange}
            placeholder={"닉네임"}
          />
        </div>
        <button className={"btn"} onClick={onRegistHandler}>
          회원가입하기
        </button>
      </div>
    </div>
  );
};

export default SignUp;
