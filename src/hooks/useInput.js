import React, { useState, useEffect } from "react";


const useTextField = (initState, verifyState) => {

  const [state, setState] = useState(initState);
  const [error, setError] = useState(null);
  const [didInit, setDidInit] = useState(false);

  useEffect(()=>{
    if(!didInit) { // 사용자가 입력하기 전 상태
      setError(null); // 입력 전까지는 error 미노출
      setDidInit(true); // state가 최초 변경되는 시점에 didInit true
    } else {
      setError(verifyState(state));
    }
  }, [state]);

  return [state, setState, error]
}

export default useTextField;