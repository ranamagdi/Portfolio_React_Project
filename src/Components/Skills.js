import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Pagination } from "swiper";



function Skills(){


    return(
      <div id="skills" style={{backgroundImage: `url(images/banner-bg.png)`}} className=" skill wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
      <div className="skills-wrapper text-center text-white   p-10 rounded-[50px] lg:p-2">
      <div className="container">
         <div className="row">
           <div className="col-12 skill-bx">
        <h1 id="h1-scroll">Skills</h1>
        <p className="text-lg py-3">
        I have learned different programming languages so far and as far as my skills are concerned
        </p>
        <div className="box flex  justify-between  items-center my-6">
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            loop={true}
            className="mySwiper "
          >
            <SwiperSlide className="skill-slider">

              <div >
                <img src='images/meter1.c4085ff859afbd8488e9da47d4953850.svg' alt="" />
                <h5>Javascript</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" skill-slider">
               <div >
                <img src='images/meter1.c4085ff859afbd8488e9da47d4953850.svg' alt="" />
                <h5 >PHP </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="skill-slider">
              <div >
                <img src='images/meter3.2eda919df32db1af75a222eb99d3a931.svg' alt="" />
                <h5>Python</h5>
              </div>
              </SwiperSlide>
            <SwiperSlide className="skill-slider">
              <div >
                <img src='images/meter1.c4085ff859afbd8488e9da47d4953850.svg' alt="" />
                <h5>C#</h5>
              </div>
              </SwiperSlide>
            <SwiperSlide className=" skill-slider">
               <div >
                <img src='images/meter3.2eda919df32db1af75a222eb99d3a931.svg' alt="" />
                <h5>React js</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="skill-slider">
              <div >
                <img src='images/meter1.c4085ff859afbd8488e9da47d4953850.svg' alt="" />
                <h5>C++</h5>
              </div>
              </SwiperSlide>

              <SwiperSlide className="skill-slider">
              <div >
                <img src='images/meter2.1b8f416eccd1ee162218b8528a1c5cdc.svg' alt="" />
                <h5>Ruby</h5>
              </div>
              </SwiperSlide>

            <SwiperSlide className="skill-slider">

              <div >
                <img src='images/meter3.2eda919df32db1af75a222eb99d3a931.svg' alt="" />
                <h5>Laravel</h5>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    )
}
export default Skills;
