import React from 'react'
import { useState, useEffect , useContext} from 'react'
import Loginpage, { Usercontext } from './Loginpage'

function List() {

  const ID = useContext(Usercontext);
  console.log("Did it work, type of?", toString(ID))

  const [songs, setSongs] = useState([])
  const songlist = songs.map(song => <ul key={song.id}> <a href='https://www.youtube.com'>{song.songone}</a></ul>)
  
  useEffect(() => {
    fetch(`http://localhost:3001/users/${ID}`)
    .then(res => res.json())
    .then(data => setSongs(data))
   
  },
   []
)
  


  return (
    <>
      <center>
      <br/>
        {songlist}
      </center>
    </>
  )
}

export default List