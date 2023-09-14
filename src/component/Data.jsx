import React, { useState } from "react";
import "../index.css";
import "../index1.css";
import axios from "axios";
import NavBar from "./Navbar";

const Data = () => {
    const [email, setEmail] = useState('');
    const [data, setData] = useState([]);

    const submit = () => {
        axios.get(`http://localhost:5001/${email}`).then(res => {
            // console.log(res.data);
            setData(res.data);
        }
        )
        console.log(data );
    }
    return (
        <>
            <NavBar />
            <div className="fit-box">
                <div className="search-box">
                    <input type="text" name='search' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className="btn btn-primary" onClick={submit}>
                        Search
                    </button>

                </div>
                <div className="item-box">

                    <div className="data-card">
                        {data ? (<>
                            <p>{data.fname}</p>
                        <p>{data.lname}</p>
                        <p>{data.email}</p>
                        <p>{data.mobile}</p>
                        <p>{data.querry}</p>
                
                        </>) : (<></>)}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Data;