import React from "react";

export default function Card(props) {
  return (
    <div
      className={`rounded-xl ${props.bgColor} bg-opacity-10 px-5 py-7 w-36 ${props.txtColor} space-y-4`}
    >
      <div>{props.icon}</div>
      <div>{props.label}</div>
    </div>
  );
}
