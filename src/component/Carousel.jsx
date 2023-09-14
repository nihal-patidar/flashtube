import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import '../index.css' ;


const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (<>
        
        <div className="carousel-images">
            <img 
                key={currentIndex}
                src={images[currentIndex]}
            />
            <div className="slide_direction">
                <div className="left" onClick={handlePrevious}>
                <i class="fa fa-chevron-left text-4xl" aria-hidden="true"></i>
                </div>
                <div className="right" onClick={handleNext}>
                <i class="fa fa-chevron-right text-4xl mx-10px" aria-hidden="true"></i>
                </div>
            </div>
            <div className="indicator">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>

    </>)
}

export default Carousel ;
