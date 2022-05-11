import React from "react";

const Card = ({ cardIndex, data }) => {
  return (
    <div>
      {data[cardIndex].map((item) => (
        <div className="card">
          <p>Name:{item.name}</p>
          <p>Email:{item.email}</p>
          <p>Phone:{item.phone}</p>
          <p>City:{item.city}</p>
          <p>State:{item.state}</p>
          <p>Country:{item.country}</p>
          <p>Gender:{item.Gender}</p>
          <p>Additional Info:{item.additionalInfo}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
