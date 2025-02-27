import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import images1 from '/TopBox/images1.jpg'
import image1 from '/TopBox/images.jpg';
import images2 from '/TopBox/images2.jpg'
import images3 from '/TopBox/images3.jpg'
import images4 from '/TopBox/images4.jpg'
import images5 from '/TopBox/images5.jpg'
import images6 from '/TopBox/images6.jpg'
import images7 from '/TopBox/images7.jpg'
import images8 from '/TopBox/images8.jpg'
import images9 from '/TopBox/images9.jpg'

export default () => {
  return (
    <Swiper className='w-[90%] mx-auto mb-14'
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={80}
      slidesPerView={5}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      <SwiperSlide> <div className='h-60 w-45'><img src={images1} alt="" className='h-full' /></div></SwiperSlide>
      <SwiperSlide> <div className='rounded-md h-60 w-45'><img src={images9} alt="" className='h-full' /></div></SwiperSlide>
      <SwiperSlide> <div className='rounded-md h-60 w-45'><img src={images7} alt="" className='h-full'/></div></SwiperSlide>
      <SwiperSlide> <div className='rounded-md h-60 w-45'><img src={images6} alt="" className='h-full' /></div></SwiperSlide>
      <SwiperSlide> <div className='rounded-md h-60 w-45'><img src={images2} alt="" className='h-full' /></div></SwiperSlide>
      <SwiperSlide> <div className='rounded-md h-60 w-45'><img src={images3} alt="" className='h-full'/></div></SwiperSlide>
      <SwiperSlide> <div className='rounded-md h-60 w-45'><img src={images4} alt="" className='h-full' /></div></SwiperSlide>
      <SwiperSlide> <div className='rounded-md h-60 w-45'><img src={images5} alt="" className='h-full' /></div></SwiperSlide>
      <SwiperSlide> <div className='rounded-md h-60 w-45'><img src={images8} alt="" className='h-full'/></div></SwiperSlide>
      <SwiperSlide> <div className='rounded-md h-60 w-45'><img src={image1} alt="" className='h-full' /></div></SwiperSlide>



    </Swiper>
  );
};
