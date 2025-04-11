type Fruit = {
  fruit: string;
  calories: number;
};
type Props = {
  items: Fruit[];
  category?: string;
};

function List({ items, category = "salve" }: Props) {
  const listItems = items.map((f, i) => (
    <li key={`${f.fruit}${i}`}>
      Fruit: {f.fruit} Calories: {f.calories}
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-item">{listItems}</ul>
    </>
  );
}

export default List;
