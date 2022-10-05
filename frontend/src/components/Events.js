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
    name: "The Weeknd",
    category: "Concert",
    image:
      "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
    amt: "null",
  },
  {
    name: "The Weeknd",
    category: "Concert",
    image:
      "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
  {
    name: "The Weeknd",
    category: "Concert",
    image:
      "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
  {
    name: "The Weeknd",
    category: "Concert",
    image:
      "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
  {
    name: "The Weeknd",
    category: "Concert",
    image:
      "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
  {
    name: "The Weeknd",
    category: "Concert",
    image:
      "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
  {
    name: "The Weeknd",
    category: "Concert",
    image:
      "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac.",
  },
  {
    name: "The Weeknd",
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
          {data.map((event) => (
            <div className="card" onClick={() => setList(event)}>
              <img src={event.image} alt="erg"></img>
              <div className="absolute t1">{event.category}</div>
              <div className="absolute t2">{event.name}</div>
            </div>
          ))}
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
        <img src={require('../assets/back_arrow.png')} className="arrow"></img>
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
            <button className="button footer-button" onClick={()=>{
                alert("Fucky ")}}>BUY A TICKET</button>
        </div>
      </div>
    </div>
  );
}
