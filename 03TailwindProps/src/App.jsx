import "./App.css";

function App({ MyName = "Kamal", LastName }) {
  return (
    <>
      <div>
        <h1>{MyName}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, rem!{" "}
        </p>
        <h2>{LastName}</h2>
      </div>
    </>
  );
}

export default App;
