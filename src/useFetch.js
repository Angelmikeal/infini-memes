import { useEffect, useState } from 'react';


const useFetch = (sub, setFeed, subFeeds, after) => {
    const [isPending, setIsPending] = useState(false);


    useEffect(() => {
        if (isPending === false) {
            setIsPending(true);

            fetch(`https://www.reddit.com/r/${sub}/hot.json?after=${after}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`something went wrong ${res.status}`)
                    } else {
                        return res.json()
                    }

                })
                .then(body => {
                    setFeed([]);
                    setFeed(body.data.children);
                    switch (sub) {
                        case 'twitter_memes':
                            subFeeds.twitter.arr.current = body.data.children;
                            subFeeds.twitter.after.current = body.data.after;
                            break;
                        case 'goodanimemes':
                            subFeeds.anime.arr.current = body.data.children;
                            subFeeds.anime.after.current = body.data.after;
                            break;
                        case 'dankmemes':
                            subFeeds.dankmemes.arr.current = body.data.children;
                            subFeeds.dankmemes.after.current = body.data.after;
                            break;
                        case 'meIRL':
                            subFeeds.meirl.arr.current = body.data.children;
                            subFeeds.meirl.after.current = body.data.after;
                            break;

                        default:
                            break;
                    }


                }).then(() => {
                    setIsPending(false);
                    console.log(subFeeds, isPending);
                })
                .catch(err => {
                    console.log(err);
                })
        }else {
            //do nothing
        }


    }, [sub, after]);


}

export default useFetch;