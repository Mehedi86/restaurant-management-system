import React, { useEffect, useState } from 'react';
import ReusableHeader from './ReusableHeader';

const ChefRecommandation = () => {
    const [recommandItems, setRecommandItems] = useState([]);
    console.log(recommandItems)

    useEffect(() => {
        fetch("/menu.json")
            .then(res => res.json())
            .then(data => {
                const some = data.slice(0, 3)
                setRecommandItems(some)
            })
    }, [])
    return (
        <div className='my-20'>
            <ReusableHeader header={'CHEF RECOMMENDS'} subHeader={'---Should Try---'} />
            <div className='grid grid-cols-3 gap-6'>
                {recommandItems.map(item => <div key={item._id}>
                    <div className="card w-full shadow-sm rounded-none">
                        <figure>
                            <img className='w-full h-[300px]'
                                src={item.image}
                                alt="Shoes" />
                        </figure>
                        <div className="bg-gray-100 text-center p-6">
                            <h2 className="text-3xl font-semibold">{item.name}</h2>
                            <p>{item.recipe}</p>
                            <div className="card-actions justify-center">
                                <button className="cursor-pointer text-[#BB8506] bg-gray-100 rounded-xl px-4 py-2 border-b-2 border-[#BB8506] hover:scale-95 hover:bg-[#1F2937]">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default ChefRecommandation;