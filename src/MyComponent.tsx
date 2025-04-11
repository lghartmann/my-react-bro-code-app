import { BaseSyntheticEvent, useState } from "react";

function MyComponent() {
  const [user, setUser] = useState({ name: "Hartmann", age: 26 });

  const updateName = (e: BaseSyntheticEvent) => {
    setUser({ ...user, name: e.target.value });
  };

  const updateAge = (e: BaseSyntheticEvent) => {
    setUser({ ...user, age: e.target.value });
  };
  return (
    <div>
      <input
        type="text"
        value={user.name}
        onChange={(e) => updateName(e)}
      ></input>
      <p>Name: {user.name}</p>
      <br></br>
      <input
        type="number"
        value={user.age}
        onChange={(e) => updateAge(e)}
      ></input>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default MyComponent;
