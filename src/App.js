import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthRoute from "./Routes/AuthRoute";
import UnAuthRoute from './Routes/UnAuthRoute';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <div className="contain"><AuthRoute /></div>
        </>
        <UnAuthRoute />
      </BrowserRouter>




    </div>
  );
}