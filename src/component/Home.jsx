import { useState } from "react";
import Cards from "./Cards";
import Form from "./Form";
import NavBar from "./Navbar";
import Sdata from "./Sdata";

const Home = ()=>{
    const [text , setText] = useState('FlashTube');
  // const [display , setDisplay] = useState(false);


    return (
        <>
    <NavBar/>
    <section className="middle_section">
      <div className="box-1">
        <h1 style={{color : "#d89c9c"}}>We believe in</h1>
        <h1 className="text-success">{text}</h1>
        <div>
          <button className="btn btn-primary" >
              Project +
          </button>
          <button className="btn btn-primary">
                  Contact US
          </button>
        </div>
      </div>
      <div className="box-1-right">
        <div>
            
        </div>
      </div>
    </section>
      
    <section className="service-section">
        <div className="text-center">
          <p className="mt-2 mb-0 title">Our Services</p>
        </div>
          
            <div className="service-area">
            {
              Sdata.map((value, index)=>{
                return (
                  <>
                    <Cards  
                      key={index}
                      imgsrc = {value.imgsrc}
                      service = {value.service}
                      
                    />
                  </>
                );
              }) 
            }   
            </div>
    </section>
    
    <div className="form-center">
      <Form/>
    </div>
    <section>
      <p className="text-center mt-2" style={{
      borderTop : "5px solid #807e7e",
      fontSize : "20px",
      fontWeight : "400",
      padding : "6px"
    }}>Our Customer</p>
    </section>

    <footer className="text-center" style={{
      backgroundColor : "#929191",
      fontSize : "20px",
      fontWeight : "400",
      padding : "6px"
    }}>  &copy; CopyRight 2023</footer>
  </>
    )
}

export default Home ;