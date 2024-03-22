import { useContext } from "react";
import { ContextName } from "./Grandpa";

const Myself = () => {
  const [value, setValue] = useContext(ContextName);
  return (
    <div>
      <h3>Myself</h3>
      <p>{value}</p>
      <button onClick={() => setValue("new value")}>change value</button>
    </div>
  );
};

export default Myself;
