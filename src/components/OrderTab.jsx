import React from 'react';
import FoodCard from './FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../style.css'
import usePagination from '../hooks/usePagination';


const OrderTab = ({ items }) => {

    const itemPieces = usePagination(items, 8);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {itemPieces.map(itemPiece => <SwiperSlide>
                    <div className='grid grid-cols-4 gap-4'>
                        {itemPiece.map(item => <FoodCard key={item._id} item={item} />)}
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default OrderTab;