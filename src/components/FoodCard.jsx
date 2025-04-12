import React from 'react';

const FoodCard = ({item}) => {
    return (
        <div className="card w-full shadow-sm rounded-none">
            <figure>
                <img className='w-full h-[300px]'
                    src={item.image}
                    alt="Shoes" />
            </figure>
            <p className='bg-neutral-950 text-white font-semibold absolute right-5 top-5 p-2 rounded'>{item.price}$</p>
            <div className="flex flex-col justify-between bg-gray-100 text-center p-6 h-[250px]">
                <h2 className="text-3xl font-semibold">{item.name}</h2>
                <p>{item.recipe}</p>
                <div className="card-actions justify-center">
                    <button className="cursor-pointer text-[#BB8506] bg-gray-100 rounded-xl px-4 py-2 border-b-2 border-[#BB8506] hover:scale-95 hover:bg-[#1F2937]">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;