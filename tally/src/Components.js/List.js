import React from 'react'
import { useState, useEffect , useContext} from 'react'
import Loginpage, { Usercontext } from './Loginpage'
import { Nav } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

function List() {

  const ID = useContext(Usercontext);
  console.log("ID from List: ", ID)
  

  const [songs, setSongs] = useState([])
  
  const songlist = songs.map(song => <ul key={song.id}> <Link to='/practice'>{song.songone}</Link>{"    "}{song.time}{"    "}{song.reps}</ul>)
  
  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then(res => res.json())
    .then(data => setSongs(data))
   
  },
   []
)
  


  return (
    <>
      <center>
      <br/>
      <div>
        <h3>| Song | Play Time | Reps |</h3>
          <hr></hr>
          {songlist}
      </div>
      </center>
    </>
  )
}

export default List


// Attemt to use useLoaderData to load songlist but the function had issues exporting

// export const dataLoader = async () => {
//     const res = await fetch('http://localhost:3001/users')
//     const songList = res.json();
//     return songList;
// };