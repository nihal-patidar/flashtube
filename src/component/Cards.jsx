import React from "react";
import '../index.css';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Cards = (props) =>{
    return(
        <>
            <div className="service-card">
                <div className="img-box">
                    <img src={props.imgsrc}  alt="" />
                </div>
                <p>{props.service}</p>
                <button  className="btn btn-primary" >
                Check It
                </button>
                {/* onMouseOver={props.displayBox} */}
            </div>
        </>
    )
}

export default Cards ;