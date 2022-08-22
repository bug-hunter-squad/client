import style from "../../styles/SearchResultmobile.module.css";
import Image from "next/image";
import { ArrowLeftRight } from "react-bootstrap-icons";

function Flight() {
  return (
    <>
        <div className={style.container}>
          <div className="d-flex mx-5 justify-content-between text-white">
            <div className="row py-5 ps-5" style={{ width: 600 }}>
              <div className="col-4 ps-5 pt-4">
                <Image
                  src="/assets/img/logowhite.svg"
                  alt="Logo"
                  height={85}
                  width={85}
                />
              </div>
              <div className="col-8">
                <div className="row">
                  <div className="col-5">
                    <p>From</p>
                    <h5>Medan (IDN)</h5>
                  </div>
                  <div className="col-2 pt-4">
                    <ArrowLeftRight />
                  </div>
                  <div className="col-5">
                    <p>To</p>
                    <h5>Tokyo (JPN)</h5>
                  </div>
                </div>
                <small>Monday, 20 July 2020 • 6 Passenger • Economy</small>
              </div>
            </div>
            <button className="btn text-white">
              <h6>Change Search</h6>
            </button>
          </div>
        </div>
    </>
  )
}

export default Flight