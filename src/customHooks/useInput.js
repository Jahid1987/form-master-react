import { useState } from "react";

function useInput(defaultValue = null) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return [value, handleChange];
}

export default useInput;
