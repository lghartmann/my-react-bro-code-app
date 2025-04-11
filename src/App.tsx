import Button from "./Button";
import Card from "./Card";
import ColorPicker from "./ColorPicker";
import Counter from "./Counter";
import List from "./List";
import MyComponent from "./MyComponent";
import NewButton from "./NewButton";
import Student from "./Students";
import TodoList from "./TodoList";
import UserGreeting from "./UserGreeting";

function App() {
  const fruits = [
    { fruit: "apple", calories: 15 },
    { fruit: "pineapple", calories: 15 },
    { fruit: "strawberry", calories: 15 },
    { fruit: "watermelon", calories: 15 },
  ];

  const steaks = [
    { fruit: "picanha", calories: 350 },
    { fruit: "alcatra", calories: 290 },
    { fruit: "costela", calories: 420 },
    { fruit: "fraldinha", calories: 260 },
  ];
  return (
    <>
      <TodoList />
      <br></br>
      <br></br>
      <br></br>
      <ColorPicker />
      <br></br>
      <br></br>
      <br></br>
      <MyComponent />
      <br></br>
      <br></br>
      <br></br>
      <Counter />
      <NewButton />
      {fruits.length && <List items={fruits} />}

      {steaks.length && <List items={steaks} />}
      <UserGreeting isLoggedIn={true} name="Hartmann" />
      <UserGreeting isLoggedIn={false} name="Isabella" />
      <Card />
      <Student name="Lucas" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Card />
      <Card />
      <Card />
      <Button />
    </>
  );
}

export default App;
