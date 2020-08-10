import React from "react";
import "./tableRow.css";

function Card(props) {
  return (
    <>
    <tr>
      <td><img src={props.image} className="card-img" alt={props.name.first}/></td>
      <td>{props.name.first}</td>
      <td>{props.name.last}</td>
      <td>{props.phone}</td>
      <td>{props.cell}</td>
      <td>{props.email}</td>
    </tr>
    </>
    );
}

export default Card;