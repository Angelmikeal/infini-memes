import { useEffect, useRef } from 'react';

const useFetch = (url) => {
    const memes = useRef([]);
    useEffect(() => {
        fetch(`https://www.reddit.com/r/${url}.json?limit=20`)
            .then(res => res.json())
            .then(body => {
                console.log(body);
                memes.current = body.data.children;
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    console.log(memes.current)
}

export default useFetch;