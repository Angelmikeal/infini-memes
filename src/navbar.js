const Navbar = (props) => {
    //const setFeed = props.setFeedFunc;

    const handleFeedClick = (e) => {
        console.log(e.target.innerText);
        // switch (e.target.innerText) {
        //     case "Twitter":
        //         setFeed("");
        //         break;
        //     case "Anime":
        //         setFeed("you clicked Anime memes");
        //         break;
        //     case "memes":
        //         setFeed("you clicked memes");
        //         break;
        //     case "IRL memes":
        //         setFeed("you clicked meIRL");
        //         break;
        //     default:
        //         break;
        // }
    };


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
        </div>
    );
};

export default Navbar;