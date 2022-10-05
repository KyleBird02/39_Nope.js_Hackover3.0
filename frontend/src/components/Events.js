import React, { useState } from "react";

const data = [
  {
    name: "The Weekend",
    category: "Movies",
    image:
      "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
    amt: "Rs. 800/ticket",
  },
  {
    name: "The Weekend",
    category: "Concert",
    image:
      "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
    amt: "null",
  },
  {
    name: "Comicstaan",
    category: "Stand Up",
    image:
    "https://www.scrolldroll.com/wp-content/uploads/2020/12/Best-Stand-Up-Comedians-India-YouTube-India.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
  {
    name: "Comicstaan",
    category: "Stand Up",
    image:
    "https://www.scrolldroll.com/wp-content/uploads/2020/12/Best-Stand-Up-Comedians-India-YouTube-India.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
  {
    name: "The Weekend",
    category: "Concert",
    image:
      "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
  {
    name: "The Weekend",
    category: "Concert",
    image:
      "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
  {
    name: "The Weekend",
    category: "Other",
    image:
      "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
  {
    name: "GDSC CRCE",
    category: "Hacks",
    image:
      "data:image/jpeg;base64,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",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
  {
    name: "CSI CRCE",
    category: "Hacks",
    image:
    "data:image/jpeg;base64,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",
    desc: "Afi, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
];

export default function Events() {
  const [list, setList] = useState(false);
  const [category,setCategory] = useState('')
  return (
    <>
      {!list ? (
        <div className="screen">
          <div className="explore-header">
            <div className="rsvp-img"></div>
            <div className="user-location">Mumbai, IN</div>
            <div className="explore-text">Explore Events</div>
            <div className="searchbar-container" onClick={()=>setCategory('')}>
              {/* <img src={require("../assets/search_icon.png")} className="searchIcon"></img> */}
              <input
                type="text"
                placeholder="Search"
                className="searchbar"
              ></input>
            </div>
            <div className="chips-container">
              <div className={category==='Movies'?'chip glow':'chip'} >
                <img
                  src={require("../assets/movie_icon.png")}
                  alt="c"
                 className="icons"
                 onClick={()=>setCategory('Movies')}
                ></img>
              </div>
              {/* <div className="chip-desc">Movies</div> */}
              <div className={category==='Hacks'?'chip glow':'chip'} >
                <img
                  src={require("../assets/Hack_icon.png")}
                  className="icons" alt="c"
                  onClick={()=>setCategory('Hacks')}
                ></img>
              </div>
              {/* <div className="chip-desc">Hacks</div> */}
              <div className={category==='Stand Up'?'chip glow':'chip'} >
                <img
                  src={require("../assets/standup_icon.png")}
                  className="icons" alt="c"
                  onClick={()=>setCategory('Stand Up')}
                ></img>
              </div>
              {/* <div className="chip-desc">Stand Up</div> */}
              <div className={category==='Other'?'chip glow':'chip'} >
                <img
                  src={require("../assets/other_icon.png")}
                  className="icons" alt="c"
                  onClick={()=>setCategory('Other')}
                ></img>
              </div>
              {/* <div className="chip-desc">Other</div> */}
            </div>
            <div className="desc-container">
              <div className="chip-desc movies" onClick={()=>{setCategory('Movies')}}>Movies</div>
              <div className="chip-desc" onClick={()=>setCategory('Hacks')}>Hacks</div>
              <div className="chip-desc standup" onClick={()=>setCategory('Stand Up')}>Stand Up</div>
              <div className="chip-desc other" onClick={()=>setCategory('Other')}>Other</div>
            </div>
            <div className="explore-text upcoming">Upcoming Events</div>
          </div>
          <div className="explore-body">
            {data.filter((e)=> category==='' || !(category !== e.category)).map((event) => (
              <div className="card" onClick={() => setList(event)}>
                <img src={event.image} alt="erg"></img>
                <div className="absolute t1">{event.category}</div>
                <div className="absolute t2">{event.name}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <EventDetails e={list} setList={setList} />
      )}
    </>
  );
}

function EventDetails({ e, setList }) {
  return (
    <div className="screen">
      <div className="image">
        <img
          src={e.image}
          alt="c"
          height="250px"
          style={{ opacity: "0.8", borderRadius: "5%" }}
        ></img>
      </div>
      <div className="back-button" onClick={() => setList(false)}>
        <img alt="c" src={require("../assets/back_arrow.png")} className="arrow"></img>
      </div>
      <div className="desc-body">
        <p className="category">{e.category}</p>
        <p className="name">{e.name}</p>
        <p className="body">{e.desc}</p>
      </div>
      <div className="footer">
        <div className="footer-text">
          <p className="price-label">PRICE</p>
          <p className="price-amt">{e.amt}</p>
        </div>
        <div className="button-div">
          <button
            className="button footer-button"
            onClick={() => {
              alert("Payment ");
            }}
          >
            BUY A TICKET
          </button>
        </div>
      </div>
    </div>
  );
}
