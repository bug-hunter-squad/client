import React from "react";
import useSWR, { useSWRConfig } from "swr";
import Axios from "axios";
import Link from "next/link"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as Type from "../../../redux/admin/type"


const FlightInfo = () => {
  const { mutate } = useSWRConfig();
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state)
  let valueAdmin;
  if (admin?.buttonFlight?.buttonFlight === null) {
    return (valueAdmin = "");
  } else {
    valueAdmin = admin?.buttonFlight?.buttonFlight;
  }

  const [display, setDisplay] = React.useState(valueAdmin ? valueAdmin : false)
  const handleAddFlight =()=>{
    dispatch({
      type: "ADD_FLIGHT",
      payload: {
        addFlight: true,
      }
    })
  }

  const fetcher = async () => {
    const response = await Axios.get(
      "https://bug-hunter-squad.herokuapp.com/flight"
    );
    return response.data.flightInformation;
  };

  const DeleteFlight = async (flightId) => {
    await Axios.delete(
      `https://bug-hunter-squad.herokuapp.com/flight/${flightId}`
    );
    mutate("flight");
  };

  const { data } = useSWR("flight", fetcher);
  if (!data)
    return (
      <div
        className="spinner-border text-primary position-absolute top-50 start-50"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  return (
    <>
      <div className={display? "d-block" : "d-none"}>
        <div>
                <h5 className="mt-1">Flight Information</h5>
        <button
          type="button"
          className="btn btn-warning btn-add"
          onClick={handleAddFlight}
        >
          ADD
        </button>
        </div>
  
        <div className="container table-flight">
          <table className="table table-striped table-inverse  p-2 table-responsive table-bordered ">
            <thead className="thead-inverse">
              <tr>
                <th>ID Flight </th>
                <th>Original</th>
                <th>Destination</th>
                <th>Gate</th>
                <th>Terminal</th>
                <th>Price</th>
                <th>Time</th>
                <th>Ticket Child</th>
                <th>Ticket Adult</th>
                <th>Depature Time</th>
                <th>Arival Time</th>
                <th>Wifi</th>
                <th>Meal</th>
                <th>Luggage</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((flight, index) => (
                <tr key={index}>
                  <td>{flight.flightId}</td>
                  <td>{flight.flightOriginal}</td>
                  <td>{flight.flightDestination}</td>
                  <td>{flight.flightGate}</td>
                  <td>{flight.flightTerminal}</td>
                  <td>{flight.flightPrice}</td>
                  <td>{flight.flightTime}</td>
                  <td>{flight.totalChildTicket}</td>
                  <td>{flight.totalAdultTicket}</td>
                  <td>{flight.flightDeparture}</td>
                  <td>{flight.flightArrival}</td>
                  <td>
                    <p
                      className={
                        flight.wifi === true ? "wifi-true" : "wifi-false"
                      }
                    >
                      {flight.wifi ? "true" : "false"}
                    </p>
                  </td>
                  <td>
                    <p
                      className={
                        flight.meal === true ? "meal-true" : "wifi-false"
                      }
                    >
                      {flight.meal ? "true" : "false"}
                    </p>
                  </td>
                  <td>
                    <p
                      className={
                        flight.luggage === true ? "luggage-true" : "wifi-false"
                      }
                    >
                      {flight.luggage ? "true" : "false"}
                    </p>
                  </td>
                  <td className="d-flex gap-2">
                    <Link href={`/flight/${flight.flightId}`}>
                      <a>
                        <button type="button" className="btn btn-danger">
                          update
                        </button>
                      </a>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => DeleteFlight(flight.flightId)}
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

export default FlightInfo;
