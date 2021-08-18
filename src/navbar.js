const Navbar = (props) => {
    const setSub = props.setSubFunc;

    const handleFeedClick = (e) => {
        switch (e.target.innerText) {
            case "Twitter":
                setSub("Twitter_memes");
                break;
            case "Anime":
                setSub("goodAnimemes");
                break;
            case "memes":
                setSub("Dankmemes");
                break;
            case "IRL memes":
                setSub("meIRL");
                break;
            default:
                break;
        }
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