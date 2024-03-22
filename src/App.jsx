import "./App.css";
import Grandpa from "./Components/Context/Grandpa";
import ControlledForm from "./Components/ControlledForm";
// import Form from "./Components/Form";
// import RefForm from "./Components/RefForm";

function App() {
  return (
    <>
      <h1>Form Practice</h1>
      {/* <Form></Form> */}
      {/* <RefForm></RefForm> */}
      <ControlledForm></ControlledForm>
      <Grandpa></Grandpa>
    </>
  );
}

export default App;
