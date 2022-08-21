import React from "react";
import style from "./filter.module.css";
import Checkbox from "../atom/filteritem";

function Filter({ setFilter }) {
  return (
    <>
      <div className={style.filter}>
        <row className="">
          <div className="col-lg-2 bg-white col sm-4 ">
            <div className="mx-2">
              <button
                className="mb-2"
                onClick={() => {
                  setFilter(false);
                }}
              >
                X
              </button>
              <h6>Transit</h6>
              <Checkbox label={"Direct"}></Checkbox>
              <Checkbox label={"Transit"}></Checkbox>
              <Checkbox label={"Transit 2+"}></Checkbox>
              <h6>Facilities</h6>
              {[
                {
                  label: "Luggage",
                },
                {
                  label: "In-flight meal",
                },
                {
                  label: "Wifi",
                },
              ].map((item, index) => (
                <Checkbox label={item.label} key={index} />
              ))}
              <h6>Departure Time</h6>
              {[
                {
                  label: "00:00 - 06:00",
                },
                {
                  label: "06:00 - 12:00t",
                },
                {
                  label: " 12:00 - 18:00",
                },
                {
                  label: " 18:00 - 20:00",
                },
              ].map((item, index) => (
                <Checkbox label={item.label} key={index} />
              ))}
              <h6>Time Arrived</h6>
              {[
                {
                  label: "00:00 - 06:00",
                },
                {
                  label: "06:00 - 12:00t",
                },
                {
                  label: " 12:00 - 18:00",
                },
                {
                  label: " 18:00 - 20:00",
                },
              ].map((item, index) => (
                <Checkbox label={item.label} key={index} />
              ))}
              <h6>Airlines</h6>
              {[
                {
                  label: "Garuda Indonesia",
                },
                {
                  label: "Air Asia",
                },
                {
                  label: " Lion Air",
                },
              ].map((item, index) => (
                <Checkbox label={item.label} key={index} />
              ))}
              <h6 className="mb-3">Range Price</h6>
              <form>
              </form>
            </div>
            <div className="footer d-flex justify-content-around">
              <button
                onClick={() => {
                  setFilter(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button>Filter</button>
            </div>
          </div>
        </row>
      </div>
    </>
  );
}

export default Filter;
