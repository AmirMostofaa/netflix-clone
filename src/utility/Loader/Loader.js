import React from 'react';
import './Loader.css';
import { useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";



const Loader = () => {
    let [loading, setLoading] = useState(true);
    return (
    <div className="loader">
      <ScaleLoader color={"#FF0000"} loading={loading} size={180} />
    </div>
    );
};

export default Loader;