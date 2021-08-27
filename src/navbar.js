import nextBtn from '../src/forward-button.svg'

const Navbar = ({ setFeed, setSub, sub, subFeeds, setAfter, setLoading }) => {

    const handleFeedClick = (e) => {
        removeActive(e.target);

        switch (e.target.innerText) {
            case "Twitter":
                if (sub !== "twitter_memes") {
                    if (subFeeds.twitter.arr.current !== null) {
                        setFeed([]);
                        setLoading(true);
                        setFeed(subFeeds.twitter.arr.current)
                    }else {
                        setFeed([]);
                        setLoading(true);
                        setAfter('');
                        setSub("twitter_memes");
                        window.scroll(0,0);
                    }
                }
                break;
            case "Anime":
                if (sub !== "goodanimemes") {
                    if (subFeeds.anime.arr.current !== null) {
                        setFeed([]);
                        setLoading(true);
                        setFeed(subFeeds.anime.arr.current)
                    }else {
                        
                        setFeed([]);
                        setLoading(true);
                        setAfter('');
                        setSub("goodanimemes");
                        window.scroll(0,0);
                    }
                }
                break;
            case "memes":
                if (sub !== "memes") {
                    if (subFeeds.memes.arr.current !== null) {
                        setFeed([]);
                        setLoading(true);
                        setFeed(subFeeds.memes.arr.current)
                    }else {
                        setFeed([]);
                        setLoading(true);
                        setAfter('');
                        setSub("memes");
                        window.scroll(0,0);
                    }
                }
                break;
            case "IRL memes":
                if (sub !== "meIRL") {
                    if (subFeeds.meirl.arr.current !== null) {
                        setFeed([]);
                        setLoading(true);
                        setFeed(subFeeds.meirl.arr.current)
                    }else {
                        setFeed([]);
                        setLoading(true);
                        setAfter('');
                        setSub("meIRL");
                        window.scroll(0,0);
                    }
                    
                }
                break;
            default:
                break;
        }
    };

    const removeActive = (node) => {
        const links = document.getElementsByClassName('btn');
        const arr = [...links];
        arr.forEach((element) => {
            element.className = 'navlink btn';
        });
        node.className = 'active btn';
    };

    const handleNextClick = (e) => {
        switch (sub) {
            case 'twitter_memes':
                setLoading(true);
                setFeed([]);
                setAfter(subFeeds.twitter.after.current)
                break;
            case 'goodanimemes':
                setLoading(true);
                setFeed([]);
                setAfter(subFeeds.anime.after.current)
                break;
            case 'memes':
                setLoading(true);
                setFeed([]);
                setAfter(subFeeds.memes.after.current)
                break;
            case 'meIRL':
                setLoading(true);
                setFeed([]);
                setAfter(subFeeds.meirl.after.current)
                break;

            default:
                break;
        }
        window.scroll(0,0);
    }

    return (
        <div className="navbar">
            <div className="header">
                <h1>Infini-Memes</h1>
            </div>
            <ul className="navlinks">
                <li>
                    <button className="navlink btn active" onClick={handleFeedClick}> Twitter </button>
                </li>
                <li>
                    <button className="navlink btn" onClick={handleFeedClick}> Anime </button>
                </li>
                <li>
                    <button className="navlink btn" onClick={handleFeedClick}> memes </button>
                </li>
                <li>
                    <button className="navlink btn" onClick={handleFeedClick}> IRL memes </button>
                </li>
            </ul>


            <button onClick={handleNextClick} className="nextBtn">
                <img src={nextBtn} alt="next-page" width="75px" height="75px" />
            </button>
        </div>

    );
};

export default Navbar;