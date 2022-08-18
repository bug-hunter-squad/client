import style from "../styles/Profile.module.css";
import Image from "next/image";
import { ChevronRight } from "react-bootstrap-icons";
import { BsStar } from "react-icons/bs";
import Fixedmenu from "../components/molecules/fixedmenu";

function Home() {
  return (
    <>
      <div className={style.app}>
        <div className="d-flex mt-3 mb-2 mx-4 justify-content-between">
          <h1>Profile</h1>
          <a href="#" className="text-decoration-none p-2">
            <p>Edit</p>
          </a>
        </div>
        <div className={style.outline}>
          <div className={style.card}>
            <Image
              className={`${style.imgTopTen} d-flex align-items-center`}
              src="/assets/img/image.png"
              alt=""
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className="text-center mt-3">
          <h3>Mike Kawasaki</h3>
          <p>Medan.Indonesia</p>
        </div>
        <div className="d-flex mt-3 mb-2 mx-4 justify-content-between">
          <h4>Cards</h4>
          <a href="#" className="text-decoration-none ">
            <p>+ Add</p>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
          }}
        >
          {[...new Array(3)].map((item, key) => (
            <div className="d-flex card text-bg-primary mx-3 mb-3 col-8">
              <div className="card-body">
                <h5 className="card-title">4441 1235 5512 5551</h5>
                <div className="card-text d-flex justify-content-between">
                  <p>X Card</p>
                  <p>$ 1,440.2</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section className="mb-5">
          <div className="d-flex mx-4  justify-content-between ">
            <div className="d-flex">
              <BsStar />
              <h6 className="p-0 mx-3">My Review</h6>
            </div>
            <div className="">
              <ChevronRight />
            </div>
          </div>
          <div className="d-flex mx-4 mt-3 justify-content-between ">
            <div className="d-flex">
              <BsStar />
              <h6 className="p-0 mx-3">Settings</h6>
            </div>
            <div className="">
              <ChevronRight />
            </div>
          </div>
          <div className="d-flex  mx-4 mt-3 justify-content-between text-danger">
            <div className="d-flex">
              <BsStar className="mt-1" />
              <h6 className="p-0 mt-1 mx-3">Logout</h6>
            </div>
            <div className="">
              <ChevronRight className="" />
            </div>
          </div>
        </section>
        <Fixedmenu />
      </div>
    </>
  );
}

export default Home;
