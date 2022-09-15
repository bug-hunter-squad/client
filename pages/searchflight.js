import style from "../styles/SearchFlight.module.css";
import { ArrowLeftRight } from "react-bootstrap-icons";
import { ArrowsFullscreen } from "react-bootstrap-icons";
import { MdFlightTakeoff } from "react-icons/md";
import { ChevronLeft } from "react-bootstrap-icons";
import { BsArrowClockwise, BsTruckFlatbed } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import React from "react";
import { useSelector } from "react-redux";
// import { useMediaQuery } from "react-responsive";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import * as Type from "../redux/searchFlight/type";
import * as Tipe from "../redux/filter/type";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Container, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function SearchFlight() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { auth, search } = useSelector((state) => state);

  const [go, setGo] = React.useState("");
  let [count, setCount] = React.useState(0);
  let [countChild, setCountChild] = React.useState(0);
  const [date, setDate] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [targetDestination, setTargetDestination] = React.useState("");
  const [facility, setFacility] = React.useState("");
  const [navigation, setNavigation] = React.useState(false);
  const [trip, setTrip] = React.useState("");
  const [oneWay, setOneWay] = React.useState(false);
  const [roundWay, setRoundWay] = React.useState(false);
  const [dataCountry, setDataCountry] = React.useState([]);
  const [loadDestination, setLoadDestination] = React.useState(true);
  const [countryOriginal, setCountryOriginal] = React.useState("");
  const [countryDestination, setCountryDestination] = React.useState("");

  React.useEffect(() => {
    setGo(search?.keyword?.keyword);
    getDestination();
  }, []);

  const getDestination = async () => {
   await  axios
      .get("/api/country")
      .then((res) => {
        setDataCountry(res?.data);
        setLoadDestination(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFrom = async (e) => {
    let data = e.target.value;
    let find = data.search(':');
    let cut = data.slice(find+1)
    setCountryOriginal(cut)
    let result  = data.slice(0,find)
    setFrom(result);
  };
  const handleDestination = async (e) => {
    let data = e.target.value;
    let find = data.search(':');
    let cut = data.slice(find+1)
    setCountryDestination(cut);
    let result  = data.slice(0,find)
    setTargetDestination(result);

  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  function incrementCount(e) {
    e.preventDefault();
    count = count + 1;
    setCount(count);
  }
  function decrementCount(e) {
    e.preventDefault();
    if(count <= 0){
      count = count
    }else{
       count = count - 1;
    }
    setCount(count);
  }
  function incrementCounts(e) {
    e.preventDefault();
    countChild = countChild + 1;
    setCountChild(countChild);
  }
  function decrementCounts(e) {
    e.preventDefault();
    if(countChild <= 0){
      countChild = countChild
    }else{
      countChild = countChild - 1;
    }
    setCountChild(countChild);
  }

  const handleMove = (e) => {
    e.preventDefault();
    setNavigation(true);
  };
  const handleMove1 = (e) => {
    e.preventDefault();
    setNavigation(false);
  };
  const moveTrip = (e) => {
    e.preventDefault();
    setTrip("one-trip");
    setOneWay(true);
    setRoundWay(false);
  };

  const moveTrip2 = (e) => {
    e.preventDefault();
    setTrip("roud-trip");
    setOneWay(false);
    setRoundWay(true);
    Swal.fire({
      title: 'Sorry features will be coming soon',
      width: 389,
      icon: "info",
    });
  };

  const handleClassType =(e) =>{
    e.preventDefault();
    const values = e.target.value;
    setFacility(values)
    if(values === 'economy'){
       dispatch({
      type: Tipe.SET_WIFI,
      payload:{
        wifi: false
      }
    })
       dispatch({
      type: Tipe.SET_MEAL,
      payload:{
        meal: true
      }
    })
       dispatch({
      type: Tipe.SET_LUGGAGE,
      payload:{
        luggage: false
      }
    })
    }
    if(values === 'business'){
      dispatch({
        type: Tipe.SET_WIFI,
        payload:{
          wifi: true
        }
      })
         dispatch({
        type: Tipe.SET_MEAL,
        payload:{
          meal: true
        }
      })
         dispatch({
        type: Tipe.SET_LUGGAGE,
        payload:{
          luggage: false
        }
      })
    }
    if(values === 'first class'){
      dispatch({
        type: Tipe.SET_WIFI,
        payload:{
          wifi: true
        }
      })
         dispatch({
        type: Tipe.SET_MEAL,
        payload:{
          meal: true
        }
      })
         dispatch({
        type: Tipe.SET_LUGGAGE,
        payload:{
          luggage: true
        }
      })
    }
   
  }


  const flightSearch = (e) => {
    e.preventDefault();
    if(from === '' || from === null ){
      Swal.fire({
        title: 'Please fill in the Original from',
        width: 389,
        icon: "info",
      });
    }else{
      dispatch({
        type: Type.SET_FROM,
        payload: {
          from: from,
        },
      })
    }
    if(targetDestination === '' || targetDestination === null){
      Swal.fire({
        title: 'Please fill in the Destination',
        width: 389,
        icon: "info",
      });
    }else{
      dispatch({
        type: Type.SET_TO,
        payload: {
          to: targetDestination,
        },
      });
    }
    if(trip === '' || trip === null){
      Swal.fire({
        title: 'Please fill in the Trip',
        width: 389,
        icon: "info",
      });
    }else{
      dispatch({
        type: Type.SET_WAY,
        payload: {
          way: trip,
        },
      });
    }
    if(date === null || date === ''){
      Swal.fire({
        title: 'Please fill in the Date',
        width: 389,
        icon: "info",
      });
    }else{
      dispatch({
        type: Type.SET_DATE,
        payload: {
          date: date,
        },
      });
    }
    if(countChild === null && count === null || countChild === 0 &&count === 0){
      Swal.fire({
        title: 'Please fill in the number of  passengers',
        width: 389,
        icon: "info",
      });
    }else{
      dispatch({
        type: Type.SET_CHILD,
        payload: {
          child: countChild,
        },
      });
      dispatch({
        type: Type.SET_ADULT,
        payload: {
          adult: count,
        },
      });
    }
    if(facility === null || facility === ''){
      Swal.fire({
        title: 'Please fill in the flight type',
        width: 389,
        icon: "info",
      });
    }else{
      dispatch({
      type: Type.SET_FACILITY,
      payload: {
        facility: facility,
      },
    });
    }
    if(from && targetDestination && trip && date  && facility){
      router.push("/result")
    }
    

    
    
  }
  return (
    <>
      <Container className="mobile">
        <div className=" mx-auto col-sm">
          <div className={style.container}>
            <div
              className={style.card}
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "264px",
              }}
            >
              <img
                className={style.card}
                src="/assets/img/overlay.png"
                alt="Logo"
                width="100%"
                height={264}
              />
              <div className="card-img-overlay">
                <div className="d-flex mx-3 mb-5 justify-content-between text-white">
                  <div className="p-2 mt-2">
                    <Link href="/" className="cursor">
                      <ChevronLeft className="fs-3" />
                    </Link>
                  </div>
                  <div className="p-2 justify-content-end mt-2">
                    <ArrowsFullscreen className="fs-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={flightSearch}>
            <div className="container w-100 h-100 d-flex flex-row justify-content-center">
              <div className="continer-flight container ">
                <h3 className="card-title">Destination</h3>
                <div className="row row-cols-1">
                  <div className="card mx-auto col col-destination shadow">
                    <div className="row row-col-3 p-2 d-flex flex-row col-five">
                      <div className="col-5 overflow-hidden">
                        <small className=".fs6 text-from">From</small>
                        <select className="col-datalist" onChange={handleFrom}>
                          {loadDestination ? (
                            <>
                              <Skeleton height={80} />
                            </>
                          ) : (
                            <>
                              {dataCountry.map((item, index) => (
                                <option key={index} value={`${item.id}:${item.country}`}>
                                  {item.city}
                                </option>
                              ))}
                            </>
                          )}
                        </select>
                        <small className=".fs6">{countryOriginal? countryOriginal : "Original"}</small>
                      </div>
                      <div className="col-2 col-arrow ">
                        {navigation ? (
                          <ArrowLeftRight onClick={handleMove1} />
                        ) : (
                          <ArrowLeftRight onClick={handleMove} />
                        )}
                      </div>
                      <div className="col-5">
                        <small className=".fs6 to-small text-from">To</small>
                        <select
                          className="col-datalist"
                          onChange={handleDestination}
                        >
                          {loadDestination ? (
                            <>
                              <Skeleton height={80} />
                            </>
                          ) : (
                            <>
                              {dataCountry?.map((item, index) => (
                                <option key={index} value={`${item.id}:${item.country}`}>
                                  {item.city}
                                </option>
                              ))}
                            </>
                          )}
                        </select>
                        <small className=".fs6 state-col">{countryDestination? countryDestination : "Destination"}</small>
                      </div>
                    </div>
                  </div>
                  <div className="col mt-4 d-flex flex-row justify-content-center align-content-center gap-2">
                    <button
                      type="button"
                      value="One way"
                      className={oneWay ? "btn-offs" : "btn-off"}
                      onClick={moveTrip}
                    >
                      <MdFlightTakeoff className="icons-off" /> One way
                    </button>
                    <button
                      type="button"
                      className={roundWay ? "btn-arrows" : "btn-arrow"}
                      onClick={moveTrip2}
                    >
                      <BsArrowClockwise className="icons-off" /> Round trip
                    </button>
                  </div>
                  <div className="col">
                    <p className="mt-3 .fs6 title-box">Departure ?</p>
                    <input
                      type="date"
                      name="date"
                      value={date}
                      min={disablePastDate()}
                      className="date-flight rounded"
                      max="2032-02-20"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <p className="mt-3 .fs6 title-box">How many person?</p>
                    <div className="row row-cols-2">
                      <div className="col p-2">
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <FaChild /> {countChild} Child
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <div active="true" className="listCount">
                              <button
                                className="btn-Count"
                                onClick={incrementCounts}
                              >
                                +
                              </button>
                              {countChild}
                              <button
                                className="btn-Count"
                                onClick={decrementCounts}
                              >
                                -
                              </button>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="col p-2">
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basics">
                            <MdOutlineEmojiPeople className="fs-3" /> {count}{" "}
                            Adult
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <div active="true" className="listCount">
                              <button
                                className="btn-Count"
                                onClick={incrementCount}
                              >
                                +
                              </button>
                              {count}
                              <button
                                className="btn-Count"
                                onClick={decrementCount}
                              >
                                -
                              </button>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <p className="mt-3 .fs6 title-box">
                      Which class do you want?
                    </p>
                    <div className="d-flex mb-3 col-12 justify-content-between">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="economy"
                          onChange={handleClassType}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          Economy
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="business"
                          onChange={handleClassType}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          Business
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="first class"
                          onChange={handleClassType}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          First Class
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col text-center">
                    <Button type="submit" className="p-1 btn-flight">
                      SEARCH FLIGHT
                      <HiArrowNarrowRight className="btn-icons d-flex " />
                    </Button>
                  </div>
                  <div className="col mt-3"> </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default SearchFlight;
