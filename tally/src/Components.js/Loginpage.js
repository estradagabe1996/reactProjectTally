import React from 'react'
import { useState, useEffect , createContext} from 'react'
import '../style/login.css'
import Button from 'react-bootstrap/Button';
import List from './List';

export const Usercontext = createContext()

function Loginpage() {


    const [users, setUsers] = useState([])


    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')
    const [uID, setUID] = useState('')

    
    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        
      },
       []
    )

    const onSubmit = () => {
        const usersList = users.map(u => u.username);
        const pwList = users.map(p => p.password)
        
        for(let i=0; i<usersList.length; i++)
        if(user === usersList[i] && password === pwList[i]) {
            setUID(users[i])
            console.log("type of : ", typeof(uID))
            window.location = `http://localhost:3000/list/${users[i].id}`
        } else {
            console.log('Denied')
        }
    }



  return (
    <>
    
        <div className='loginContainer'>

        <Usercontext.Provider value={uID}>
            <List/>
         </Usercontext.Provider>
        <center>
            <form>
                <input value={user.id} placeholder='username' onChange={(e) => setUser(e.target.value)}></input>
                <br/>
                <br/>
                <input value={password}  placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                <br/>
                <br/>
                <br/>
                <Button variant="dark" onClick={onSubmit}>SUBMIT</Button>

            </form>
        </center>

        </div>
    </>
  )
}

export default Loginpage