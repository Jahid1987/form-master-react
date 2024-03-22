import PropTypes from "prop-types";
import { useContext } from "react";
import { ContextName } from "./Grandpa";
const Cousine = ({ name }) => {
  const [value, setValue] = useContext(ContextName);
  return (
    <div>
      <h3>{name ? name : "No name"}</h3>
      {name === "Rahim" ? (
        <>
          <p>{value}</p>{" "}
          <button onClick={() => setValue("another value")}>Set value</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
Cousine.propTypes = {
  name: PropTypes.string,
};
export default Cousine;
