import React from "react";

function Checkbox(props) {
  const { label: labelInput, type, placeholder } = props;

  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label className="form-check-label" for="defaultCheck1">
          {labelInput}
        </label>
      </div>
    </>
  );
}

export default Checkbox;
