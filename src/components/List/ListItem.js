import { useState } from "react";
import "./ListItem.css";

const ListItem = (props) => {
  const [lineOver, setLineOver] = useState(false);
  const lineOverHandler = () => {
    setLineOver(!lineOver);
  };

  const deleteItemHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li className="list-item">
      <p
        onClick={lineOverHandler}
        style={{
          textDecoration: !lineOver ? "none" : "line-through",
        }}
      >
        {props.text}
      </p>
      <button
        onClick={deleteItemHandler}
        className="list-item__button btn-grad"
      >
        Remove
      </button>
    </li>
  );
};

export default ListItem;
