import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-20'>
            <div>
                <p className='text-center font-bold my-4 text-warning text-2xl'>---What Our Clients Say---</p>
                <hr className='w-1/2  mx-auto ' />
                <h1 className='text-center font-bold my-4 text-5xl'>TESTIMONIALS</h1>
                <hr className='w-1/2  mx-auto ' />
            </div>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className=' w-1/2 mx-auto'>
                                <Rating
                                    className='mx-auto my-7'
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='font-bold text-center'>{review.details}</p>
                                <h1 className='my-7 text-warning font-bold text-3xl text-center'>{review.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>

        </div>
    );
};

export default Testimonial;