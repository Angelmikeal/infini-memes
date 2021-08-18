import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import useFetch from "./useFetch";

function App() {
  const [feed, setFeed] = useState();
  const [sub, setSub] = useState();
  useFetch(sub, setFeed);

  return (
    <div className="App">
      <Navbar setSubFunc={setSub}></Navbar>
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
