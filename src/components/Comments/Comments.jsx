// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
const Comments = () => {
    return (
        <div className='mx-auto max-w-7xl text-center mt-16'>
            <h1 className="text-3xl font-semibold mb-16">People Loves Us</h1>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper mb-16"
            >
                <SwiperSlide >
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <div>
                            <img className='rounded-full w-60' src="https://i.postimg.cc/g2GTXLsh/images.jpg" alt="" />
                        </div>
                        <p className='text-lg'>Amazing art and crafts. Highly recommend.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <div>
                            <img className='rounded-full w-60' src="https://i.postimg.cc/kGxTD7tw/beautiful-woman-avatar-character-icon-free-vector.jpg" alt="" />
                        </div>
                        <p className='text-lg'>Lovely, beautiful art and crafts❤️❤️❤️.</p>
                    </div>
                </SwiperSlide>
             

            </Swiper>
        </div>
    );
};

export default Comments;