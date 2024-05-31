
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Thenavbar from './Components.js/Navbar';
import  List from './Components.js/List';
import  dataLoader  from './Components.js/List';
import Timer from './Components.js/Timer';
import Practice from './Components.js/Practice';
import Counter from './Components.js/Counter';
import Main from './Components.js/Main';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Link, Outlet } from 'react-router-dom';
import Loginpage from './Components.js/Loginpage';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './Components.js/CheckoutForm';



const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
          <Route index element={<Main/>} />
          <Route path='/login' element={<Loginpage/>} />
          <Route path='/list' element={<List/>} />
          <Route path='/practice' element={<Practice/>} />
          <Route path='/checkout' element={<CheckoutForm/>} />
      </Route>
    )
  )
  

  return (
    <>
      <RouterProvider router={router}/>
          
    </>
  );
}

const Root = () => {

    return (
        <> 
          <div> 
              <Thenavbar/>
          </div> 
          <div>
              <Outlet/>
          </div>
        </>
    )
}

export default App;
