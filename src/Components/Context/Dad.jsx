import Brother from "./Brother";
import Myself from "./Myself";
import "./grandpa.css";
const Dad = () => {
  return (
    <div>
      <h3>Dad</h3>
      <div className="grandpa flex">
        <Myself></Myself>
        <Brother></Brother>
      </div>
    </div>
  );
};

export default Dad;
