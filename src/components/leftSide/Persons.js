import React, { useEffect, useState } from "react";
import DUMMYDATA, { personData } from "../../Data/DemoData";
import "./persons.css";
const Persons = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(personData);
    // console.log(personData);
  }, []);
  const chat=[...DUMMYDATA];
  const arr = data.map((ele) => {
    return (
      <div className="users" key={ele.id}>
        <img src={ele.img} className="list-image" />
        <span>{ele.name}</span>
        <span>{chat.filter((e)=>{
            console.log(ele.id==e.messages.from);
            return ele.id==e.messages.from
        }).length}</span>
      </div>
    );
  });
  return <div className="display-users">{arr}</div>;
};

export default Persons;
