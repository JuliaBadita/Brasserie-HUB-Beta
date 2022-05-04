import React, { useState } from 'react'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider.js'
import './Slider.css'

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1)

  // Function here to trigger next and previous slides
  const nextSlide = () => {
    //   If slideIndex is strictly different than dataSlider.lenght (lenght = the number of images I have => which are in the dataSlider.js)  =>> setSlideIndex + 1
    // it means if slideIndex < 5 (5 = length) = go on the next image
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    }
    // but if it is strictly = 5 >> it will reset it to 1 ((which basically means it will go back on slide 1))
    else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    //   here instead of + 1 I put - 1 => so that it can go on the previous slide and instead of dataSlide.lenght we put 1
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }

    // Slight difference here = if slideIndex stricly = 1 (because it always start at 1) then go on the last slide
    // and to define it dynamicaly use : dataSlider.lenght
    else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length)
    }
  }

  //   const autoPlayRef = useRef()

  //   useEffect(() => {
  //     autoPlayRef.current = nextSlide
  //   })

  //   useEffect(() => {
  //     const play = () => {
  //       autoPlayRef.current()
  //     }

  //     const interval = setInterval(play, props.autoPlay * 1000)
  //     return () => clearInterval(interval)
  //   }, [])

  return (
    <div className="home__container-slider">
      {dataSlider.map((obj, index) => {
        return (
          // here the key comes from the dataSlider.js file (with uuid) => it was to solve the problem with the unique "key" prop
          <div
            key={obj.id}
            // index + 1 is because index from the map function above is starting at 0 so to compare it we add + 1 each time
            className={
              slideIndex === index + 1
                ? 'home__slide home__slide-active-anim'
                : 'home__slide'
            }
          >
            <img
              // This url = to call the images in the slider
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
              alt="illustrations brasserie Hoppy Urban Brew"
            />
          </div>
        )
      })}

      {/* Buttons for the next and previous slides  */}

      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
    </div>
  )
}
