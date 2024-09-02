import React, {useState} from "react"; 
import "../components/Carrossel.css";
import carrousel3 from "../public/IMG/carrousel3.jpg"
import carrousel4 from "../public/IMG/carrousel4.jpg"
import carrousel5 from "../public/IMG/carrousel5.jpg"
import carrousel6 from "../public/IMG/carrousel6.jpg"

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const Carrossel = ({data }) => {

    const [slide, setSlide] = useState(0);

    const nextSlide = () =>{
      setSlide(slide === data.length - 1 ? 0 : slide+1);
    }


    const prevSlide = () =>{
      setSlide(slide === 0  ? data.length-1 :slide-1);
    }
    
    return (
    <div className="carrossel">
        {
        data?.map((item, index) => {
          return <div
           key={index}
           className={slide === index ? "slide" : "slide slide-hidden"}  >
              {item}
            </div>
        })
      }
        <span className="indicators">
          {data?.map((_, index)=> {
            return <button 
                key={index}
                onClick={( ) => setSlide(index)}
                className="indicator"
            > </button>
          }) }
        </span>

    </div>
  )
}
