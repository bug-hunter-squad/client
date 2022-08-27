import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import useSWR, { useSWRConfig } from "swr";
import Axios from "axios"
import { useDispatch } from "react-redux";
import { ADD_COUNTRY } from "../../../redux/admin";

const CountryInfo = () => {
  const dispatch = useDispatch();
  const { mutate } = useSWRConfig();
  const { admin } = useSelector((state) => state);
  let valueAdmin;
  if (admin?.buttonCountry?.buttonCountry === null) {
    return (valueAdmin = "");
  } else {
    valueAdmin = admin.buttonCountry?.buttonCountry;
  }
  const [display, setDisplay] = React.useState(valueAdmin ? valueAdmin : false);
  const fetcherCountry = async () => {
    const response = await Axios.get("http://localhost:8500/country");
    
    return response.data;
  };

  const DeleteCountry = async (id) => {
    await Axios.delete(`http://localhost:8500/country/${id}`);
    mutate("country");
  };

  const { data } = useSWR("country", fetcherCountry);
  if (!data)
    return (
      <div
        className="spinner-border text-primary position-absolute top-50 start-50" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
    const handleAdd =() => {
      dispatch({
        type: ADD_COUNTRY,
        payload: {
          addCountry: true,
        },
      });
    };


  return (
    <>
      <div className={display? "d-block" : "d-none"}>
        <h2 className="text-center">Country Information</h2>
        <button type="button" className="btn btn-warning btn-add"
        onClick={handleAdd}>
          ADD
        </button>
        <div className="container table-flight border ">
          <table className="table table-striped table-inverse table-responsive table-bordered ">
            <thead className="thead-inverse">
              <tr>
                <th>ID</th>
                <th>City</th>
                <th>Country</th>
                <th>Image Country</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                  <td>
                    <Image src={item.country_img_url} width={50} height={50} />
                  </td>
                  <td>
                    <Link href={`/country/${item.id}`}>
                      <a>
                        <button type="button" className="btn btn-danger m-1">
                          Update
                        </button>
                      </a>
                    </Link>
                    <button type="button" className="btn btn-success m-1"
                      onClick={() => DeleteCountry(item.id)}>
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

export default CountryInfo;
