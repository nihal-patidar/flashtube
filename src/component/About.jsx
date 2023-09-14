import NavBar from "./Navbar";
import '../index.css';
import ProfileData from "./ProfilesData";
import Carousel from "./Carousel";
import Profiles from "./Profiles";

const About = () => {
    const images = [
        "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
    return (<>
        <NavBar />

        <div className="flex flex-col justify-center text-center  w-[100%] k1">
            <div className="flex h-[400px]">

                <div className="k2 flex flex-col w-[50%] text-center">
                    <p className="text-7xl  mt-40">Your Growth</p>
                    <p className="text-5xl my-20">is Our Pleasure</p>
                </div>
                <div>
                    <p className="h-[200px] w-[400px] bg-cover k3 mt-40 " />
                </div>
            </div>
            <div className="flex justify-evenly mb-10">
                <div className="flex flex-col w-[40%] px-20">
                    <h1 className="text-5xl my-10 text-center text-white">Our Mission</h1>
                    <p className="text-center text-3xl text-neutral-500 p-10 ">There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.
                    </p>
                </div>
                <div className="w-[40%]">
                    <p className="h-[200px] w-[400px] bg-cover k4 mt-44 " />
                </div>
            </div>
            <div>
                <div className="flex mt-28">
                    <div className="w-[50%]">
                        <Carousel images={images} />
                    </div>
                    <div className="w-[50%] flex flex-col ">
                        <div className="w-[100%]">
                            <p className="block w-fit m-auto text-5xl te mb-11 text-emerald-500">Our Team</p>
                        </div>
                        <div className="flex flex-wrap px-40">{ProfileData.map((val, indx) => {
                            return (
                                <>
                                    <Profiles imgsrc={val.imgsrc} name={val.name} work={val.work} exp={val.exprience}></Profiles>
                                </>
                                )
                        })
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-around w-[500px] py-7 text-6xl bg-rose-200 m-auto rounded-full my-10">
                <i class="fa-brands fa-instagram text-red-500"></i>
                <i class="fa-brands fa-facebook text-blue-500"></i>
                <i class="fa-brands fa-square-whatsapp text-green-600"></i>
                <i class="fa-brands fa-x-twitter text-black"></i>
                <i class="fa-brands fa-linkedin text-blue-800"></i>
            </div>
        </div>
    </>
    )
}

export default About;
