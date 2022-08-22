import React from "react";

function Checkbox(props) {
  const { label: labelInput, type, placeholder } = props;

  return (
    <>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">
          {labelInput}
        </label>
      </div>
    </>
  );
}

export default Checkbox;
