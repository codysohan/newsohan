import React from "react";
import { DotWave } from "@uiball/loaders";

const Spinner = ()=>{
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "20vh" }}>
        <DotWave size={47} speed={1} color="red" />
      </div>
    );
}

export default Spinner;
