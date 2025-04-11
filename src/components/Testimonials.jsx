import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import ReusableHeader from './ReusableHeader';
import { FaQuoteLeft } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className='my-20'>
            <ReusableHeader header={'TESTIMONIALS'} subHeader={'---What Our Clients Say---'} />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map(review => <SwiperSlide key={review._id}>
                    <div className='text-center px-20 space-y-2'>
                        <div className='flex flex-col items-center gap-6 my-6'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft size={60} />
                        </div>
                        <p>{review.details}</p>
                        <h2 className='text-[#CD9003] text-4xl font-semibold'>{review.name}</h2>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Testimonials;