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
                        <div className="hero-content text-white text-center ">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-6xl font-semibold ">Less Promises More Creativity</h1>
                                <p className="mb-5 text-xl font-semibold ">Explore our curated selection of premium arts tailored to your needs.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[100vh] lg:h-[90vh]" style={{ backgroundImage: 'url(https://i.postimg.cc/sx4NqNBX/pexels-photo-102127.webp)' }}>
                        {/* <div className="hero-overlay opacity-50 bg-gradient-to-b from-white from-20% to-[#2566E3] to-80% "></div> */}
                        <div className="hero-overlay bg-opacity-35 "></div>

                        <div className="hero-content text-center text-white ">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-6xl font-semibold pt-8">What rhymes Art? It's craft</h1>
                                <p className="mb-5 text-xl font-semibold ">Discover new arts that inspire creativity and make everyday pleasure.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[100vh]  lg:h-[90vh]" style={{ backgroundImage: 'url(https://i.postimg.cc/2S3dvKxD/pexels-photo-587958.jpg)' }}>
                        {/* <div className="hero-overlay opacity-60 bg-gradient-to-b from-white from-10% to-[#2566E3] to-90% "></div> */}
                        <div className="hero-overlay bg-opacity-45 "></div>

                        <div className="hero-content text-center text-white ">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-6xl font-semibold">Amazing Art and Craft</h1>
                                <p className="mb-5 text-xl font-semibold">Explore more crafts and arts to make life beautiful</p>
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