import React, { useState } from "react";


const useInput = (initialValue, validator) => {

  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    const result = validator(e.target.value);
    console.log(result)
    if (result.isValid) {
      setValue(e.target.value);
    } else {
      alert(result.message);
    }
  };

  return { value, onChange };
};

export default useInput;