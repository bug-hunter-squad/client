import style from "../styles/SearchFlight.module.css";
import { ArrowLeftRight } from "react-bootstrap-icons";
import { ArrowsFullscreen } from "react-bootstrap-icons";
import { MdFlightTakeoff } from "react-icons/md";
import { ChevronLeft } from "react-bootstrap-icons";
import { BsArrowClockwise } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import * as Type from "../redux/searchFlight/type";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Container} from "react-bootstrap";

function searchresult() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { auth, search } = useSelector((state) => state);

  const [go, setGo] = React.useState("");
  let [count, setCount] = React.useState(0);
  let [countChild, setCountChild] = React.useState(0);
  const [date, setDate] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [facility, setFacility] = React.useState("");
  const [navigation, setNavigation] = React.useState(false);
  const [trip, setTrip] = React.useState("");
  const [oneWay, setOneWay] = React.useState(false);
  const [roundWay, setRoundWay] = React.useState(false);
  const [destination, setDestination] = React.useState([]);
  const [loadDestination, setLoadDestination] = React.useState(true);

  React.useEffect(() => {
    setGo(search?.keyword?.keyword);
    getDestination();
  }, []);

  const getDestination = () => {
    axios
      .get("/api/trendingDestination")
      .then((res) => {
        setDestination(res?.data?.flightInformation);
        setLoadDestination(false);
      })
      .catch((err) => {
        console.log(err);
      });
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
    count = count - 1;
    setCount(count);
  }
  function incrementCounts(e) {
    e.preventDefault();
    countChild = countChild + 1;
    setCountChild(countChild);
  }
  function decrementCounts(e) {
    e.preventDefault();
    countChild = countChild - 1;
    setCountChild(countChild);
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 400 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 401 });
    return isNotMobile ? children : null;
  };
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
  };
  const flightSearch = (e) => {
    e.preventDefault();
    dispatch({
      type: Type.SET_FROM,
      payload: {
        from: from,
      },
    }),
      dispatch({
        type: Type.SET_TO,
        payload: {
          to: to,
        },
      });
    dispatch({
      type: Type.SET_WAY,
      payload: {
        way: trip,
      },
    });
    dispatch({
      type: Type.SET_DATE,
      payload: {
        date: date,
      },
    });
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
    dispatch({
      type: Type.SET_FACILITY,
      payload: {
        facility: facility,
      },
    });
    router.push("/searchresultmobile");
  };
  return (
    <>
        <Container className="mobile">
          <div className="col-lg-4 mx-auto col-sm">
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
                        <ChevronLeft />
                      </Link>
                    </div>
                    <div className="p-2 justify-content-end mt-2">
                      <ArrowsFullscreen />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={flightSearch}>
              <div className="container w-100 h-100 d-flex flex-row justify-content-center">
                <div className="continer-flight container ">
                  {" "}
                  <h3 className="card-title">Destination</h3>
                  <div className="row row-cols-1">
                    <div className="card mx-auto col col-destination shadow">
                      <div className="row row-col-3 p-2 d-flex flex-row col-five">
                        <div className="col-5 overflow-hidden">
                          <small className=".fs6">From</small>
                          <input
                            type="text"
                            className="col-datalist"
                            list="from"
                            placeholder="Jakarta"
                            value={navigation ? to : from}
                            onChange={(e) => setFrom(e.target.value)}
                          />
                          <datalist id="from">
                            {loadDestination ? (
                              <>
                                {" "}
                                <Skeleton height={80} />{" "}
                              </>
                            ) : (
                              <>
                                {destination.map((item, key) => (
                                  <option value={item.flightOriginal}>
                                  </option>
                                ))}
                              </>
                            )}
                          </datalist>
                          <small className=".fs6">Indonesia</small>
                        </div>
                        <div className="col-2 col-arrow ">
                          {navigation ? (
                            <ArrowLeftRight onClick={handleMove1} />
                          ) : (
                            <ArrowLeftRight onClick={handleMove} />
                          )}
                        </div>
                        <div className="col-5">
                          <small className=".fs6 to-small">To</small>
                          <input
                            type="text"
                            className="col-datalist-end"
                            list="destination"
                            placeholder={go ? go : "Bali"}
                            value={navigation ? from : to}
                            onChange={(e) => setTo(e.target.value)}
                          />
                          <datalist id="destination">
                            {loadDestination ? (
                              <>
                                {" "}
                                <Skeleton height={80} />{" "}
                              </>
                            ) : (
                              <>
                                {destination.map((item, key) => (
                                  <option value={item.flightOriginal}>
                                  </option>
                                ))}
                              </>
                            )}
                          </datalist>
                          <small className=".fs6 state-col">Indonesia</small>
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
                        type="datetime-local"
                        name="date"
                        value={date}
                        min={disablePastDate()}
                        className="date-flight rounded"
                        max="2032-02-20"
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    <div className="col">
                      {" "}
                      <p className="mt-3 .fs6 title-box">How many person?</p>
                      <div className="row row-cols-2">
                        <div className="col p-2">
                          <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                              <FaChild /> {countChild} Child
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <div active className="border ">
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
                              <MdOutlineEmojiPeople /> {count} Adult
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <div eventKey="1" active>
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
                      <div className="d-flex mx-4 mb-3 col-10 justify-content-between ">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="economy"
                            onChange={(e) => setFacility(e.target.value)}
                          />
                          <label
                            className="form-check-label"
                            for="exampleRadios1"
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
                            onChange={(e) => setFacility(e.target.value)}
                          />
                          <label
                            className="form-check-label"
                            for="exampleRadios1"
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
                            onChange={(e) => setFacility(e.target.value)}
                          />
                          <label
                            className="form-check-label"
                            for="exampleRadios1"
                          >
                            First Class
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <button type="submit" className="btn btn-flight">
                        SEARCH FLIGHT
                        <HiArrowNarrowRight className="btn-icons" />
                      </button>
                    </div>
                    <div className="col"> </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Container>
    </>
  );
}

export default searchresult;
