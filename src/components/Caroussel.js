import react from "react"
import carrousel3 from "../public/IMG/carrousel3.jpg"
import carrousel4 from "../public/IMG/carrousel4.jpg"
import carrousel5 from "../public/IMG/carrousel5.jpg"
import carrousel6 from "../public/IMG/carrousel6.jpg"
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

export default function Caroussel() {


    return (
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carrousel5} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={carrousel3} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={carrousel6} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
   )


}