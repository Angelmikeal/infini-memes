import React, { useRef, useState } from "react";
import Navbar from "./navbar";
import useFetch from "./useFetch";

function App() {
  const subFeeds = {
     twitter: {arr: useRef([]), after: useRef('')},
     anime: {arr: useRef([]), after: useRef('')},
     dankmemes: {arr: useRef([]), after: useRef('')},
     meirl: {arr: useRef([]), after: useRef('')}
  }
  const [feed, setFeed] = useState();
  const [sub, setSub] = useState("twitter_memes");
  const [after, setAfter] = useState('');
  
  
  useFetch(sub, setFeed, subFeeds, after);

  return (
    <div className="App">
      <Navbar sub={sub} setFeed={setFeed} setSub={setSub} subFeeds={subFeeds} setAfter={setAfter}></Navbar>
      <div className="feedList">
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
        }
      </div>
    </div>
  );
}
export default App;
