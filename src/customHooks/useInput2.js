import { useState } from "react";

function useInput2(defaultValue = null) {
  const [value, setValue] = useState(defaultValue);
  function onChange(event) {
    setValue(event.target.value);
  }

  return { value, onChange };
}

export default useInput2;
