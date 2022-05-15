import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar3.jpg'
import AVTR2 from '../../assets/avatar3.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
      avatar: AVTR1,
      name: 'Radinal Ridwan',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit exercitationem consequuntur, aliquid nemo facere porro placeat minus incidunt sequi. Incidunt, eos. Ipsa officia sit eos itaque saepe, distinctio quo.'
    },
    {
      avatar: AVTR2,
      name: 'Suharjun Abdullah',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit exercitationem consequuntur, aliquid nemo facere porro placeat minus incidunt sequi. Incidunt, eos. Ipsa officia sit eos itaque saepe, distinctio quo.'
    },
    {
      avatar: AVTR3,
      name: 'Radinal Ridwan',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit exercitationem consequuntur, aliquid nemo facere porro placeat minus incidunt sequi. Incidunt, eos. Ipsa officia sit eos itaque saepe, distinctio quo.'
    },
    {
      avatar: AVTR4,
      name: 'Suharjun Abdullah',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit exercitationem consequuntur, aliquid nemo facere porro placeat minus incidunt sequi. Incidunt, eos. Ipsa officia sit eos itaque saepe, distinctio quo.'
    },
  ]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials