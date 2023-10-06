import { useState } from "react";

const arr = [
  {
    id: "ar1",
    name: "Local Items",
  },
  {
    id: "ar2",
    name: "Under Shadow",
  },
  {
    id: "ar3",
    name: "Fake Views",
  },
];

// Delete Item when checked

const CheckBoxList = () => {
  const [list, setList] = useState([...arr]);
  const [checked, setChecked] = useState(false);

  const handleCheck = () => setChecked((prev) => !prev);

  const deleteItem = (id) => {
    const newArr = arr.filter((item) => item.id !== id);
    console.log(newArr);
    setList(newArr);
  };

  console.log(list);

  return (
    <section className="checkTodo">
      <div className="container">
        <h1>Checked ToDo List from array</h1>
        <ul className="list">
          {list.map((item) => (
            <li key={item.id} className="list-item">
              <input type="checkbox" id="check" onChange={handleCheck} />
              <span>{item.name}</span>
              <a href="#!" onClick={checked ? () => deleteItem(item.id) : null}>
                Delete
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CheckBoxList;
