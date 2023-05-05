import { useState } from "react";
import "./App.css";
import ClassDummy from "./components/ClassDummy";
import User from "./components/User";

function App() {
  //creating a state
  const [username, setUser] = useState("");
  const getUser = () => {
    if (username) {
      alert(`Username: ${username}`);
    } else {
      alert("Enter a value");
    }
  };
  return (
    <>
      <h1 className="text-center text-primary mt-3">React!!</h1>
      <h3>Components</h3>
      <ul>
        <li>
          Functional Comps
          <br />- Ex:
          <b>
            <User />
          </b>
        </li>
        <li>
          Class Based Comps
          <br />- Ex:
          <b>
            <ClassDummy />
          </b>
        </li>
      </ul>
      <h3>State: Used to store data and share it to other Components (parent to child)</h3>
      <div className=" d-flex justify-content-center mt-5">
        <form className=" d-flex justify-content-between border p-3 ">
          <input type="text" placeholder="Enter your Username" className="form-control me-3" onChange={(event) => setUser(event.target.value)} />
          <button className="btn btn-primary" onClick={getUser}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
