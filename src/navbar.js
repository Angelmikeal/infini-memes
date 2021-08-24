import nextBtn from '../src/forward-button.svg'
import useFetch from './useFetch';

const Navbar = ({setFeed, setSub, sub, subFeeds, after, setAfter}) => {
    let next = subFeeds.twitter.after.current;

    const handleFeedClick = (e) => {
        switch (e.target.innerText) {
            case "Twitter":
                if (sub !== "twitter_memes") {
                    setFeed([]);
                    setSub("twitter_memes");
                    next = subFeeds.twitter.after.current
                }
                break;
            case "Anime":
                if (sub !== "goodAnimemes") {
                    setFeed([]);
                    setSub("goodanimemes");
                    next = subFeeds.anime.after.current
                }
                break;
            case "memes":
                if (sub !== "dankmemes") {
                    setFeed([]);
                    setSub("dankmemes");
                    next = subFeeds.dankmemes.after.current
                }
                break;
            case "IRL memes":
                if (sub !== "meIRL") {
                    setFeed([]);
                    setSub("meIRL");
                    next = subFeeds.meirl.after.current
                }
                break;         
            default:
                break;
        }
    };

    const handleNextClick = (e) => {
        console.log(`you clicked the button this ${sub} sub page ${next}`)
        setAfter(next);
    }

    return (
        <div className="navbar">
            <ul className="navlinks">
                <li>
                    <button onClick={handleFeedClick}> Twitter </button>
                </li>
                <li>
                    <button onClick={handleFeedClick}> Anime </button>
                </li>
                <li>
                    <button onClick={handleFeedClick}> memes </button>
                </li>
                <li>
                    <button onClick={handleFeedClick}> IRL memes </button>
                </li>
            </ul>

            
            <button onClick={handleNextClick} className="nextBtn">
                <img src={nextBtn} alt="next-page" width="75px" height="75px" />
            </button>
        </div>

    );
};

export default Navbar;