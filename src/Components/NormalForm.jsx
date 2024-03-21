const Form = () => {
  function handleSubmit(e) {
    console.log(e);
    console.log("submit");
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <input type="text" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
