import React from 'react'
import { IoChevronBack } from "react-icons/io5";
import Axios from "axios"
import { useRouter } from 'next/router';

const forgots = () => {
    const router = useRouter();
    const [isloading, setIsloading] = React.useState(false)

    const handleSubmit = () =>{
        setIsloading(true);
        setTimeout(() =>{
            Axios.post("http://localhost:7000")
            .then(() =>{
                console.log("success!");
            })
            .catch(() =>{})
            .finally(() =>{
                setIsloading(false);
            });
        },3000)
    }


    const handleBack = () => {
        router.push("/");
      };
  return (
    <>
    <div className="container p-2 h-100">
      <div className="container h-100">
        <div className="row row-cols-1 p-2">
          <div className="col w-100">
            <div className="row row-cols-2">
              <div className="col-sm-8 fw-semibold back-button">
                <IoChevronBack onClick={handleBack} />
              </div>
              <div className="col-sm-4 p-2">
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <div>
              <p className="fw-bold fs-2 text-center">Forgot Password</p>
            </div>
            <form onSubmit={handleSubmit}>
             
              <div className="mb-3">
                <input
                  type="email"
                  className=" input w-100"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 p-2 clr-primer border-0"
              >
                {isloading? 'loading' : 'Send'}
              </button>
              <p className='text-center .fs6'>You’ll get message soon on your email</p>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  </>
  )
}

export default forgots