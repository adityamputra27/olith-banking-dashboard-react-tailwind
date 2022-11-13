import React from "react";
import {
  IoMdWater,
  IoMdCheckbox,
  IoIosClipboard,
  IoMdStar,
  IoMdNotifications,
} from "react-icons/io";

export default function TransactionList() {
  const today = [
    {
      name: "Water Bill",
      status: "Unsuccessfully",
      price: "- $280",
    },
  ];

  const yesterday = [
    {
      name: "Income: Salary Oct",
      status: "pending",
      price: "+ S1200",
    },
    {
      name: "Electric Bill",
      status: "success",
      price: "- $480",
    },
    {
      name: "Income : Jane transfers",
      status: "pending",
      price: "+ $500",
    },
    {
      name: "Internet Bill",
      status: "warning",
      price: "- $100",
    },
  ];

  const bgColor = (status) => {
    switch (status) {
      case "success":
        return "bg-blue-500";
        break;
      case "pending":
        return "bg-teal-400";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-red-500";
        break;
    }
  };

  const icons = (status) => {
    switch (status) {
      case "success":
        return <IoMdCheckbox color="white" />;
        break;
      case "pending":
        return <IoIosClipboard color="white" />;
      case "warning":
        return <IoMdStar color="white" />;
      default:
        return <IoMdNotifications color="white" />;
        break;
    }
  };

  return (
    <section>
      <div className="mt-11">
        <h3>Today</h3>
        <div>
          {today.map((val, index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-center border-b border-b-gray-200 py-3"
              >
                <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <IoMdWater color="white" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-medium">{val.name}</div>
                  <div className="text-sm">{val.status}</div>
                </div>
                <div className="text-red-600">{val.price}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-6">
        <h3>Yesterday</h3>
        <div>
          {yesterday.map((val, index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-center border-b border-b-gray-200 py-3"
              >
                <div
                  className={`h-10 w-10 rounded-lg flex items-center justify-center mr-3 ${bgColor(
                    val.status
                  )}`}
                >
                  {icons(val.status)}
                </div>
                <div className="flex-1">
                  <div className="text-lg font-medium">{val.name}</div>
                  <div className="text-sm">{val.status}</div>
                </div>
                <div className="text-red-600">{val.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
