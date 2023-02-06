import React from "react";

const DropdownButton = ({name,className}) => {
  return (
    <div className={`btn-group ${className}`}>
      <button className="btn btn-sm dropdown-toggle d-flex justify-content-between align-items-center"type="button"data-bs-toggle="dropdown"aria-expanded="false">{name}</button>
      <ul class="dropdown-menu  rounded-1 px-2">
        <li>menu</li>
      </ul>
    </div>
  );
};

export default DropdownButton;
