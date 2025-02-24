import meter1 from "../assets/img/react.png"
import meter2 from "../assets/img/wordpress.jpg"
import meter3 from "../assets/img/wix.png"
import meter4 from "../assets/img/next.png"
import meter5 from "../assets/img/figma.png"
import meter6 from "../assets/img/nodejs.png"
import meter7 from "../assets/img/laravel.png"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I specialize in creative and user-friendly UI/UX design, building modern high-performance web apps with React,
                and developing custom, responsive websites using Wix and WordPress.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Wordpress</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Wix</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>NextJS</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>Laravel</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
