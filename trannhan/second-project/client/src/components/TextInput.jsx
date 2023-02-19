import React from "react";

export default function TextInput() {
  return (
    <div className="fui-input-label-animation inline-block relative">
      <input
        type="text"
        className="form-input border border-solid border-gray-900 rounded-md w-full p-4"
        placeholder=" "
      />
      <label htmlFor="name" className="form-label">
        Name
      </label>
    </div>
  );
}
