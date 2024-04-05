import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraAlt, faLocation, faMoneyBillAlt, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import './Sliderfeat.css'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { tours } from '../../../constent';

const Sliderfeat = () => {
  return (
    <div className='slider_content'>
      <Swiper 
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          navigation={{
              
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          }}
          pagination={{
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets',
          }}
          autoplay={{
              delay: 2000, 
              disableOnInteraction: false, 
          }}
          breakpoints={{
              375: {
                  slidesPerView: 1,
              },
              640: {
                  slidesPerView: 1,
              },
              768: {
                  slidesPerView: 2,
              },
              1024: {
                  slidesPerView: 4,
              },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className='clientSwiper'

      >
        {tours.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="list_tour">
              <div className="list_tour_content">
                <div className="list_tour_img">
                  <img src={card.image} alt="tour image" />
                </div>
                <div className="list_tour_detail">
                  <div className="icons_tour">
                    <span className='incos_camera'><FontAwesomeIcon icon={faCameraAlt}/> </span>
                    <span className='incos_video'><FontAwesomeIcon icon={faVideoCamera}/> </span>
                  </div>
                  <div className="icons_heder">
                    <h3>{card.name}</h3>
                  </div>
                  <div className="icons_more_d">
                    <p className='tour_location'><FontAwesomeIcon icon={faLocation} /><span>{card.location}</span> </p>
                    <p className='tour_money'><FontAwesomeIcon icon={faMoneyBillAlt} /><span className='form_title'>From </span><span className='form_price'>{card.price}</span> </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='button-Atrrangment'>
        <div className="button-swiper-1 btn-mble">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  )
}

export default Sliderfeat