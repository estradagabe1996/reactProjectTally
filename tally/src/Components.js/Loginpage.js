import React from 'react'
import { useState, useEffect , createContext} from 'react'
import '../style/login.css'
import Button from 'react-bootstrap/Button';
import List from './List';
import Practice from './Practice';
import { Link } from 'react-router-dom';

export const Usercontext = createContext()

function Loginpage() {


    const [users, setUsers] = useState([])


    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')
    const [url, setUrl] = useState(null)
    const [uID, setUID] = useState('Bring it on Home')
    const [deny, setDeny] =useState(null)
    
    // Fetch to get user info for login
    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            
        })
    },
[])

    // if statement to verify the username and password
    const onSubmit = () => {
        const usersList = users.map(u => u.username);
        const pwList = users.map(p => p.password)
        console.log("List: ", usersList);
        console.log("PW: ", pwList);
        console.log("user: ", user);
        console.log("pass: ", password)
        
        for(let i=0; i<usersList.length; i++) {
        console.log("user: ", user, "userList: ", usersList[i], "password: ", password, "pwList: ", pwList[i])
        if(user === usersList[i] && password === pwList[i]) {
            console.log("Access Granted.")
            setUID(users[i].songone)
            setUrl("/list") 
        } else {
            console.log("Denied")
            setDeny("Incorrect")
        }
    }
}



  return (
    <>
        
        <div className='loginTitle'><center><h2>TALLY</h2></center></div>
        <div className='loginContainer'>
        <center>
             
            <form>
                <input placeholder='username' onChange={(e) => setUser(e.target.value)}></input>
                <br/>
                <br/>
                <input placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                <br/>
                <br/>
                <br/>
                <Link to={url}>
                <Button variant="dark" onClick={onSubmit}>SUBMIT</Button>
                </Link>
                <br/>
                <br/>
                <h3 id='deny'>{deny}</h3>

            </form>
        </center>
        <div className='hideList'>
            <Usercontext.Provider value={uID}>
                <List/>
                <Practice/>
            </Usercontext.Provider>
        </div>

        </div>
    </>
  )
}

export default Loginpage