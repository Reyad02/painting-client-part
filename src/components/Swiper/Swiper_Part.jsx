import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
const Swiper_Part = () => {
    // const swiper = new Swiper(...);
    return (
        <div>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-[90vh]"
            >
                <SwiperSlide>
                    <div className=" hero h-[100vh] lg:h-[90vh]" style={{ backgroundImage: 'url(https://i.postimg.cc/Hk3dMCnV/1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-45 "></div>
                        {/* <div className="hero-overlay opacity-50 "></div> */}
                        <div className="hero-content text-[#08184B] text-center ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold ">Your Dream Home Awaits</h1>
                                <p className="mb-5 font-semibold">Explore our curated selection of premium properties tailored to your needs.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[100vh] lg:h-[90vh]" style={{ backgroundImage: 'url(https://i.postimg.cc/xCh2QW38/22.jpg)' }}>
                        {/* <div className="hero-overlay opacity-50 bg-gradient-to-b from-white from-20% to-[#2566E3] to-80% "></div> */}
                        <div className="hero-overlay bg-opacity-45 "></div>

                        <div className="hero-content text-center text-[#08184B] ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold pt-8">Experience Culinary Excellence at Home</h1>
                                <p className="mb-5 font-semibold ">Discover kitchens that inspire creativity and make everyday cooking a pleasure.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[100vh]  lg:h-[90vh]" style={{ backgroundImage: 'url(https://i.postimg.cc/ZR9GwwzS/3.webp)' }}>
                        {/* <div className="hero-overlay opacity-60 bg-gradient-to-b from-white from-10% to-[#2566E3] to-90% "></div> */}
                        <div className="hero-overlay bg-opacity-45 "></div>

                        <div className="hero-content text-center text-[#08184B] ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Invest in Prime Real Estate</h1>
                                <p className="mb-5 font-semibold">Explore opportunities with our portfolio of prestigious buildings that promise growth and prosperity.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Swiper_Part;