import Cousine from "./Cousine";
import Friend from "./Friend";
import "./grandpa.css";
const Uncle = () => {
  return (
    <div>
      <h3>Uncle</h3>
      <Friend />
      <div className="grandpa flex">
        <Cousine name="Rahim"></Cousine>
        <Cousine name="Kariim"></Cousine>
      </div>
    </div>
  );
};

export default Uncle;
