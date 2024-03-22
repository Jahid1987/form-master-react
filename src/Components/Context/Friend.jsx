import PropTypes from "prop-types";
import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const Friend = ({ name = "Unknown Friend" }) => {
  const gift = useContext(AssetContext);
  return (
    <>
      <p>
        {name} <b>{name === "Friend 1" ? gift : ""}</b>
      </p>
    </>
  );
};
Friend.propTypes = {
  name: PropTypes.string,
};
export default Friend;
