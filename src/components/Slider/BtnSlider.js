import React from 'react'
import './Slider.css'
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide)

  return (
    <button
      onClick={moveSlide}
      // adding a dynamic class to the button => checks which direction to add the correct classes ex: if direction = next then add class btn-slide + class next
      // if it is false then add the class prev instead of next

      className={
        direction === 'next'
          ? 'home__btn-slide home__carousel-next'
          : 'home__btn-slide home__carousel-prev'
      }
    >
      {/* Here = the same as above :  if direction = next = true then use rightArrow and if it's false = leftArrow*/}
      <img src={direction === 'next' ? rightArrow : leftArrow} alt="" />
      {/* <img src={leftArrow} alt="" /> */}
    </button>
  )
}
