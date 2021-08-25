import React, { useRef, useState } from "react";
import Loader from "./loader";
import Navbar from "./navbar";
import useFetch from "./useFetch";

function App() {
  const subFeeds = {
     twitter: {arr: useRef(null), after: useRef('')},
     anime: {arr: useRef(null), after: useRef('')},
     dankmemes: {arr: useRef(null), after: useRef('')},
     meirl: {arr: useRef(null), after: useRef('')}
  }
  const [feed, setFeed] = useState();
  const [sub, setSub] = useState("twitter_memes");
  const [after, setAfter] = useState('');
  const [error, setError] = useState('');
  const [callFail, setCallFail] = useState(false);
  
  
  useFetch(sub, setFeed, subFeeds, after, setCallFail, setError);

  return (
    <div className="App">
      <Navbar sub={sub} setFeed={setFeed} setSub={setSub} subFeeds={subFeeds} setAfter={setAfter}></Navbar>
      <div className="feedList">
        {<Loader/>}
        {/* {callFail &&
          <div className="error">
            <p className="message">{error}</p>
          </div>
        }
        {feed && 
          feed.map((obj, index) =>  {
             if (obj.data.post_hint === 'image') {
              return (
                <div className="meme" key={index}>
                  <img src={obj.data.url} alt="meme"/>
                </div>
              )
             }
          })
        } */}
      </div>
    </div>
  );
}
export default App;
