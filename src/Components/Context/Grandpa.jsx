import { createContext } from "react";
import Auntie from "./Auntie";
import Dad from "./Dad";
import Uncle from "./Uncle";
import "./grandpa.css";

export const ContextName = createContext();
export const AssetContext = createContext();

const Grandpa = () => {
  return (
    <div className="grandpa">
      <h3>Grandpa</h3>
      <div className="grandpa flex">
        <AssetContext.Provider value="gold">
          <ContextName.Provider value="contextValue">
            <Dad></Dad>
            <Uncle></Uncle>
            <Auntie></Auntie>
          </ContextName.Provider>
        </AssetContext.Provider>
      </div>
    </div>
  );
};

export default Grandpa;
