import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import useFetch from "./useFetch";

function App() {
  const [feed, setFeed] = useState(useFetch('animemes'));
  const [sub, setSub] = useState()

  // useEffect(() => {
  //   fetch(`https://www.reddit.com/r/${sub}.json?limit=20`)
  //     .then(res => res.json())
  //     .then(body => {
  //       //console.log(body);
  //       let data = body.data.children;
  //       setFeed(data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, []);

  console.log(feed)
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="feedList">
        {feed && 
          feed.map((obj, index) =>  {
             if (obj.data.post_hint === 'image') {
              return (
                <div className="meme" key={index}>
                  <img src={obj.data.url} alt="meme" />
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
