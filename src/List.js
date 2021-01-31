import React from "react";
import ReactDOM from "react-dom";
const List = (props) => {
  let people = props.list;
  const [currentPeople, setPeople] = React.useState(people);
  const deleteAll = () => {
    setPeople([]);
    ReactDOM.render(
      <h2>No Birthdays Remaining</h2>,
      document.getElementById("root")
    );
  };
  return (
    <>
      {currentPeople.map((person) => {
        return (
          <div className="person">
            <img src={person.image} width="100px" alt="" />
            <h2>{person.name}</h2>
            <h3>{person.age}</h3>
          </div>
        );
      })}
      <br />
      <button onClick={deleteAll}>Clear All</button>
    </>
  );
};

export default List;
