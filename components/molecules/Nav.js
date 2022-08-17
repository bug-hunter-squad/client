import { BsEnvelope, BsBell } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import styleHome from "../../styles/Home.module.css";
import Link from "next/link";

function Nav() {
  return (
    <>
      <div className="row px-1">
        <div className="col text-start">
          <h1 className={styleHome.exp}>Explore</h1>
        </div>
        <div className="col text-end">
          <BsEnvelope className={`${styleHome.icon} px-2`} />
          <Link href="/notification">
            <BsBell className={`${styleHome.icon} px-2`} />
          </Link>
        </div>
      </div>

      <div className="row justify-content-lg-center px-1">
        <div className="col">
          <div className={`${styleHome.search} mb-2 mt-3`}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Where you want to go?"
                required
                onChange={(e) => setKeyword(e.target.value)}
              />
              <FiSearch className={styleHome.icon} />{" "}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
