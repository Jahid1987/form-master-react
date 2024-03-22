import { useContext } from "react";
import { ContextName } from "./Grandpa";

const Myself = () => {
  const contextValue = useContext(ContextName);
  return (
    <div>
      <h3>Myself</h3>
      <p>{contextValue}</p>
    </div>
  );
};

export default Myself;
