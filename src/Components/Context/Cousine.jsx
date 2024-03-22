import PropTypes from "prop-types";
const Cousine = ({ name }) => {
  return (
    <div>
      <h3>{name ? name : "No name"}</h3>
    </div>
  );
};
Cousine.propTypes = {
  name: PropTypes.string,
};
export default Cousine;
