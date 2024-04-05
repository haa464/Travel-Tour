import React from 'react'
import './News.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { news } from '../../constent'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'


const News = () => {
  return (
    <>
    <div className="news_content">
        <div className="container">
            <div className="tile_btn">
                <div className='subhed_content_left'>
                    <div className="up_cnt_header">
                        <div className="box_heade">
                            <span className='small_title'>Recent news feed</span>
                        </div>
                        <div className="box_h2">
                            <h2 className='title_h2_2'>Amazing News & Blog For Every Single Update</h2>
                        </div>
                    </div>
                </div>
                <div className="right_butn">
                    <button type='button' className='btn_rght'>Views More</button>
                </div>
            </div>

            <div className="slider_post_bxs">
                <div className="itmes_slider">
                    <div>
                        <div className='swiper_post'>
                            <Swiper 
                            
                            slidesPerView={3}
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
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                            }}
                            modules={[Pagination, Navigation, Autoplay]}
                            className='clientSwiper'
                            > 
                            {news.map((newcard, n) => (
                                <SwiperSlide key={n}>
                                <div className="box_white_des">
                                    <div className="up_slider">
                                        <div className="image_post_cnt">
                                            <div className="divid_image">
                                                <div className="img_divid">
                                                    <img src={newcard.imagenews} alt="software new innovation" />
                                                </div>
                                                <div className="img_cnt">
                                                    <span class="day">21</span>
                                                    <span class="month">Dec</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="down_slider">
                                        <div className="slider_cater">
                                            <span>{newcard.catergory}</span>
                                        </div>
                                        <div className="iiner_cnt">
                                            <div className="admin_cmt">
                                                <span className='admin_icons'><FontAwesomeIcon icon={faUserCircle} /> Admin </span>
                                                <span className='admin_comment'><FontAwesomeIcon icon={faComment} /> Comments</span>
                                            </div>
                                            <div className="header_par">
                                                <h3>{newcard.title}</h3>
                                                <p>{newcard.describe}</p>
                                            </div>
                                            <div class="read-more"><a class="btn-inline" href="/drupal/gowilds/quick-solutions-daily-problem">Read More</a> </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                            ))}
                            </Swiper>
                            <div className='button-Atrrangment'>
                                <div className="button-swiper">
                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default News