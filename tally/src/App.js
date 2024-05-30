
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Thenavbar from './Components.js/Navbar';
import List from './Components.js/List';
import Timer from './Components.js/Timer';
import Practice from './Components.js/Practice';
import Counter from './Components.js/Counter';
import Main from './Components.js/Main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loginpage from './Components.js/Loginpage';

const router = createBrowserRouter([
{
  path: '/',
  element: <Main/>,
  errorElement: <h1>404 not found</h1>
},
{
  path: '/practice',
  element: <Practice/>
},
{
  path: '/list/:id',
  element: <List/>
},
{
  path: '/login',
  element: <Loginpage/>
}
])

function App() {
  return (
    <>
    <Thenavbar/>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
