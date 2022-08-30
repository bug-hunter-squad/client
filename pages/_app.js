import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/phone.css";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "../redux/store";
import { Provider} from "react-redux";
import App from "next/app";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux"
import Axios from "axios";
import {decode} from "jsonwebtoken"


export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainApp Component={Component} pageProps={pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}


const MainApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { auth } = useSelector((state) => state);

  const AxiosJWT = Axios.create();
  AxiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();
    if (expire * 10000 < currentDate.getTime()) {
        config.headers.Authorization = `Bearer ${auth.token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

  React.useEffect(() => {
   
    if (router.pathname === "/login" && auth.token) {
      router.push("/");
    }
    if (router.pathname === "/register" && auth.token) {
      router.push("/");
    }
    if (router.pathname === "/superregister" && auth.token) {
      router.push("/dashboard");
    }
    if (router.pathname === "/profile" && !auth.token) {
      router.push("/login");
    }
    if (router.pathname === "/mybooking" && !auth.token) {
      router.push("/login");
    }
    if (router.pathname === "/profile" && !auth.token) {
      router.push("/login");
    }
    if (router.pathname === "/dashboard" && !auth.token) {
      router.push("/login");
    }
    const convert = decode(auth?.token)
    if(router.pathname === "/dashboard" && convert?.role !== "admin"){
      router.push("/")
    }
    
    
  });



  return <Component {...pageProps} />;
};