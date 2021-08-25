import nextBtn from '../src/forward-button.svg'
import useFetch from './useFetch';

const Navbar = ({ setFeed, setSub, sub, subFeeds, setAfter }) => {

    const handleFeedClick = (e) => {
        switch (e.target.innerText) {
            case "Twitter":
                if (sub !== "twitter_memes") {
                    setAfter('');
                    setSub("twitter_memes");
                    window.scroll(0,0);
                }
                break;
            case "Anime":
                if (sub !== "goodanimemes") {
                    setAfter('');
                    setSub("goodanimemes");
                    window.scroll(0,0);

                }
                break;
            case "memes":
                if (sub !== "dankmemes") {
                    setAfter('');
                    setSub("dankmemes");
                    window.scroll(0,0);
                }
                break;
            case "IRL memes":
                if (sub !== "meIRL") {
                    setAfter('');
                    setSub("meIRL");
                    window.scroll(0,0);
                    
                }
                break;
            default:
                break;
        }
    };

    const handleNextClick = (e) => {
        switch (sub) {
            case 'twitter_memes':
                setAfter(subFeeds.twitter.after.current)
                break;
            case 'goodanimemes':
                setAfter(subFeeds.anime.after.current)
                break;
            case 'dankmemes':
                setAfter(subFeeds.dankmemes.after.current)
                break;
            case 'meIRL':
                setAfter(subFeeds.meirl.after.current)
                break;

            default:
                break;
        }
        window.scroll(0,0);
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