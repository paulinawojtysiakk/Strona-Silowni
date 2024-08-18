import React, {useState, useEffect} from "react";
import '/src/scss/Carousel.scss';

const HomeCarousel = ({ images }) => {

    const [activeIndex, setActiveIndex] = useState(0);
   
    useEffect(() => {
      
      const interval = setInterval(()=> {
      setActiveIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex +1);
    }, 5000);
       return() => clearInterval(interval);
  }, [activeIndex]);
    
    const nextSlide = () => {
        setActiveIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1 );
    }

    const prevSlide = () =>{
        setActiveIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }

  return (
    <>
      <div className='carousel'>
        <button className='carousel-btn btn-prev-carousel' onClick={prevSlide}></button>
        <img className= "carousel-img" src={images[activeIndex]}/>
        <button className='carousel-btn btn-next-carousel' onClick={nextSlide}></button>
        </div>
    </>
  );
  };

export default HomeCarousel;
