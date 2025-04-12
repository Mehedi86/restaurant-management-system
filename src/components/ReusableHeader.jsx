import React from 'react';

const ReusableHeader = ({header, subHeader, textColor}) => {
    return (
        <div className='text-center my-20 space-y-4'>
            <p className='text-[#D99904] italic'>{subHeader}</p>
            <h2 className={`${textColor || ''} text-4xl py-6 border-y-4 border-gray-200 w-2/6 mx-auto uppercase`}>{header}</h2>
        </div>
    );
};

export default ReusableHeader;