import Loading from "../components/loading/Loading";
import React, { createContext, useContext, useState } from "react";

export const LoadingContext = createContext(null);
export const useLoading = () => useContext(LoadingContext);

export default function LoadingProvider({ children }) {
 const [show, setShow] = useState(false);
 return (
  <LoadingContext.Provider
   value={{ show: () => setShow(true), hide: () => setShow(false) }}>
   {show && <Loading />}
   {children}
  </LoadingContext.Provider>
 );
}
