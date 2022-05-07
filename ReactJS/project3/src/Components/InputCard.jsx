import { useState } from "react";
import "./InputCard.css";

const InputCard = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const userNameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    const userData = {
      id: Math.random().toString(),
      name: username,
      age: age,
    };
    props.onAddUser(userData);

    setUsername("");
    setAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="userInput">
        <div className="userInputs">
          <label>UserName</label>
          <input
            type="text"
            onChange={userNameChangeHandler}
            value={username}
          />
        </div>
      </div>

      <div className="userInput">
        <div className="userInputs">
          <label>Age (Years)</label>
          <input type="number" onChange={ageChangeHandler} value={age} />
        </div>
      </div>

      <button type="submit" onClick={submitHandler} className="btn">
        Add User
      </button>
    </form>
  );
};

export default InputCard;
