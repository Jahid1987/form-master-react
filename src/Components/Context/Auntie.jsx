import Cousine from "./Cousine";

const Auntie = () => {
  return (
    <div>
      <h3>Auntie</h3>
      <div className="grandpa flex">
        <Cousine name="Jorina" />
        <Cousine name="Sokhina" />
      </div>
    </div>
  );
};

export default Auntie;
