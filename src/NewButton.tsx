import { BaseSyntheticEvent } from "react";

function NewButton() {
  let count = 0;

  const handleClick = (e: BaseSyntheticEvent) => {
    console.log(e);

    if (count < 3) {
      count++;
      console.log(`you clicked me ${count} times`);
    } else {
      e.target.textContent = "STOP BRO";
      console.log(`stop clicking me`);
    }
  };

  //   const handleClickTwo = (name: string) => {
  //     console.log(name);
  //   };
  return <button onClick={handleClick}>Click Me</button>;
}

export default NewButton;
