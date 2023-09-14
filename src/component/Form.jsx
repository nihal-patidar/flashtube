import axios from 'axios';
import '../index.css';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';


const Form = () => {
    const [credentials, setCredentials] = useState({ fname: '', lname: '', mob: '', email: '', profession: '', querry: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:5001/submit_lead", credentials)
        if(response){
            console.log(response.data)
        }
        alert('your form has been submitted : ');
        setCredentials(()=>{
            return ({...credentials ,  fname: '', lname: '', mob: '', email: '', profession: '', querry: '' })
        })
    }

    const Reset = ()=>{
        return ({...credentials ,  fname: '', lname: '', mob: '', email: '', profession: '', querry: '' });
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div className='form-box'>
                <form className='form' onSubmit={handleSubmit}>
                    <div>
                        <label for="fname">First name :</label><br />
                        <div style={{ padding: "3px" }}>
                            <input onChange={(e) => onChange(e)} value={credentials.fname} type="text" id="fname" name="fname" placeholder='Enter your first Name' />
                        </div>
                    </div>
                    <div>

                        <label for="lname">Last name :</label><br />
                        <div style={{ padding: "3px" }}>
                            <input onChange={(e) => onChange(e)} value={credentials.lname} type="text" id="lname" name="lname" placeholder='Enter your last Name' /><br />
                        </div>
                    </div>
                    <div>

                        <label for="mob">Mobile No. :</label><br />
                        <div style={{ padding: "3px" }}>
                            <input onChange={(e) => onChange(e)} value={credentials.mob} type="number" id="mob" name="mob" placeholder='Enter your 10 digit phone No. ' /><br />
                        </div>
                    </div>
                    <div>

                        <label for="email">Email :</label><br />
                        <div style={{ padding: "3px" }}>
                            <input onChange={(e) => onChange(e)} value={credentials.email} type="text" id="email" name="email" 
                            placeholder='Enter Your email' /><br />
                        </div>
                    </div>
                
                    <div>

                        <label for="Querry">Want to Ask</label><br />
                        <div style={{ padding: "3px" }}>
                            <textarea onChange={(e) => onChange(e)} value={credentials.querry} name="querry" rows="6" cols="30" placeholder='Any Querry'>
                            </textarea>
                        </div>
                    </div>
                    <button type="submit" id="btnx" class="btn btn-success">Confirm</button>
                    <button onClick={Reset} class="btn btn-success">Reset</button>
                </form>
            </div>
        </>
    )
}

export default Form;