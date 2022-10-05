import React, { useState } from 'react'


const data = [
    {
        name : "The Weeknd",
        category : "Concert",
        image : "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac. Vestibulum id sodales tortor. Suspendisse efficitur nibh rutrum, ultricies purus et, pulvinar nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut porta ex. Nulla euismod mi eget nibh tempus posuere. Maecenas ullamcorper est id nibh venenatis ultrices. Aliquam a lacus tempor, blandit sem id, ornare libero. Aliquam dapibus tempus leo, non scelerisque nisl. Sed vitae rutrum sem. Curabitur non erat cursus urna suscipit scelerisque."
         
    },{
        name : "The Weeknd",
        category : "Concert",
        image : "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac. Vestibulum id sodales tortor. Suspendisse efficitur nibh rutrum, ultricies purus et, pulvinar nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut porta ex. Nulla euismod mi eget nibh tempus posuere. Maecenas ullamcorper est id nibh venenatis ultrices. Aliquam a lacus tempor, blandit sem id, ornare libero. Aliquam dapibus tempus leo, non scelerisque nisl. Sed vitae rutrum sem. Curabitur non erat cursus urna suscipit scelerisque."
         
    },{
        name : "The Weeknd",
        category : "Concert",
        image : "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac. Vestibulum id sodales tortor. Suspendisse efficitur nibh rutrum, ultricies purus et, pulvinar nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut porta ex. Nulla euismod mi eget nibh tempus posuere. Maecenas ullamcorper est id nibh venenatis ultrices. Aliquam a lacus tempor, blandit sem id, ornare libero. Aliquam dapibus tempus leo, non scelerisque nisl. Sed vitae rutrum sem. Curabitur non erat cursus urna suscipit scelerisque."
         
    },{
        name : "The Weeknd",
        category : "Concert",
        image : "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac. Vestibulum id sodales tortor. Suspendisse efficitur nibh rutrum, ultricies purus et, pulvinar nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut porta ex. Nulla euismod mi eget nibh tempus posuere. Maecenas ullamcorper est id nibh venenatis ultrices. Aliquam a lacus tempor, blandit sem id, ornare libero. Aliquam dapibus tempus leo, non scelerisque nisl. Sed vitae rutrum sem. Curabitur non erat cursus urna suscipit scelerisque."
         
    },{
        name : "The Weeknd",
        category : "Concert",
        image : "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac. Vestibulum id sodales tortor. Suspendisse efficitur nibh rutrum, ultricies purus et, pulvinar nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut porta ex. Nulla euismod mi eget nibh tempus posuere. Maecenas ullamcorper est id nibh venenatis ultrices. Aliquam a lacus tempor, blandit sem id, ornare libero. Aliquam dapibus tempus leo, non scelerisque nisl. Sed vitae rutrum sem. Curabitur non erat cursus urna suscipit scelerisque."
         
    },{
        name : "The Weeknd",
        category : "Concert",
        image : "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac. Vestibulum id sodales tortor. Suspendisse efficitur nibh rutrum, ultricies purus et, pulvinar nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut porta ex. Nulla euismod mi eget nibh tempus posuere. Maecenas ullamcorper est id nibh venenatis ultrices. Aliquam a lacus tempor, blandit sem id, ornare libero. Aliquam dapibus tempus leo, non scelerisque nisl. Sed vitae rutrum sem. Curabitur non erat cursus urna suscipit scelerisque."
         
    },{
        name : "The Weeknd",
        category : "Concert",
        image : "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac. Vestibulum id sodales tortor. Suspendisse efficitur nibh rutrum, ultricies purus et, pulvinar nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut porta ex. Nulla euismod mi eget nibh tempus posuere. Maecenas ullamcorper est id nibh venenatis ultrices. Aliquam a lacus tempor, blandit sem id, ornare libero. Aliquam dapibus tempus leo, non scelerisque nisl. Sed vitae rutrum sem. Curabitur non erat cursus urna suscipit scelerisque."
         
    },{
        name : "The Weeknd",
        category : "Concert",
        image : "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac. Vestibulum id sodales tortor. Suspendisse efficitur nibh rutrum, ultricies purus et, pulvinar nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut porta ex. Nulla euismod mi eget nibh tempus posuere. Maecenas ullamcorper est id nibh venenatis ultrices. Aliquam a lacus tempor, blandit sem id, ornare libero. Aliquam dapibus tempus leo, non scelerisque nisl. Sed vitae rutrum sem. Curabitur non erat cursus urna suscipit scelerisque."
         
    },{
        name : "The Weeknd",
        category : "Concert",
        image : "https://thumbs.dreamstime.com/b/smartphone-hand-concert-purple-light-stage-144484863.jpg",
        desc : "Afi, consectetur adipiscing elit. Nullam in mi in leo consequat pulvinar. Ut fringilla dolor tellus, eget vulputate justo gravida vitae. Sed porttitor laoreet dolor, et gravida neque rhoncus ac. Vestibulum id sodales tortor. Suspendisse efficitur nibh rutrum, ultricies purus et, pulvinar nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut porta ex. Nulla euismod mi eget nibh tempus posuere. Maecenas ullamcorper est id nibh venenatis ultrices. Aliquam a lacus tempor, blandit sem id, ornare libero. Aliquam dapibus tempus leo, non scelerisque nisl. Sed vitae rutrum sem. Curabitur non erat cursus urna suscipit scelerisque."
         
    },
]

export default function Events() {
    const [list,setList] = useState(false);
  return (
    <>
    {!list?
    <div className='screen'>
    {
        data.map((event)=>
        <div className='card' onClick={()=>setList(event)}>
        <img src={event.image} alt="erg"></img>
        <div className='absolute t1'>{event.category}</div>
        <div className='absolute t2'>{event.name}</div>
        </div>)
    }
    </div> :
    <EventDetails e={list} setList={setList}/>
    }
    </>
  )
}


function EventDetails({e,setList}){
    return(
        <div className='screen' onClick={()=>setList(false)}>
        {e.desc}
        </div>
    )
}