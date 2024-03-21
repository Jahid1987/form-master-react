import useInput from "../customHooks/useInput";
import useInput2 from "../customHooks/useInput2";

const ControlledForm = () => {
  const [name, setName] = useInput("");
  const changeEmail = useInput2("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, ", ", changeEmail.value);
    console.log({ ...changeEmail });
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={setName} type="text" name="name" /> <br />
          <input {...changeEmail} type="email" name="email" /> <br />
          <input type="password" name="password" /> <br />
          <input type="submit" value="Submit" /> <br />
        </form>
      </div>
    </div>
  );
};

export default ControlledForm;
