import React from 'react';

const usePagination = (array, size) => {
    const arrayPiece = [];
    for(let i = 0; i< array.length ; i+= size){
        arrayPiece.push(array.slice(i, i+size));
    }
    return arrayPiece;
};

export default usePagination;