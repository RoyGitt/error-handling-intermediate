import "./List.css";
import ListItem from "./ListItem";
const List = (props) => {
  return (
    <ul className="list">
      {props.listData.map((data) => {
        return (
          <ListItem
            id={data.id}
            key={data.id}
            text={data.text}
            onDelete={props.onDelete}
          />
        );
      })}
    </ul>
  );
};
export default List;
