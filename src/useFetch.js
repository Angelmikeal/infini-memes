import { useEffect, useRef } from 'react';

const useFetch = (url, setFeed) => {
    useEffect(() => {
        fetch(`https://www.reddit.com/r/${url}/top.json?t=month`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`something went wrong ${res.status}`) 
                } else {
                    return res.json()
                }

            })
            .then(body => {
                console.log(body);
                setFeed(body.data.children);
            })
            .catch(err => {
                console.log(err);
            })
    }, [url]);


}

export default useFetch;