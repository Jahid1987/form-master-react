import { createContext, useState } from "react";
import Auntie from "./Auntie";
import Dad from "./Dad";
import Uncle from "./Uncle";
import "./grandpa.css";

export const ContextName = createContext("default value");
export const AssetContext = createContext("gold");

const Grandpa = () => {
  const [value, setValue] = useState("value");

  return (
    <div className="grandpa">
      <h3>Grandpa</h3>
      <div className="grandpa flex">
        <ContextName.Provider value={[value, setValue]}>
          <Dad></Dad>
          <Uncle></Uncle>
          <Auntie></Auntie>
        </ContextName.Provider>
      </div>
    </div>
  );
};

export default Grandpa;
