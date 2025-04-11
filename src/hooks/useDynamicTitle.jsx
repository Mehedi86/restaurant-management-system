import React, { useEffect } from 'react';

const useDynamicTitle = (title) => {
    useEffect(() => {
        const current = document.title;
        document.title = `Food Vibes | ${title}`
        return () => {
            document.title = current;
        }
    }, [title])


};

export default useDynamicTitle;