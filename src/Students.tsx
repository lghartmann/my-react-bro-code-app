type StudentProp = {
  name: string;
  age: number;
  isStudent: boolean;
};

function Student(props: StudentProp) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student;
