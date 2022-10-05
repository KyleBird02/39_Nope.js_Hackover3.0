import React, { useState } from "react";

const data = [
  {
    name: "The Weekend",
    category: "Concert",
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
    category: "Concert",
    image:
      "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
    desc: "Afi, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
];

export default function Events() {
  const [list, setList] = useState(false);
  return (
    <>
      {!list ? (
        <div className="screen">
          <div className="explore-header">
            <div className="rsvp-img"></div>
            <div className="user-location">Mumbai, IN</div>
            <div className="explore-text">Explore Events</div>
            <div className="searchbar-container">
              {/* <img src={require("../assets/search_icon.png")} className="searchIcon"></img> */}
              <input
                type="text"
                placeholder="Search"
                className="searchbar"
              ></input>
            </div>
            <div className="chips-container">
              <div className="chip">
                <img
                  src={require("../assets/movie_icon.png")}
                  className="icons"
                ></img>
              </div>
              {/* <div className="chip-desc">Movies</div> */}
              <div className="chip">
                <img
                  src={require("../assets/Hack_icon.png")}
                  className="icons"
                ></img>
              </div>
              {/* <div className="chip-desc">Hacks</div> */}
              <div className="chip">
                <img
                  src={require("../assets/standup_icon.png")}
                  className="icons"
                ></img>
              </div>
              {/* <div className="chip-desc">Stand Up</div> */}
              <div className="chip">
                <img
                  src={require("../assets/other_icon.png")}
                  className="icons"
                ></img>
              </div>
              {/* <div className="chip-desc">Other</div> */}
            </div>
            <div className="desc-container">
              <div className="chip-desc movies">Movies</div>
              <div className="chip-desc">Hacks</div>
              <div className="chip-desc standup">Stand Up</div>
              <div className="chip-desc other">Other</div>
            </div>
            <div className="explore-text upcoming">Upcoming Events</div>
          </div>
          <div className="explore-body">
            {data.map((event) => (
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
          height="250px"
          style={{ opacity: "0.8", borderRadius: "5%" }}
        ></img>
      </div>
      <div className="back-button" onClick={() => setList(false)}>
        <img src={require("../assets/back_arrow.png")} className="arrow"></img>
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
              alert("Fucky ");
            }}
          >
            BUY A TICKET
          </button>
        </div>
      </div>
    </div>
  );
}
