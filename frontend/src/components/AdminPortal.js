import React, { useState } from "react";

const data = [
  {
    organizerEmail: "mike.dsouza07@gmail.com",
    image:
      "https://pmmodiyojana.in/wp-content/uploads/2022/08/image-170-1024x683.png",
    isVerified: "Pending",
  },
  {
    organizerEmail: "mike.dsouza07@gmail.com",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/A_sample_of_Permanent_Account_Number_%28PAN%29_Card.jpg",
    isVerified: "Pending",
  },
  {
    organizerEmail: "mike.dsouza07@gmail.com",
    image:
      "https://assets-global.website-files.com/5f689f82910c6b4f1ffb855b/613b4fe5118d68e33daead1f_5f9ce9d6b395d08d26991e6e_Voter%20ID%402x-min.jpg",
    isVerified: "Pending",
  },
  {
    organizerEmail: "mike.dsouza07@gmail.com",
    image:
      "https://img.freepik.com/premium-vector/flat-man-driver-license-plastic-card-template-id-card-vector-illustration_589019-3455.jpg?w=2000",
    isVerified: "Pending",
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
            <div className="explore-text">Pending Requests</div>
          </div>
          <div className="explore-body">
            {data.map((event) => (
              <div className="card" onClick={() => setList(event)}>
                <img src={event.image} alt="erg"></img>
                <div className="absolute t1 admin-text">Status: Pending</div>
                <div className="absolute t2 admin-text">
                  {event.organizerEmail}
                </div>
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
        <p className="category admin-category">
          Organizers Email: {e.organizerEmail}
        </p>
        <p className="name admin-name">
          Document Link:{" "}
          <a href={e.image} target="_blank">
            {e.image}
          </a>
        </p>
        <p className="body">{e.desc}</p>
      </div>
      <div className="footer">
        <div className="button-div">
          <button
            className="accept"
            onClick={() => {
              alert("Accept");
            }}
          >
            ACCEPT
          </button>
        </div>
        <div className="button-div">
          <button
            className="button footer-button reject"
            onClick={() => {
              alert("Reject");
            }}
          >
            REJECT
          </button>
        </div>
      </div>
    </div>
  );
}
