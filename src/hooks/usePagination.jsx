

const usePagination = (array, size) => {
    const arrayPiece = [];
    for (let i = 0; i < array.length; i += size) {
        arrayPiece.push(array.slice(i, i + size)); // [(0-5),(6-11),(12-17)]
    }
    return arrayPiece;
};

export default usePagination;