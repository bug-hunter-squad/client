import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import useSWR, { useSWRConfig } from "swr";
import Axios from "axios"
import { useDispatch } from "react-redux";
import { ADD_AIRLINE } from "../../../redux/admin";

const AirlinesInfo = () => {
  const dispatch = useDispatch();
  const { mutate } = useSWRConfig();

  const { admin } = useSelector((state) => state);
  let valueAdmin;
  if (admin?.buttonAirline?.buttonAirline === null) {
    return (valueAdmin = "");
  } else {
    valueAdmin = admin.buttonAirline?.buttonAirline;
  }
  const [display, setDisplay] = React.useState(valueAdmin ? valueAdmin : false);
  const fetcherData = async () => {
    const response = await Axios.get("http://localhost:8500/airlines");
    return response.data.data;
  };

  const DeleteAirline = async (id) => {
    await Axios.delete(`http://localhost:8500/airlines/${id}`);
    mutate("airline");
  };

  const { data } = useSWR("airline", fetcherData);
  if (!data)
    return (
      <div
        className="spinner-border text-primary position-absolute top-50 start-50"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );

   
    const handleAddAirline =() => {
      dispatch({
        type: ADD_AIRLINE,
        payload: {
          addAirline: true,
        },
      });
    };

  return (
    <>
      <div className={display? "d-block" : "d-none"}>
        <h5 className="text-center">Airlines Workspaces</h5>
        <button type="button" className="btn btn-warning btn-add"
        onClick={handleAddAirline}>
          ADD
        </button>
        <div className="container table-flight">
          <table className="table table-striped table-inverse table-responsive table-bordered ">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Logo</th>
                <th>PIC</th>
                <th>PIC Number</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.airline_name}</td>
                  <td>
                    <img src={item.airline_logo} width={50} height={50} />
                  </td>
                  <td>{item.airline_pic}</td>
                  <td>{item.airline_pic_phone_number}</td>
                  <td>
                    <p
                      className={
                        item.airline_status === "active"
                          ? "status-active"
                          : "status-deactive"
                      }
                    >
                      {item.airline_status}
                    </p>
                  </td>
                  <td className="d-flex gap-2">
                    <Link href={`/airlines/${item.id}`}>
                      <a>
                        <button type="button" className="btn btn-danger">
                          Update
                        </button>
                      </a>
                    </Link>
                    <button type="button" className="btn btn-success"
                     onClick={() => DeleteAirline(item.id)}
                     >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AirlinesInfo;
