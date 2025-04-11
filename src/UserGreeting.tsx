type UserGreet = {
  isLoggedIn: boolean;
  name: string;
};

function UserGreeting(props: UserGreet) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome, {props.name}</h2>
  );
  const loginMessage = (
    <h2 className="log-in-message">Please Login, {props.name}</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginMessage;
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome, {props.name}</h2>;
  //   }
  //   return <h2>Please Login, {props.name}</h2>;
}

export default UserGreeting;
